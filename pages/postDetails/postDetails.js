var WxParse = require('../../wxParse/wxParse.js');
var localData = require("../../data/activities.js")

Page({

  /**
   * Page initial data
   */
  data: {
  },

  onLoad: function (options) {
    var that = this
    var id = options.id
    var postData = localData.JsonList[id-1]
    var article = postData.content
    var url = postData.url
    //check if video
    WxParse.wxParse('article', 'html', article, this, 5)
  
    that.setData({
      coverPage: "https://xcx-01-1259715065.cos.ap-chengdu.myqcloud.com/" + url,
      author: postData.author,
      title: postData.title,
    })

    // 设置文章id为页面共享
    this.setData({
      currentPostId: id
    });
    // 获取缓存
    var collectionList = wx.getStorageSync('collectionList');
    if (collectionList) {
      // 获取文章收藏状态
      var collectionStatus = collectionList[id];
      // 更新文章收藏状态
      this.setData({
        collectionStatus: collectionStatus
      });
    } else {
      // 如果不存在缓存就设置一个新缓存
      var collectionList = {};
      wx.setStorageSync('collectionList', collectionList);
    }


  },
  onCollectionTap: function (event) {
    var collectionList = wx.getStorageSync('collectionList');
    // 获取文章收藏状态
    var collectionStatus = collectionList[this.data.currentPostId];
    // 文章收藏状态切换
    collectionStatus = !collectionStatus;
    // 存储文章收藏状态
    collectionList[this.data.currentPostId] = collectionStatus;
    // 三个参数为,Storage键、值、文章收藏状态
    this.showToast('collectionList', collectionList, collectionStatus);
  },
  showToast: function (key, value, status) {

    wx.setStorageSync(key, value);
    // 更新文章收藏状态
    this.setData({
      collectionStatus: status
    });
    // 显示提示
    wx.showToast({
      title: status ? "收藏成功" : "取消成功",
      duration: 1000
    })
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
        wx.showModal({
          title: itemList[res.tapIndex],
          content: "是否取消? " + " 现在无法分享，请点击右上角分享"
        })

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