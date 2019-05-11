// pages/chart/chart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    future: "期货价格",
    subMatter: "",
    origin_price: 0.00,
    price: 0.00,
    priceF: 0.00,
    increase: 0.00,
    increaseF: 0.00,
    bp: 0.00,
    bpF: 0.00
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.type);
    console.log(options.stock);
    console.log(options.origin);
    console.log(wx.getSystemInfoSync().windowWidth);
    const diese = this;
    diese.setData({
      width: wx.getSystemInfoSync().windowWidth
    })
    let origin_price = Number(options.origin);
    let price = Number(options.origin);
    let priceF = Number(options.origin);
    let increase = 0;
    let increaseF = 0;
    let bp = 0;
    let bpF = 0;
    if(options.type == "1") {
      diese.setData({
        subMatter: options.stock,
        origin_price: origin_price.toFixed(2),
        price: price.toFixed(2),
        priceF: priceF.toFixed(2),
        increase: increase.toFixed(2),
        increaseF: increaseF.toFixed(2),
        bp: bp.toFixed(2),
        bpF: bpF.toFixed(2),
        type: options.type,
      })
    } else {
      diese.setData({
        subMatter: options.stock,
        origin_price: origin_price.toFixed(4),
        price: price.toFixed(4),
        priceF: priceF.toFixed(4),
        increase: increase.toFixed(2),
        increaseF: increaseF.toFixed(2),
        bp: bp.toFixed(2),
        bpF: bpF.toFixed(2),
        type: options.type
      })
    }
  },
  onReady(e) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const diese = this;
    const type = diese.data.type;
    const context1 = wx.createCanvasContext("current");
    let width = diese.data.width;
    let row1 = 0;
    let col1 = 100;
    context1.setStrokeStyle("#afafaf");
    context1.moveTo(width / 4, 0);
    context1.lineTo(width / 4, 200);
    context1.moveTo(width / 2, 0);
    context1.lineTo(width / 2, 200);
    context1.moveTo(width * 3 / 4, 0);
    context1.lineTo(width * 3 / 4, 200);
    context1.stroke();
    context1.draw();
    context1.setStrokeStyle("#00bfff");
    for (let i = 0; i < 73; i++) {
      context1.moveTo(10 * i, 100);
      context1.lineTo(10 * i + 5, 100);
    }
    context1.stroke();
    context1.draw(true);
    let interval1 = setInterval(function () {
      if (row1 == width) {
        clearInterval(interval1);
        console.log("Finished!");
        return;
      }
      let amplitude = 0;
      if(type == "1") {
        amplitude = Math.random() - 0.5;
      } else {
        amplitude = (Math.random() - 0.5) / 5;
      }
      let origin_price = diese.data.origin_price;
      let price = diese.data.price;
      let increase = Number(diese.data.increase) + amplitude;
      if (increase < 0 && increase > -0.01) {
        increase = 0;
      }
      let increaseValue = origin_price * increase.toFixed(2) / 100;
      increase = increase.toFixed(2);
      price = Number(origin_price) + Number(increaseValue);
      if(type == "1") {
        price = price.toFixed(2);
      } else {
        price = price.toFixed(5);
      }
      let bp = 0;
      if(type == "1") {
        bp = increaseValue;
        bp = bp.toFixed(2);
      } else {
        bp = increaseValue * 10000;
        bp = bp.toFixed(1);
      }
      diese.setData({
        price: price,
        increase: increase,
        bp: bp,
        amplitude: amplitude
      })
      context1.setStrokeStyle("#ff0000");
      context1.moveTo(row1, col1);
      row1 += 1;
      if (type == "1") {
        col1 -= 8 * amplitude;
      } else {
        col1 -= 40 * amplitude;
      }
      context1.lineTo(row1, col1);
      context1.stroke();
      context1.draw(true);
      diese.setData({
        interval1: interval1
      })
    }, 1000);
    const context2 = wx.createCanvasContext("future");
    let row2 = 0;
    let col2 = 100;
    context2.setStrokeStyle("#afafaf");
    context2.moveTo(width / 4, 0);
    context2.lineTo(width / 4, 200);
    context2.moveTo(width / 2, 0);
    context2.lineTo(width / 2, 200);
    context2.moveTo(width * 3 / 4, 0);
    context2.lineTo(width * 3 / 4, 200);
    context2.stroke();
    context2.draw();
    context2.setStrokeStyle("#00bfff");
    for (let i = 0; i < 73; i++) {
      context2.moveTo(10 * i, 100);
      context2.lineTo(10 * i + 5, 100);
    }
    context2.stroke();
    context2.draw(true);
    let interval2 = setInterval(function () {
      if (row2 == width) {
        clearInterval(interval2);
        console.log("Finished!");
        return;
      }
      let amplitude = 0;
      if (type == "1") {
        amplitude = Math.random() - 0.5;
      } else {
        amplitude = (Math.random() - 0.5) / 5;
      }
      let origin_price = diese.data.origin_price;
      let priceF = diese.data.price;
      let increaseF = Number(diese.data.increaseF) + amplitude;
      if (increaseF < 0 && increaseF > -0.01) {
        increaseF = 0;
      }
      let increaseValue = origin_price * increaseF.toFixed(2) / 100;
      increaseF = increaseF.toFixed(2);
      priceF = Number(origin_price) + Number(increaseValue);
      if (type == "1") {
        priceF = priceF.toFixed(2);
      } else {
        priceF = priceF.toFixed(5);
      }
      let bpF = 0;
      if (type == "1") {
        bpF = increaseValue;
        bpF = bpF.toFixed(2);
      } else {
        bpF = increaseValue * 10000;
        bpF = bpF.toFixed(1);
      }
      diese.setData({
        priceF: priceF,
        increaseF: increaseF,
        bpF: bpF,
        amplitudeF: amplitude
      })
      let difference = 0;
      if(Number(diese.data.increaseF) >= Number(diese.data.increase)) {
        difference = diese.data.increaseF - diese.data.increase;
        diese.setData({
          diffExp: "升水",
          difference: difference.toFixed(2)
        })
      } else {
        difference = diese.data.increase - diese.data.increaseF;
        diese.setData({
          diffExp: "贴水",
          difference: difference.toFixed(2)
        })
      }
      context2.setStrokeStyle("#0000ff");
      context2.moveTo(row2, col2);
      row2 += 1;
      if(type == "1") {
        col2 -= 8 * amplitude;
      } else {
        col2 -= 40 * amplitude;
      }
      context2.lineTo(row2, col2);
      context2.stroke();
      context2.draw(true);
      diese.setData({
        interval2: interval2
      })
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    const diese = this;
    clearInterval(diese.data.interval1);
    clearInterval(diese.data.interval2);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    const diese = this;
    clearInterval(diese.data.interval1);
    clearInterval(diese.data.interval2);
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
