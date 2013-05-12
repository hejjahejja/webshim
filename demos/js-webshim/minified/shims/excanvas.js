document.createElement("canvas").getContext||function(){function e(){return this.context_||(this.context_=new l(this))}function t(e,t){var n=x.call(arguments,2);return function(){return e.apply(t,n.concat(x.call(arguments)))}}function n(e){var t=e.srcElement;switch(e.propertyName){case"width":t.style.width=t.attributes.width.nodeValue+"px",t.getContext().clearRect();break;case"height":t.style.height=t.attributes.height.nodeValue+"px",t.getContext().clearRect()}}function r(e){var t=e.srcElement;t.firstChild&&(t.firstChild.style.width=t.clientWidth+"px",t.firstChild.style.height=t.clientHeight+"px")}function i(){return[[1,0,0],[0,1,0],[0,0,1]]}function a(e,t){for(var n=i(),r=0;3>r;r++)for(var a=0;3>a;a++){for(var o=0,s=0;3>s;s++)o+=e[r][s]*t[s][a];n[r][a]=o}return n}function o(e,t){t.fillStyle=e.fillStyle,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.lineWidth=e.lineWidth,t.miterLimit=e.miterLimit,t.shadowBlur=e.shadowBlur,t.shadowColor=e.shadowColor,t.shadowOffsetX=e.shadowOffsetX,t.shadowOffsetY=e.shadowOffsetY,t.strokeStyle=e.strokeStyle,t.globalAlpha=e.globalAlpha,t.arcScaleX_=e.arcScaleX_,t.arcScaleY_=e.arcScaleY_,t.lineScale_=e.lineScale_}function s(e){var t,n=1;if(e+="","rgb"==e.substring(0,3)){var r=e.indexOf("(",3),i=e.indexOf(")",r+1),a=e.substring(r+1,i).split(",");t="#";for(var o=0;3>o;o++)t+=A[Number(a[o])];4==a.length&&"a"==e.substr(3,1)&&(n=a[3])}else t=e;return{color:t,alpha:n}}function u(e){switch(e){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function l(e){this.m_=i(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*T,this.globalAlpha=1,this.canvas=e;var t=e.ownerDocument.createElement("div");t.style.width=e.clientWidth+"px",t.style.height=e.clientHeight+"px",t.style.overflow="hidden",t.style.position="absolute",e.appendChild(t),this.element_=t,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function c(e,t,n,r){e.currentPath_.push({type:"bezierCurveTo",cp1x:t.x,cp1y:t.y,cp2x:n.x,cp2y:n.y,x:r.x,y:r.y}),e.currentX_=r.x,e.currentY_=r.y}function p(e){for(var t=0;3>t;t++)for(var n=0;2>n;n++)if(!isFinite(e[t][n])||isNaN(e[t][n]))return!1;return!0}function d(e,t,n){if(p(t)&&(e.m_=t,n)){var r=t[0][0]*t[1][1]-t[0][1]*t[1][0];e.lineScale_=w(b(r))}}function f(e){this.type_=e,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function h(){}var m=Math,v=m.round,g=m.sin,y=m.cos,b=m.abs,w=m.sqrt,T=10,E=T/2,x=Array.prototype.slice,N={init:function(e){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var n=e||document;n.createElement("canvas"),n.attachEvent("onreadystatechange",t(this.init_,this,n))}},init_:function(e){if(e.namespaces.g_vml_||e.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),e.namespaces.g_o_||e.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),!e.styleSheets.ex_canvas_){var t=e.createStyleSheet();t.owningElement.id="ex_canvas_",t.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}for(var n=e.getElementsByTagName("canvas"),r=0;n.length>r;r++)this.initElement(n[r])},initElement:function(t){if(!t.getContext){t.getContext=e,t.innerHTML="",t.attachEvent("onpropertychange",n),t.attachEvent("onresize",r);var i=t.attributes;i.width&&i.width.specified?t.style.width=i.width.nodeValue+"px":t.width=t.clientWidth,i.height&&i.height.specified?t.style.height=i.height.nodeValue+"px":t.height=t.clientHeight}return t}};N.init();for(var A=[],k=0;16>k;k++)for(var C=0;16>C;C++)A[16*k+C]=k.toString(16)+C.toString(16);var _=l.prototype;_.clearRect=function(){this.element_.innerHTML=""},_.beginPath=function(){this.currentPath_=[]},_.moveTo=function(e,t){var n=this.getCoords_(e,t);this.currentPath_.push({type:"moveTo",x:n.x,y:n.y}),this.currentX_=n.x,this.currentY_=n.y},_.lineTo=function(e,t){var n=this.getCoords_(e,t);this.currentPath_.push({type:"lineTo",x:n.x,y:n.y}),this.currentX_=n.x,this.currentY_=n.y},_.bezierCurveTo=function(e,t,n,r,i,a){var o=this.getCoords_(i,a),s=this.getCoords_(e,t),u=this.getCoords_(n,r);c(this,s,u,o)},_.quadraticCurveTo=function(e,t,n,r){var i=this.getCoords_(e,t),a=this.getCoords_(n,r),o={x:this.currentX_+2/3*(i.x-this.currentX_),y:this.currentY_+2/3*(i.y-this.currentY_)},s={x:o.x+(a.x-this.currentX_)/3,y:o.y+(a.y-this.currentY_)/3};c(this,o,s,a)},_.arc=function(e,t,n,r,i,a){n*=T;var o=a?"at":"wa",s=e+y(r)*n-E,u=t+g(r)*n-E,l=e+y(i)*n-E,c=t+g(i)*n-E;s!=l||a||(s+=.125);var p=this.getCoords_(e,t),d=this.getCoords_(s,u),f=this.getCoords_(l,c);this.currentPath_.push({type:o,x:p.x,y:p.y,radius:n,xStart:d.x,yStart:d.y,xEnd:f.x,yEnd:f.y})},_.rect=function(e,t,n,r){this.moveTo(e,t),this.lineTo(e+n,t),this.lineTo(e+n,t+r),this.lineTo(e,t+r),this.closePath()},_.strokeRect=function(e,t,n,r){var i=this.currentPath_;this.beginPath(),this.moveTo(e,t),this.lineTo(e+n,t),this.lineTo(e+n,t+r),this.lineTo(e,t+r),this.closePath(),this.stroke(),this.currentPath_=i},_.fillRect=function(e,t,n,r){var i=this.currentPath_;this.beginPath(),this.moveTo(e,t),this.lineTo(e+n,t),this.lineTo(e+n,t+r),this.lineTo(e,t+r),this.closePath(),this.fill(),this.currentPath_=i},_.createLinearGradient=function(e,t,n,r){var i=new f("gradient");return i.x0_=e,i.y0_=t,i.x1_=n,i.y1_=r,i},_.createRadialGradient=function(e,t,n,r,i,a){var o=new f("gradientradial");return o.x0_=e,o.y0_=t,o.r0_=n,o.x1_=r,o.y1_=i,o.r1_=a,o},_.drawImage=function(e){var t,n,r,i,a,o,s,u,l=e.runtimeStyle.width,c=e.runtimeStyle.height;e.runtimeStyle.width="auto",e.runtimeStyle.height="auto";var p=e.width,d=e.height;if(e.runtimeStyle.width=l,e.runtimeStyle.height=c,3==arguments.length)t=arguments[1],n=arguments[2],a=o=0,s=r=p,u=i=d;else if(5==arguments.length)t=arguments[1],n=arguments[2],r=arguments[3],i=arguments[4],a=o=0,s=p,u=d;else{if(9!=arguments.length)throw Error("Invalid number of arguments");a=arguments[1],o=arguments[2],s=arguments[3],u=arguments[4],t=arguments[5],n=arguments[6],r=arguments[7],i=arguments[8]}var f=this.getCoords_(t,n),h=[],g=10,y=10;if(h.push(" <g_vml_:group",' coordsize="',T*g,",",T*y,'"',' coordorigin="0,0"',' style="width:',g,"px;height:",y,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]){var b=[];b.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",v(f.x/T),",","Dy=",v(f.y/T),"");var w=f,E=this.getCoords_(t+r,n),x=this.getCoords_(t,n+i),N=this.getCoords_(t+r,n+i);w.x=m.max(w.x,E.x,x.x,N.x),w.y=m.max(w.y,E.y,x.y,N.y),h.push("padding:0 ",v(w.x/T),"px ",v(w.y/T),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",b.join(""),", sizingmethod='clip');")}else h.push("top:",v(f.y/T),"px;left:",v(f.x/T),"px;");h.push(' ">','<g_vml_:image src="',e.src,'"',' style="width:',T*r,"px;"," height:",T*i,'px;"',' cropleft="',a/p,'"',' croptop="',o/d,'"',' cropright="',(p-a-s)/p,'"',' cropbottom="',(d-o-u)/d,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",h.join(""))},_.stroke=function(e){var t=[],n=s(e?this.fillStyle:this.strokeStyle),r=n.color,i=n.alpha*this.globalAlpha,a=10,o=10;t.push("<g_vml_:shape",' filled="',!!e,'"',' style="position:absolute;width:',a,"px;height:",o,'px;"',' coordorigin="0 0" coordsize="',T*a," ",T*o,'"',' stroked="',!e,'"',' path="');for(var l={x:null,y:null},c={x:null,y:null},p=0;this.currentPath_.length>p;p++){var d,f=this.currentPath_[p];switch(f.type){case"moveTo":d=f,t.push(" m ",v(f.x),",",v(f.y));break;case"lineTo":t.push(" l ",v(f.x),",",v(f.y));break;case"close":t.push(" x "),f=null;break;case"bezierCurveTo":t.push(" c ",v(f.cp1x),",",v(f.cp1y),",",v(f.cp2x),",",v(f.cp2y),",",v(f.x),",",v(f.y));break;case"at":case"wa":t.push(" ",f.type," ",v(f.x-this.arcScaleX_*f.radius),",",v(f.y-this.arcScaleY_*f.radius)," ",v(f.x+this.arcScaleX_*f.radius),",",v(f.y+this.arcScaleY_*f.radius)," ",v(f.xStart),",",v(f.yStart)," ",v(f.xEnd),",",v(f.yEnd))}f&&((null==l.x||f.x<l.x)&&(l.x=f.x),(null==c.x||f.x>c.x)&&(c.x=f.x),(null==l.y||f.y<l.y)&&(l.y=f.y),(null==c.y||f.y>c.y)&&(c.y=f.y))}if(t.push(' ">'),e)if("object"==typeof this.fillStyle){var h=this.fillStyle,g=0,y={x:0,y:0},b=0,w=1;if("gradient"==h.type_){var E=h.x0_/this.arcScaleX_,x=h.y0_/this.arcScaleY_,N=h.x1_/this.arcScaleX_,A=h.y1_/this.arcScaleY_,k=this.getCoords_(E,x),C=this.getCoords_(N,A),_=C.x-k.x,S=C.y-k.y;g=180*Math.atan2(_,S)/Math.PI,0>g&&(g+=360),1e-6>g&&(g=0)}else{var k=this.getCoords_(h.x0_,h.y0_),M=c.x-l.x,P=c.y-l.y;y={x:(k.x-l.x)/M,y:(k.y-l.y)/P},M/=this.arcScaleX_*T,P/=this.arcScaleY_*T;var D=m.max(M,P);b=2*h.r0_/D,w=2*h.r1_/D-b}var F=h.colors_;F.sort(function(e,t){return e.offset-t.offset});for(var O=F.length,j=F[0].color,I=F[O-1].color,L=F[0].alpha*this.globalAlpha,V=F[O-1].alpha*this.globalAlpha,W=[],p=0;O>p;p++){var z=F[p];W.push(z.offset*w+b+" "+z.color)}t.push('<g_vml_:fill type="',h.type_,'"',' method="none" focus="100%"',' color="',j,'"',' color2="',I,'"',' colors="',W.join(","),'"',' opacity="',V,'"',' g_o_:opacity2="',L,'"',' angle="',g,'"',' focusposition="',y.x,",",y.y,'" />')}else t.push('<g_vml_:fill color="',r,'" opacity="',i,'" />');else{var R=this.lineScale_*this.lineWidth;1>R&&(i*=R),t.push("<g_vml_:stroke",' opacity="',i,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',u(this.lineCap),'"',' weight="',R,'px"',' color="',r,'" />')}t.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",t.join(""))},_.fill=function(){this.stroke(!0)},_.closePath=function(){this.currentPath_.push({type:"close"})},_.getCoords_=function(e,t){var n=this.m_;return{x:T*(e*n[0][0]+t*n[1][0]+n[2][0])-E,y:T*(e*n[0][1]+t*n[1][1]+n[2][1])-E}},_.save=function(){var e={};o(this,e),this.aStack_.push(e),this.mStack_.push(this.m_),this.m_=a(i(),this.m_)},_.restore=function(){o(this.aStack_.pop(),this),this.m_=this.mStack_.pop()},_.translate=function(e,t){var n=[[1,0,0],[0,1,0],[e,t,1]];d(this,a(n,this.m_),!1)},_.rotate=function(e){var t=y(e),n=g(e),r=[[t,n,0],[-n,t,0],[0,0,1]];d(this,a(r,this.m_),!1)},_.scale=function(e,t){this.arcScaleX_*=e,this.arcScaleY_*=t;var n=[[e,0,0],[0,t,0],[0,0,1]];d(this,a(n,this.m_),!0)},_.transform=function(e,t,n,r,i,o){var s=[[e,t,0],[n,r,0],[i,o,1]];d(this,a(s,this.m_),!0)},_.setTransform=function(e,t,n,r,i,a){var o=[[e,t,0],[n,r,0],[i,a,1]];d(this,o,!0)},_.clip=function(){},_.arcTo=function(){},_.createPattern=function(){return new h},f.prototype.addColorStop=function(e,t){t=s(t),this.colors_.push({offset:e,color:t.color,alpha:t.alpha})},G_vmlCanvasManager=N,CanvasRenderingContext2D=l,CanvasGradient=f,CanvasPattern=h}();