//phrase.js
//获取应用实例
const app = getApp()

Page({
  data: {
    topStock:[{region: "亚太", 
               color: "red", 
               border: "red solid 5rpx",
               portofolio: [
                 {stockItem: "SA指数", origin_price: 3000, price: 3000, increase: 0},
                 {stockItem: "GH指数", origin_price: 20000, price: 20000, increase: 0},
                 {stockItem: "TN指数", origin_price: 21000, price: 21000, increase: 0},
                 {stockItem: "S元指数", origin_price: 90.00, price: 90.00, increase: 0},
                 {stockItem: "H元指数", origin_price: 80.00, price: 80.00, increase: 0},
                 {stockItem: "J元指数", origin_price: 100.00, price: 100.00, increase: 0}
               ]},
              {region: "欧洲", 
               color: "gray", 
               border:"none",
               portofolio: [
                 {stockItem: "DA指数", origin_price: 12000.00, price: 12000.00, increase: 0},
                 {stockItem: "FC指数", origin_price: 4000.00, price: 4000.00, increase: 0},
                 {stockItem: "BF指数", origin_price: 7000.00, price: 7000.00, increase: 0},
                 {stockItem: "E元指数", origin_price: 120.00, price: 120.00, increase: 0},
                 {stockItem: "G元指数", origin_price: 110.00, price: 110.00, increase: 0},
                 {stockItem: "R元指数", origin_price: 115.00, price: 115.00, increase: 0},
               ]},
              {region: "北美", 
               color: "gray", 
               border: "none",
               portofolio: [
                 {stockItem: "UD指数", origin_price: 25000.00, price: 25000.00, increase: 0},
                 {stockItem: "UN指数", origin_price: 7300.00, price: 7300.00, increase: 0},
                 {stockItem: "UP指数", origin_price: 2700.00, price: 2700.00, increase: 0},
                 {stockItem: "A元指数", origin_price: 105.00, price: 105.00, increase: 0},
                 {stockItem: "C元指数", origin_price: 85.00, price: 85.00, increase: 0},
                 {stockItem: "Z元指数", origin_price: 65.00, price: 65.00, increase: 0},
                ]}],
    interval: "",
    curSwi: 0,
    finData: [{state: "A", type: "零售额", increaseType: "同比", incDec: "上涨", dataValue: "0.6", hl: "低"},
              {state: "B", type: "GDP增速", increaseType: "环比", incDec: "下跌", dataValue: "0.5", hl: "低"},
              {state: "C", type: "个人消费", increaseType: "环比", incDec: "下跌", dataValue: "0.5", hl: "高"},
              {state: "D", type: "CPI指数", increaseType: "环比", incDec: "上涨", dataValue: "0.4", hl: "高"},
              {state: "E", type: "工厂订单量", increaseType: "环比", incDec: "下跌", dataValue: "2.6", hl: "低"},
              {state: "F", type: "工业增加值", increaseType: "环比", incDec: "下跌", dataValue: "0.8", hl: "高"},
              {state: "G", type: "住房信贷", increaseType: "环比", incDec: "下跌", dataValue: "1.2", hl: "高"},
              {state: "H", type: "PPI指数", increaseType: "环比", incDec: "上涨", dataValue: "0.5", hl: "高"},
              ],
    calender: [{date: "4-1", event: "J国央行议息会议", expect: "降息0.5个百分点"},
               {date: "4-3", event: "E国央行议息会议", expect: "降息0.25个百分点"},
               {date: "4-8", event: "G国央行议息会议", expect: "降息0.25个百分点"},
               {date: "4-11", event: "A国央行议息会议", expect: "维持不变"},
               {date: "4-15", event: "S国央行议息会议", expect: "加息0.25个百分点"},
               {date: "4-16", event: "R国央行议息会议", expect: "维持不变"},
               {date: "4-18", event: "H国央行议息会议", expect: "降息0.25个百分点"},
               {date: "4-23", event: "C国央行议息会议", expect: "降息0.5个百分点"},
              ],
    line:2,
    forex: [{subMatter: "E元/A元", origin_price: 1.1100, price: 1.1100, increase: 0, bp: 0, selected: true},
            {subMatter: "G元/A元", origin_price: 1.2800, price: 1.2800, increase: 0, bp: 0, selected: true},
            {subMatter: "A元/J元", origin_price: 112.0000, price: 112.0000, increase: 0, bp: 0, selected: false},
            {subMatter: "A元/R元", origin_price: 1.0300, price: 1.0300, increase: 0, bp: 0, selected: true},
            {subMatter: "A元/H元", origin_price: 7.8500, price: 7.8500, increase: 0, bp: 0, selected: false},
            {subMatter: "A元/C元", origin_price: 1.3500, price: 1.3500, increase: 0, bp: 0, selected: false},
            {subMatter: "U元/A元", origin_price: 0.7200, price: 0.7200, increase: 0, bp: 0, selected: false},
            {subMatter: "A元/L元", origin_price: 80.0000, price: 80.0000, increase: 0, bp: 0, selected: false},
            {subMatter: "A元/P元", origin_price: 1.3400, price: 1.3400, increase: 0, bp: 0, selected: false},
            {subMatter: "A元/M元", origin_price: 4.2000, price: 4.2000, increase: 0, bp: 0, selected: false}
            ],
    forexDisplay: [],
    viewed:false,
    addSec: false,
    editlist: []
  },
  onLoad() {

  },
  onShow() {
    const diese = this;
    if(diese.data.viewed == false) {
      let stock = diese.data.topStock;
      let forex = diese.data.forex;
      let forexDisplay = [];
      for(let i = 0; i < stock.length; i++) {
        for(let j = 0; j < stock[i].portofolio.length; j++) {
          stock[i].portofolio[j].price = Number(stock[i].portofolio[j].price).toFixed(2);
          stock[i].portofolio[j].increase = Number(stock[i].portofolio[j].increase).toFixed(2);
        }
      }
      for(let i = 0; i < forex.length; i++) {
        forex[i].price = Number(forex[i].price).toFixed(5);
        forex[i].increase = Number(forex[i].increase).toFixed(2);
        if(forex[i].selected == true) {
          forexDisplay.push(forex[i]);
        }
      }
      diese.setData({
        topStock: stock,
        forex: forex,
        forexDisplay: forexDisplay
      }); 
      let interval = setInterval(function() {
        let stock = diese.data.topStock;
        let forex = diese.data.forex;
        diese.data.forexDisplay = [];
        for (let i = 0; i < stock.length; i++) {
          for (let j = 0; j < stock[i].portofolio.length; j++) {
            let amplitude = Math.random() - 0.5;
            let origin_price = stock[i].portofolio[j].origin_price;
            let price = stock[i].portofolio[j].price;
            let increase = Number(stock[i].portofolio[j].increase) + amplitude;
            if(increase < 0 && increase > -0.01) {
              increase = 0;
            }
            let increaseValue = origin_price * increase.toFixed(2) / 100;
            stock[i].portofolio[j].increase = increase.toFixed(2);
            price = origin_price + increaseValue;
            stock[i].portofolio[j].price = price.toFixed(2);
            diese.setData({
              topStock: stock
            })
          }
        }
        for(let i = 0; i < forex.length; i++) {
          let amplitude = (Math.random() - 0.5) / 5;
          let origin_price = forex[i].origin_price;
          let price = forex[i].price;
          let increase = Number(forex[i].increase) + amplitude;
          if (increase < 0 && increase > -0.01) {
            increase = 0;
          }
          let increaseValue = origin_price * increase.toFixed(2) / 100;
          forex[i].increase = increase.toFixed(2);
          price = origin_price + increaseValue;
          forex[i].price = price.toFixed(5);
          let bp = increaseValue * 10000;
          forex[i].bp = bp.toFixed(1);
          if(forex[i].selected == true) {
            diese.data.forexDisplay.push(forex[i]);
          }
          diese.setData({
            forex: forex,
            forexDisplay: diese.data.forexDisplay
          })
        }
        diese.setData({
          interval: interval
        })
      }, 2000);
    }
    
  },
  stockSwitch: function(e) {
    const diese = this;
    const selected = e.currentTarget.id;
    diese.topSwitch(selected);
    diese.setData({
      curSwi: selected
    })
  },
  swiping: function(e) {
    const diese = this;
    const selected = e.detail.current;
    diese.topSwitch(selected);
  },
  topSwitch: function(select) {
    const diese = this;
    for (let i = 0; i < diese.data.topStock.length; i++) {
      diese.data.topStock[i].color = "gray";
      diese.data.topStock[i].border = "none";
    }
    diese.data.topStock[select].color = "red";
    diese.data.topStock[select].border = "red solid 5rpx";
    diese.setData({
      topStock: diese.data.topStock
    })
  },
  viewChart: function(e) {
    const diese = this;
    const id = e.currentTarget.id;
    const stock = diese.data.forexDisplay[id].subMatter;
    const origin = diese.data.forexDisplay[id].origin_price;
    const type = 2;
    wx.navigateTo({
      url: `/pages/chart/chart?stock=${stock}&origin=${origin}&type=${type}`,
    })
  },
  viewStockChart: function(e) {
    const diese = this;
    const region = diese.data.curSwi;
    //console.log(diese.data.topStock[region].portofolio[e.currentTarget.dataset.id].stockItem);
    //console.log(diese.data.topStock[region].portofolio[e.currentTarget.dataset.id].origin_price);
    const type = 1;
    const stock = diese.data.topStock[region].portofolio[e.currentTarget.dataset.id].stockItem;
    const origin = diese.data.topStock[region].portofolio[e.currentTarget.dataset.id].origin_price;
    wx.navigateTo({
      url: `/pages/chart/chart?stock=${stock}&origin=${origin}&type=${type}`,
    })
  },
  onHide: function(e) {
    const diese = this;
    diese.setData({
      viewed: true,
    })
  },
  addSec: function() {
    const diese = this;
    let edit = {};
    diese.data.editlist = [];
    for(let i = 0; i < diese.data.forex.length; i++) {
      edit = {selected: diese.data.forex[i].selected};
      diese.data.editlist.push(edit);
    }
    diese.setData({
      addSec: true,
      editlist: diese.data.editlist
      //forex: diese.data.forex,
      //viewed:false
    })
    //clearInterval(diese.data.interval);
    //diese.onShow();
  },
  cancelSec: function() {
    const diese = this;
    diese.setData({
      addSec: false
    })
  },
  saveSec: function() {
    const diese = this;
    for(let i = 0; i < diese.data.editlist.length; i++) {
      diese.data.forex[i].selected = diese.data.editlist[i].selected;
    }
    diese.setData({
      addSec: false,
      forex: diese.data.forex,
      viewed: false
    })
    clearInterval(diese.data.interval);
    diese.onShow();
  },
  changeStatus: function(e) {
    const diese = this;
    let id = e.currentTarget.id;
    diese.data.editlist[id].selected = !diese.data.editlist[id].selected;
    diese.setData({
      editlist: diese.data.editlist
    })
  },
  changeLine: function() {
    const diese = this;
    if(diese.data.line == 1) {
      diese.setData({
        line:2
      })
    } else {
      diese.setData({
        line:1
      })
    }
  }
})