
const app = getApp()
Page({
  data: {
    note: [
      {
        name: 'JosephWong',
        heart_num: '2',
        title: '1月股市交易笔记',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554394637902&di=b02722cd2acb335be1a92c9a273b9943&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160202%2FImg436673662.jpg',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg'
      },
      {
        name: 'JosephWong',
        heart_num: '3',
        title: '2月汇市交易笔记',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554913103835&di=6d02fe5ad574419e6c38b666e155ac20&imgtype=0&src=http%3A%2F%2Fi5.hexunimg.cn%2F2015-05-17%2F175883319.jpg',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg'
      },
      {
        name: 'JosephWong',
        heart_num: '5',
        title: '期权与期货',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554913302489&di=27286479395ddca30af02424940867b6&imgtype=0&src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F3648525-023dd02bc4cf1bcd.png',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg'
      }, {
        name: 'JosephWong',
        heart_num: '6',
        title: '金融衍生品',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554394772582&di=a106c94701ad73944f4acaa3d01b2576&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180412%2F4f37dd03e6d54ab3841102a45ba3d948.gif',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg'
      },
      {
        name: 'JosephWong',
        heart_num: '2',
        title: '浅谈技术指标',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554913386863&di=579e3eca35003034c4452920e101c825&imgtype=0&src=http%3A%2F%2Fi9.hexunimg.cn%2F2015-03-18%2F174144220.jpg',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg'
      },
      {
        name: 'JosephWong',
        heart_num: '3',
        title: '3月期市笔记',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555033994&di=348a1e74beee264ae3532ac742363b42&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.yhusd.net%2Fuploads%2Ftu2016%2Fallimg%2F161019%2F1-1610191323431H.gif',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg'
      },
      {
        name: 'JosephWong',
        heart_num: '8',
        title: '详解分级基金',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555034047&di=bed0276f0f4e299040a598a274b8415b&imgtype=jpg&er=1&src=http%3A%2F%2Fresource.fxgold.com%2Frepo%2Fimage%2F20160826%2F1472204661152097528.jpg',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg'
      }, {
        name: 'JosephWong',
        heart_num: '6',
        title: '套利技巧',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555034076&di=766ffa3610ea141168266a35efa54625&imgtype=jpg&er=1&src=http%3A%2F%2Fi4.hexunimg.cn%2F2015-04-14%2F174925172.jpg',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554649730539&di=871985b8ece73b049b9730cdc97103e2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F17%2F20170717084949_3wCPL.jpeg'
      }
    ]
  },
  toEssay: function(e) {
    let title = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/essay/essay?title=${title}`,
    })
  }
})