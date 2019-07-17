var app = getApp();
Page({
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../../images/alice.jpg'
      }, {
        link: '/pages/index/index',
        url: '../../images/Sherlock.jpg'
      }, {
        link: '/pages/index/index',
        url: '../../images/afarm.jpg'
      }
    ],
    indicatorDots: true, //小点
    autoplay: true, //是否自动轮播 
    interval: 4000, //间隔时间 
    duration: 3000, //滑动时间
  },
  onLoad: function(options) {
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