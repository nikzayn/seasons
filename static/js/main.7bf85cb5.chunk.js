(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(6),o=a(4),i=a(7),c=a(0),l=a.n(c),u=a(5),m=a.n(u),d=(a(14),{summer:{text:"Let's head to the beach!",iconName:"sun"},winter:{text:"Burr, it is cold!",iconName:"snowflake"}}),h=function(e){var t,a,n=(t=e.season,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=d[n],s=r.text,o=r.iconName;return l.a.createElement("div",{className:"season-display ".concat(n)},l.a.createElement("i",{className:"icon-left massive ".concat(o," icon")}),l.a.createElement("h1",null,s),l.a.createElement("i",{className:"icon-right massive ".concat(o," icon")}))},v=function(e){return l.a.createElement("div",{className:"ui active dimmer"},l.a.createElement("div",{className:"ui massive text loader"},e.message))};v.defaultProps={message:"Loading..."};var g=v,f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={lat:null,errorMessage:""},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){return e.setState({lat:t.coords.latitude})},function(t){return e.setState({errorMessage:t.message})})}},{key:"render",value:function(){return this.state.lat&&!this.state.errorMessage?l.a.createElement(h,{season:this.state.lat}):!this.state.lat&&this.state.errorMessage?l.a.createElement("div",null,"Error: ",this.state.errorMessage):l.a.createElement("div",null,l.a.createElement(g,null))}}]),t}(c.Component);m.a.render(l.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.7bf85cb5.chunk.js.map