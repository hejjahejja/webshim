webshims.register("dom-extend",function(e,t,r,n,a){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),!t.cfg.no$Switch){var i=function(){if(!r.jQuery||r.$&&r.jQuery!=r.$||r.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once! Webshims and other Plugins might not work properly."),r.$&&(r.$=t.$),r.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};i(),setTimeout(i,90),e(i)}var o=t.modules,s=/\s*,\s*/,u={},l={},c={},p={},d={},f=e.fn.val,h=function(t,r,n,a,i){return i?f.call(e(t)):f.call(e(t),n)};e.widget||function(){var t=e.cleanData;e.cleanData=function(r){if(!e.widget)for(var n,a=0;null!=(n=r[a]);a++)try{e(n).triggerHandler("remove")}catch(i){}t(r)}}(),e.fn.val=function(t){var r=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return r&&1===r.nodeType?e.prop(r,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var n=e.isFunction(t);return this.each(function(i){if(r=this,1===r.nodeType)if(n){var o=t.call(r,i,e.prop(r,"value",a,"val",!0));null==o&&(o=""),e.prop(r,"value",o,"val")}else e.prop(r,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,r,a){e(n)[a?"onTrigger":"on"](t,r),this.on("remove",function(a){a.originalEvent||e(n).off(t,r)})};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,r,n){if(t=t.jquery?t[0]:t,!t)return n||{};var i=e.data(t,m);return n!==a&&(i||(i=e.data(t,m,{})),r&&(i[r]=n)),r?i&&i[r]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var r=[];return this.each(function(){var n=v(this,"shadowData"),a=n&&n[t.prop]||this;-1==e.inArray(a,r)&&r.push(a)}),this.pushStack(r)}}),e.Tween.propHooks._default&&e.css&&function(){var r=!1;try{r="10px"==e.css(e('<b style="width: 10px" />')[0],"width","")}catch(n){t.error(n)}var a=r?function(t,r){return e.css(t,r,!1,"")}:function(t,r){return e.css(t,r,"")};e.extend(e.Tween.propHooks._default,{get:function(t){var r;return null==t.elem[t.prop]&&!l[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(r=a(t.elem,t.prop),r&&"auto"!==r?r:0):l[t.prop]?e.prop(t.elem,t.prop):t.elem[t.prop]},set:function(t){jQuery.fx.step[t.prop]?jQuery.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[jQuery.cssProps[t.prop]]||jQuery.cssHooks[t.prop])?jQuery.style(t.elem,t.prop,t.now+t.unit):l[t.prop]?e.prop(t.elem,t.prop,t.now):t.elem[t.prop]=t.now}})}(),["removeAttr","prop","attr"].forEach(function(r){u[r]=e[r],e[r]=function(t,n,i,o,s){var p="val"==o,f=p?h:u[r];if(!t||!l[n]||1!==t.nodeType||!p&&o&&"attr"==r&&e.attrFn[n])return f(t,n,i,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=r||i!==!1&&null!==i?r:"removeAttr";if(b||(b=c["*"]),b&&(b=b[n]),b&&(m=b[w]),m){if("value"==n&&(v=m.isVal,m.isVal=p),"removeAttr"===w)return m.value.call(t);if(i===a)return m.get?m.get.call(t):m.value;m.set&&("attr"==r&&i===!0&&(i=n),g=m.set.call(t,i)),"value"==n&&(m.isVal=v)}else g=f(t,n,i,o,s);if((i!==a||"removeAttr"===w)&&d[y]&&d[y][n]){var T;T="removeAttr"==w?!1:"prop"==w?!!i:!0,d[y][n].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==r)||"attr"==e.only&&"prop"!=r)&&e.call(t,i,T,p?"val":w,r)})}return g},p[r]=function(e,n,i){c[e]||(c[e]={}),c[e][n]||(c[e][n]={});var o=c[e][n][r],s=function(e,t,a){return t&&t[e]?t[e]:a&&a[e]?a[e]:"prop"==r&&"value"==n?function(e){var t=this;return i.isVal?h(t,n,e,!1,0===arguments.length):u[r](t,n,e)}:"prop"==r&&"value"==e&&i.value.apply?function(){var e=u[r](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return u[r](this,n,e)}};c[e][n][r]=i,i.value===a&&(i.set||(i.set=i.writeable?s("set",i,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),i.get||(i.get=s("get",i,o))),["value","get","set"].forEach(function(e){i[e]&&(i["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(n.createElement("foobar")),r=Object.prototype.hasOwnProperty,a=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(i,o,s){var u,l;if(!(a&&(u=n.createElement(i))&&(l=t.getPrototypeOf(u))&&e!==l)||u[o]&&r.call(u,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(i,o,s.value);else{var c=u[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},l[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var r={};t.addReady(function(n,i){var o={},s=function(t){o[t]||(o[t]=e(n.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(o[t]=o[t].add(i)))};e.each(r,function(e,r){return s(e),r&&r.forEach?(r.forEach(function(t){o[e].each(t)}),a):(t.warn("Error: with "+e+"-property. methods: "+r),a)}),o=null});var i,o=e([]),s=function(t,a){r[t]?r[t].push(a):r[t]=[a],e.isDOMReady&&(i||e(n.getElementsByTagName(t))).each(a)};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(n.getElementsByTagName(t))),i||o},flushTmpCache:function(){i=null},content:function(t,r){s(t,function(){var t=e.attr(this,r);null!=t&&e.attr(this,r,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,r,n){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[r]=this[r],this[r]=n})})}}}(),b=function(e,t){e.defaultValue===a&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(r){r=e(r);var n=r.prop("id");return n||(t++,n="ID-"+t,r.eq(0).prop("id",n)),n}}(),implement:function(e,r){var n=v(e,"implemented")||v(e,"implemented",{});return n[r]?(t.warn(r+" already implemented for element #"+e.id),!1):(n[r]=!0,!0)},extendUNDEFProp:function(t,r){e.each(r,function(e,r){e in t||(t[e]=r)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,r,n){var a,i=(e._data(t,"events")||{})[r];i&&i.length>1&&(a=i.pop(),n||(n="bind"),"bind"==n&&i.delegateCount?i.splice(i.delegateCount,0,a):i.unshift(a)),t=null},addShadowDom:function(){var a,i,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(a),a=setTimeout(function(){if("resize"==t.type){var a=e(r).width(),u=e(r).width();if(u==i&&a==o)return;i=u,o=a,s.height=s.getHeight(),s.width=s.getWidth()}e(n).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var r=n.body,a=n.documentElement;s[t]=function(){return Math.max(r["scroll"+e],a["scroll"+e],r["offset"+e],a["offset"+e],a["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(r).bind("resize",this.handler),function(){var t,r=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),r.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(r,n,a){a=a||{},r.jquery&&(r=r[0]),n.jquery&&(n=n[0]);var i=e.data(r,m)||e.data(r,m,{}),o=e.data(n,m)||e.data(n,m,{}),s={};a.shadowFocusElement?a.shadowFocusElement&&(a.shadowFocusElement.jquery&&(a.shadowFocusElement=a.shadowFocusElement[0]),s=e.data(a.shadowFocusElement,m)||e.data(a.shadowFocusElement,m,s)):a.shadowFocusElement=n,e(r).on("remove",function(t){t.originalEvent||e(n).remove()}),i.hasShadow=n,s.nativeElement=o.nativeElement=r,s.shadowData=o.shadowData=i.shadowData={nativeElement:r,shadowElement:n,shadowFocusElement:a.shadowFocusElement},a.shadowChilds&&a.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),a.data&&(s.shadowData.data=o.shadowData.data=i.shadowData.data=a.data),a=null,t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(r,n){b(r),r.prop||(r.prop={set:function(e){r.attr.set.call(this,e)},get:function(){var r,a=this.getAttribute(n);if(null==a)return"";if(t.setAttribute("href",a+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),r=t.getAttribute("href",4)}catch(i){r=t.getAttribute("href",4)}e(t).detach()}return r||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(r,n){"string"==typeof n&&(n=n.split(s)),n.forEach(function(n){t.defineNodeNamesProperty(r,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(r,n,a){return l[n]=!0,a.reflect&&t.propTypes[a.propType||"standard"](a,n),["prop","attr","removeAttr"].forEach(function(i){var o=a[i];o&&(o="prop"===i?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),p[i](r,n,o),"*"!=r&&t.cfg.extendNative&&"prop"==i&&o.value&&e.isFunction(o.value)&&g(r,n,o),a[i]=o)}),a.initAttr&&y.content(r,n),a},defineNodeNameProperties:function(e,r,n,a){for(var i in r)!a&&r[i].initAttr&&y.createTmpCache(e),n&&(r[i][n]||(r[i][n]={},["value","set","get"].forEach(function(e){e in r[i]&&(r[i][n][e]=r[i][e],delete r[i][e])}))),r[i]=t.defineNodeNameProperty(e,i,r[i]);return a||y.flushTmpCache(),r},createElement:function(r,n,a){var i;return e.isFunction(n)&&(n={after:n}),y.createTmpCache(r),n.before&&y.createElement(r,n.before),a&&(i=t.defineNodeNameProperties(r,a,!1,!0)),n.after&&y.createElement(r,n.after),y.flushTmpCache(),i},onNodeNamesPropertyModify:function(t,r,n,a){"string"==typeof t&&(t=t.split(s)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){d[e]||(d[e]={}),"string"==typeof r&&(r=r.split(s)),n.initAttr&&y.createTmpCache(e),r.forEach(function(t){d[e][t]||(d[e][t]=[],l[t]=!0),n.set&&(a&&(n.set.only=a),d[e][t].push(n.set)),n.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(r,n,i){i||(i={}),e.isFunction(i)&&(i.set=i),t.defineNodeNamesProperty(r,n,{attr:{set:function(e){this.setAttribute(n,e),i.set&&i.set.call(this,!0)},get:function(){var e=this.getAttribute(n);return null==e?a:n}},removeAttr:{value:function(){this.removeAttribute(n),i.set&&i.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:i.initAttr||!1})},contentAttr:function(e,t,r){if(e.nodeName){var n;return r===a?(n=e.attributes[t]||{},r=n.specified?n.value:null,null==r?a:r):("boolean"==typeof r?r?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,r),a)}},activeLang:function(){var r,n,a=[],i={},s=/:\/\/|^\.*\//,u=function(r,n,a){var i;return n&&a&&-1!==e.inArray(n,a.availabeLangs||[])?(r.loading=!0,i=a.langSrc,s.test(i)||(i=t.cfg.basePath+i),t.loader.loadScript(i+n+".js",function(){r.langObj[n]?(r.loading=!1,c(r,!0)):e(function(){r.langObj[n]&&c(r,!0),r.loading=!1})}),!0):!1},l=function(e){i[e]&&i[e].forEach(function(e){e.callback(r,n,"")})},c=function(e,t){if(e.activeLang!=r&&e.activeLang!==n){var a=o[e.module].options;e.langObj[r]||n&&e.langObj[n]?(e.activeLang=r,e.callback(e.langObj[r]||e.langObj[n],r),l(e.module)):t||u(e,r,a)||u(e,n,a)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],r),l(e.module))}},p=function(t){return"string"==typeof t&&t!==r?(r=t,n=r.split("-")[0],r==n&&(n=!1),e.each(a,function(e,t){c(t)})):"object"==typeof t&&(t.register?(i[t.register]||(i[t.register]=[]),i[t.register].push(t),t.callback(r,n,"")):(t.activeLang||(t.activeLang=""),a.push(t),c(t))),r};return p}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,r){t[e]=function(e,n,a,i){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[r](e,n,a,i)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var r={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(e,t){var r=e.getAttribute("role");r||e.setAttribute("role",t)};e.webshims.addReady(function(a,i){if(e.each(r,function(t,r){for(var o=e(t,a).add(i.filter(t)),s=0,u=o.length;u>s;s++)n(o[s],r)}),a===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),u=s.length;if(o&&!e(o).closest("section, article")[0]&&n(o,"banner"),!u)return;var l=s[u-1];e(l).closest("section, article")[0]||n(l,"contentinfo")}})}}(jQuery,document),webshims.register("filereader",function(e,t){"use strict";(function(){var r=swfmini,n=e.Callbacks("once unique memory"),a=0,i=null;if(window.FileReader)return e.fn.fileReader=function(){return this},void 0;e.fn.fileReader=function(t){if(this.length){t=e.extend(e.fn.fileReader.defaults,t);var r=this;n.add(function(){return o(r,t)}),e.isFunction(t.callback)&&n.add(t.callback),FileAPIProxy.ready||FileAPIProxy.init(t)}return this},e.fn.fileReader.defaults={id:"fileReaderSWFObject",multiple:null,accept:null,label:null,extensions:null,filereader:"files/filereader.swf",expressInstall:null,debugMode:!1,callback:!1};var o=function(t,r){return t.each(function(t,n){n=e(n);var o,s,u,l=n.attr("id");l||(l="flashFileInput"+a,n.attr("id",l),a++),o=n.prop("multiple"),s=n.data("swfaccept")||n.prop("accept")||r.accept,u=n.jProp("labels").map(function(){return e(this).text()}).get().join(" ")||n.data("swflabel")||r.label,FileAPIProxy.inputs[l]=n,FileAPIProxy.swfObject.add(l,o,s,u,r.extensions),n.css("z-index",0).mouseover(function(e){l!==i&&(e=e||window.event,i=l,FileAPIProxy.swfObject.mouseover(l),FileAPIProxy.container.height(n.outerHeight()).width(n.outerWidth()).css(n.offset()))}).click(function(e){return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!1})})};window.FileAPIProxy={ready:!1,_inititalized:!1,init:function(t){var a=this;this.debugMode=t.debugMode,this.container||(this.container=e("<div>").attr("id",t.id).wrap("<div>").parent().css({position:"fixed",width:"1px",height:"1px",display:"inline-block",background:"transparent","z-index":99999}).on("mouseover mouseout mousedown mouseup",function(t){i&&e("#"+i).trigger(t.type)}).appendTo("body"),r.embedSWF(t.filereader,t.id,"100%","100%","10",t.expressInstall,{debugMode:t.debugMode?!0:""},{wmode:"transparent",allowScriptAccess:"sameDomain"},{},function(t){a.swfObject=t.ref,e(a.swfObject).css({display:"block",outline:0}).attr("tabindex",0),a.ready=t.success&&"function"==typeof t.ref.add,a.ready&&n.fire()}))},swfObject:null,container:null,inputs:{},readers:{},onFileInputEvent:function(e){if(this.debugMode&&console.info("FileInput Event ",e.type,e),e.target in this.inputs){var r=this.inputs[e.target];e.target=r[0],"change"===e.type&&t.data(e.target,"fileList",new FileList(e.files)),r.trigger(e)}window.focus()},onFileReaderEvent:function(e){if(this.debugMode&&console.info("FileReader Event ",e.type,e,e.target in this.readers),e.target in this.readers){var t=this.readers[e.target];e.target=t,t._handleFlashEvent.call(t,e)}},onFileReaderError:function(e){this.debugMode&&console.log(e)},onSWFReady:function(){return this.container.css({position:"absolute"}),this.ready="function"==typeof this.swfObject.add,this.ready&&n.fire(),!0}},window.FileReader=function(){this.EMPTY=0,this.LOADING=1,this.DONE=2,this.readyState=0,this.result=null,this.error=null,this.onloadstart=null,this.onprogress=null,this.onload=null,this.onabort=null,this.onerror=null,this.onloadend=null,this._callbacks={loadstart:e.Callbacks("unique"),progress:e.Callbacks("unique"),abort:e.Callbacks("unique"),error:e.Callbacks("unique"),load:e.Callbacks("unique"),loadend:e.Callbacks("unique")},this._id=null},window.FileReader.prototype={readAsBinaryString:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsBinaryString")},readAsText:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsText")},readAsDataURL:function(e){this._start(e),FileAPIProxy.swfObject.read(e.input,e.name,"readAsDataURL")},readAsArrayBuffer:function(){throw"Whoops FileReader.readAsArrayBuffer is unimplemented"},abort:function(){this.result=null,this.readyState!==this.EMPTY&&this.readyState!==this.DONE&&FileAPIProxy.swfObject.abort(this._id)},addEventListener:function(e,t){e in this._callbacks&&this._callbacks[e].add(t)},removeEventListener:function(e,t){e in this._callbacks&&this._callbacks[e].remove(t)},dispatchEvent:function(t){if(t.target=this,t.type in this._callbacks){var r=this["on"+t.type];e.isFunction(r)&&r(t),this._callbacks[t.type].fire(t)}return!0},_register:function(e){this._id=e.input+"."+e.name,FileAPIProxy.readers[this._id]=this},_start:function(e){if(this._register(e),this.readyState===this.LOADING)throw{type:"InvalidStateError",code:11,message:"The object is in an invalid state."}},_handleFlashEvent:function(e){switch(e.type){case"loadstart":this.readyState=this.LOADING;break;case"loadend":this.readyState=this.DONE;break;case"load":this.readyState=this.DONE,this.result=FileAPIProxy.swfObject.result(this._id);break;case"error":this.result=null,this.error={name:"NotReadableError",message:"The File cannot be read!"}}this.dispatchEvent(new FileReaderEvent(e))}},window.FileReaderEvent=function(e){this.initEvent(e)},window.FileReaderEvent.prototype={initEvent:function(t){e.extend(this,{type:null,target:null,currentTarget:null,eventPhase:2,bubbles:!1,cancelable:!1,defaultPrevented:!1,isTrusted:!1,timeStamp:(new Date).getTime()},t)},stopPropagation:function(){},stopImmediatePropagation:function(){},preventDefault:function(){}},window.FileList=function(e){if(e){for(var t=0;e.length>t;t++)this[t]=e[t];this.length=e.length}else this.length=0},window.FileList.prototype={item:function(e){return e in this?this[e]:null}}})(),t.defineNodeNameProperty("input","files",{prop:{writeable:!1,get:function(){return"file"!=this.type?null:(e(this).is(".ws-filereader")||t.error("please add the 'ws-filereader' class to your input[type='file'] to implement files-property"),t.data(this,"fileList")||t.data(this,"fileList",new FileList))}}}),t.defineNodeNamesBooleanProperty("input","multiple"),e.fn.fileReader.defaults.filereader=t.cfg.basePath+"swf/filereader.swf";var r=["DOM"];t.modules["form-core"].loaded&&r.push("forms"),t.ready(r,function(){t.addReady(function(t){e('input[type="file"].ws-filereader',t).fileReader()})})});