// const data = [
// 	{id:1, image:'https://fakeimg.pl/320x320/?text=1st',
// 	name:'test1',
// 	price:1111},
// 	{id:2, image:'https://fakeimg.pl/320x320/',name:'test2222222',price:222},
// 	{id:3, image:'https://fakeimg.pl/320x320/?text=3rd',name:'test333',price:33},
// 	{id:4, image:'https://fakeimg.pl/320x320/?text=4th',name:'test444',price:4444},
// 	{id:5, image:'https://cs-f.ecimg.tw/items/DHAS4MA900DV9SO/000002_1643264511.jpg',
// 	name:'G733ZM-0022S12900H 電競筆電',
// 	price:56900},
// 	{id:6, image:'https://fakeimg.pl/320x320/?text=6th',name:'test6',price:666},
// ];

// const tag = [
// 	{id:1, title: '曜越電競椅'}, 
// 	{id:2, title: '羅技滑鼠下殺9折'}, 
// 	{id:3, title: 'HP電競筆電'}, 
// 	{id:4, title: 'Acer主機+電競耳麥優惠組'}, 
// 	{id:5, title: '2022喇叭推薦指南'}
// ];

const data = [
      {
        Id: 1,
        Link: { Text: "真該死", Text2: "好棒棒", Background: "#FF0000" },
        Img: {
          Src: "https://fs-a.ecimg.tw/img/h24/v1/layout/onsale/20220704/20220630160437_welcome-2-B-1000x1000.jpg",
          Text: "test",
        },
      },
      {
        Id: 2,
        Link: { Text: "test", Url: "test" },
        ExtraData: { ElementType: "Search" },
      },
      {
        Id: 3,
        Link: { Text: "好壞壞", Url: "https://shopping.pchome.com.tw/" },
        ExtraData: { ElementType: "Url" },
      },
      {
        Id: 4,
        Link: { Text: "好爛", Url: "https://shopping.pchome.com.tw/" },
        ExtraData: { ElementType: "Search" },
      },
      {
        Id: 5,
        Link: { Text: "為什麼", Url: "https://shopping.pchome.com.tw/" },
        ExtraData: { ElementType: "Search" },
      },
      {
        Id: 6,
        Link: { Text: "好煩", Url: "https://shopping.pchome.com.tw/" },
        ExtraData: { ElementType: "Search" },
      },
      {
        Id: 7,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧100ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 1,
        },
      },
      {
        Id: 8,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧120ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 2,
        },
      },
      {
        Id: 9,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧90ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Store",
          Sort: 3,
        },
      },
      {
        Id: 10,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧80ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 4,
        },
      },
      {
        Id: 11,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧400ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 5,
        },
      },
      {
        Id: 12,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧770ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 6,
        },
      },
      {
        Id: 13,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧800ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 7,
        },
      },
      {
        Id: 14,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧900ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 8,
        },
      },
      {
        Id: 15,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧1000ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 9,
        },
      },
      {
        Id: 16,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧440ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 10,
        },
      },
      {
        Id: 17,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧6880ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 11,
        },
      },
      {
        Id: 18,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧9840ml (高效除菌)",
          Text1: "179",
          Url: "https://www.pchomeec.tw/activity/AC29412758",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Url",
          Sort: 12,
        },
      },
      {
        Id: 19,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧330ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 13,
        },
      },
      {
        Id: 20,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧470ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Search",
          Sort: 14,
        },
      },
      {
        Id: 21,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧380ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 15,
        },
      },
      {
        Id: 22,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧300ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Store",
          Sort: 16,
        },
      },
      {
        Id: 23,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧900ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Prod",
          Sort: 17,
        },
      },
      {
        Id: 24,
        Link: {
          Text: "【日本風倍清】織物除菌消臭噴霧3900ml (高效除菌)",
          Text1: "179",
          Url: "DAAK90-A900AD51J",
        },
        Img: {
          Src: "/items/DAAK90A900AD51J/000007_1629189763.jpg",
        },
        ExtraData: {
          ElementType: "Store",
          Sort: 18,
        },
      },
    ];

