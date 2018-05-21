// pages/shopAssistant/memberMange/memberMange.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    navbar: ['会员入店', '回头客入店', '信息查询', '立即注册'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  reltimeTab: function(){
    wx.navigateTo({
      url: '../realTimePerformance/guestGroup/guestGroup',
    })
  },
  memreception: function(){
    wx.navigateTo({
      url: '../memberReception/memberReception',
    })
  },
  memdetail: function(){
    wx.navigateTo({
      url: '../memdetail/memdetail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})