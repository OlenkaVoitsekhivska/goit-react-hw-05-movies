"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[121],{5121:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(885),a=t(501),s=t(2791),c=t(6871),i=t(2648),o={moviePage:"MovieDetailsView_moviePage__nIBPn",movieInfoWrap:"MovieDetailsView_movieInfoWrap__AF4lS",additionalInfo:"MovieDetailsView_additionalInfo__JVYcA",backBtn:"MovieDetailsView_backBtn__jREmk"},u=t(2639),p=t(184),l=(0,s.lazy)((function(){return t.e(247).then(t.bind(t,1247))})),d=(0,s.lazy)((function(){return t.e(186).then(t.bind(t,186))}));function h(){var e=(0,c.UO)().movieId,n=(0,s.useState)(),t=(0,r.Z)(n,2),h=t[0],f=t[1],v=(0,c.s0)();(0,s.useEffect)((function(){(0,i.Mc)(e).then(f)}),[e]);return(0,p.jsxs)("div",{className:o.pageView,children:[(0,p.jsx)("button",{type:"button",id:o.backBtn,onClick:function(){v(-1)},children:"go back"}),h&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:o.moviePage,children:[(0,p.jsx)("img",{src:h.backdrop_path?"https://image.tmdb.org/t/p/original".concat(h.backdrop_path):"https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",alt:"",width:300}),(0,p.jsxs)("div",{className:o.movieInfoWrap,children:[(0,p.jsxs)("h1",{children:[h.original_title,"(",h.release_date.slice(0,4),")"]}),(0,p.jsxs)("p",{children:["UserScore: ",10*h.vote_average,"%"]}),(0,p.jsx)("h2",{children:"Overview"}),(0,p.jsx)("p",{children:h.overview}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:h.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,p.jsxs)("div",{className:o.additionalInfo,children:[(0,p.jsx)("h2",{children:"Additional information"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(a.OL,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(a.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,p.jsx)(s.Suspense,{fallback:(0,p.jsx)(u.Z,{}),children:(0,p.jsxs)(c.Z5,{children:[(0,p.jsx)(c.AW,{path:"cast",element:(0,p.jsx)(l,{})}),(0,p.jsx)(c.AW,{path:"reviews",element:(0,p.jsx)(d,{})})]})})]})]})}},2648:function(e,n,t){t.d(n,{Bt:function(){return v},Mc:function(){return h},Tg:function(){return u},Xd:function(){return l},y:function(){return x}});var r=t(5861),a=t(7757),s=t.n(a),c=t(4569),i=t.n(c),o="7a92417a5af1e8667d171d8c5ef3af4e";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()("trending/movie/day",{params:{api_key:o,page:1}});case 3:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()("search/movie",{params:{api_key:o,query:"".concat(n)}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()("movie/".concat(n),{params:{api_key:o}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()("movie/".concat(n,"/reviews"),{params:{api_key:o}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i()("movie/".concat(n,"/credits"),{params:{api_key:o}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=121.5403ca65.chunk.js.map