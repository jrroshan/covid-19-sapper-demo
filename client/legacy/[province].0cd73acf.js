import{a as e,b as t,e as r,f as a,i as s,s as n,g as c,S as i,H as o,I as f,J as u,M as v,N as l,O as d,m as h,l as p,C as m,W as $,k as y,p as C,n as g,o as D,D as E,q as x,j as I,r as b,x as j,E as w,a0 as V,A as R,B as S,a1 as k}from"./client.262956e6.js";import{b as H}from"./request.89798f87.js";import{_ as q}from"./cache.c29105f3.js";import{C as A}from"./CovidBasicStats.b7ea6c59.js";import{C as T}from"./CovidChart.6d4382ac.js";function B(e){return function(){var t,r=R(e);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var a=R(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return S(this,t)}}function F(e){var t,r=new A({props:{deaths:e[3],recovered:e[4],cases:e[5]}});return{c:function(){o(r.$$.fragment)},l:function(e){f(r.$$.fragment,e)},m:function(e,a){u(r,e,a),t=!0},p:function(e,t){var a={};8&t&&(a.deaths=e[3]),16&t&&(a.recovered=e[4]),32&t&&(a.cases=e[5]),r.$set(a)},i:function(e){t||(v(r.$$.fragment,e),t=!0)},o:function(e){l(r.$$.fragment,e),t=!1},d:function(e){d(r,e)}}}function L(e){var t,r,a,s,n,c,i,R,S,H,A,B,L,z,J,M,N,O,P,W,G,K,Q,U,X,Y,Z,_,ee=q.startCase(e[0])+"",te=q.startCase(e[1])+"";document.title=t="Covid 19 Tracker For "+e[0]+" / "+e[1];var re=e[5]&&F(e),ae=new T({props:{title:"Covid-19 State for "+e[0]+" / "+e[1],historicData:e[2]}});return{c:function(){r=h(),a=p("div"),s=p("div"),n=p("a"),c=m("Home"),i=h(),R=p("div"),S=m("/"),H=h(),A=p("a"),B=m(ee),L=h(),z=p("div"),J=m("/"),M=h(),N=p("div"),O=m(te),P=h(),W=p("div"),G=p("h1"),K=m("Location "),Q=m(e[0]),U=m(" / "),X=m(e[1]),Y=h(),re&&re.c(),Z=h(),o(ae.$$.fragment),this.h()},l:function(t){$('[data-svelte="svelte-2sxqzw"]',document.head).forEach(y),r=C(t),a=g(t,"DIV",{class:!0});var o=D(a);s=g(o,"DIV",{class:!0});var u=D(s);n=g(u,"A",{href:!0,class:!0});var v=D(n);c=E(v,"Home"),v.forEach(y),i=C(u),R=g(u,"DIV",{class:!0});var l=D(R);S=E(l,"/"),l.forEach(y),H=C(u),A=g(u,"A",{href:!0,class:!0});var d=D(A);B=E(d,ee),d.forEach(y),L=C(u),z=g(u,"DIV",{class:!0});var h=D(z);J=E(h,"/"),h.forEach(y),M=C(u),N=g(u,"DIV",{class:!0});var p=D(N);O=E(p,te),p.forEach(y),u.forEach(y),o.forEach(y),P=C(t),W=g(t,"DIV",{class:!0});var m=D(W);G=g(m,"H1",{});var x=D(G);K=E(x,"Location "),Q=E(x,e[0]),U=E(x," / "),X=E(x,e[1]),x.forEach(y),Y=C(m),re&&re.l(m),m.forEach(y),Z=C(t),f(ae.$$.fragment,t),this.h()},h:function(){x(n,"href","/covid-19-sapper-demo"),x(n,"class","section"),x(R,"class","divider"),x(A,"href",e[0]),x(A,"class","section"),x(z,"class","divider"),x(N,"class","active section"),x(s,"class","ui breadcrumb"),x(a,"class","ui container svelte-n8cefc"),x(W,"class","ui container svelte-n8cefc")},m:function(e,t){I(e,r,t),I(e,a,t),b(a,s),b(s,n),b(n,c),b(s,i),b(s,R),b(R,S),b(s,H),b(s,A),b(A,B),b(s,L),b(s,z),b(z,J),b(s,M),b(s,N),b(N,O),I(e,P,t),I(e,W,t),b(W,G),b(G,K),b(G,Q),b(G,U),b(G,X),b(W,Y),re&&re.m(W,null),I(e,Z,t),u(ae,e,t),_=!0},p:function(e,r){var a=j(r,1)[0];(!_||3&a)&&t!==(t="Covid 19 Tracker For "+e[0]+" / "+e[1])&&(document.title=t),(!_||1&a)&&ee!==(ee=q.startCase(e[0])+"")&&w(B,ee),(!_||1&a)&&x(A,"href",e[0]),(!_||2&a)&&te!==(te=q.startCase(e[1])+"")&&w(O,te),(!_||1&a)&&w(Q,e[0]),(!_||2&a)&&w(X,e[1]),e[5]?re?(re.p(e,a),v(re,1)):((re=F(e)).c(),v(re,1),re.m(W,null)):re&&(k(),l(re,1,1,function(){re=null}),V());var s={};3&a&&(s.title="Covid-19 State for "+e[0]+" / "+e[1]),4&a&&(s.historicData=e[2]),ae.$set(s)},i:function(e){_||(v(re),v(ae.$$.fragment,e),_=!0)},o:function(e){l(re),l(ae.$$.fragment,e),_=!1},d:function(e){e&&y(r),e&&y(a),e&&y(P),e&&y(W),re&&re.d(),e&&y(Z),d(ae,e)}}}function z(e){return J.apply(this,arguments)}function J(){return(J=e(t.mark(function e(r){var a,s,n,c,i;return t.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(r.params.country,r.params.province);case 3:return a=e.sent,s=a.timeline,n=a.deaths,c=a.recovered,i=a.cases,e.abrupt("return",{timeline:s,deaths:n,recovered:c,cases:i,country:r.params.country,province:r.params.province});case 11:e.prev=11,e.t0=e.catch(0),this.error(500,"There was an error in calling the api, please try again in 5 minutes.");case 14:case"end":return e.stop()}},e,this,[[0,11]])}))).apply(this,arguments)}function M(e,t,r){var a=t.country,s=t.province,n=t.timeline,c=void 0===n?{}:n,i=t.deaths,o=t.recovered,f=t.cases;return e.$set=function(e){"country"in e&&r(0,a=e.country),"province"in e&&r(1,s=e.province),"timeline"in e&&r(2,c=e.timeline),"deaths"in e&&r(3,i=e.deaths),"recovered"in e&&r(4,o=e.recovered),"cases"in e&&r(5,f=e.cases)},[a,s,c,i,o,f]}export default(function(e){r(o,i);var t=B(o);function o(e){var r;return a(this,o),r=t.call(this),s(c(r),e,M,L,n,{country:0,province:1,timeline:2,deaths:3,recovered:4,cases:5}),r}return o}());export{z as preload};
