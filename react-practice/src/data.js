const data = [
	{id:1, image:'https://fakeimg.pl/320x320/?text=1st',
	name:'test1',
	price:1111},
	{id:2, image:'https://fakeimg.pl/320x320/',name:'test2222222',price:222},
	{id:3, image:'https://fakeimg.pl/320x320/?text=3rd',name:'test333',price:33},
	{id:4, image:'https://fakeimg.pl/320x320/?text=4th',name:'test444',price:4444},
	{id:5, image:'https://cs-f.ecimg.tw/items/DHAS4MA900DV9SO/000002_1643264511.jpg',
	name:'G733ZM-0022S12900H 電競筆電',
	price:56900},
	{id:6, image:'https://fakeimg.pl/320x320/?text=6th',name:'test6',price:666},
];

const tag = [
	{id:1, title: '曜越電競椅'}, 
	{id:2, title: '羅技滑鼠下殺9折'}, 
	{id:3, title: 'HP電競筆電'}, 
	{id:4, title: 'Acer主機+電競耳麥優惠組'}, 
	{id:5, title: '2022喇叭推薦指南'}
];

const data1 = [
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

export { data, tag, data1 };