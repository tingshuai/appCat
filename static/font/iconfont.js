(function(window){var svgSprite='<svg><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M952 896l-204.992-204.992q86.016-106.016 86.016-243.008 0-159.008-112.512-271.488T448.512 64t-272 112.512T64 448.512t112.512 272T448 833.024q136.992 0 242.016-84.992l204.992 204q12 12 28.512 12t28-11.488 11.488-28-11.008-28.512z m-381.984-160Q512 760.992 448 760.992q-63.008 0-120.992-24.992-56-23.008-100-66.016Q184 625.984 160 569.984q-24-58.016-24-122.016 0-63.008 24-120.992 24-56 67.008-99.008 44-44 100-68 58.016-24 120.992-24 64 0 122.016 24 56 24 99.488 67.488T736 326.944q24.992 58.016 24.992 122.016 0 63.008-24.992 120.992-23.008 56-66.016 100-44 43.008-100 66.016z"  ></path></symbol><symbol id="icon-jia" viewBox="0 0 1024 1024"><path d="M1024 460.8H563.2V0h-102.4v460.8H0v102.4h460.8V1024h102.4V563.2H1024z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)