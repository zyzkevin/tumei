//<import src="../../../wxParse/wxParse.wxml" />
// pages/postDetails/postDetails.js
var localData = require("../../data/json.js")
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var id = options.id
    var postData = localData.JsonList[id-1]
    this.setData({
      coverPage: "../../images/" + id +".jpg",
      author:postData.author,
      title:postData.title,
      content:postData.content
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
          content: "是否取消? " + res.cancel + " 现在无法分享"
        })
      }
    })
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