// pages/essay/essay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    essayInfo: {
      headerImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554394772582&di=a106c94701ad73944f4acaa3d01b2576&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180412%2F4f37dd03e6d54ab3841102a45ba3d948.gif",
      author: "JosephWong",
      avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg",
      signature: "Alles fuer Gelder, fuer alle Gelder",
      date: "2019-04-07"
    },
    title: "",
    essayFolded: false,
    essayLiked: false,
    essayVoted: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const diese = this;
    console.log(options.title);
    diese.setData({
      title: options.title
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

  },
  essayVote: function() {
    const diese = this;
    diese.setData({
      essayVoted: !diese.data.essayVoted
    })
    if(diese.data.essayVoted == true) {
      wx.showToast({
        title: '已点赞',
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: '已取消',
        icon: 'none'
      })
    }
  },
  essayLike: function() {
    const diese = this;
    diese.setData({
      essayLiked: !diese.data.essayLiked
    })
    if (diese.data.essayLiked == true) {
      wx.showToast({
        title: '已感谢',
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: '已取消',
        icon: 'none'
      })
    }
  },
  essayFold: function() {
    const diese = this;
    diese.setData({
      essayFolded: !diese.data.essayFolded
    })
    if (diese.data.essayFolded == true) {
      wx.showToast({
        title: '已收藏',
        icon: 'none'
      })
    } else {
      wx.showToast({
        title: '已取消',
        icon: 'none'
      })
    }
  }
})