// pages/words/words.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555034047&di=bed0276f0f4e299040a598a274b8415b&imgtype=jpg&er=1&src=http%3A%2F%2Fresource.fxgold.com%2Frepo%2Fimage%2F20160826%2F1472204661152097528.jpg",
    portofolio: [{
      keyword: "交易名词", usage: "市场基本操作",
      inclusive: ["开仓", "平仓", "补仓", "强制平仓", "逼仓", "空仓", "诱多", "逼空"]
    },
    {
      keyword: "技术指标", usage: "分析市场行情",
      inclusive: ["MACD", "KD", "RSI", "DMI", "OBV", "BOLL", "ROC", "KDJ", "ASI", "EMV"]
    },
    {
      keyword: "交易技巧", usage: "非投机行为下的无风险获利方法",
      inclusive: ["对冲", "套利", "期现套利", "跨期套利", "跨市场套利"]
    },
    {
      keyword: "衍生品", usage: "对冲市场风险",
      inclusive: ["期货", "期权", "欧式期权", "美式期权", "看涨期权", "看空期权", "实值期权", "虚值期权", "做多波动率", "做空波动率"]
    },
    {
      keyword: "经济指标", usage: "研究宏观经济",
      inclusive: ["GDP", "GNP", "CPI", "PPI", "PMI", "贸易顺差", "贸易逆差"]
    }],
    folded: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const diese = this;
    const word = options.word;
    for (let i = 0; i < diese.data.portofolio.length; i++) {
      for(let j = 0; j < diese.data.portofolio[i].inclusive.length; j++) {
        if (diese.data.portofolio[i].inclusive[j] == word) {
          diese.setData({
            word: word,
            keyword: diese.data.portofolio[i].keyword,
            usage: diese.data.portofolio[i].usage
          })
          console.log(diese.data.word);
          console.log(diese.data.keyword);
          break;
        }    
      }
    }
  },
  wordFold: function() {
    const diese = this;
    diese.setData({
      folded: !diese.data.folded
    })
    if(diese.data.folded == true) {
      wx.showToast({
        title: '已加入生词本',
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: '已取消',
        icon: 'none'
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})