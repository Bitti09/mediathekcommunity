/**
 * Copyright (c) 2023 The Nuevodevel Team. All rights reserved.
 * Vroll plugin for video.js
 * Version 1.4.0
 */
/* eslint-disable */import videojs from"video.js";function vrollInit(e,t,i){var r=null;if(i)if(i.trackUrl)r=i.trackUrl;var n,o=[],l=!1,s=!1,a=!1,f=!1,d=!1,c=!1,u=!1,v=!1,p="undefined",m=-1,h=0,y=0,g=e.$(".vjs-tech");videojs.isAd=!1;var j,k=videojs.dom,b=e.el(),T=.1,C=videojs.browser,S=null,A=null,_=[],x=null,I=null,O=null;videojs.vrollplugin=!0;function P(e){return e}function q(e){return"[object Array]"===Object.prototype.toString.call(e)}var N=function(e,t){var i=document.createElement(e);if(void 0!==t)if(""!==t)i.className=t;return i},E=function(t){return e.localize(t)};function M(){if(e.duration()===1/0)return!0;else if("8"===C.IOS_VERSION&&0===e.duration())return!0;return!1}var w=!0;if(!q(t)){var H=t;if(H.src)if(H.src.length>5){if(H.offset){if(H.offset.indexOf("%")>-1)if(M())w=!1}else H.offset=0;if(w)(t=[])[0]=H}}if(q(t))for(var L=0,B=0;B<t.length;B++){var F=t[B];if(F.src&&"undefined"!==F.offset){F.loaded=!1;L=0;try{L=o[B].offset.indexOf("%")}catch(e){P(e)}if(L>0&&M())L=1;else o.push(F)}}function Q(){if(e.el_.className.indexOf("vjs-casting")>0)return!0;else return!1}e.ready(function(){I=e.el_.querySelector(".vjs-loading-spinner");var t=e.el_.querySelector(".vjs-big-play-button");A=e.el_.querySelector(".vjs-replay-button");if(o.length>0){n=N("a","vast-blocker vjs-hidden");e.el_.appendChild(n);var i=function(e){var t=e.el().querySelector(".vjs-tech"),i={ended:e.ended(),src:e.currentSrc(),currentTime:e.currentTime(),type:e.currentType(),currentSource:e.currentSource(),playing:!e.paused(),suppressedTracks:C(e)};if(i.ended)i.currentTime=e.duration();if(t)i.style=t.getAttribute("style");return i},C=function(e){var t=e.remoteTextTracks?e.remoteTextTracks():[];if(t&&q(t.tracks_))t=t.tracks_;if(!q(t))t=[];var i=[];t.forEach(function(e){i.push({track:e,mode:e.mode});e.mode="disabled"});return i},w=function(){O.suppressedTracks.forEach(function(e){e.track.mode=e.mode})},H=function(e){var t=e.el().querySelector(".vjs-tech");if("style"in O)t.setAttribute("style",O.style||"");e.one("contentloadedmetadata",w);var i=function(){if(M())L();else{L();e.currentTime(O.currentTime)}};t.poster="";e.src(O.currentSource);e.load();w();i()},L=function(){var t=e.play();if(void 0!==t)t.then(function(){}).catch(function(){e.muted(!0);e.play()})};e.vroll.reset=function(){c=!1;f=!1;k.removeClass(b,"vjs-ad-playing");e.one("playing",function(){for(var e=0;e<o.length;e++)o[e].loaded=!1})};for(var B=0;B<o.length;B++)if(!o[B].offset)o[B].offset=0;if(0===parseInt(o[0].offset,10))if(e.offline)e.isPreroll=!1;else{e.isPreroll=!0;if(!0!==v){v=!0;y=e.volume()}e.one("play",function(){if(e.isPreroll){var t=e.el_.querySelector(".vjs-poster");S=N("div","vjs-black-poster");b.insertBefore(S,t.nextSibling);e.isPreroll=!1}})}e.on("loadedmetadata",function(){if(!e.isOffline){if(!c){c=!0;if(!0!==s)var C=e.duration();if(o.length>0&&!0!==d){d=!0;for(var q=0;q<o.length;q++){o[q].method="";if(!s){var w=0;try{w=o[q].offset.indexOf("%",0)}catch(e){P(e)}if(w>0){var L=parseInt(o[q].offset,10);if(100===L||"end"===o[q].offset){o[q].method="postroll";o[q].offset="end";_.push(o[q])}else o[q].offset=C*(L/100)}else o[q].offset=parseInt(o[q].offset,10)}}}var B;if(o.length>0){e.on("timeupdate",B);function B(){if(o[o.length-1].loaded)e.off("timeupdate",B);var t=videojs.dom.hasClass(b,"vjs-has-started"),i=M();if(t&&!0!==a&&!0!==e.isOffline&&!0!==i)G(e.currentTime())}var F=function(){if(a){clearTimeout(h);u=!1}else{G(T+=.5);h=setTimeout(F,500)}};if(M()){e.on("pause",function(){clearTimeout(h);u=!1});e.on("playing",function(){if(videojs.dom.hasClass(b,"vjs-has-started")&&!0!==l&&o.length>0&&!0!==e.isOffline&&!0!==u){u=!0;h=setTimeout(F,500)}})}var U=function(){k.addClass(A,"vjs-hidden")},z=function(t){if(!l){if(null!==_){if(!O)O=i(e);I.setAttribute("style","display:none !important");for(var r=0;r<_.length;r++)if(!0!==_[r].loaded){e.trigger("vroll",{id:p.id,action:"completed"});te("completed");if(!O)O=i(e);D();return}}e.trigger("vroll",{id:p.id,action:"completed"});te("completed");R(!0);e.off("ended",z);setTimeout(function(){k.removeClass(A,"vjs-hidden")},500);check_playlist()}else{e.trigger("vroll",{id:p.id,action:"completed"});te("completed");W()}};check_playlist=function(){if(e.playlist)if(e.playlist.length>0){e.pause();e.playlist.next(!0)}};e.on("ended",z);e.one("play",U);var D=function(){for(var t=0;t<_.length;t++)if(!0!==_[t].loaded){V(_[t]);return}R();H(e,O)};function R(t){e.off("timeupdate",oe);e.off("error",ne);n.className="vjs-blocker vjs-hidden";if(t){_=null;ie(".vast-blocker")}l=!1;f=!1;a=!1;ie(".vast-skip-button");setTimeout(function(){I.removeAttribute("style")},500);k.addClass(b,"vjs-has-started");g.poster="";k.removeClass(b,"vjs-ad-playing");videojs.isAd=!1}var V=function(t){t.loaded=!0;p=t;a=!0;videojs.isAd=!0;k.addClass(b,"vjs-ad-playing");f=!0;e.on("error",ne);var i={src:t.src,type:t.type};e.src(i);I.setAttribute("style","display:none !important");e.play();e.one("play",function(){le()})},$=function(t,r){l=!0;t.loaded=!0;if(!Q()){p=t;f=!0;var n={src:t.src,type:t.type};if(!O)O=i(e);I.setAttribute("style","display:none !important");e.one("error",ne);e.src(n);e.currentTime(0);if(!e.paused()){le();var o=e.play();if(void 0!==o)o.then(function(){}).catch(function(e){})}else{var s=!1;if(e.el_.className.indexOf("vjs-has-started")>0)s=!0;if(e.ended()||s)e.play();if(e.ended())e.play();e.one("play",function(){le()})}}};if(e.isPreroll){if(!0!==v){v=!0;y=e.volume();e.volume(0)}if(!0!==M())$(o[0])}var G=function(t){if(!l&&!a){var i=t;if(i>0)e.el_.querySelector(".vjs-poster").removeAttribute("style");for(var r=0;r<o.length;r++){var n=o[r];if(i>=n.offset)if(!0!==l&&!0!==o[r].loaded){videojs.log.level("off");if(!0!==Q())$(n);else o[r].loaded=!0}}}};n.onclick=function(){e.trigger("vroll",{id:p.id,action:"clicked"});te("click")};e.on("chromecastConnected",function(){J()});function J(){if(e.isPreroll){o[0].cancelled=!0;ie(".vast-skip-button");x=null;m=-1;e.off("play",le);o[0].loaded=!0;e.isPreroll=!1;k.addClass(b,"vjs-has-started");k.removeClass(b,"vjs-ad-playing");e.off("timeupdate",oe);e.off("error",ne);H(e,O);O=null}}var K=function(){return e.paused()};function W(){ie(".vast-skip-button");x=null;m=-1;var t=p.offset;p.loaded=!0;e.isPreroll=!1;var i=!1;k.addClass(b,"vjs-has-started");for(var r=0;r<o.length;r++){if(o[r].offset===t&&!0!==o[r].loaded){e.off("timeupdate",oe);e.off("error",ne);l=!0;a=!0;o[r].loaded=!0;videojs.isAd=!0;k.addClass(b,"vjs-ad-playing");f=!0;$(o[r],!0);i=!0}if(i)break}if(!0!==i){var n=!0;for(r=0;r<o.length;r++)if(!0!==o[r].loaded)n=!1;e.off("timeupdate",oe);e.off("error",ne);R(n);H(e,O);O=null}}var X,Y,Z=!1;function ee(t){t=e.currentTime();var i=e.duration();if(i>0){var r=((i=i.toFixed(0))/4).toFixed(0);if(t>r&&!0!==X){te("fistQuartile");X=!0}if(t>2*r&&!0!==Y){te("midpoint");Y=!0}if(t>3*r&&!0!==Z){te("thirdQuartile");Z=!0}if(m>-1){var n=Math.ceil(m-t);k.removeClass(x,"vjs-hidden");if(n>0){var o=E("Skip Ad in %%TIME%%");x.innerHTML="";N("p","vast-skip-button-text");x.appendChild(j);j.innerHTML=o.replace("%%TIME%%",n)}else{x.className="vast-skip-button enabled";x.innerHTML=E("Skip Ad")}}}}function te(e,t){if(r){var i=new Image,n="?event="+e;if(p.id)n=n+"&id="+p.id;i.src=r+n}}function ie(t){var i=e.el_.querySelectorAll(t);if(i)for(var r=0;r<i.length;r++)i[r].parentNode.removeChild(i[r])}function re(){ie(".vast-skip-button");(x=N("div","vast-skip-button vjs-hidden")).id="adSkipButton";x.ariaDisabled="false";x.tabIndex="0";j=N("p","vast-skip-button-text");x.appendChild(j);e.el_.appendChild(x);x.onclick=function(e){t(e)};function t(t){t.stopPropagation();if((" "+x.className+" ").indexOf(" enabled ")>=0){e.trigger("vroll",{id:p.id,action:"skipped"});te("skipped");if("postroll"===p.method)D();else W()}}}function ne(){if(l){e.trigger("vroll",{id:p.id,action:"error"});te("error");if("postroll"===p.method)D();else W();f=!1}}function oe(){if(!K())ee(e.currentTime(),e.duration())}function le(){if(!Q())if(!p.cancelled){e.currentTime(0);e.on("timeupdate",oe);if(p.offset>0)k.addClass(t,"vjs-hidden");if(p.skip>=0)m=parseInt(p.skip,10);else m=-1;if(m>-1)re();k.addClass(b,"vjs-ad-playing");k.addClass(t,"vjs-hidden");if(S){b.removeChild(S);S=null;e.volume(y)}e.el_.querySelector(".vjs-poster").removeAttribute("style");n.className="vast-blocker";if(void 0!==p.href){n.removeAttribute("style");n.href=p.href;n.target="_blank"}else n.style.pointerEvents="none";a=!0;if(f){e.trigger("vroll",{id:p.id,action:"start"});te("adstart");f=!1}}}}}}else c=!1})}})}var vroll=function(e){this.ready(function(){vrollInit(this,e)})};if("undefined"!=typeof window)videojs.registerPlugin("vroll",vroll);export default vroll;
