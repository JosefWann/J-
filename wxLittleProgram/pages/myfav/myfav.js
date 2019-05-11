// pages/myfav/myfav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foldEssay: [{nickName: "JosephWong", 
                 title: "期权与期货",
                 avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg", 
                 content: "バイオ・ライフサイエンス分野に代表されるデータ分析や研究開発の超高速化を支援するプラットフォーマーとして最新の高速演算環境をクラウドサービスとして顧客に提供するエクストリーム−D株式会社（以下エクストリーム−D）は、2018年11月、次世代型スパコンクラウドプラットフォーム「XTREME-Stargate™️」をリリースした。そして2019年4月、このXTREME-Stargate™️の新たな技術基盤として採用されたのが、最新の第2世代インテル® Xeon® スケーラブル・プロセッサーだ。"}, 
                {nickName: "JosephWong", 
                 title: "金融衍生品",
                 avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg", 
                 content: "バイオ・ライフサイエンス分野に代表されるデータ分析や研究開発の超高速化を支援するプラットフォーマーとして最新の高速演算環境をクラウドサービスとして顧客に提供するエクストリーム−D株式会社（以下エクストリーム−D）は、2018年11月、次世代型スパコンクラウドプラットフォーム「XTREME-Stargate™️」をリリースした。そして2019年4月、このXTREME-Stargate™️の新たな技術基盤として採用されたのが、最新の第2世代インテル® Xeon® スケーラブル・プロセッサーだ。"}, 
                {nickName: "JosephWong", 
                 title: "浅谈技术指标",
                 avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg", 
                 content: "バイオ・ライフサイエンス分野に代表されるデータ分析や研究開発の超高速化を支援するプラットフォーマーとして最新の高速演算環境をクラウドサービスとして顧客に提供するエクストリーム−D株式会社（以下エクストリーム−D）は、2018年11月、次世代型スパコンクラウドプラットフォーム「XTREME-Stargate™️」をリリースした。そして2019年4月、このXTREME-Stargate™️の新たな技術基盤として採用されたのが、最新の第2世代インテル® Xeon® スケーラブル・プロセッサーだ。"}, 
                {nickName: "JosephWong", 
                 title: "详解分级基金",
                 avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg", 
                 content: "バイオ・ライフサイエンス分野に代表されるデータ分析や研究開発の超高速化を支援するプラットフォーマーとして最新の高速演算環境をクラウドサービスとして顧客に提供するエクストリーム−D株式会社（以下エクストリーム−D）は、2018年11月、次世代型スパコンクラウドプラットフォーム「XTREME-Stargate™️」をリリースした。そして2019年4月、このXTREME-Stargate™️の新たな技術基盤として採用されたのが、最新の第2世代インテル® Xeon® スケーラブル・プロセッサーだ。"}, 
                {nickName: "JosephWong", 
                 title: "套利技巧",
                 avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg", 
                 content: "バイオ・ライフサイエンス分野に代表されるデータ分析や研究開発の超高速化を支援するプラットフォーマーとして最新の高速演算環境をクラウドサービスとして顧客に提供するエクストリーム−D株式会社（以下エクストリーム−D）は、2018年11月、次世代型スパコンクラウドプラットフォーム「XTREME-Stargate™️」をリリースした。そして2019年4月、このXTREME-Stargate™️の新たな技術基盤として採用されたのが、最新の第2世代インテル® Xeon® スケーラブル・プロセッサーだ。"}]
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
  toEssay: function(e) {
    const diese = this;
    const id = e.currentTarget.dataset.id;
    let title = diese.data.foldEssay[id].title;
    wx.navigateTo({
      url: `/pages/essay/essay?title=${title}`,
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