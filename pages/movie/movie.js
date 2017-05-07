// pages/movie/movie.js

var offset = 0;
var url = 'https://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000';
var getList = function(that){
  that.setData({
    hidden:false
  })
  wx.request({
    url: url,
    data: {
      offset:offset
    },
    method: 'GET', 
    success: function(res){
      var movieList = that.data.movieList;
      for(var i=0;i<res.data.data.movies.length;i++){
        movieList.push(res.data.data.movies[i])
      }
      /*for(var i=res.data.data.movies.length;i>0;i--){
        movieList.push(res.data.data.movies[i])
      }*/
      that.setData({
        movieList:movieList
      })
      offset+=2;
      that.setData({
        hidden:true
      })
    }
  })
}

Page({

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
     wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight - 50
        })
      }
    })
    /*wx.request({
      url: 'https://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000', 
    
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          movieList:res.data.data.movies
          
        })
        console.log(that.data.movieList)
      }
})*/
getList(that)
  },

  onReady:function(){
    // 页面渲染完成
   // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    movieList:[],
    percent:0,  
    hidden:true,

    scrollHeight:0,
    id:0,
  },
 

 refresh:function(){
    var that = this;
    offset = 0;
    that.setData({
      movieList:[]
    })
    getList(that);
  },
  loadMore:function(){
    var that = this;
    getList(that)
  },
  bindViewTap: function() {
    
  },
 showDetail:function(event){
    var id = event.currentTarget.dataset.id;
    var nm = event.currentTarget.dataset.nm;
    wx.navigateTo({
      url: '../movieDetail/movieDetail?id=' + id + '&nm=' + nm
    })
  }
})
