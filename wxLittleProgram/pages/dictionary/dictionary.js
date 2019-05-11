// pages/dictionary/dictionary.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    portofolio: [{keyword: "交易名词", clicked: true,
                  inclusive: ["开仓", "平仓", "补仓", "强制平仓", "逼仓", "空仓", "诱多", "逼空"]},
                 {keyword: "技术指标", clicked: false,
                  inclusive: ["MACD", "KD", "RSI", "DMI", "OBV", "BOLL", "ROC", "KDJ", "ASI", "EMV"]},
                 {keyword: "交易技巧", clicked: false,
                  inclusive: ["对冲", "套利", "期现套利", "跨期套利", "跨市场套利"]},
                 {keyword: "衍生品", clicked: false,
                  inclusive: ["期货", "期权", "欧式期权", "美式期权", "看涨期权", "看空期权", "实值期权", "虚值期权", "做多波动率", "做空波动率"]},
                 {keyword: "经济指标", clicked: false,
                  inclusive: ["GDP", "GNP", "CPI", "PPI", "PMI", "贸易顺差", "贸易逆差"]}
                ],
    portSelected: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const diese = this;
    wx.getSystemInfo({
      success: function(res) {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;
        let height = clientHeight * ratio;
        diese.setData({
          height: height
        });
      },
    })
  },
  selectPort: function(e) {
    const diese = this;
    const id = e.currentTarget.id;
    diese.portSwitch(id);
    diese.setData({
      portSelected: id
    })
  },
  swiping: function(e) {
    const diese = this;
    const id = e.detail.current;
    diese.portSwitch(id);
  },
  portSwitch: function(select) {
    const diese = this;
    for (let i = 0; i < diese.data.portofolio.length; i++) {
      diese.data.portofolio[i].clicked = false;
    }
    diese.data.portofolio[select].clicked = true;
    diese.setData({
      portofolio: diese.data.portofolio,
    })
  },
  toWords: function(e) {
    const diese = this;
    const id = e.currentTarget.id;
    const key = e.currentTarget.dataset.id;
    let word = "";
    for(let i = 0; i < diese.data.portofolio.length; i++) {
      if(diese.data.portofolio[i].keyword == key) {
        word = diese.data.portofolio[i].inclusive[id];
        break;
      }
    }
    wx.navigateTo({
      url: `/pages/words/words?word=${word}`,
    })
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