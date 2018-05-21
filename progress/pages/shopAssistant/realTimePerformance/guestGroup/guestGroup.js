import * as echarts from '../../../../ec-canvas/echarts';
function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#fff",
    color: ["#ff1f1f", "#5a79ff"],

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['普客', '会员']
    },
    grid: {
      containLabel: true
    },

    xAxis: {
      name:"单位:天",
      nameGap:30,
      nameLocation:"center",
      type: 'category',
      boundaryGap: false,
      data: ['0', '4', '8', '12', '16', '20', '24','28'],
      axisTick:{
        show:false
      }
    },
    yAxis: {
      name:"单位：%",
      nameGap: 30,
      x: 'center',
      type: 'value',
      splitLine:{
        show:false
      },
      axisTick: {
        show: false
      }
    },
    series: [{
      name: '普客',
      type: 'line',
      smooth: false,
      data: [18, 36, 65, 30, 78, 40, 33,100]
    }, {
      name: '会员',
      type: 'line',
      smooth: false,
      data: [12, 50, 51, 35, 70, 30, 20]
    }
    ]
  };

  chart.setOption(option);
  return chart;
}
// pages/shopAssistant/realTimePerformance/guestGroup/guestGroup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['客群', '关注度', '业绩','排名'],
    currentTab: 0 ,
    dateOpt: ['日','周','月'],
    currentDate: 0, 
    /*下拉框  控制下拉列表的显示隐藏，false隐藏、true显示*/
    show: false,
    /*下拉列表的数据*/
    selectData: ['按照关注人数排序', '按照关注总时长排序'],
    /*选择的下拉列表下标 */
    index: 0,
    ec: {
      onInit: initChart
    },
    // 表格数据
    listData: [
      { "name": "京东之家万达店", "guest": "2", "member": "3","price":"4","order":"1","sale":"1" },
      { "name": "京东之家万达店", "guest": "2", "member": "3","price":"4","order":"1","sale":"1" },
      { "name": "京东之家万达店", "guest": "2", "member": "3","price":"4","order":"1","sale":"1" },
      { "name": "京东店", "guest": "2", "member": "3","price":"4","order":"1","sale":"1" },
      { "name": "京东之家万达店", "guest": "2", "member": "3","price":"4","order":"1","sale":"1" },
      { "name": "京东之家万达店", "guest": "2", "member": "3","price":"4","order":"1","sale":"1" }
    ]
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  dateTab: function(e){
    this.setData({
      currentDate: e.currentTarget.dataset.idx
    })
  },
  memberTab:function(){
     wx.navigateTo({
       url: '../../memberMange/memberMange',
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