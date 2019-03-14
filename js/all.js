// build time:Thu Mar 14 2019 12:41:55 GMT+0800 (GMT+08:00)
$(function(){var t=$('<i class="fa fa-clipboard" aria-hidden="true"></i>');var e=$('<div class="copy-notice"></div>');$("figure.highlight").prepend(t);$("figure.highlight").prepend(e);function i(t,e){if(document.queryCommandSupported&&document.queryCommandSupported("copy")){try{document.execCommand("copy");$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.success).velocity({translateX:-30,opacity:1},{loop:1,duration:750,easing:"easeOutQuint"})}catch(i){$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.error).velocity({translateX:-30,opacity:1},{loop:1,duration:750,easing:"easeOutQuint"});return false}}else{$(e).prev(".copy-notice").text(GLOBAL_CONFIG.copy.noSupport)}}$(".highlight .fa-clipboard").on("click",function(){var t=window.getSelection();var e=document.createRange();e.selectNodeContents($(this).siblings("table").find(".code pre")[0]);t.removeAllRanges();t.addRange(e);var a=t.toString();i(a,this);t.removeAllRanges()})});$(function(){var t=$(".recent-post-item img");if(t.length===0){t=$("#post-content img")}for(var e=0;e<t.length;e++){var i=$('<a href="'+t[e].src+'" data-fancybox="group" data-caption="'+t[e].alt+'" class="fancybox"></a>');var a=t[e].alt;var o=$(t[e]).wrap(i);if(a){o.after('<div class="img-alt">'+a+"</div>")}}$().fancybox({selector:"[data-fancybox]",loop:true,transitionEffect:"slide",buttons:["share","slideShow","fullScreen","download","thumbs","close"]});var n=$(".gallery-item");var r=[];n.each(function(t,e){r.push({src:$(e).data("url"),opts:{caption:$(e).data("title")}})});n.on("click",function(){$.fancybox.open(r,{loop:true,transitionEffect:"slide"},n.index(this));return false})});var canvasEl=document.querySelector(".fireworks");if(canvasEl){var ctx=canvasEl.getContext("2d");var numberOfParticules=30;var pointerX=0;var pointerY=0;var tap="mousedown";var colors=["#FF1461","#18FF92","#5A87FF","#FBF38C"];var setCanvasSize=debounce(function(){canvasEl.width=window.innerWidth;canvasEl.height=window.innerHeight;canvasEl.style.width=window.innerWidth+"px";canvasEl.style.height=window.innerHeight+"px";canvasEl.getContext("2d").scale(1,1)},500);var render=anime({duration:Infinity,update:function(){ctx.clearRect(0,0,canvasEl.width,canvasEl.height)}});document.addEventListener(tap,function(t){if(t.target.id!=="sidebar"&&t.target.id!=="toggle-sidebar"&&t.target.nodeName!=="A"&&t.target.nodeName!=="IMG"){render.play();updateCoords(t);animateParticules(pointerX,pointerY)}},false);setCanvasSize();window.addEventListener("resize",setCanvasSize,false)}function updateCoords(t){pointerX=(t.clientX||t.touches[0].clientX)-canvasEl.getBoundingClientRect().left;pointerY=t.clientY||t.touches[0].clientY-canvasEl.getBoundingClientRect().top}function setParticuleDirection(t){var e=anime.random(0,360)*Math.PI/180;var i=anime.random(50,180);var a=[-1,1][anime.random(0,1)]*i;return{x:t.x+a*Math.cos(e),y:t.y+a*Math.sin(e)}}function createParticule(t,e){var i={};i.x=t;i.y=e;i.color=colors[anime.random(0,colors.length-1)];i.radius=anime.random(16,32);i.endPos=setParticuleDirection(i);i.draw=function(){ctx.beginPath();ctx.arc(i.x,i.y,i.radius,0,2*Math.PI,true);ctx.fillStyle=i.color;ctx.fill()};return i}function createCircle(t,e){var i={};i.x=t;i.y=e;i.color="#F00";i.radius=.1;i.alpha=.5;i.lineWidth=6;i.draw=function(){ctx.globalAlpha=i.alpha;ctx.beginPath();ctx.arc(i.x,i.y,i.radius,0,2*Math.PI,true);ctx.lineWidth=i.lineWidth;ctx.strokeStyle=i.color;ctx.stroke();ctx.globalAlpha=1};return i}function renderParticule(t){for(var e=0;e<t.animatables.length;e++){t.animatables[e].target.draw()}}function animateParticules(t,e){var i=createCircle(t,e);var a=[];for(var o=0;o<numberOfParticules;o++){a.push(createParticule(t,e))}anime.timeline().add({targets:a,x:function(t){return t.endPos.x},y:function(t){return t.endPos.y},radius:.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule}).add({targets:i,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule,offset:0})}$(function(){$(".toggle-menu").on("click",function(){if(!$(".menus").is(":visible")){$(".menus").velocity("stop").velocity("transition.slideDownIn",{duration:300})}else{$(".menus").velocity("stop").velocity("transition.slideUpOut",{duration:300})}});$(document).on("click",function(t){var e=$(".menus")[0].contains(t.target)||$(".toggle-menu")[0].contains(t.target);if(!e&&$(".toggle-menu").is(":visible")){$(".menus").velocity("stop").velocity("transition.slideUpOut",{duration:300})}});$(window).on("resize",function(t){if(!$(".toggle-menu").is(":visible")){if(!$(".menus").is(":visible")){$(".menus").velocity("stop").velocity("transition.slideDownIn",{duration:300})}}})});$(function(){var t=0;$(".toc-child").hide();$(window).scroll(throttle(function(t){var i=$(this).scrollTop();if(!isMobile()){o(i);r(i)}var a=e(i);if(i>56){if(a){$("#page-header").hasClass("visible")?$("#page-header").removeClass("visible"):console.log()}else{$("#page-header").hasClass("visible")?console.log():$("#page-header").addClass("visible")}$("#page-header").addClass("fixed");if($("#go-up").css("opacity")==="0"){$("#go-up").velocity("stop").velocity({translateX:-30,rotateZ:360,opacity:1},{easing:"easeOutQuart",duration:200})}}else{if(i===0){$("#page-header").removeClass("fixed").removeClass("visible")}$("#go-up").velocity("stop").velocity({translateX:0,rotateZ:180,opacity:0},{easing:"linear",duration:200})}},50,100));$("#go-up").on("click",function(){$("body").velocity("stop").velocity("scroll",{duration:500,easing:"easeOutQuart"})});$("#post-content").find("h1,h2,h3,h4,h5,h6").on("click",function(t){i("#"+$(this).attr("id"))});$(".toc-link").on("click",function(t){t.preventDefault();i($(this).attr("href"))});function e(e){var i=e>t;t=e;return i}function i(t){$(t).velocity("stop").velocity("scroll",{duration:500,easing:"easeInOutQuart"})}function a(t){if(t.is(":visible")){return}t.velocity("stop").velocity("transition.fadeIn",{duration:500,easing:"easeInQuart"})}function o(t){var e=$("#content-outer").height();var i=$(window).height();var a=e>i?e-i:$(document).height()-i;var o=t/a;var n=Math.round(o*100);var r=n>100?100:n;$(".progress-num").text(r);$(".sidebar-toc__progress-bar").velocity("stop").velocity({width:r+"%"},{duration:100,easing:"easeInOutQuart"})}function n(t){if(window.history.replaceState&&t!==window.location.hash){window.history.replaceState(undefined,undefined,t)}}function r(t){if($(".toc-link").length===0){return false}var e=$("#post-content").find("h1,h2,h3,h4,h5,h6");var i="";e.each(function(){var e=$(this);if(t>e.offset().top-25){i="#"+$(this).attr("id")}});if(i===""){$(".toc-link").removeClass("active");$(".toc-child").hide()}var o=$(".toc-link.active");if(i&&o.attr("href")!==i){n(i);$(".toc-link").removeClass("active");var r=$('.toc-link[href="'+i+'"]');r.addClass("active");var s=r.parents(".toc-child");var l=s.length>0?s.last():r;a(l.closest(".toc-item").find(".toc-child"));l.closest(".toc-item").siblings(".toc-item").find(".toc-child").hide()}}});$(function(){$(".toggle-sidebar-info > span").on("click",function(){var e=$(this).attr("data-toggle");$(this).attr("data-toggle",$(this).text());$(this).text(e);t()});$("#toggle-sidebar").on("click",function(){if(!isMobile()&&$("#sidebar").is(":visible")){var t=$(this).hasClass("on");t?$(this).removeClass("on"):$(this).addClass("on");if(t){$("#page-header").removeClass("open-sidebar");$("body").velocity("stop").velocity({paddingLeft:"0px"},{duration:200});$("#sidebar").velocity("stop").velocity({translateX:"0px"},{duration:200});$("#toggle-sidebar").velocity("stop").velocity({rotateZ:"0deg",color:"#1F2D3D"},{duration:200})}else{$("#page-header").addClass("open-sidebar");$("body").velocity("stop").velocity({paddingLeft:"300px"},{duration:200});$("#sidebar").velocity("stop").velocity({translateX:"300px"},{duration:200});$("#toggle-sidebar").velocity("stop").velocity({rotateZ:"180deg",color:"#99a9bf"},{duration:200})}}});function t(){if($(".author-info").is(":visible")){$(".author-info").velocity("stop").velocity("transition.slideLeftOut",{duration:300,complete:function(){$(".sidebar-toc").velocity("stop").velocity("transition.slideRightIn",{duration:500})}})}else{$(".sidebar-toc").velocity("stop").velocity("transition.slideRightOut",{duration:300,complete:function(){$(".author-info").velocity("stop").velocity("transition.slideLeftIn",{duration:500})}})}}});$(function(){$(".layout").velocity("stop").velocity("transition.slideUpIn",{delay:500,duration:1e3,easing:"easeInOutQuart",complete:function(){if($(".sidebar-toc").length>0){setTimeout(function(){$("#toggle-sidebar").click()},200)}}});$("#top-container").velocity("stop").velocity("transition.fadeIn",{delay:500,duration:1e3,easing:"easeInOutQuart"})});function debounce(t,e,i){var a;return function(){var o=this;var n=arguments;var r=function(){a=null;if(!i)t.apply(o,n)};var s=i&&!a;clearTimeout(a);a=setTimeout(r,e);if(s)t.apply(o,n)}}function throttle(t,e,i){var a;var o=new Date;return function(){var n=this;var r=arguments;var s=new Date;clearTimeout(a);if(s-o>=i){t.apply(n,r);o=s}else{a=setTimeout(t,e)}}}function isMobile(){var t=false;(function(e){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))t=true})(navigator.userAgent||navigator.vendor||window.opera);return t}window.debounce=debounce;window.throttle=throttle;window.isMobile=isMobile;$(function(){$("a.social-icon.search").on("click",function(){$("body").css("width","100%");$("body").css("overflow","hidden");$(".search-dialog").velocity("stop").velocity("transition.expandIn",{duration:300,complete:function(){$(".ais-search-box--input").focus()}});$(".search-mask").velocity("stop").velocity("transition.fadeIn",{duration:300});document.addEventListener("keydown",function e(i){if(i.code=="Escape"){t();document.removeEventListener("keydown",e)}})});var t=function(){$("body").css("overflow","auto");$(".search-dialog").velocity("stop").velocity("transition.expandOut",{duration:300});$(".search-mask").velocity("stop").velocity("transition.fadeOut",{duration:300})};$(".search-mask, .search-close-button").on("click",t);var e=GLOBAL_CONFIG.algolia;var i=e.appId&&e.apiKey&&e.indexName;if(!i){return console.error("Algolia setting is invalid!")}var a=instantsearch({appId:e.appId,apiKey:e.apiKey,indexName:e.indexName,searchParameters:{hitsPerPage:e.hits.per_page||10},searchFunction:function(t){var e=$("#algolia-search-input").find("input");if(e.val()){t.search()}}});a.addWidget(instantsearch.widgets.searchBox({container:"#algolia-search-input",reset:false,magnifier:false,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder}));a.addWidget(instantsearch.widgets.hits({container:"#algolia-hits",templates:{item:function(t){var e=t.permalink?t.permalink:GLOBAL_CONFIG.root+t.path;return'<a href="'+e+'" class="algolia-hit-item-link">'+t._highlightResult.title.value+"</a>"},empty:function(t){return'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,t.query)+"</div>"}},cssClasses:{item:"algolia-hit-item"}}));a.addWidget(instantsearch.widgets.stats({container:"#algolia-stats",templates:{body:function(t){var e=GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,t.nbHits).replace(/\$\{time}/,t.processingTimeMS);return"<hr>"+e+'<span class="algolia-logo pull-right">'+'  <img src="'+GLOBAL_CONFIG.root+'img/algolia.svg" alt="Algolia" />'+"</span>"}}}));a.addWidget(instantsearch.widgets.pagination({container:"#algolia-pagination",scrollTo:false,showFirstLast:false,labels:{first:'<i class="fa fa-angle-double-left"></i>',last:'<i class="fa fa-angle-double-right"></i>',previous:'<i class="fa fa-angle-left"></i>',next:'<i class="fa fa-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",active:"current",disabled:"disabled-item"}}));a.start()});
//rebuild by neat 