const dataOriginal = {
  brand: {},
  window1: {
    ScheduleId: "062afde8f150e262afde8f15119web1",
    SectionName: "window1",
    Name: "3C \u96fb\u7af6\u5e74\u4e2d\u6230",
    Duration: { StartTime: "2022/06/20 10:37:00" },
    Blocks: [
      {
        BlockId: 1,
        Sort: 1,
        Nodes: [
          {
            Id: 1,
            Link: {
              Text: "3C",
              Text2:
                "3C \u96fb\u7af6\u5e74\u4e2d\u6230!3C \u96fb\u7af6\u5e74\u4e2d\u6230!",
              Background: "#0400ff"
            },
            Img: {
              Src:
                "/img/h24/v2/layout/index/20220623114811_62b3e27ae59dc.png-optimize-62b3e27aec39cweb1.png-rename.png",
              Text: "3C \u96fb\u7af6\u5e74\u4e2d\u6230~"
            }
          },
          {
            Id: 2,
            Link: {
              Text: "\u66dc\u8d8a\u96fb\u7af6\u6905",
              Url:
                "https://24h.pchome.com.tw/prod/DSBC5E-A900BTT7X?gclid=Cj0KCQjwkruVBhCHARIsACVIiOwLLp9KfVtavr57_iwPRXPTar_owTPvR1Fjp1grq86Wr_dpe3Zq36QaAmJeEALw_wcB"
            },
            ExtraData: { ElementType: "Url" }
          },
          {
            Id: 3,
            Link: {
              Text: "\u7f85\u6280\u6ed1\u9f20\u4e0b\u6bba9\u6298",
              Url:
                "https://24h.pchome.com.tw/prod/DSAR0S-A900DQZVE?gclid=Cj0KCQjwkruVBhCHARIsACVIiOw94Ugff9DS4q4950ghgwEK-PO7bP9BGikofTMB6JcepmpOepOSjVoaAhsHEALw_wcB"
            },
            ExtraData: { ElementType: "Url" }
          },
          {
            Id: 4,
            Link: {
              Text: "HP\u96fb\u7af6\u7b46\u96fb",
              Url: "HP\u96fb\u7af6\u7b46\u96fb"
            },
            ExtraData: { ElementType: "Search" }
          },
          {
            Id: 5,
            Link: {
              Text:
                "Acer\u4e3b\u6a5f+\u96fb\u7af6\u8033\u9ea5\u512a\u60e0\u7d44",
              Url:
                "https://24h.pchome.com.tw/prod/DSAA2P-1900F44YV?gclid=Cj0KCQjwkruVBhCHARIsACVIiOwprKRDWt8dA8OeHrec2BnsPXULsvCexAcwZXS-azmDvXGpUMGN8zIaAkoZEALw_wcB"
            },
            ExtraData: { ElementType: "Url" }
          },
          {
            Id: 6,
            Link: {
              Text: "2022\u5587\u53ed\u63a8\u85a6\u6307\u5357",
              Url: "2022\u5587\u53ed\u63a8\u85a6\u6307\u5357"
            },
            ExtraData: { ElementType: "Search" }
          },
          {
            Id: 7,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 1 }
          },
          {
            Id: 8,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 2 }
          },
          {
            Id: 9,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 3 }
          },
          {
            Id: 10,
            Link: {
              Text: "BOXMAN \u5927\u982d\u8cbc",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 4 }
          },
          {
            Id: 11,
            Link: {
              Text: "BOXMAN \u5927\u982d\u8cbc",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 5 }
          },
          {
            Id: 12,
            Link: {
              Text: "BOXMAN \u5927\u982d\u8cbc",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 6 }
          },
          {
            Id: 13,
            Link: {
              Text: "BOXMAN \u5927\u982d\u8cbc",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 7 }
          },
          {
            Id: 14,
            Link: {
              Text: "BOXMAN \u5927\u982d\u8cbc",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 8 }
          },
          {
            Id: 15,
            Link: {
              Text: "BOXMAN \u5927\u982d\u8cbc",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 9 }
          },
          {
            Id: 16,
            Link: {
              Text: "BOXMAN \u5927\u982d\u8cbc",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 10 }
          },
          {
            Id: 17,
            Link: {
              Text: "BOXMAN \u5927\u982d\u8cbc",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 11 }
          },
          {
            Id: 18,
            Link: {
              Text: "BOXMAN \u5927\u982d\u8cbc",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 12 }
          },
          {
            Id: 19,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 13 }
          },
          {
            Id: 20,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 14 }
          },
          {
            Id: 21,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 15 }
          },
          {
            Id: 22,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 16 }
          },
          {
            Id: 23,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 17 }
          },
          {
            Id: 24,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 18 }
          }
        ]
      },
      {
        BlockId: 2,
        Sort: 2,
        Nodes: [
          {
            Id: 1,
            Link: {
              Text: "test2",
              Text2:
                "\u6e2c\u6e2c\u6e2c\u6e2c\u6e2c\u6e2c\u6e2c\u6e2c\u6e2c\u6e2c\u6e2c\u6e2c\u6e2c\u6e2c",
              Background: "#fff700"
            },
            Img: {
              Src:
                "/img/h24/v2/layout/index/20220628114055_62ba77f6d6257.png-optimize-62ba77f6dd80aweb1.png-rename.png",
              Text: "\u6e2c\u6e2c\u6e2c"
            }
          },
          {
            Id: 2,
            Link: { Text: "iphone", Url: "iphone" },
            ExtraData: { ElementType: "Search" }
          },
          {
            Id: 3,
            Link: { Text: "ipad", Url: "ipad" },
            ExtraData: { ElementType: "Search" }
          },
          {
            Id: 4,
            Link: { Text: "airpods", Url: "airpods" },
            ExtraData: { ElementType: "Search" }
          },
          {
            Id: 5,
            Link: { Text: "homepod mini", Url: "homepod mini" },
            ExtraData: { ElementType: "Search" }
          },
          {
            Id: 6,
            Link: { Text: "", Url: "" },
            ExtraData: { ElementType: "Search" }
          },
          {
            Id: 7,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 1 }
          },
          {
            Id: 8,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 2 }
          },
          {
            Id: 9,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 3 }
          },
          {
            Id: 10,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 4 }
          },
          {
            Id: 11,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 5 }
          },
          {
            Id: 12,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 6 }
          },
          {
            Id: 13,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 7 }
          },
          {
            Id: 14,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 8 }
          },
          {
            Id: 15,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 9 }
          },
          {
            Id: 16,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 10 }
          },
          {
            Id: 17,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 11 }
          },
          {
            Id: 18,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 12 }
          },
          {
            Id: 19,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 13 }
          },
          {
            Id: 20,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 14 }
          },
          {
            Id: 21,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 15 }
          },
          {
            Id: 22,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 16 }
          },
          {
            Id: 23,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 17 }
          },
          {
            Id: 24,
            Link: {
              Text: "NON_PACKING_VD_TEST",
              Text1: "1000",
              Url: "DSAACR-A9006L7UM"
            },
            Img: { Src: "/items/DSAACRA9006L7UM/000007_1654574851.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 18 }
          }
        ]
      }
    ]
  },
  window2: {
    ScheduleId: "062a95f4577b7962a95f4577bafweb1",
    SectionName: "window2",
    Name: "\u6e2c\u8a662",
    Duration: { StartTime: "2022/07/01 23:59:00" },
    Blocks: [
      {
        BlockId: 1,
        Sort: 1,
        Nodes: [
          {
            Id: 1,
            Link: {
              Text: "\u82b1\u65d7\u9280\u884c\u9801\u7c64",
              Text2: "\u82b1\u65d7\u9280\u884c",
              Background: "#043ce7"
            },
            Img: {
              Src:
                "/img/h24/v2/layout/index/20220615122539_62a95ef65ede8.png-optimize-62a95ef661830web1.png-rename.png",
              Text: "\u82b1\u65d7\u9280\u884cLOGO"
            }
          },
          {
            Id: 2,
            Link: {
              Text: "\u82b1\u65d7\u9280\u884c",
              Url:
                "\u9023\u7d50\u81f3 \u82b1\u65d7\u9280\u884c \u7684\u641c\u5c0b\u7d50\u679c"
            },
            ExtraData: { ElementType: "Search" }
          },
          {
            Id: 3,
            Link: {
              Text: "Citibank Taiwan ",
              Url: "https://www.citibank.com.tw"
            },
            ExtraData: { ElementType: "Url" }
          },
          {
            Id: 4,
            Link: { Text: "", Url: "" },
            ExtraData: { ElementType: "Search" }
          },
          {
            Id: 5,
            Link: { Text: "", Url: "" },
            ExtraData: { ElementType: "Search" }
          },
          {
            Id: 6,
            Link: { Text: "", Url: "" },
            ExtraData: { ElementType: "Search" }
          },
          {
            Id: 7,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 1 }
          },
          {
            Id: 8,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 2 }
          },
          {
            Id: 9,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 3 }
          },
          {
            Id: 10,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 4 }
          },
          {
            Id: 11,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 5 }
          },
          {
            Id: 12,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 6 }
          },
          {
            Id: 13,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 7 }
          },
          {
            Id: 14,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 8 }
          },
          {
            Id: 15,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 9 }
          },
          {
            Id: 16,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 10 }
          },
          {
            Id: 17,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 11 }
          },
          {
            Id: 18,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 12 }
          },
          {
            Id: 19,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 13 }
          },
          {
            Id: 20,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 14 }
          },
          {
            Id: 21,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 15 }
          },
          {
            Id: 22,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 16 }
          },
          {
            Id: 23,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 17 }
          },
          {
            Id: 24,
            Link: {
              Text: "Jack\u6a02\u9ad8_4",
              Text1: "666",
              Url: "DSAAD5-A9006LA3R"
            },
            Img: { Src: "/items/DSAAD5A9006LA3R/000007_1634810573.jpg" },
            ExtraData: { ElementType: "Prod", Sort: 18 }
          }
        ]
      }
    ]
  }
};


// export { data, tag, data1 };
export { data, dataOriginal };