webshims.register("mediaelement-jaris",function(e,t,n,i,a,r){"use strict";var o=t.mediaelement,s=n.swfmini,u=Modernizr.audio&&Modernizr.video,l=s.hasFlashPlayerVersion("9.0.115"),c=0,d={paused:!0,ended:!1,currentSrc:"",duration:n.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),a):0},end:function(e){return e?(t.error("buffered index size error"),a):0},length:0}},p=Object.keys(d),f={currentTime:0,volume:1,muted:!1};Object.keys(f);var m=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:a,_calledMeta:!1,lastDuration:0},d,f),h=function(e){try{e.nodeName}catch(n){return null}var i=t.data(e,"mediaelement");return i&&"third"==i.isActive?i:null},v=function(t,n){n=e.Event(n),n.preventDefault(),e.event.trigger(n,a,t)},g=r.playerPath||t.cfg.basePath+"swf/"+(r.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(r.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(r.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(r.attrs,{bgcolor:"#000000"});var y=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,v(t._elem,"canplay"),t.paused||v(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){y(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,v(t._elem,"canplaythrough")),t.readyState=e};e.extend(e.event.customEvent,{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0}),o.jarisEvent={};var b,w={onPlayPause:function(e,t,n){var i,a;if(null==n)try{i=t.api.api_get("isPlaying")}catch(r){}else i=n;i==t.paused&&(t.paused=!i,a=t.paused?"pause":"play",t._ppFlag=!0,v(t._elem,a),3>t.readyState&&y(3,t),t.paused||v(t._elem,"playing"))},onNotBuffering:function(e,t){y(3,t)},onDataInitialized:function(e,t){var n,i=t.duration;t.duration=e.duration,i==t.duration||isNaN(t.duration)||t._calledMeta&&2>(n=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&y(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,v(t._elem,"durationchange")},n>50?0:n>9?9:99):(t.lastDuration=t.duration,t.duration&&v(t._elem,"durationchange"),t._calledMeta||v(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),y(1,t),v(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(y(3,t),v(t._elem,"playing")),v(t._elem,"timeupdate")},onProgress:function(t,n){if(n.ended&&(n.ended=!1),n.duration&&!isNaN(n.duration)){var i=t.loaded/t.total;i>.02&&.2>i?y(3,n):i>.2&&(i>.99&&(n.networkState=1),y(4,n)),n._bufferedEnd&&n._bufferedEnd>i&&(n._bufferedStart=n.currentTime||0),n._bufferedEnd=i,n.buffered.length=1,e.event.trigger("progress",a,n._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&y(4,t),t.ended=!0,v(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,v(t._elem,"volumechange"))},ready:function(){var n=function(e){var t=!0;try{e.api.api_get("volume")}catch(n){t=!1}return t};return function(i,r){var o=0,s=function(){return o>9?(r.tryedReframeing=0,a):(o++,r.tryedReframeing++,n(r)?(r.wasSwfReady=!0,r.tryedReframeing=0,x(r),T(r)):6>r.tryedReframeing?3>r.tryedReframeing?(r.reframeTimer=setTimeout(s,9),r.shadowElem.css({overflow:"visible"}),setTimeout(function(){r.shadowElem.css({overflow:"hidden"})},1)):(r.shadowElem.css({overflow:"hidden"}),e(r._elem).mediaLoad()):(clearTimeout(r.reframeTimer),t.error("reframing error")),a)};r&&r.api&&(r.tryedReframeing||(r.tryedReframeing=0),clearTimeout(b),clearTimeout(r.reframeTimer),r.shadowElem.removeClass("flashblocker-assumed"),o?r.reframeTimer=setTimeout(s,9):s())}}()};w.onMute=w.onVolumeChange;var T=function(e){var n,i=e.actionQueue.length,a=0;if(i&&"third"==e.isActive)for(;e.actionQueue.length&&i>a;){a++,n=e.actionQueue.shift();try{e.api[n.fn].apply(e.api,n.args)}catch(r){t.warn(r)}}e.actionQueue.length&&(e.actionQueue=[])},x=function(t){t&&((t._ppFlag===a&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===a||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(n){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},N=e.noop;if(u){var E={play:1,playing:1},A=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],k=A.map(function(e){return e+".webshimspolyfill"}).join(" "),S=function(n){var i=t.data(n.target,"mediaelement");if(i){var a=n.originalEvent&&n.originalEvent.type===n.type;a==("third"==i.activating)&&(n.stopImmediatePropagation(),E[n.type]&&i.isActive!=i.activating&&e(n.target).pause())}};N=function(n){e(n).off(k).on(k,S),A.forEach(function(e){t.moveToFirstEvent(n,e)})},N(i)}o.setActive=function(n,i,a){if(a||(a=t.data(n,"mediaelement")),a&&a.isActive!=i){"html5"!=i&&"third"!=i&&t.warn("wrong type for mediaelement activating: "+i);var r=t.data(n,"shadowData");a.activating=i,e(n).pause(),a.isActive=i,"third"==i?(r.shadowElement=r.shadowFocusElement=a.shadowElem[0],e(n).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(n).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),r.shadowElement=r.shadowFocusElement=!1),e(n).trigger("mediaelementapichange")}};var M=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(n){if(n){var i=t,a=n.networkState;for(y(0,n),clearTimeout(n._durationChangeTimer);--i>-1;)delete n[e[i]];n.actionQueue=[],n.buffered.length=0,a&&v(n._elem,"emptied")}}}(),C=function(t,n){var i=t._elem,a=t.shadowElem;e(i)[n?"addClass":"removeClass"]("webshims-controls"),"audio"!=t._elemNodeName||n?a.css({width:i.style.width||e(i).width(),height:i.style.height||e(i).height()}):a.css({width:0,height:0})},_=function(){var t={"":1,auto:1};return function(n){var i=e.attr(n,"preload");return null==i||"none"==i||e.prop(n,"autoplay")?!1:(i=e.prop(n,"preload"),!!(t[i]||"metadata"==i&&e(n).is(".preload-in-doubt, video:not([poster])")))}}(),D={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},P=function(e){return e.replace?e.replace(D.A,"%26").replace(D.a,"%26").replace(D.e,"%3D").replace(D.q,"%3F"):e};o.createSWF=function(n,i,d){if(!l)return setTimeout(function(){e(n).mediaLoad()},1),a;1>c?c=1:c++,d||(d=t.data(n,"mediaelement")),(e.attr(n,"height")||e.attr(n,"width"))&&t.warn("width or height content attributes used. Webshims only uses CSS (computed styles or inline styles) to detect size of a video/audio");var p,f="audio/rtmp"==i.type||"video/rtmp"==i.type,h=e.extend({},r.vars,{poster:P(e.attr(n,"poster")&&e.prop(n,"poster")||""),source:P(i.streamId||i.srcProp),server:P(i.server||"")}),v=e(n).data("vars")||{},y=e.prop(n,"controls"),T="jarisplayer-"+t.getID(n),x=e.extend({},r.params,e(n).data("params")),E=n.nodeName.toLowerCase(),A=e.extend({},r.attrs,{name:T,id:T},e(n).data("attrs")),k=function(){C(d,e.prop(n,"controls"))};d&&d.swfCreated?(o.setActive(n,"third",d),d.currentSrc=i.srcProp,d.shadowElem.html('<div id="'+T+'">'),d.api=!1,d.actionQueue=[],p=d.shadowElem,M(d)):(p=e('<div class="polyfill-'+E+' polyfill-mediaelement" id="wrapper-'+T+'"><div id="'+T+'"></div>').css({position:"relative",overflow:"hidden"}),d=t.data(n,"mediaelement",t.objectCreate(m,{actionQueue:{value:[]},shadowElem:{value:p},_elemNodeName:{value:E},_elem:{value:n},currentSrc:{value:i.srcProp},swfCreated:{value:!0},id:{value:T.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),a):0},end:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),a):(d.duration-d._bufferedStart)*d._bufferedEnd+d._bufferedStart},length:0}}})),C(d,y),p.insertBefore(n),u&&e.extend(d,{volume:e.prop(n,"volume"),muted:e.prop(n,"muted"),paused:e.prop(n,"paused")}),t.addShadowDom(n,p),N(n),o.setActive(n,"third",d),e(n).on({updatemediaelementdimensions:k}).onWSOff("updateshadowdom",k)),o.jarisEvent[d.id]||(o.jarisEvent[d.id]=function(e){if("ready"==e.type){var t=function(){d.api&&(_(n)&&d.api.api_preload(),w.ready(e,d))};d.api?t():setTimeout(t,9)}else d.currentTime=e.position,d.api&&(!d._calledMeta&&isNaN(e.duration)&&d.duration!=e.duration&&isNaN(d.duration)&&w.onDataInitialized(e,d),d._ppFlag||"onPlayPause"==e.type||w.onPlayPause(e,d),w[e.type]&&w[e.type](e,d)),d.duration=e.duration}),e.extend(h,{id:T,evtId:d.id,controls:""+y,autostart:"false",nodename:E},v),f?h.streamtype="rtmp":"audio/mpeg"==i.type||"audio/mp3"==i.type?(h.type="audio",h.streamtype="file"):"video/youtube"==i.type&&(h.streamtype="youtube"),r.changeSWF(h,n,i,d,"embed"),clearTimeout(d.flashBlock),s.embedSWF(g,T,"100%","100%","9.0.115",!1,h,x,A,function(i){i.success&&(d.api=i.ref,y||e(i.ref).attr("tabindex","-1").css("outline","none"),d.flashBlock=setTimeout(function(){(!i.ref.parentNode&&p[0].parentNode||"none"==i.ref.style.display)&&(p.addClass("flashblocker-assumed"),e(n).trigger("flashblocker"),t.warn("flashblocker assumed")),e(i.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),b||(clearTimeout(b),b=setTimeout(function(){var n=e(i.ref);n[0].offsetWidth>1&&n[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>n[0].offsetWidth||2>n[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),n=null},8e3)))})};var F=function(e,t,n,i){return i=i||h(e),i?(i.api&&i.api[t]?i.api[t].apply(i.api,n||[]):(i.actionQueue.push({fn:t,args:n}),i.actionQueue.length>10&&setTimeout(function(){i.actionQueue.length>5&&i.actionQueue.shift()},99)),i):!1};if(["audio","video"].forEach(function(n){var i,a={},r=function(e){("audio"!=n||"videoHeight"!=e&&"videoWidth"!=e)&&(a[e]={get:function(){var t=h(this);return t?t[e]:u&&i[e].prop._supget?i[e].prop._supget.apply(this):m[e]},writeable:!1})},o=function(e,t){r(e),delete a[e].writeable,a[e].set=t};o("volume",function(e){var n=h(this);if(n)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),F(this,"api_volume",[e],n),n.volume!=e&&(n.volume=e,v(n._elem,"volumechange")),n=null);else if(i.volume.prop._supset)return i.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=h(this);if(t)e=!!e,F(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,v(t._elem,"volumechange")),t=null;else if(i.muted.prop._supset)return i.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=h(this);if(t)e*=1,isNaN(e)||F(this,"api_seek",[e],t);else if(i.currentTime.prop._supset)return i.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){a[e]={value:function(){var t=h(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),F(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,v(t._elem,e));else if(i[e].prop._supvalue)return i[e].prop._supvalue.apply(this,arguments)}}}),p.forEach(r),t.onNodeNamesPropertyModify(n,"controls",function(t,i){var a=h(this);e(this)[i?"addClass":"removeClass"]("webshims-controls"),a&&("audio"==n&&C(a,i),F(this,"api_controls",[i],a))}),t.onNodeNamesPropertyModify(n,"preload",function(){var e=h(this);e&&_(this)&&F(this,"api_preload",[],e)}),i=t.defineNodeNameProperties(n,a,"prop")}),l&&e.cleanData){var O=e.cleanData,j={object:1,OBJECT:1};e.cleanData=function(e){var t,n;if(e&&(n=e.length)&&c)for(t=0;n>t;t++)if(j[e[t].nodeName]&&"api_pause"in e[t]){c--;try{e[t].api_pause()}catch(i){}}return O.apply(this,arguments)}}u||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});