// pages/signature/signature.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputCount: 0
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
    console.log(options.signature);
    diese.setData({
      signature: options.signature,
      inputCount: options.signature.length
    })
  },
  inputChange: function(e) {
    const diese = this;
    let count = e.detail.value.length;
    if(count <= 30) {
      diese.setData({
        signature: e.detail.value,
        inputCount: e.detail.value.length
      })
    } else {
      wx.showToast({
        title: '长度超过限制',
        icon: 'none'
      })
      diese.setData({
        signature: diese.data.signature
      })
    }
  },
  inputSubmit: function(e) {
    const diese = this;
    let signature = diese.data.signature;
    wx.switchTab({
      url: '/pages/user/user',
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