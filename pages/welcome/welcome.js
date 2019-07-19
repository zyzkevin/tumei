var localData = require("../../data/cover.js")
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
    var temp = "http://www.phemiaedu.com/wp-content/uploads" + url;
    // 处理获取的版权信息
    var copyright = '© ' + localData.coverJsonList[n].copyright.split('，')[0];
    this.setData({
      url:temp,
      copyright:copyright
    })
    this.fetchUserInfo()
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
  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
  },
  

  onTap: function () {
    wx.redirectTo({
      url: '../index/index',
    });
  },
  
  fetchUserInfo: function () {
    var that = this
    wx.getSetting({
      success: function (res) {
        // 隐藏授权 button
        that.setData({
          isShow: false
        })
        // 查看是否授权
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取用户信息
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              that.setData({
                nickName: nickName,
                avatarUrl: avatarUrl
              });
              //console.log(res)
            },
            fail: function (error) {
              console.log(error)
            }
          });
        } else {
          // 显示授权 button
          that.setData({
            isShow: true
          })
        }
      }
    });
  },
  
  onshow: function () {
    var that = this;
    wx.request({
      url: 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=zh-CN',
      success: function (res) {
        var data = res.data;
        // 取一个随机数，让图片动态显示
        var n = Math.floor(Math.random() * 8);
        // 处理获取的url
        data.images[n].url = data.images[n].url.replace('1920x1080', '1080x1920');
        var url = 'https://www.bing.com' + data.images[n].url;
        // 处理获取的版权信息
        var copyright = '© ' + data.images[n].copyright.split('，')[0];
        that.setData({
          url: url,
          copyright: copyright
        });
      }
    });
  }
})
