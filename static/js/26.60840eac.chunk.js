"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[26],{4618:function(e,t,n){n.d(t,{Bt:function(){return l},Ny:function(){return p},h_:function(){return f},k1:function(){return s},y:function(){return v}});var r=n(5861),a=n(4687),u=n.n(a),c=n(1243),i="https://api.themoviedb.org",o="6f70f7d8034c486bbf0597ae252bbef6",s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/3/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/3/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/3/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/3/movie/").concat(t,"}/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7026:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(5861),a=n(9439),u=n(4687),c=n.n(u),i=n(2791),o=n(1087),s=n(7689),p=n(3402),f=n(4618),v=n(184),l=function(e){var t=e.onSubmit;return(0,v.jsx)("div",{className:"wrapper",style:{margin:"20px"},children:(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.elements.query.value;n?(t(n),e.target.reset()):p.Am.error("Please enter something")},children:[(0,v.jsx)("input",{name:"query",type:"text",placeholder:"Search movies"}),(0,v.jsx)("button",{type:"submit",children:"Search..."})]})})},h=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],h=(0,o.lr)(),d=(0,a.Z)(h,2),m=d[0],g=d[1],x=(0,s.TH)();(0,i.useEffect)((function(){var e,t=null!==(e=m.get("query"))&&void 0!==e?e:"";if(t){var n=function(){var e=(0,r.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Ny)(t);case 3:n=e.sent,0===(r=n.results).length?(p.Am.dismiss(),p.Am.error("No movies found"),u([])):u(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),p.Am.error(e.t0.message),u([]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();n()}}),[m]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"Movies Page"}),(0,v.jsx)(l,{onSubmit:function(e){g({query:e})}})," ",(0,v.jsx)("ol",{children:n.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:x},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=26.60840eac.chunk.js.map