import{c as t,_ as e,a as r,b as n}from"./client.0399b022.js";import{s as o,g as i,_ as s}from"./cache.86bd0fd6.js";function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u=t(function(t){function e(t){if(t)return function(t){for(var r in e.prototype)t[r]=e.prototype[r];return t}(t)}t.exports=e,e.prototype.on=e.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},e.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},e.prototype.off=e.prototype.removeListener=e.prototype.removeAllListeners=e.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r,n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o=0;o<n.length;o++)if((r=n[o])===e||r.fn===e){n.splice(o,1);break}return 0===n.length&&delete this._callbacks["$"+t],this},e.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){n=0;for(var o=(r=r.slice(0)).length;n<o;++n)r[n].apply(this,e)}return this},e.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},e.prototype.hasListeners=function(t){return!!this.listeners(t).length}}),c=l;l.default=l,l.stable=d,l.stableStringify=d;var p=[],h=[];function l(t,r,n){var o;for(!function t(r,n,o,i){var s;if("object"===e(r)&&null!==r){for(s=0;s<o.length;s++)if(o[s]===r){var a=Object.getOwnPropertyDescriptor(i,n);return void(void 0!==a.get?a.configurable?(Object.defineProperty(i,n,{value:"[Circular]"}),p.push([i,n,r,a])):h.push([r,n]):(i[n]="[Circular]",p.push([i,n,r])))}if(o.push(r),Array.isArray(r))for(s=0;s<r.length;s++)t(r[s],s,o,r);else{var u=Object.keys(r);for(s=0;s<u.length;s++){var c=u[s];t(r[c],c,o,r)}}o.pop()}}(t,"",[],void 0),o=0===h.length?JSON.stringify(t,r,n):JSON.stringify(t,y(r),n);0!==p.length;){var i=p.pop();4===i.length?Object.defineProperty(i[0],i[1],i[3]):i[0][i[1]]=i[2]}return o}function f(t,e){return t<e?-1:t>e?1:0}function d(t,r,n){var o,i=function t(r,n,o,i){var s;if("object"===e(r)&&null!==r){for(s=0;s<o.length;s++)if(o[s]===r){var a=Object.getOwnPropertyDescriptor(i,n);return void(void 0!==a.get?a.configurable?(Object.defineProperty(i,n,{value:"[Circular]"}),p.push([i,n,r,a])):h.push([r,n]):(i[n]="[Circular]",p.push([i,n,r])))}if("function"==typeof r.toJSON)return;if(o.push(r),Array.isArray(r))for(s=0;s<r.length;s++)t(r[s],s,o,r);else{var u={},c=Object.keys(r).sort(f);for(s=0;s<c.length;s++){var l=c[s];t(r[l],l,o,r),u[l]=r[l]}if(void 0===i)return u;p.push([i,n,r]),i[n]=u}o.pop()}}(t,"",[],void 0)||t;for(o=0===h.length?JSON.stringify(i,r,n):JSON.stringify(i,y(r),n);0!==p.length;){var s=p.pop();4===s.length?Object.defineProperty(s[0],s[1],s[3]):s[0][s[1]]=s[2]}return o}function y(t){return t=void 0!==t?t:function(t,e){return e},function(e,r){if(h.length>0)for(var n=0;n<h.length;n++){var o=h[n];if(o[1]===e&&o[0]===r){r="[Circular]",h.splice(n,1);break}}return t.call(this,e,r)}}function m(t){return(m="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)})(t)}var b=function(t){return null!==t&&"object"===m(t)};function _(t){return(_="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)})(t)}var v=w;function w(t){if(t)return function(t){for(var e in w.prototype)Object.prototype.hasOwnProperty.call(w.prototype,e)&&(t[e]=w.prototype[e]);return t}(t)}w.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),clearTimeout(this._uploadTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,delete this._uploadTimeoutTimer,this},w.prototype.parse=function(t){return this._parser=t,this},w.prototype.responseType=function(t){return this._responseType=t,this},w.prototype.serialize=function(t){return this._serializer=t,this},w.prototype.timeout=function(t){if(!t||"object"!==_(t))return this._timeout=t,this._responseTimeout=0,this._uploadTimeout=0,this;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(e){case"deadline":this._timeout=t.deadline;break;case"response":this._responseTimeout=t.response;break;case"upload":this._uploadTimeout=t.upload;break;default:console.warn("Unknown timeout option",e)}return this},w.prototype.retry=function(t,e){return 0!==arguments.length&&!0!==t||(t=1),t<=0&&(t=0),this._maxRetries=t,this._retries=0,this._retryCallback=e,this};var T=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];w.prototype._shouldRetry=function(t,e){if(!this._maxRetries||this._retries++>=this._maxRetries)return!1;if(this._retryCallback)try{var r=this._retryCallback(t,e);if(!0===r)return!0;if(!1===r)return!1}catch(t){console.error(t)}if(e&&e.status&&e.status>=500&&501!==e.status)return!0;if(t){if(t.code&&T.includes(t.code))return!0;if(t.timeout&&"ECONNABORTED"===t.code)return!0;if(t.crossDomain)return!0}return!1},w.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this.timedoutError=null,this._end()},w.prototype.then=function(t,e){var r=this;if(!this._fullfilledPromise){var n=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(t,e){n.on("abort",function(){if(r.timedout&&r.timedoutError)e(r.timedoutError);else{var t=new Error("Aborted");t.code="ABORTED",t.status=r.status,t.method=r.method,t.url=r.url,e(t)}}),n.end(function(r,n){r?e(r):t(n)})})}return this._fullfilledPromise.then(t,e)},w.prototype.catch=function(t){return this.then(void 0,t)},w.prototype.use=function(t){return t(this),this},w.prototype.ok=function(t){if("function"!=typeof t)throw new Error("Callback required");return this._okCallback=t,this},w.prototype._isResponseOK=function(t){return!!t&&(this._okCallback?this._okCallback(t):t.status>=200&&t.status<300)},w.prototype.get=function(t){return this._header[t.toLowerCase()]},w.prototype.getHeader=w.prototype.get,w.prototype.set=function(t,e){if(b(t)){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},w.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},w.prototype.field=function(t,e){if(null==t)throw new Error(".field(name, val) name can not be empty");if(this._data)throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");if(b(t)){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&this.field(r,t[r]);return this}if(Array.isArray(e)){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&this.field(t,e[n]);return this}if(null==e)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof e&&(e=String(e)),this._getFormData().append(t,e),this},w.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},w.prototype._auth=function(t,e,r,n){switch(r.type){case"basic":this.set("Authorization","Basic ".concat(n("".concat(t,":").concat(e))));break;case"auto":this.username=t,this.password=e;break;case"bearer":this.set("Authorization","Bearer ".concat(t))}return this},w.prototype.withCredentials=function(t){return void 0===t&&(t=!0),this._withCredentials=t,this},w.prototype.redirects=function(t){return this._maxRedirects=t,this},w.prototype.maxResponseSize=function(t){if("number"!=typeof t)throw new TypeError("Invalid argument");return this._maxResponseSize=t,this},w.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},w.prototype.send=function(t){var e=b(t),r=this._header["content-type"];if(this._formData)throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");if(e&&!this._data)Array.isArray(t)?this._data=[]:this._isHost(t)||(this._data={});else if(t&&this._data&&this._isHost(this._data))throw new Error("Can't merge these send calls");if(e&&b(this._data))for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(this._data[n]=t[n]);else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],this._data="application/x-www-form-urlencoded"===r?this._data?"".concat(this._data,"&").concat(t):t:(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(r||this.type("json"),this)},w.prototype.sortQuery=function(t){return this._sort=void 0===t||t,this},w.prototype._finalizeQueryString=function(){var t=this._query.join("&");if(t&&(this.url+=(this.url.includes("?")?"&":"?")+t),this._query.length=0,this._sort){var e=this.url.indexOf("?");if(e>=0){var r=this.url.slice(e+1).split("&");"function"==typeof this._sort?r.sort(this._sort):r.sort(),this.url=this.url.slice(0,e)+"?"+r.join("&")}}},w.prototype._appendQueryString=function(){console.warn("Unsupported")},w.prototype._timeoutError=function(t,e,r){if(!this._aborted){var n=new Error("".concat(t+e,"ms exceeded"));n.timeout=e,n.code="ECONNABORTED",n.errno=r,this.timedout=!0,this.timedoutError=n,this.abort(),this.callback(n)}},w.prototype._setTimeouts=function(){var t=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout,"ETIMEDOUT")},this._responseTimeout))};var g=function(t){return t.split(/ *; */).shift()},O=function(t){return t.split(/ *; */).reduce(function(t,e){var r=e.split(/ *= */),n=r.shift(),o=r.shift();return n&&o&&(t[n]=o),t},{})},x=function(t){return t.split(/ *, */).reduce(function(t,e){var r=e.split(/ *; */),n=r[0].slice(1,-1);return t[r[1].split(/ *= */)[1].slice(1,-1)]=n,t},{})},E=k;function k(t){if(t)return function(t){for(var e in k.prototype)Object.prototype.hasOwnProperty.call(k.prototype,e)&&(t[e]=k.prototype[e]);return t}(t)}function j(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(){this._defaults=[]}k.prototype.get=function(t){return this.header[t.toLowerCase()]},k.prototype._setHeaderProperties=function(t){var e=t["content-type"]||"";this.type=g(e);var r=O(e);for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(this[n]=r[n]);this.links={};try{t.link&&(this.links=x(t.link))}catch(t){}},k.prototype._setStatusProperties=function(t){var e=t/100|0;this.statusCode=t,this.status=this.statusCode,this.statusType=e,this.info=1===e,this.ok=2===e,this.redirect=3===e,this.clientError=4===e,this.serverError=5===e,this.error=(4===e||5===e)&&this.toError(),this.created=201===t,this.accepted=202===t,this.noContent=204===t,this.badRequest=400===t,this.unauthorized=401===t,this.notAcceptable=406===t,this.forbidden=403===t,this.notFound=404===t,this.unprocessableEntity=422===t},["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert","disableTLSCerts"].forEach(function(t){C.prototype[t]=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return this._defaults.push({fn:t,args:r}),this}}),C.prototype._setDefaults=function(t){this._defaults.forEach(function(e){t[e.fn].apply(t,j(e.args))})};var P=C,S=t(function(t,r){function n(t){return(n="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)})(t)}var o;function i(){}"undefined"!=typeof window?o=window:"undefined"==typeof self?(console.warn("Using browser-only version of superagent in non-browser environment"),o=void 0):o=self,t.exports=function(t,e){return"function"==typeof e?new r.Request("GET",t).end(e):1===arguments.length?new r.Request("GET",t):new r.Request(t,e)};var s=r=t.exports;r.Request=y,s.getXHR=function(){if(o.XMLHttpRequest&&(!o.location||"file:"!==o.location.protocol||!o.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw new Error("Browser-only version of superagent could not find XHR")};var a="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};function p(t){if(!b(t))return t;var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&h(e,r,t[r]);return e.join("&")}function h(t,e,r){if(void 0!==r)if(null!==r)if(Array.isArray(r))r.forEach(function(r){h(t,e,r)});else if(b(r))for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&h(t,"".concat(e,"[").concat(n,"]"),r[n]);else t.push(encodeURI(e)+"="+encodeURIComponent(r));else t.push(encodeURI(e))}function l(t){for(var e,r,n={},o=t.split("&"),i=0,s=o.length;i<s;++i)-1===(r=(e=o[i]).indexOf("="))?n[decodeURIComponent(e)]="":n[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return n}function f(t){return/[/+]json($|[^-\w])/.test(t)}function d(t){this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!==this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var e=this.xhr.status;1223===e&&(e=204),this._setStatusProperties(e),this.headers=function(t){for(var e,r,n,o,i=t.split(/\r?\n/),s={},u=0,c=i.length;u<c;++u)-1!==(e=(r=i[u]).indexOf(":"))&&(n=r.slice(0,e).toLowerCase(),o=a(r.slice(e+1)),s[n]=o);return s}(this.xhr.getAllResponseHeaders()),this.header=this.headers,this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&t._responseType?this.body=this.xhr.response:this.body="HEAD"===this.req.method?null:this._parseBody(this.text?this.text:this.xhr.response)}function y(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t,e=null,n=null;try{n=new d(r)}catch(t){return(e=new Error("Parser is unable to parse the response")).parse=!0,e.original=t,r.xhr?(e.rawResponse=void 0===r.xhr.responseType?r.xhr.responseText:r.xhr.response,e.status=r.xhr.status?r.xhr.status:null,e.statusCode=e.status):(e.rawResponse=null,e.status=null),r.callback(e)}r.emit("response",n);try{r._isResponseOK(n)||(t=new Error(n.statusText||n.text||"Unsuccessful HTTP response"))}catch(e){t=e}t?(t.original=e,t.response=n,t.status=n.status,r.callback(t,n)):r.callback(null,n)})}function m(t,e,r){var n=s("DELETE",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}s.serializeObject=p,s.parseString=l,s.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},s.serialize={"application/x-www-form-urlencoded":p,"application/json":c},s.parse={"application/x-www-form-urlencoded":l,"application/json":JSON.parse},E(d.prototype),d.prototype._parseBody=function(t){var e=s.parse[this.type];return this.req._parser?this.req._parser(this,t):(!e&&f(this.type)&&(e=s.parse["application/json"]),e&&t&&(t.length>0||t instanceof Object)?e(t):null)},d.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot ".concat(e," ").concat(r," (").concat(this.status,")"),o=new Error(n);return o.status=this.status,o.method=e,o.url=r,o},s.Response=d,u(y.prototype),v(y.prototype),y.prototype.type=function(t){return this.set("Content-Type",s.types[t]||t),this},y.prototype.accept=function(t){return this.set("Accept",s.types[t]||t),this},y.prototype.auth=function(t,e,r){1===arguments.length&&(e=""),"object"===n(e)&&null!==e&&(r=e,e=""),r||(r={type:"function"==typeof btoa?"basic":"auto"});return this._auth(t,e,r,function(t){if("function"==typeof btoa)return btoa(t);throw new Error("Cannot use basic auth, btoa is not a function")})},y.prototype.query=function(t){return"string"!=typeof t&&(t=p(t)),t&&this._query.push(t),this},y.prototype.attach=function(t,e,r){if(e){if(this._data)throw new Error("superagent can't mix .send() and .attach()");this._getFormData().append(t,e,r||e.name)}return this},y.prototype._getFormData=function(){return this._formData||(this._formData=new o.FormData),this._formData},y.prototype.callback=function(t,e){if(this._shouldRetry(t,e))return this._retry();var r=this._callback;this.clearTimeout(),t&&(this._maxRetries&&(t.retries=this._retries-1),this.emit("error",t)),r(t,e)},y.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},y.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},y.prototype.ca=y.prototype.agent,y.prototype.buffer=y.prototype.ca,y.prototype.write=function(){throw new Error("Streaming is not supported in browser version of superagent")},y.prototype.pipe=y.prototype.write,y.prototype._isHost=function(t){return t&&"object"===n(t)&&!Array.isArray(t)&&"[object Object]"!==Object.prototype.toString.call(t)},y.prototype.end=function(t){this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=t||i,this._finalizeQueryString(),this._end()},y.prototype._setUploadTimeout=function(){var t=this;this._uploadTimeout&&!this._uploadTimeoutTimer&&(this._uploadTimeoutTimer=setTimeout(function(){t._timeoutError("Upload timeout of ",t._uploadTimeout,"ETIMEDOUT")},this._uploadTimeout))},y.prototype._end=function(){if(this._aborted)return this.callback(new Error("The request has been aborted even before .end() was called"));var t=this;this.xhr=s.getXHR();var e=this.xhr,r=this._formData||this._data;this._setTimeouts(),e.onreadystatechange=function(){var r=e.readyState;if(r>=2&&t._responseTimeoutTimer&&clearTimeout(t._responseTimeoutTimer),4===r){var n;try{n=e.status}catch(t){n=0}if(!n){if(t.timedout||t._aborted)return;return t.crossDomainError()}t.emit("end")}};var n=function(e,r){r.total>0&&(r.percent=r.loaded/r.total*100,100===r.percent&&clearTimeout(t._uploadTimeoutTimer)),r.direction=e,t.emit("progress",r)};if(this.hasListeners("progress"))try{e.addEventListener("progress",n.bind(null,"download")),e.upload&&e.upload.addEventListener("progress",n.bind(null,"upload"))}catch(t){}e.upload&&this._setUploadTimeout();try{this.username&&this.password?e.open(this.method,this.url,!0,this.username,this.password):e.open(this.method,this.url,!0)}catch(t){return this.callback(t)}if(this._withCredentials&&(e.withCredentials=!0),!this._formData&&"GET"!==this.method&&"HEAD"!==this.method&&"string"!=typeof r&&!this._isHost(r)){var o=this._header["content-type"],i=this._serializer||s.serialize[o?o.split(";")[0]:""];!i&&f(o)&&(i=s.serialize["application/json"]),i&&(r=i(r))}for(var a in this.header)null!==this.header[a]&&Object.prototype.hasOwnProperty.call(this.header,a)&&e.setRequestHeader(a,this.header[a]);this._responseType&&(e.responseType=this._responseType),this.emit("request",this),e.send(void 0===r?null:r)},s.agent=function(){return new P},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(t){P.prototype[t.toLowerCase()]=function(e,r){var n=new s.Request(t,e);return this._setDefaults(n),r&&n.end(r),n}}),P.prototype.del=P.prototype.delete,s.get=function(t,e,r){var n=s("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},s.head=function(t,e,r){var n=s("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},s.options=function(t,e,r){var n=s("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},s.del=m,s.delete=m,s.patch=function(t,e,r){var n=s("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},s.post=function(t,e,r){var n=s("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},s.put=function(t,e,r){var n=s("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}});S.Request;function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach(function(e){a(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var q=function(){var t=r(n.mark(function t(){var e,r,s;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=i("all_countries_cache_key"))){t.next=3;break}return t.abrupt("return",e);case 3:return t.next=5,S.get("https://coronavirus-19-api.herokuapp.com/countries");case 5:return r=t.sent,s=r.body.map(function(t){return R({},t,{location:z(t.country)})}),o("all_countries_cache_key",s),t.abrupt("return",s);case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),D=function(){var t=r(n.mark(function t(){var e,r;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=i("all_world_cache_key"))){t.next=3;break}return t.abrupt("return",e);case 3:return t.next=5,S.get("https://corona.lmao.ninja/all");case 5:return r=t.sent,o("all_world_cache_key",r.body),t.abrupt("return",r.body);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),L=function(){var t=r(n.mark(function t(){var e,r;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=i("world_data_cache_key"))){t.next=3;break}return t.abrupt("return",e);case 3:return t.next=5,S.get("https://corona.lmao.ninja/historical");case 5:return r=t.sent,o("world_data_cache_key",r.body),t.abrupt("return",r.body);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),H=function(){var t=r(n.mark(function t(e){var r,s,a,u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=z(e),!(a=i(s="country_timeline_cache_key_"+r))){t.next=5;break}return t.abrupt("return",a.timeline);case 5:return t.next=7,S.get("https://corona.lmao.ninja/historical/"+r);case 7:return u=t.sent,o(s,u.body),t.abrupt("return",u.body.timeline);case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=r(n.mark(function t(e){return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q();case 2:return t.abrupt("return",t.sent.find(function(t){return t.location.toLowerCase()===e.toLowerCase()}));case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=r(n.mark(function t(e,r){var o,i,a,u;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L();case 2:return o=t.sent,i=o.find(function(t){return t.country.toLowerCase()===z(e).toLowerCase()&&t.province.toLowerCase()===r.toLowerCase()}),a=s.last(s.keys(i.timeline.cases)),u={location:i.province,cases:i.timeline.cases[a],recovered:i.timeline.recovered[a],deaths:i.timeline.deaths[a]},t.abrupt("return",R({},u,{timeline:i.timeline}));case 7:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),I=function(){var t=r(n.mark(function t(e){var r;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L();case 2:return r=t.sent,t.abrupt("return",r.filter(function(t){return t.country.toLowerCase()===z(e.toLowerCase())&&!s.isEmpty(t.province)&&!t.province.toLowerCase().includes("princess")}).map(function(t){var e=s.last(s.keys(t.timeline.cases));return{location:s.startCase(t.province),cases:t.timeline.cases[e],recovered:t.timeline.recovered[e],deaths:t.timeline.deaths[e]}}).filter(function(t){return t.cases>0}));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),z=function(t){return t.toLowerCase().includes("korea")?"korea, south":t};export{q as a,N as b,I as c,H as d,U as e,D as g};