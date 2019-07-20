var app = getApp();
var localData = require("../../data/activities.js")
Page({
  data: {
  },
  onLoad: function (options) {
    this.setData({
      showJsonList: localData.JsonList,
      feedsData: localData.JsonList
    })
  },
  onPostTap: function (evt) {
    var postid = evt.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '../postDetails/postDetails?id=' + postid
    });
  },
  onSwiperTap: function (evt) {
    var swiperid = evt.currentTarget.dataset.swiperid;
    wx.navigateTo({
      url: '../postDetails/postDetails?id=' + swiperid
    });
  }
})