(function(e,t,n){"use strict";var a,i,r=t.audio&&t.video,o=!1,s=n.bugs,u="mediaelement-jaris",l=function(){n.ready(u,function(){n.mediaelement.createSWF||(n.mediaelement.loadSwf=!0,n.reTest([u],r))})},c=n.cfg.mediaelement;if(!c)return n.error("mediaelement wasn't implemented but loaded"),void 0;if(r){var p=document.createElement("video");t.videoBuffered="buffered"in p,o="loop"in p,n.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(n.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),n.loader.loadList(["mediaelement-native-fix"]))}if(r&&!c.preferFlash){var d={1:1,2:1},f=function(t){var a,r;!c.preferFlash&&(e(t.target).is("audio, video")||(r=t.target.parentNode)&&e("source:last",r)[0]==t.target)&&(a=e(t.target).closest("audio, video"))&&!d[a.prop("error")]&&e(function(){i&&!c.preferFlash?(l(),n.ready("WINDOWLOAD "+u,function(){setTimeout(function(){c.preferFlash||!n.mediaelement.createSWF||a.is(".nonnative-api-active")||(c.preferFlash=!0,document.removeEventListener("error",f,!0),e("audio, video").each(function(){n.mediaelement.selectSource(this)}),n.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+a.prop("error")))},9)})):document.removeEventListener("error",f,!0)})};document.addEventListener("error",f,!0),e("audio, video").each(function(){var t=e.prop(this,"error");return t&&!d[t]?(f({target:this}),!1):void 0})}t.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof e("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(t){s.track=!0}}(),a=t.track&&!s.track,n.register("mediaelement-core",function(e,t,n,s,p){i=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(i?"swf":"no-swf");var d=t.mediaelement;d.parseRtmp=function(e){var n,a,i,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],n=1,a=o.length;a>n;n++)i||-1===o[n].indexOf(":")||(o[n]=o[n].split(":")[1],i=!0),i?e.streamId.push(o[n]):e.server+=o[n]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,n){t=e(t);var a,i={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return i.src?(a=t.attr("data-server"),null!=a&&(i.server=a),a=t.attr("type"),a?(i.type=a,i.container=e.trim(a.split(";")[0])):(n||(n=t[0].nodeName.toLowerCase(),"source"==n&&(n=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),i.server?(i.type=n+"/rtmp",i.container=n+"/rtmp"):(a=d.getTypeForSrc(i.src,n,i),a&&(i.type=a,i.container=a))),a=t.attr("media"),a&&(i.media=a),("audio/rtmp"==i.type||"video/rtmp"==i.type)&&(i.server?i.streamId=i.src:d.parseRtmp(i)),i):i},m=!i&&"postMessage"in n&&r,h=function(){h.loaded||(h.loaded=!0,t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},v=function(){var n;return function(){!n&&m&&(n=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){i?l():v()};t.addPolyfill("mediaelement-yt",{test:!m,d:["dom-support"]}),d.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},d.mimeTypes.source=e.extend({},d.mimeTypes.audio,d.mimeTypes.video),d.getTypeForSrc=function(t,n){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return n+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var a;return e.each(d.mimeTypes[n],function(e,n){return-1!==n.indexOf(t)?(a=e,!1):p}),a},d.srces=function(t,n){if(t=e(t),!n){n=[];var a=t[0].nodeName.toLowerCase(),i=f(t,a);return i.src?n.push(i):e("source",t).each(function(){i=f(this,a),i.src&&n.push(i)}),n}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(n)||(n=[n]),n.forEach(function(e){var n=s.createElement("source");"string"==typeof e&&(e={src:e}),n.setAttribute("src",e.src),e.type&&n.setAttribute("type",e.type),e.media&&n.setAttribute("media",e.media),t.append(n)})},e.fn.loadMediaSrc=function(t,n){return this.each(function(){n!==p&&(e(this).removeAttr("poster"),n&&e.attr(this,"poster",n)),d.srces(this,t),e(this).mediaLoad()})},d.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],d.canThirdPlaySrces=function(t,n){var a="";return(i||m)&&(t=e(t),n=n||d.srces(t),e.each(n,function(e,t){return t.container&&t.src&&(i&&-1!=d.swfMimeTypes.indexOf(t.container)||m&&"video/youtube"==t.container)?(a=t,!1):p})),a};var y={};d.canNativePlaySrces=function(t,n){var a="";if(r){t=e(t);var i=(t[0].nodeName||"").toLowerCase(),o=(y[i]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return a;n=n||d.srces(t),e.each(n,function(e,n){return n.type&&o.call(t[0],n.type)?(a=n,!1):p})}return a};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};d.setError=function(n,a){if(e("source",n).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(n).mediaLoad()}catch(i){}}else a||(a="can't play sources"),e(n).pause().data("mediaerror",a),t.error("mediaelementError: "+a),setTimeout(function(){e(n).data("mediaerror")&&e(n).trigger("mediaerror")},1)};var T=function(){var e;return function(n,a,r){t.ready(i?u:"mediaelement-yt",function(){d.createSWF?d.createSWF(n,a,r):e||(e=!0,g(),T(n,a,r))}),e||!m||d.createSWF||v()}}(),x=function(e,t,n,a,i){var r;n||n!==!1&&t&&"third"==t.isActive?(r=d.canThirdPlaySrces(e,a),r?T(e,r,t):i?d.setError(e,!1):x(e,t,!1,a,!0)):(r=d.canNativePlaySrces(e,a),r?t&&"third"==t.isActive&&d.setActive(e,"html5",t):i?(d.setError(e,!1),t&&"third"==t.isActive&&d.setActive(e,"html5",t)):x(e,t,!0,a,!0))},N=/^(?:embed|object|datalist)$/i,E=function(n,a){var i=t.data(n,"mediaelementBase")||t.data(n,"mediaelementBase",{}),r=d.srces(n),o=n.parentNode;clearTimeout(i.loadTimer),e.data(n,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!N.test(o.nodeName||"")&&(a=a||t.data(n,"mediaelement"),x(n,a,c.preferFlash||p,r))};d.selectSource=E,e(s).on("ended",function(n){var a=t.data(n.target,"mediaelement");(!o||a&&"html5"!=a.isActive||e.prop(n.target,"loop"))&&setTimeout(function(){!e.prop(n.target,"paused")&&e.prop(n.target,"loop")&&e(n.target).prop("currentTime",0).play()},1)}),t.ready("dom-support",function(){o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(n){var a=t.defineNodeNameProperty(n,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");E(this,e),!r||e&&"html5"!=e.isActive||!a.prop._supvalue||a.prop._supvalue.apply(this,arguments)}}});y[n]=t.defineNodeNameProperty(n,"canPlayType",{prop:{value:function(t){var a="";return r&&y[n].prop._supvalue&&(a=y[n].prop._supvalue.call(this,t),"no"==a&&(a="")),!a&&i&&(t=e.trim((t||"").split(";")[0]),-1!=d.swfMimeTypes.indexOf(t)&&(a="maybe")),a}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,n=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(n.loadTimer),n.loadTimer=setTimeout(function(){E(e),e=null},9)}})});var k=function(){var i=function(){if(t.implement(this,"mediaelement")&&(E(this),r)){var a,i,o=this,s=function(){var t=e.prop(o,"buffered");if(t){for(var n="",a=0,i=t.length;i>a;a++)n+=t.end(a);return n}},u=function(){var n=s();n!=i&&(i=n,t.info("needed to trigger progress manually"),e(o).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(i=s()),clearTimeout(a),a=setTimeout(u,999)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(i=!1),clearTimeout(a)}}),"ActiveXObject"in n&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}},o=!1;t.ready("dom-support",function(){o=!0,t.addReady(function(t,n){var a=e("video, audio",t).add(n.filter("video, audio")).each(i);!h.loaded&&e("track",a).length&&h(),a=null})}),r&&!o&&t.addReady(function(n,i){o||e("video, audio",n).add(i.filter("video, audio")).each(function(){return d.canNativePlaySrces(this)?(a&&!t.modules.track.options.override||h.loaded||!e("track",this).length||h(),p):(g(),o=!0,!1)})})};a&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(t.isReady("mediaelement-core",!0),k(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(u,k),t.ready("track",h)})})(jQuery,Modernizr,webshims);