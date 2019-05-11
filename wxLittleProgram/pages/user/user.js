Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    windowHeight: "",
    gotInfo:false,
    signature: "Veni, vidi, vici."
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const diese = this;
    wx.getSystemInfo({
      success: function(res) {
        let ratio = res.windowWidth / 750;
        let height = res.windowHeight / ratio;
        diese.setData({
          windowHeight: height
        })
      },
    })
    if(options.signature != undefined) {
      diese.setData({
        signature: options.signature
      })
    }
  },
  onGotUserInfo: function(e) {
    const diese = this;
    diese.setData({
      userInfo: e.detail.userInfo,
      gotInfo: true
    })
  },
  updateSign: function() {
    const diese = this;
    let signature = diese.data.signature;
    wx.navigateTo({
      url: `/pages/signature/signature?signature=${signature}`,
    })
  },
  toWordBook: function() {
    wx.navigateTo({
      url: '/pages/wordbook/wordbook',
    })
  },
  toMyContent: function() {
    wx.navigateTo({
      url: '/pages/mycontent/mycontent',
    })
  },
  toMyFav: function() {
    wx.navigateTo({
      url: '/pages/myfav/myfav',
    })
  },
  toMyTest: function() {
    wx.navigateTo({
      url: '/pages/mytest/mytest',
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