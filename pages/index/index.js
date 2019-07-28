var app = getApp();
var localData = require("../../data/json.js")
Page({
  data: {
  },
  signUp: function (e) {
    wx.makePhoneCall({
      phoneNumber: '0755-83238424'
    })
    /*wx.navigateTo({
      url: '../out/out'
    })*/

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