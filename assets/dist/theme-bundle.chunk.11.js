webpackJsonp([11],{275:function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=o(231),a=o(426),l=function(t){function e(){return i(this,e),n(this,t.apply(this,arguments))}return r(e,t),e.prototype.loaded=function(t){o.i(a.a)()},e}(s.a);e.default=l},426:function(t,e,o){"use strict";var i=o(1),n=o.n(i),r=o(430),s=o.n(r);e.a=function(){new s.a({get:"user",userId:n()("#instafeed").data("userid"),accessToken:n()("#instafeed").data("accesstoken"),resolution:"standard_resolution",limit:"20",template:'<div class="feed-item-wrap animated fadeIn">                  <div class="feed-item"><img src="{{image}}" />                     <div class="feed-action">                        <a data-toggle="tooltip" title="View Detail" target="_blank" class="btn btn-primary" href="{{link}}"><i class="fa fa-link"></i></a>                        <a data-toggle="tooltip" title="Quick View" class="btn btn-primary btn-quickview" data-mfp-src="{{image}}" feed-caption="{{caption}}"><i class="fa fa-photo"></i></a>                     </div>                  </div>               </div>',before:function(){n()("#instafeed").after('<div class="before-loading text-center"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>')},after:function(){n()("#instafeed ~ .before-loading").remove(),n()("#instafeed a").attr("target","_blank"),n()("#instafeed").owlCarousel({nav:!0,dots:!1,items:6,margin:30,slideBy:5,responsive:{0:{items:2,slideBy:2},420:{items:2,slideBy:2},560:{items:3,slideBy:3},768:{items:4,slideBy:4},992:{items:4,slideBy:4},1200:{items:6,slideBy:6}},responsiveRefreshRate:0})}}).run(),n()("#instafeed").each(function(){n()(this).magnificPopup({delegate:"a.btn-quickview",type:"image",mainClass:"mfp-fade mfp-instagram",gallery:{enabled:!0},image:{titleSrc:function(t){return t.el.attr("feed-caption")}}})})}},430:function(t,e,o){var i,n,r;(function(){var o;o=function(){function t(t,e){var o,i;if(this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1},"object"==typeof t)for(o in t)i=t[o],this.options[o]=i;this.context=null!=e?e:this,this.unique=this._genKey()}return t.prototype.hasNext=function(){return"string"==typeof this.context.nextUrl&&this.context.nextUrl.length>0},t.prototype.next=function(){return!!this.hasNext()&&this.run(this.context.nextUrl)},t.prototype.run=function(e){var o,i,n;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(n=document.createElement("script"),n.id="instafeed-fetcher",n.src=e||this._buildUrl(),o=document.getElementsByTagName("head"),o[0].appendChild(n),i="instafeedCache"+this.unique,window[i]=new t(this.options,this),window[i].unique=this.unique),!0},t.prototype.parse=function(t){var e,o,i,n,r,s,a,l,c,p,u,f,h,d,m,g,y,w,b,k,v,_,E,I,x,B,N,O,j,T,C;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),this.context.nextUrl="",null!=t.pagination&&(this.context.nextUrl=t.pagination.next_url),"none"!==this.options.sortBy)switch(j="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),O="least"===j[0],j[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",O);break;case"liked":t.data=this._sortBy(t.data,"likes.count",O);break;case"commented":t.data=this._sortBy(t.data,"comments.count",O);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&!1===this.options.mock){if(m=t.data,N=parseInt(this.options.limit,10),null!=this.options.limit&&m.length>N&&(m=m.slice(0,N)),s=document.createDocumentFragment(),null!=this.options.filter&&"function"==typeof this.options.filter&&(m=this._filter(m,this.options.filter)),null!=this.options.template&&"string"==typeof this.options.template){for(l="",h="","",C=document.createElement("div"),p=0,E=m.length;p<E;p++){if(u=m[p],"object"!=typeof(f=u.images[this.options.resolution]))throw r="No image found for resolution: "+this.options.resolution+".",new Error(r);b=f.width,y=f.height,w="square",b>y&&(w="landscape"),b<y&&(w="portrait"),d=f.url,c=window.location.protocol.indexOf("http")>=0,c&&!this.options.useHttp&&(d=d.replace(/https?:\/\//,"//")),h=this._makeTemplate(this.options.template,{model:u,id:u.id,link:u.link,type:u.type,image:d,width:b,height:y,orientation:w,caption:this._getObjectProperty(u,"caption.text"),likes:u.likes.count,comments:u.comments.count,location:this._getObjectProperty(u,"location.name")}),l+=h}for(C.innerHTML=l,n=[],i=0,o=C.childNodes.length;i<o;)n.push(C.childNodes[i]),i+=1;for(v=0,I=n.length;v<I;v++)B=n[v],s.appendChild(B)}else for(_=0,x=m.length;_<x;_++){if(u=m[_],g=document.createElement("img"),"object"!=typeof(f=u.images[this.options.resolution]))throw r="No image found for resolution: "+this.options.resolution+".",new Error(r);d=f.url,c=window.location.protocol.indexOf("http")>=0,c&&!this.options.useHttp&&(d=d.replace(/https?:\/\//,"//")),g.src=d,!0===this.options.links?(e=document.createElement("a"),e.href=u.link,e.appendChild(g),s.appendChild(e)):s.appendChild(g)}if(T=this.options.target,"string"==typeof T&&(T=document.getElementById(T)),null==T)throw r='No element with id="'+this.options.target+'" on page.',new Error(r);T.appendChild(s),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),k="instafeedCache"+this.unique,window[k]=void 0;try{delete window[k]}catch(t){t}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},t.prototype._buildUrl=function(){var t,e,o;switch(t="https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return o=t+"/"+e,null!=this.options.accessToken?o+="?access_token="+this.options.accessToken:o+="?client_id="+this.options.clientId,null!=this.options.limit&&(o+="&count="+this.options.limit),o+="&callback=instafeedCache"+this.unique+".parse"},t.prototype._genKey=function(){var t;return""+(t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)})()+t()+t()+t()},t.prototype._makeTemplate=function(t,e){var o,i,n,r,s;for(i=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,o=t;i.test(o);)r=o.match(i)[1],s=null!=(n=this._getObjectProperty(e,r))?n:"",o=o.replace(i,function(){return""+s});return o},t.prototype._getObjectProperty=function(t,e){var o,i;for(e=e.replace(/\[(\w+)\]/g,".$1"),i=e.split(".");i.length;){if(o=i.shift(),!(null!=t&&o in t))return null;t=t[o]}return t},t.prototype._sortBy=function(t,e,o){var i;return i=function(t,i){var n,r;return n=this._getObjectProperty(t,e),r=this._getObjectProperty(i,e),o?n>r?1:-1:n<r?1:-1},t.sort(i.bind(this)),t},t.prototype._filter=function(t,e){var o,i,n,r,s;for(o=[],i=function(t){if(e(t))return o.push(t)},n=0,s=t.length;n<s;n++)r=t[n],i(r);return o},t}(),function(o,s){n=[],i=s,void 0!==(r="function"==typeof i?i.apply(e,n):i)&&(t.exports=r)}(0,function(){return o})}).call(this)}});