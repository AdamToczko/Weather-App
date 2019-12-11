(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(17),o=a.n(c),r=(a(24),a(2)),s=a(3),i=a(5),m=a(4),u=a(6),p=(a(25),a(18)),d=a.n(p);a(43);var y=function(e){var t=e.weather,a=t.long,n=t.lati,c=t.weatherDescription,o=t.weatherIcon,r=t.temp,s=t.pressure,i=t.humidity,m=t.tempMin,u=t.tempMax,p=t.windSpeed,d=t.clouds,y=t.sunrise,h=t.sunset,w=t.error,v=t.city,E=t.country,b=t.dataNotLoaded,f=(t.timezone,new Date(1e3*y).toLocaleTimeString()),N=new Date(1e3*h).toLocaleTimeString();return b&&!w?l.a.createElement("div",null):w?l.a.createElement("span",{style:{color:"red"}},"Please try different city as ",l.a.createElement("span",{style:{color:"yellow"}},v)," is not in our database "):l.a.createElement("div",null,l.a.createElement("div",{className:"w-100 d-none d-md-block"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 col-sm-4"},"City: ",l.a.createElement("span",{style:{color:"yellow"}},v)," "),l.a.createElement("div",{className:"col-6 col-sm-4"},"Country: ",l.a.createElement("span",{style:{color:"yellow"}},E)," "),l.a.createElement("div",{className:"col-6 col-sm-4"},"Description: ",l.a.createElement("span",{style:{color:"yellow"}},c)," "),l.a.createElement("div",{className:"w-100 d-none d-md-block"}),l.a.createElement("div",{className:"col-6 col-sm-4"},"longitude: ",l.a.createElement("span",{style:{color:"yellow"}},a)," "),l.a.createElement("div",{className:"col-6 col-sm-4"},"latitude: ",l.a.createElement("span",{style:{color:"yellow"}},n)," "),l.a.createElement("div",{className:"col-6 col-sm-4"},"Temperature now: ",l.a.createElement("span",{style:{color:"yellow"}},r," "),"\xb0C"),l.a.createElement("div",{className:"w-100 d-none d-md-block"}),l.a.createElement("div",{className:"col-6 col-sm-4"}," ",l.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(o,"@2x.png")})),l.a.createElement("div",{className:"col-6 col-sm-4"},"Min temp: ",l.a.createElement("span",{style:{color:"yellow"}},m)," \xb0C"),l.a.createElement("div",{className:"col-6 col-sm-4"},"Max temp: ",l.a.createElement("span",{style:{color:"yellow"}},u)," \xb0C"),l.a.createElement("div",{className:"w-100 d-none d-md-block"}),l.a.createElement("div",{className:"col-6 col-sm-4"},"Clouds: ",l.a.createElement("span",{style:{color:"yellow"}},d)," "),l.a.createElement("div",{className:"col-6 col-sm-4"},"Pressure: ",l.a.createElement("span",{style:{color:"yellow"}},s," "),"hpa"),l.a.createElement("div",{className:"col-6 col-sm-4"},"Humidity: ",l.a.createElement("span",{style:{color:"yellow"}},i)," %"),l.a.createElement("div",{className:"w-100 d-none d-md-block"}),l.a.createElement("div",{className:"col-6 col-sm-4"},"Wind: ",l.a.createElement("span",{style:{color:"yellow"}},p)," m/s"),l.a.createElement("div",{className:"col-6 col-sm-4"},"Sunrise: ",l.a.createElement("span",{style:{color:"yellow"}},f)),l.a.createElement("div",{className:"col-6 col-sm-4"},"Sunset: ",l.a.createElement("span",{style:{color:"yellow"}},N))))},h=a(7),w=a.n(h);var v=function(e){return l.a.createElement("div",{className:w.a.wrapper},l.a.createElement("form",{className:w.a.insideWrapper,onSubmit:e.submit},l.a.createElement("input",{type:"text",placeholder:"Type in city name",value:e.value,onChange:e.change}),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Download weather")))},E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={now:(new Date).toLocaleTimeString()},a.launchClock=function(){a.clock=setInterval((function(){a.setState({now:(new Date).toLocaleTimeString()})}),1e3)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.launchClock()}},{key:"componentWillUnmount",value:function(){clearInterval(this.clock)}},{key:"render",value:function(){return l.a.createElement("h3",null,this.state.now)}}]),t}(l.a.Component),b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={value:"",long:"",lati:"",weatherDescription:"",weatherIcon:"",temp:"",pressure:"",humidity:"",tempMin:"",tempMax:"",windSpeed:"",clouds:"",sunrise:"",sunset:"",error:!1,country:"",dataNotLoaded:!0,timezone:""},a.onInputChange=function(e){var t=e.target.value;a.setState({value:t})},a.handleSubmit=function(e){e.preventDefault(),d.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(a.state.value,"&units=metric&appid=05508bb378ad891b493b0c886cca7a57")).then((function(e){return e.data})).then((function(e){a.setState((function(t){return{dataNotLoaded:!1,error:!1,city:t.value,long:e.coord.lon,lati:e.coord.lat,weatherDescription:e.weather[0].description,weatherIcon:e.weather[0].icon,temp:e.main.temp,pressure:e.main.pressure,humidity:e.main.humidity,tempMin:e.main.temp_min,tempMax:e.main.temp_max,windSpeed:e.wind.speed,clouds:e.weather[0].main,sunrise:e.sys.sunrise,sunset:e.sys.sunset,country:e.sys.country,timezone:e.timezone}}))})).catch((function(e){console.log(e),a.setState((function(e){return{error:!0,city:e.value}}))}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"AppShadow"},l.a.createElement("div",{className:"AppHeader"},l.a.createElement("h3",null,"Your current time:"),l.a.createElement(E,null),l.a.createElement(v,{value:this.state.value,change:this.onInputChange,submit:this.handleSubmit})),l.a.createElement("div",{className:"AppFooter"},l.a.createElement(y,{weather:this.state}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){e.exports={wrapper:"SearchCity_wrapper__ndSg1",insideWrapper:"SearchCity_insideWrapper__3Ri9n"}}},[[19,1,2]]]);
//# sourceMappingURL=main.0d1320dc.chunk.js.map