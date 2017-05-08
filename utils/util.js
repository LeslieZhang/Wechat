

//获取地理位置
function getLocation(callback){
  wx.getLocation({
    success:function(res){
      callback(true,res.latitude,res.longitude);
    },
    fail:function(){
      callback(false);
    }
  });
}

//获取天气信息
function getWeatherByLocation(latitude,longitude,callback){
  var apiKey="e746430bd107effe8eddba33080af956";
  var apiURL = "https://api.darksky.net/forecast/" + apiKey + "/" + latitude + "," + longitude + "?lang=zh&units=ca";

  wx.request({
    url:apiURL,
    success:function(res){
      var weatherData=parseWeatherData(res.data);

      getCityName(latitude,longitude,function(city){
        weatherData.city=city;
        callback(weatherData);
      });
    }
  });
}

//根据经纬度获取城市名称
function getCityName(latitude,longitude,callback){
  var key="HIrGBm07N18qVpUiIfZAQ3SCgY3m6TmX";
  var apiURL="http://api.map.baidu.com/geocoder/v2/?output=json&location="+ latitude + "," + longitude + "&ak=" +  key;

  wx.request({
    url:apiURL,
    success:function(res){
      callback(res.data["result"]["addressComponent"]["city"]);
    }
  })
}

//整理数据
function parseWeatherData(data){
  var weather={};
  weather["current"]=data.currently;
  weather["daily"]=data.daily;
  return weather;
}

//加载天气预报
function requestWeatherData(cb){
  getLocation(function(success,latitude,longitude){
    if(success==false){
      latitude=0;
      longitude=0;
    }

    getWeatherByLocation(latitude,longitude,function(weatherData){
      cb(weatherData);
    });
  });
}

//格式化日期
function formatDate(timestamp){
  var date=new Date(timestamp*1000);

  return date.getMonth()+1 + "月" + date.getDate() + "日 " + formatWeekday(timestamp);
}

//格式化时间
function formatTime(timestamp){
  var date=new Date(timestamp*1000);

  return date.getHours() + ":" + date.getMinutes();
}
//格式化每周日期
function formatWeekday(timestamp){
  var date=new Date(timestamp*1000);
  var weekday=["周日","周一","周二","周三","周四","周五","周六"];
  var index=date.getDay();

  return weekday[index];
}
function loadWeatherData(callback){
  requestWeatherData(function(data){
    var weatherData={};
    weatherData=data;
    weatherData.current.formattedDate=formatDate(data.current.time);
    weatherData.current.formattedTime=formatTime(data.current.time);
    weatherData.current.temperature=parseInt(weatherData.current.temperature);
    var wantedDaily=[];
    for(var i=1;i<weatherData.daily.data.length;i++){

      var wantedDailyItem=weatherData.daily.data[i];
      var time=weatherData.daily.data[i].time;
      wantedDailyItem["weekday"]=formatWeekday(time);
      wantedDailyItem["temperatureMin"]=parseInt(weatherData.daily.data[i]["temperatureMin"]);
      wantedDailyItem["temperatureMax"]=parseInt(weatherData.daily.data[i]["temperatureMax"]);

      wantedDaily.push(wantedDailyItem);
    }
    weatherData.daily.data=wantedDaily;
    callback(weatherData);
  });
}

module.exports={
  loadWeatherData:loadWeatherData
}