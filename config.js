const dataSources = [
  {
    name: "simara-nepal",
    features: [
      {
        name: "PM10",
        code: 621
      },
      {
        name: "PM2.5",
        code: 622
      },
      {
        name: "Wind Speed",
        code: 623
      },
      {
        name: "Wind Direction",
        code: 624
      },
      {
        name: "Total Suspended Particulate",
        code: 631
      },
      {
        name: "Air Temperature",
        code: 632
      },
      {
        name: "PM1",
        code: 780
      }
    ]
  },
  {
    name: "dhulikhel-kavre",
    features: [
      {
        name: "PM10",
        code: 1254
      },
      {
        name: "PM2.5",
        code: 1256
      },
      {
        name: "Wind Speed",
        code: 1257
      },
      {
        name: "Wind Direction",
        code: 1258
      },
      {
        name: "Total Suspended Particulate",
        code: 1263
      },
      {
        name: "Air Temperature",
        code: 1264
      },
      {
        name: "PM1",
        code: 1255
      },
      {
        name: "Black Carbon",
        code: 1271
      }
    ]
  },
  {
    name: "sauraha-chitwan",
    features: [
      {
        name: "PM10",
        code: 189
      },
      {
        name: "PM2.5",
        code: 195
      },
      {
        name: "Wind Speed",
        code: 198
      },
      {
        name: "Wind Direction",
        code: 199
      },
      {
        name: "Total Suspended Particulate",
        code: 211
      },
      {
        name: "Air Temperature",
        code: 212
      },
      {
        name: "PM1",
        code: 192
      },
      {
        name: "Black Carbon",
        code: 232
      }
    ]
  },
  {
    name: "baisipati-ktm",
    features: [
      {
        name: "PM10",
        code: 523
      },
      {
        name: "PM2.5",
        code: 525
      },
      {
        name: "Wind Speed",
        code: 526
      },
      {
        name: "Wind Direction",
        code: 527
      },
      {
        name: "Total Suspended Particulate",
        code: 534
      },
      {
        name: "Air Temperature",
        code: 535
      },
      {
        name: "PM1",
        code: 524
      }
    ]
  },
  {
    name: "pulchowk-lalitpur",
    features: [
      {
        name: "PM10",
        code: 92
      },
      {
        name: "PM2.5",
        code: 98
      },
      {
        name: "Wind Speed",
        code: 101
      },
      {
        name: "Wind Direction",
        code: 102
      },
      {
        name: "Total Suspended Particulate",
        code: 114
      },
      {
        name: "Air Temperature",
        code: 115
      },
      {
        name: "PM1",
        code: 95
      }
    ]
  },
  {
    name: "jhumka-sunsari",
    features: [
      {
        name: "PM10",
        code: 679
      },
      {
        name: "PM2.5",
        code: 681
      },
      {
        name: "Wind Speed",
        code: 682
      },
      {
        name: "Wind Direction",
        code: 683
      },
      {
        name: "Total Suspended Particulate",
        code: 696
      },
      {
        name: "Air Temperature",
        code: 697
      },
      {
        name: "PM1",
        code: 680
      }
    ]
  },
  {
    name: "dhm-pokhara",
    features: [
      {
        name: "PM10",
        code: 597
      },
      {
        name: "PM2.5",
        code: 599
      },
      {
        name: "Wind Speed",
        code: 600
      },
      {
        name: "Wind Direction",
        code: 601
      },
      {
        name: "Total Suspended Particulate",
        code: 608
      },
      {
        name: "Air Temperature",
        code: 609
      },
      {
        name: "PM1",
        code: 598
      }
    ]
  },
  {
    name: "birendra-school-bhaktapur",
    features: [
      {
        name: "PM10",
        code: 501
      },
      {
        name: "PM2.5",
        code: 503
      },
      {
        name: "Wind Speed",
        code: 504
      },
      {
        name: "Wind Direction",
        code: 505
      },
      {
        name: "Total Suspended Particulate",
        code: 512
      },
      {
        name: "Air Temperature",
        code: 513
      },
      {
        name: "PM1",
        code: 502
      }
    ]
  },
  {
    name: "ratnapark-kathmandu",
    features: [
      {
        name: "PM10",
        code: 3
      },
      {
        name: "PM2.5",
        code: 4
      },
      {
        name: "Wind Speed",
        code: 12
      },
      {
        name: "Wind Direction",
        code: 237
      },
      {
        name: "Total Suspended Particulate",
        code: 41
      },
      {
        name: "Air Temperature",
        code: 25
      },
      {
        name: "PM1",
        code: 5
      },
      {
        name: "Black Carbon",
        code: 320
      }
    ]
  },
  {
    name: "nepalgunj",
    features: [
      {
        name: "PM10",
        code: 654
      },
      {
        name: "PM2.5",
        code: 656
      },
      {
        name: "Wind Speed",
        code: 657
      },
      {
        name: "Wind Direction",
        code: 658
      },
      {
        name: "Total Suspended Particulate",
        code: 665
      },
      {
        name: "Air Temperature",
        code: 666
      },
      {
        name: "PM1",
        code: 655
      }
    ]
  },
  {
    name: "gbs-pokhara",
    features: [
      {
        name: "PM10",
        code: 574
      },
      {
        name: "PM2.5",
        code: 576
      },
      {
        name: "Wind Speed",
        code: 577
      },
      {
        name: "Wind Direction",
        code: 578
      },
      {
        name: "Total Suspended Particulate",
        code: 585
      },
      {
        name: "Air Temperature",
        code: 586
      },
      {
        name: "PM1",
        code: 575
      }
    ]
  },
  {
    name: "pokhara-university-pokhara",
    features: [
      {
        name: "PM10",
        code: 551
      },
      {
        name: "PM2.5",
        code: 553
      },
      {
        name: "Wind Speed",
        code: 554
      },
      {
        name: "Wind Direction",
        code: 555
      },
      {
        name: "Total Suspended Particulate",
        code: 562
      },
      {
        name: "Air Temperature",
        code: 563
      },
      {
        name: "PM1",
        code: 552
      }
    ]
  },
  {
    name: "dang",
    features: [
      {
        name: "PM10",
        code: 713
      },
      {
        name: "PM2.5",
        code: 716
      },
      {
        name: "Wind Speed",
        code: 717
      },
      {
        name: "Wind Direction",
        code: 718
      },
      {
        name: "Total Suspended Particulate",
        code: 725
      },
      {
        name: "Air Temperature",
        code: 716
      },
      {
        name: "PM1",
        code: 714
      }
    ]
  },
  {
    name: "phora-durbar-ktm",
    features: [
      {
        name: "PM10",
        code: 1021
      },
      {
        name: "PM2.5",
        code: 1022
      }
    ]
  },
  {
    name: "lumbini-rupendehi",
    features: [
      {
        name: "PM10",
        code: 134
      },
      {
        name: "PM2.5",
        code: 140
      },
      {
        name: "Wind Speed",
        code: 143
      },
      {
        name: "Wind Direction",
        code: 144
      },
      {
        name: "Total Suspended Particulate",
        code: 156
      },
      {
        name: "Air Temperature",
        code: 157
      },
      {
        name: "PM1",
        code: 137
      },
      {
        name: "Black Carbon",
        code: 177
      }
    ]
  },
  {
    name: "embassy-ktm",
    features: [
      {
        name: "PM10",
        code: 1015
      },
      {
        name: "PM2.5",
        code: 1016
      }
    ]
  },
  {
    name: "shankha-park-kathmandu",
    features: [
      {
        name: "PM10",
        code: 546
      },
      {
        name: "PM2.5",
        code: 542
      },
      {
        name: "Wind Speed",
        code: 328
      },
      {
        name: "Wind Direction",
        code: 329
      },
      {
        name: "Total Suspended Particulate",
        code: 545
      },
      {
        name: "Air Temperature",
        code: 336
      },
      {
        name: "PM1",
        code: 544
      }
    ]
  }
];

module.exports = dataSources;
