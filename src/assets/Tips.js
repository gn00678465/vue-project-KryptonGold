const JSON = {
  ale: {
    en: 'ALE',
    zh: '愛爾啤酒',
    img: 'https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description: '是自古以來的啤酒發酵法，酵母浮在麥汁的表面上因此叫做「上面發酵」。以常溫或稍微高於常溫的溫度來發酵，發酵期間約3~4天（發酵後的熟成期間約兩週）。味道較芳醇濃郁。',
  },
  lager: {
    en: 'LAGER',
    zh: '拉格啤酒',
    img: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    description: '中古世紀後出現的發酵法，酵母會沈在酒桶的底部因此叫做「下面發酵」，又稱窖藏啤酒，以5度左右的低溫來發酵，發酵期間約7~10天（發酵後的熟成期約一個月）。味道較順口爽快、泡沫較多，是日本主流啤酒種類。台灣啤酒也是拉格啤酒喔！',
  },
  witbier: {
    en: 'Witbier',
    zh: '白啤酒',
    img: 'https://images.unsplash.com/photo-1569092433665-20d853fd0934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    description: '白啤酒(Witbier)採上層發酵方式製作。通常低苦味、清爽、且帶有香料氣息。由於未過濾，酒內的小麥蛋白和酵母造成略白與朦朧的外觀，而被稱為白啤酒。白啤酒與其他小麥啤酒最大的不同點，在於白啤酒使用的小麥沒發芽且會添加香料。白啤酒最常用的香料有橙皮和胡荽子，亦可有其他香料。橙皮可用普通的甜橙皮，或是庫拉索橘(一種苦橙)。',
  },
  draught: {
    en: 'Draught Beer',
    zh: '生啤酒',
    img: 'https://images.unsplash.com/photo-1516458464372-eea4ab222b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    description: '生啤酒是未滅菌直接由發酵的桶中裝取，或採用微孔膜過濾即冷過濾的方式殺菌的啤酒，相對於熟啤酒採用巴斯德消毒法殺菌。因此，生啤酒比熟啤酒更加新鮮清爽，其味道鮮美，但由於酵母會繼續發酵啤酒，容易使生啤酒變質，不易保存。',
  },
};

const title = () => Object.keys(JSON).map((item) => JSON[item].zh);
const tips = () => Object.keys(JSON).map((item) => JSON[item]);

export { tips, title };
