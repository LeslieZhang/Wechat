//index.js
//获取应用实例
var app = getApp()
//  Page({
//    data: {
//      motto: '欢迎使用微信小程序',
//      userInfo: {}
//    },
//   事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
// })

Page({
  data:{
       imgUrls: [
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=583667670,2218977766&fm=23&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2254909915,251022773&fm=23&gp=0.jpg',
'http://img2.imgtn.bdimg.com/it/u=3859464140,3002884084&fm=23&gp=0.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  }
})
