// pages/about/about.js
var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

  },
  returnHome: function (e) {
    wx.switchTab({
      url: '../index/index',
    })
  },
  signUp: function (e) {
    wx.makePhoneCall({
      phoneNumber:'0755-83238424'
    })
    /*wx.navigateTo({
      url: '../out/out'
    })*/

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

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
  onShareAppMessage: function (res) {
    wx.showToast({ title: '加载中', icon: 'loading', duration: 10000 })
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    wx.hideToast()
    return {
      title: '北美留学芝士教育',
      path: '/pages/welcome/welcome?id=123'
    }
  }
})