require("dotenv").config();
const request = require("request");
const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
const CronJob = require("cron").CronJob;
const express = require("express");

const app = express();

const PORT = process.env.PORT || 2020;

const dataSources = require("./config");
const maxRetentionDay = 5;

const collectorJob = new CronJob(
  "0 */5 1-23 * * *",
  async function() {
    console.log(new Date());
    await main();
  },
  null,
  true,
  "Asia/Kathmandu"
);

async function main() {
  createNewFolder(`data`);
  for (let s = 0; s < dataSources.length; s += 1) {
    const source = dataSources[s];
    const history = getFetchHistoryList(source.name);
    const historyFilePath = path.resolve(
      __dirname,
      `data/${source.name}/history.txt`
    );
    for (let i = 1; i <= maxRetentionDay; i += 1) {
      const fetchDate = getNthPastDate(i);
      if (history.indexOf(fetchDate) === -1) {
        try {
          for (let f = 0; f < source.features.length; f += 1) {
            const feature = source.features[f];
            const dataFetchUrl = `http://pollution.gov.np/gss/api/observation?series_id=${
              feature.code
            }&date_from=${fetchDate}T00:00:00&date_to=${fetchDate}T24:00:00`;

            const responseData = await fetchDataUsingRequest(dataFetchUrl);
            saveJsonDataToFile(
              responseData.data,
              fetchDate,
              source.name,
              feature.name
            );
            commitNewChanges(`Add data for : ${fetchDate} - ${feature.name}`);
          }
          writeTextInFile(`${fetchDate}\n`, historyFilePath);
          commitNewChanges(`Update history for date ${fetchDate}`);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
  handleProcessCompleteEvent();
}

function getFetchHistoryList(name) {
  const filePath = path.resolve(__dirname, `data/${name}/history.txt`);
  let historyList = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    historyList = fileContent.split("\n");
  } else {
    createNewFolder(`data/${name}`);
    fs.writeFileSync(filePath, "");
  }
  return historyList;
}

function getNthPastDate(n) {
  const today = new Date();
  const past = new Date(today);
  past.setDate(today.getDate() - n);
  const formattedDate = JSON.stringify(past)
    .split("T")[0]
    .replace('"', "");
  return formattedDate;
}

function saveJsonDataToFile(data, date, name, feature) {
  const filePath = path.resolve(
    __dirname,
    `data/${name}/${feature}/${date}.csv`
  );
  createNewFolder(`data/${name}/${feature}`);
  fs.writeFileSync(filePath, `"datetime","value"\n`);
  if (!data) {
    data = [];
  }
  for (let i = 0; i < data.length; i += 1) {
    const d = data[i];
    /***
     * -999 : This is invalid data
     * and some dates are from other date than the requested date
     *  */
    if (d.datetime.includes(date) && d.value !== -999 && d.value !== null) {
      let fileContent = `"${d.datetime}","${d.value}"\n`;
      if (i === data.length - 1) {
        fileContent = `"${d.datetime}","${d.value}"`;
      }
      writeTextInFile(fileContent, filePath);
    }
  }
}

function fetchDataUsingRequest(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        resolve(JSON.parse(body));
      } else {
        reject("error");
      }
    });
  });
}

function createNewFolder(p) {
  const dirPath = path.resolve(__dirname, p);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}

function writeTextInFile(text, filePath) {
  fs.writeFileSync(filePath, text, { flag: "a" });
}

function commitNewChanges(message) {
  console.log(`Committing : ${message}`);
  try {
    shell.exec(`git add .`);
    shell.exec(`git commit -m "${message}"`);
  } catch (err) {
    handleAppError();
  }
}

function handleProcessCompleteEvent() {
  console.log("Complete");
  try {
    shell.exec(`git push origin master`);
    sendNotificationToOwner("New update is successfully pushed !!");
  } catch (err) {
    handleAppError();
  }
}

function handleAppError() {
  /* Alert some message and inform owner */
  console.log("Error error error");
  sendNotificationToOwner("Error error error");
}

async function sendNotificationToOwner(message) {
  const telegramBotUrl = `https://api.telegram.org/bot${
    process.env.TELEGRAM_BOT_KEY
  }/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=${message}`;
  await fetchDataUsingRequest(telegramBotUrl);
}

//app.listen(() => {
  //console.log(`Server running on port ${PORT}`);
  collectorJob.start();
//});
