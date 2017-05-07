Page({
  data:{
    name:"张拂",
    come:"安徽 合肥",
    tel:"188-5601-8506",
    email:"zhangfu0904@163.com",
    skill:["html5","css3","es5","jquery","gulp",
           "bootstrap","wechatapp","angularjs",
           "seajs","d3js","reactjs","vuejs"],
    want:"12K+",
    job:"两年",
    graduated:"安徽新华学院",
    major:"网络工程",
    address:"杭州市-江干区-九堡镇-晨光绿苑-北苑",
    map:{
      longitude:120.273427,
      latitude:30.318705,
      scale:14,
      marker:[{
        iconPath: "/source/images/icon/point.png",
        id: 0,
        longitude:120.273427,
        latitude:30.318705,
        width: 20,
        height: 20,
        title:"My Home",
        alpha:0.7
      },{
        iconPath: "/source/images/icon/point.png",
        id: 1,
        longitude:120.273427,
        latitude:30.318705,
        width: 20,
        height: 20,
        title:"My Home",
        alpha:0.7
      }],
      polyline: [{
        points: [{
          longitude: 120.273427,
          latitude: 30.318705
        }],
        color:"#FF0000DD",
        width: 2,
        dottedLine: true
      }],
      position:[{
        left:100,
        top:100,
        width:300,
        height:300
      }]
    }
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})
