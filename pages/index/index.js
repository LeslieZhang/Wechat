//index.js
//获取应用实例
var util=require('../../utils/util.js');
Page({
  data: {
    weather: {}
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    util.loadWeatherData(function(data){
      //更新数据
      that.setData({
        weather:data
      });
      wx.setNavigationBarTitle({
        title: data.city + ' 天气',
        
      })
    })
  }
})
