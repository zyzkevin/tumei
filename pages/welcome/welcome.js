var localData = require("../../data/cover.js")
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  onLoad: function () {
    var that = this;
    // 取一个随机数，让图片动态显示
    var n = Math.round(Math.random() * 5);
    // 处理获取的url
    var url = localData.coverJsonList[n].url
    //data.images[n].url = data.images[n].url.replace('1920x1080', '1080x1920');
    var temp = "https://xcx-01-1259715065.cos.ap-chengdu.myqcloud.com/" + url;
    // 处理获取的版权信息
    var copyright = '© ' + localData.coverJsonList[n].copyright.split('，')[0];
    this.setData({
      url:temp,
      copyright:copyright
    })
  /*
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              that.setData({
                nickName: nickName,
                avatarUrl: avatarUrl
              });
            }
          })
        } else {

        }
      }
    });
    */

  },

  onTap: function () {
    wx.switchTab({
      url: '../index/index',
    });
  },
  
  onshow: function () {
    var that = this;
  }
})
