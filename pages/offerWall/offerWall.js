// pages/offerWall/offerWall.js
var localData = require("../../data/offers.js")
var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
  },
  onLoad: function (options) {
    this.setData({
      showJsonList: localData.offerList
    })
  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.showJsonList[index].offers;

    var srcArray = imgArr.map(a => "http://www.phemiaedu.com/wp-content/uploads" + a.src);
    wx.previewImage({
      current: "http://www.phemiaedu.com/wp-content/uploads"+imgArr[index].src,     //当前图片地址
      urls: srcArray,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onShareTap: function (evt) {
    app.onShareTap()
  },
  /**
   * Lifecycle function--Called when page load
   */

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})