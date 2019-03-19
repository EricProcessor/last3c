// pages/reservation/reservation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hday :formate(),
    // currentData: getDay(),
    currentData: getDay(),
  },
  selDay(e) {
    // console.log("点击事件")
    console.log(e);
    this.setData({
      currentData: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(formate());
    // this.hday = formate();
    // console.log(this.hday);
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
function getDates() {
  var new_Date = new Date()
  var timesStamp = new_Date.getTime();
  var currenDay = new_Date.getDay();
  var dates = [];
  for (var i = 0; i < 7; i++) {
    dates.push(new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 6) % 7)).toLocaleDateString().replace(/[年月]/g, '-').replace(/[日上下午]/g, ''));
  }
  return dates
}
//格式化时间
function formate(){
  // debugger;
  var formates = {}
  var dayArr = getDates();
  for(var i = 0; i<dayArr.length; i++){
    var days = []
    // console.log(i);
      if(i == 0){
        var week = "周一";
        var day1 = dayArr[i].split("/");
        var day2 = new Array(day1[1],day1[2]);
        var day3 = day2.join("-");
        days.push(week,day3);
        dayArr[i] = days;
      }else if(i == 1){
        var week = "周二";
        var day1 = dayArr[i].split("/");
        var day2 = new Array(day1[1], day1[2]);
        var day3 = day2.join("-");
        days.push(week, day3);
        dayArr[i] = days;
      } else if (i == 2) {
        var week = "周三";
        var day1 = dayArr[i].split("/");
        var day2 = new Array(day1[1], day1[2]);
        var day3 = day2.join("-");
        days.push(week, day3);
        dayArr[i] = days;
      } else if (i == 3) {
        var week = "周四";
        var day1 = dayArr[i].split("/");
        var day2 = new Array(day1[1], day1[2]);
        var day3 = day2.join("-");
        days.push(week, day3);
        dayArr[i] = days;
      } else if (i == 4) {
        var week = "周五";
        var day1 = dayArr[i].split("/");
        var day2 = new Array(day1[1], day1[2]);
        var day3 = day2.join("-");
        days.push(week, day3);
        dayArr[i] = days;
      } else if (i == 5) {
        var week = "周六";
        var day1 = dayArr[i].split("/");
        var day2 = new Array(day1[1], day1[2]);
        var day3 = day2.join("-");
        days.push(week, day3);
        dayArr[i] = days;
      } else if (i == 6) {
        var week = "周日";
        var day1 = dayArr[i].split("/");
        var day2 = new Array(day1[1], day1[2]);
        var day3 = day2.join("-");
        days.push(week, day3);
        dayArr[i] = days;
      }
  }
  return dayArr;

}
//获得当前是周几
function getDay(){
  var week;
  var weeks = new Date().getDay();  
  console.log(week);
  // if(week==0){
  //   return week;
  // }
  switch(weeks){
      case 0:
      week = 6;
      break;
      case 1:
      week = 0;
      break;
      case 2:
      week = 1;
      break;
      case 3:
      week = 2;
      break;
      case 4:
      week = 3;
      break;
      case 5:
      week = 4;
      break;
      case 6:
      week = 5;
      break;
  }
  return week;
}