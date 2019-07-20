// pages/offerWall/offerWall.js
var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    imgArr: [
      {
      src:"/2019/07/Brown.jpg",
      label: "布朗"
      },
      {
      src:"/2019/07/Cornell.jpg",
      label: "康奈尔"
      },
      {
      src:"/2019/07/Harvard.jpg",
        label: "哈佛"
      },
      {
      src:"/2019/07/Tufts.jpg",
        label: "塔弗茨"
      },
      {
      src:"/2019/07/Uchicago.jpg",
        label: "芝加哥"
      },
      {
      src:"/2019/07/UCLA-1.jpg",
      label: "加州大学洛杉矶"
      },
      {
      src:"/2019/07/1Brown.jpg",
      label: "布朗"
      },
      {
        src:"/2019/07/2UCB.jpg",
      label: "伯克利"
      },
      {
      src:"/2019/07/3USC.jpg",
      label: "南加大"
      },
      {
      src:"/2019/07/4Cambridge.jpg",
      label: "剑桥"
      }
    ],
  },
  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
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
  onShareAppMessage: function () {

  }
})