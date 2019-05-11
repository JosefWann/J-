// pages/wordbook/wordbook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myWords: ["逼仓", "空仓", "诱多", "KD", "RSI", "DMI", "套利", "期现套利", "跨期套利", "欧式期权", "美式期权", "看涨期权", "看空期权", "CPI", "PPI", "PMI"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const diese = this;
    wx.getSystemInfo({
      success: function (res) {
        let ratio = res.windowWidth / 750;
        let height = res.windowHeight / ratio;
        diese.setData({
          windowHeight: height
        })
      },
    })
  },
  toWords: function(e) {
    const diese = this;
    const id = e.currentTarget.dataset.id;
    let word = diese.data.myWords[id];
    wx.navigateTo({
      url: `/pages/words/words?word=${word}`
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