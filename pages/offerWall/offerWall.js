// pages/offerWall/offerWall.js
var localData = require("../../data/offers.js")
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
  onLoad: function (options) {
    var that = this
    this.setData({
      showJsonList: localData.offerList
    })
  },
  param: function (e) {
    var typeIndex = e.currentTarget.dataset.index
    this.setData({
      typeIndex:typeIndex
    })
  },
  previewImg: function (e) {
    var offerIndex = e.currentTarget.dataset.index;
    var that = this
    //Array of offers
    if (this.data.typeIndex >= 0){
    setTimeout(function () {
    var imgArr = that.data.showJsonList[that.data.typeIndex].offers;
    //adding domain to url
      var srcArray = imgArr.map(a => "https://xcx-01-1259715065.cos.ap-chengdu.myqcloud.com/" + a.src);
    wx.previewImage({
      current: "https://xcx-01-1259715065.cos.ap-chengdu.myqcloud.com/" + imgArr[offerIndex].src,     //当前图片地址
      urls: srcArray,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    }
      )}, 100)
    } else{
      wx.showToast({ title: '加载中', icon: 'loading', duration: 10000 });
      setTimeout(function () {console.log("setTimeout"),that.previewImg(e), wx.hideToast()}, 1000);
    }

  },
  onShareTap: function (evt) {
    
    console.log(1)
    var that = this
    var itemList = [
      "分享到朋友圈",
      "分享给微信好友"
    ];
    wx.showActionSheet({
      itemList: itemList,
      itemColor: "#355A83",
      success: function (res) {
        wx.showShareMenu({
          withShareTicket: true
        })
        /*wx.showModal({
          title: itemList[res.tapIndex],
          content: "是否取消? "+ " 现在无法分享，请点击右上角分享"
        })*/

      }
    })
  },
  signUp: function (e) {
    wx.makePhoneCall({
      phoneNumber: '0755-83238424'
    })
    /*wx.navigateTo({
      url: '../out/out'
    })*/

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