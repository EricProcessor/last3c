//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: ['亦庄京东总部C座', '朝林', '北辰世纪中心A座'],
    ojectArray: [
      {
        id: 0,
        name: '亦庄'
      },
      {
        id: 1,
        name: '朝林'
      },
      {
        id: 2,
        name: '北辰'
      }
    ],
    index: 0,
  },
  addStore:function(event){
    wx.navigateTo({
      url: '../../pages/addStore/addStore',
    })
  },
  addDevice:function(event){
    wx.navigateTo({
      url: '../../pages/addDevice/addDevice',
    })
  },
  // By Eric
  toshopAssitant: function(){
      console.log("跳转页面");
      wx.navigateTo({
        url: '../../pages/shopAssistant/realTimePerformance/guestGroup/guestGroup',
      })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})