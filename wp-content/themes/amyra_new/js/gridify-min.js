"use strict";YUI.add("images-loaded",function(e){var t=function(e,t){var i=this.all("img"),o=i.size();0==o&&t(),i.each(function(e){var i=new Image;i.onload=i.onerror=function(){o--,0==o&&t()},i.src=e.getAttribute("src")})};e.Node.addMethod("imagesLoaded",t),e.NodeList.importMethod(e.Node.prototype,"imagesLoaded")},"0.0.1",{requires:["node"]}),YUI.add("gridify",function(e){var t=function(t,i){var o=this,i=i||{},a=(i.transition||"all 0.5s ease")+", height 0, width 0",r=function(e){for(var t=0,i=1,o=e.length;o>i;i++)e[i]<e[t]&&(t=i);return t},d=function(){o.setStyle("position","relative");var e=o.all(i.srcNode),t=o.get("clientWidth"),d=parseInt(i.margin||0),n=parseInt(i.max_width||i.width||220),s=Math.max(Math.floor(t/(n+d)),1),h=1==s?d/2:t%(n+d)/2,l=[];i.max_width&&(s=Math.ceil(t/(n+d)),n=(t-s*d-d)/s,h=d/2);for(var c=0;s>c;c++)l.push(0);e.each(function(e){var t=r(l);e.setStyles({width:n,position:"absolute",margin:d/2,top:l[t]+d/2,left:(n+d)*t+h,transition:a}),l[t]+=e.get("clientHeight")+d})};if(o.imagesLoaded(d),i.resizable){var n=e.on("resize",d);o.on("destroy",n.detach,o)}};e.Node.addMethod("gridify",t),e.NodeList.importMethod(e.Node.prototype,"gridify")},"0.0.1",{requires:["node","images-loaded"]});