(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[2],{12:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n.d(e,"a",(function(){return a}))},13:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(12);function r(t,e){if(t){if("string"===typeof t)return Object(a.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(t,e):void 0}}},14:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(16),r=n(0),i=n.n(r),o=n(1);function c(t){var e=t.className,n=t.color,r=void 0===n?"primary":n,c=t.fill,s=void 0===c?"background":c,l=Object(a.a)(t,["className","color","fill"]),u=i.a.useMemo((function(){var t=[];return t.push("button"),t.push("".concat(s,"-").concat(r,"-interactive")),e&&t.push(e),t.join(" ")}),[e,s,r]);return l.href?i.a.createElement(o.a,{to:l.href,className:u},l.children):i.a.createElement("button",Object.assign({},l,{className:u}),l.children)}},15:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(13);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(s){r=!0,i=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},16:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}n.d(e,"a",(function(){return a}))},28:function(t,e,n){t.exports={image:"style_image__13euJ",title:"style_title__1p710",about:"style_about__3LadL"}},68:function(t,e,n){t.exports={starfield:"style_starfield__No_Ui"}},69:function(t,e,n){t.exports=n.p+"static/media/logo.eb08c83e.svg"},70:function(t,e,n){t.exports=n.p+"static/media/background.c5999e02.svg"},75:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var a=n(0),r=n.n(a),i=n(14),o=n(15);function c(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:100,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,i=arguments.length>5?arguments[5]:void 0;this.x=t,this.y=e,this.duration=a,this.offset=n,this.size=r,this.timer=n%a,this.draw=function(){this.timer>this.duration&&(this.timer=0),this.timer+=1;var t=Math.abs(this.timer/this.duration-.5)*this.size+this.size/10;i.beginPath(),i.arc(this.x,this.y,t,0,2*Math.PI,!1),i.fillStyle="white",i.fill()}}var s=n(68),l=n.n(s);function u(t){var e=t.quantity,n=void 0===e?200:e,a=r.a.useRef(),i=r.a.useState(),s=Object(o.a)(i,2),u=s[0],f=s[1],m=r.a.useMemo((function(){if(!u)return[];for(var t=[],e=0;e<n;e++){var a=window.innerWidth*Math.random(),r=window.innerHeight*Math.random(),i=100*Math.random(),o=50*Math.random()+50,s=2*Math.random();t.push(new c(a,r,i,o,s,u))}return t}),[n,u]),d=r.a.useCallback((function(){u.clearRect(0,0,a.width,a.height);for(var t=0;t<n;t++)m[t].draw();setTimeout(d,100)}),[u,n,m]);return r.a.useEffect((function(){a.current&&!u&&f(a.current.getContext("2d"))}),[a,u]),r.a.useEffect((function(){a.current&&u&&(a.current.width=window.innerWidth,a.current.height=window.innerHeight,d())}),[a,u,d]),r.a.createElement("canvas",{ref:a,className:l.a.starfield})}var f=n(69),m=n.n(f),d=n(70),h=n.n(d),y=n(28),p=n.n(y);function v(){return r.a.createElement("div",{className:"container py-4"},r.a.createElement(u,null),r.a.createElement("img",{src:h.a,className:p.a.image,alt:"New York at night"}),r.a.createElement("div",{className:"d-flex justify-content-center mt-5"},r.a.createElement("img",{className:"col-md-6 "+p.a.title,src:m.a,alt:"Candlelit logo"})),r.a.createElement("div",{className:"col-md-8 offset-md-2"},r.a.createElement("p",null,"Candlelit is a bundle of useful functions and patterns to help you build your own matches for entry points in any market."),r.a.createElement("div",{className:"d-flex justify-content-around my-5"},r.a.createElement(i.a,{href:"candle"},"Candlestick"),r.a.createElement(i.a,{href:"graph"},"Graph"))))}function b(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"title "+p.a.about},"About")),r.a.createElement("div",{className:"background-dark py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Developed by Rafael Correa Chaves and Guilherme Vitorino as a way to easily implement and detect graphical patterns in new projects, candlelit is a easy solution for any programmer. If you wish to contribute any patterns we miss, you can write an email to: rafael.correa@aposoftworks.com or a new issue to our github with the title: [NP] ","<name of your pattern>",". We hope you like it and enjoy using it."))))}}}]);
//# sourceMappingURL=Home.44b900e3.chunk.js.map