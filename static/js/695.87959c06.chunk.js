"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[695],{4618:function(t,e,n){n.d(e,{Bt:function(){return l},Ny:function(){return p},h_:function(){return f},k1:function(){return s},y:function(){return d}});var r=n(5861),a=n(4687),c=n.n(a),u=n(1243),i="https://api.themoviedb.org",o="6f70f7d8034c486bbf0597ae252bbef6",s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(e,"}/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},839:function(t,e,n){var r=n(643),a=n(184);e.Z=function(){return(0,a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.2)",zIndex:9999},children:(0,a.jsx)(r.VF,{height:100,width:100,color:"#0a51a1",secondaryColor:"#0a51a1",radius:12.5,ariaLabel:"mutating-dots-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},9695:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r=n(5861),a=n(9439),c=n(4687),u=n.n(c),i=n(2791),o=n(4618),s=n(1087),p=n(184),f=function(t){var e=t.trendMovies;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending Today"}),(0,p.jsx)("ol",{children:e.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))})]})},d=n(839),l=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],s=(0,i.useState)(!0),l=(0,a.Z)(s,2),v=l[0],h=l[1],g=(0,i.useState)(!1),x=(0,a.Z)(g,2),m=x[0],y=x[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(!1),h(!0),t.next=5,(0,o.k1)();case 5:e=t.sent,n=e.results,c(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),y(!0);case 13:return t.prev=13,h(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsx)(p.Fragment,{children:v?(0,p.jsx)(d.Z,{}):m?(0,p.jsx)("p",{children:"Sorry, we could not fetch the trending movies. Please try again later."}):(0,p.jsx)(f,{trendMovies:n})})}}}]);
//# sourceMappingURL=695.87959c06.chunk.js.map