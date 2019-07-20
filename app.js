//app.js
App({
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
  }
})