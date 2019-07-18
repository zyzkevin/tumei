var app = getApp();
var localData = require("../../data/json.js")
Page({
  data: {
    indicatorDots: true, //小点
    autoplay: true, //是否自动轮播 
    interval: 5000, //间隔时间 
    duration: 3000, //滑动时间
  },
  onLoad: function(options) {
    this.setData({
      showJsonList:localData.JsonList
    })
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  // Event handler.
})