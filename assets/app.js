var cursorLeft,cursorTop,projectPreviews,body=document.body,html=document.documentElement,wrapper=document.getElementsByClassName("wrapper")[0],windowWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),windowHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0),projects=document.getElementById("projects"),projectList=document.getElementById("projectList"),soundController=document.getElementById("soundController"),cursor=document.getElementById("cursor");
function preloadSounds(a){var o=document.createElement("audio");o.src="assets/sounds/"+a,o.load(),o.addEventListener("loadeddata",function(){})}for(var soundFileArray=["beer.mp3","dialing.mp3","low-power.mp3","mail.mp3","shutter.mp3","sms.mp3","sound-off.mp3","sound-on.mp3"],a=0;a<soundFileArray.length;a++)preloadSounds(soundFileArray[a]);
console.log("Design and development by Gabe Ferreira"),console.log("contact@gabeferreira.com");
var sheetUrl="https://spreadsheets.google.com/feeds/list/1JS0Ey7vEA1xPRZKu5uhAlHu1-EXRCJDa9hQa3xyEumc/1/public/values?alt=json";fetch(sheetUrl).then(function(e){return e.json()}).then(function(e){googleSheet=e.feed.entry;for(var t=0;t<googleSheet.length;t+=1){var s=document.createElement("div");s.className="project "+googleSheet[t].gsx$customclass.$t,s.id=googleSheet[t].gsx$customid.$t;var a=document.createElement("span");if(a.className="projectTitle",a.innerHTML=googleSheet[t].gsx$title.$t,s.appendChild(a),"Image"===googleSheet[t].gsx$mediatype.$t){var o=googleSheet[t].gsx$images.$t.split(","),n=document.createElement("div");if(n.className="imageContainer projectPreview",1<o.length){var i=document.createElement("span");i.className="imageCount",i.innerHTML="1 of "+o.length,a.appendChild(i),a.classList.add("multipleImages"),a.addEventListener("mouseenter",function(){cursor.classList.add("east")}),a.addEventListener("mouseleave",function(){cursor.classList.remove("east")}),a.addEventListener("click",function(){if(body.classList.contains("readyForClick")){var s,a=this.nextElementSibling.childNodes;a.forEach(function(e,t){e.classList.contains("showing")&&((s=t+1)>=a.length&&(s=0),e.classList.remove("showing"))}),a[s].classList.add("showing"),this.childNodes[1].innerHTML=s+1+" of "+a.length}})}for(var l=0;l<o.length;l++){var c=document.createElement("img");c.classList.add("image"),c.src="assets/img/projects/"+o[l],0===l&&c.classList.add("showing"),n.appendChild(c)}s.appendChild(n)}else if("Video"===googleSheet[t].gsx$mediatype.$t){var d=document.createElement("div");d.className="videoContainer projectPreview";var r=document.createElement("video");r.className="projectVideo",r.loop=!0,r.autoplay=!0,r.muted="muted",r.setAttribute("webkit-playsinline",""),r.setAttribute("playsinline","");var m=document.createElement("source");m.src="assets/img/projects/"+googleSheet[t].gsx$video.$t+".mp4",m.type="video/mp4";var g=document.createElement("source");g.src="assets/img/projects/"+googleSheet[t].gsx$video.$t+".webm",g.type="video/webm",r.appendChild(m),r.appendChild(g),r.load(),d.appendChild(r),s.appendChild(d)}projectList.appendChild(s)}}).then(function(){assignHoverStates(),projectPreviews=document.getElementsByClassName("projectPreview")}).catch(function(e){console.log(e)});
function updateCursorPosition(e){scrollTop=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,cursorLeft=e.pageX+"px",cursorTop=e.pageY-scrollTop+"px"}function updateThumbnailPosition(){var e=!0,t=!1,r=void 0;try{for(var o,n=projectPreviews[Symbol.iterator]();!(e=(o=n.next()).done);e=!0){var a=o.value;a.style.top=cursorTop,a.style.left=cursorLeft}}catch(e){t=!0,r=e}finally{try{e||null==n.return||n.return()}finally{if(t)throw r}}}function assignHoverStates(){var e=document.getElementsByClassName("projectTitle"),t=!0,r=!1,o=void 0;try{for(var n,a=e[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var s=n.value;s.addEventListener("mouseenter",function(e){e.target.parentElement.classList.add("opaque"),setTimeout(function(){body.classList.add("readyForClick")},25)}),s.addEventListener("mouseout",function(e){e.target.parentElement.classList.remove("opaque"),body.classList.remove("readyForClick")})}}catch(e){r=!0,o=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}}setTimeout(function(){body.classList.add("loaded")},500),window.addEventListener("touchstart",function(){body.classList.add("touchDevice")}),window.addEventListener("resize",function(){windowWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),windowHeight=Math.max(document.documentElement.clientHeight,window.innerHeight||0);var e=document.getElementsByClassName("expandablePanelContentContainer"),t=!0,r=!1,o=void 0;try{for(var n,a=e[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var s=n.value;s.classList.contains("openPanel")&&(s.style.height=s.firstElementChild.clientHeight+"px")}}catch(e){r=!0,o=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}}),document.addEventListener("mousemove",function(e){updateCursorPosition(e),cursor.style.left=cursorLeft,cursor.style.top=cursorTop});var expandableButtons=document.getElementsByClassName("expandablePanelTrigger"),_iteratorNormalCompletion4=!0,_didIteratorError4=!1,_iteratorError4=void 0;try{for(var _step4,_loop=function(){var f=_step4.value;f.addEventListener("mouseenter",function(){cursor.classList.add("south")}),f.addEventListener("mouseleave",function(){cursor.classList.remove("south")}),f.addEventListener("click",function(){if(f.parentElement.classList.contains("open")){f.parentElement.classList.remove("open"),body.classList.remove("openPanel"),f.nextElementSibling.style.height="0px",f.nextElementSibling.classList.remove("openPanel");var e=document.createElement("audio");e.src="assets/sounds/"+f.dataset.audioClose+".mp3",soundController.classList.contains("soundOn")&&e.play()}else{var t=document.getElementsByClassName("expandablePanel"),r=!0,o=!1,n=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){a.value.classList.remove("open")}}catch(e){o=!0,n=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw n}}var i=document.getElementsByClassName("expandablePanelContentContainer"),l=!0,d=!1,c=void 0;try{for(var u,m=i[Symbol.iterator]();!(l=(u=m.next()).done);l=!0){var p=u.value;p.style.height="0px",p.classList.remove("openPanel")}}catch(e){d=!0,c=e}finally{try{l||null==m.return||m.return()}finally{if(d)throw c}}f.parentElement.classList.add("open"),body.classList.add("openPanel"),f.nextElementSibling.style.height=f.nextElementSibling.firstElementChild.clientHeight+"px",f.nextElementSibling.classList.add("openPanel");var v=document.createElement("audio");v.src="assets/sounds/"+f.dataset.audioOpen+".mp3",soundController.classList.contains("soundOn")&&v.play()}})},_iterator4=expandableButtons[Symbol.iterator]();!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=!0)_loop()}catch(e){_didIteratorError4=!0,_iteratorError4=e}finally{try{_iteratorNormalCompletion4||null==_iterator4.return||_iterator4.return()}finally{if(_didIteratorError4)throw _iteratorError4}}var newPageLinks=document.getElementsByClassName("newPageLink"),_iteratorNormalCompletion5=!0,_didIteratorError5=!1,_iteratorError5=void 0;try{for(var _step5,_iterator5=newPageLinks[Symbol.iterator]();!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=!0){var item=_step5.value;item.addEventListener("mouseenter",function(){cursor.classList.add("northeast")}),item.addEventListener("mouseleave",function(){cursor.classList.remove("northeast")})}}catch(e){_didIteratorError5=!0,_iteratorError5=e}finally{try{_iteratorNormalCompletion5||null==_iterator5.return||_iterator5.return()}finally{if(_didIteratorError5)throw _iteratorError5}}soundController.addEventListener("click",function(){var e;this.classList.contains("soundOn")?(this.classList.remove("soundOn"),this.classList.add("soundOff"),(e=document.createElement("audio")).src="assets/sounds/sound-off.mp3",e.load(),e.play(),cursor.className="east"):(this.classList.remove("soundOff"),this.classList.add("soundOn"),(e=document.createElement("audio")).src="assets/sounds/sound-on.mp3",e.load(),e.play(),cursor.className="west")}),soundController.addEventListener("mouseenter",function(){this.classList.contains("soundOn")?cursor.classList.add("west"):cursor.classList.add("east")}),soundController.addEventListener("mouseleave",function(){cursor.classList.remove("east"),cursor.classList.remove("west")});