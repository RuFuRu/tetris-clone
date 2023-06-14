(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(t){if(t.ep)return;t.ep=!0;const c=o(t);fetch(t.href,c)}})();const E="/tetris-clone/assets/sound_on-55a4f221.svg",A="/tetris-clone/assets/sound_off-e35a73bb.svg";var w;(e=>{function n(){const t=document.querySelector("#block_blue"),c=document.querySelector("#block_green"),l=document.querySelector("#block_orange"),u=document.querySelector("#block_pink"),I=document.querySelector("#block_purple"),L=document.querySelector("#block_red"),O=document.querySelector("#block_yellow");return[t,c,l,u,I,L,O][Math.floor(Math.random()*7)]}e.colorRandomizer=n;function o(){let t=0;const c=document.querySelector(".sound"),l=document.querySelector("#sound"),u=new Audio("https://upload.wikimedia.org/wikipedia/commons/e/e8/Korobeiniki.ogg");c.addEventListener("click",()=>{t%2===0?(t++,l.src=`${E}`,u.loop=!0,u.play()):(t++,l.src=`${A}`,u.pause())})}e.playMainTheme=o;function r(){const t=document.querySelector(".overlay"),c=document.querySelector(".popup"),l=document.querySelector(".close-popup-btn");if(localStorage.getItem("consent")==="yes"){u();return}function u(){t.classList.remove("active"),c.setAttribute("style","display: none !important")}l.addEventListener("click",()=>{localStorage.setItem("consent","yes"),u()})}e.popupLogic=r})(w||(w={}));const v=w,m=10,k=20,f=[[[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]],[[2,0,0],[2,0,0],[2,2,0]],[[0,0,3],[0,0,3],[0,3,3]],[[4,0,0],[4,4,0],[0,4,0]],[[0,0,5],[0,5,5],[0,5,0]],[[6,6,6],[0,6,0],[0,0,0]],[[7,7],[7,7]]],s={x:0,y:0,w:30,h:30},p=document.querySelector("#canvas"),d=p.getContext("2d"),P=document.querySelector(".restart");v.popupLogic();v.playMainTheme();let i=Math.floor(Math.random()*7),b=v.colorRandomizer();const a=M();let S=1e3,q=!1;d.canvas.width=m*s.w;d.canvas.height=k*s.h;d.scale(s.w,s.h);function M(){return Array.from({length:k},()=>Array(m).fill(0))}function x(e){e.forEach((n,o)=>{n.forEach((r,t)=>{r>0&&d.drawImage(b,t,o,1,1)})})}function h(e){f[e].map((n,o)=>{n.map((r,t)=>{r!==0&&d.drawImage(b,s.x+t,s.y+o,1,1)})})}function g(e){s.x+e.x+f[i][0].length>m?s.x=m-f[i][0].length:s.x+=e.x,s.y+=e.y}function y(e,n,o){for(let r=0;r<o.length;r++)for(let t=0;t<o[r].length;t++)if(o[r][t]!==0){const c=e.x+t,l=e.y+r;if(c<0||c>=m||l>=k||n[l][c]!==0)return!0}return!1}function R(e,n){for(let o=0;o<e.length;++o)for(let r=0;r<o;++r)[e[o][r],e[r][o]]=[e[r][o],e[o][r]];if(e.forEach(o=>o.reverse()),y({x:s.x,y:s.y},n,e))_(s,f[i],n);else return}function _(e,n,o){const r=[[0,0],[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1],[-2,0],[2,0],[0,-2],[0,2]];for(let t=0;t<r.length;t++){const[c,l]=r[t];if(e.x+=c,e.y+=l,!y(e,o,n))return[e.x,e.y];e.x-=c,e.y-=l}return null}function T(e,n,o,r){return e.forEach((t,c)=>{t.forEach((l,u)=>{l!==0&&(n[r+c][o+u]=l)})}),x(n),n}function $(){const e=document.querySelector(".level > p");setInterval(()=>{S-=100,e.textContent=`${parseInt(e.textContent)+1}`},3e4)}function z(){const e=document.querySelector("#seconds"),n=document.querySelector("#minutes"),o=setInterval(()=>{if(q){clearInterval(o);return}parseInt(e.textContent)<9?e.textContent=`0${parseInt(e.textContent)+1}`:e.textContent=`${parseInt(e.textContent)+1}`,parseInt(e.textContent)>=60&&(e.textContent="00",n.textContent=`${parseInt(n.textContent)+1}`)},1e3)}function B(e){return e===1?100:e===2?200:e===3?600:e===4?1e3:0}let C=0;function K(e){const n=document.querySelector(".score > p"),o=[];e.forEach((r,t)=>{r.every(c=>c>0)&&o.push(t)}),o.length>0&&(o.forEach(r=>{e.splice(r,1),e.unshift(new Array(e[0].length).fill(0))}),C+=B(o.length),n.textContent=`${C}`)}function D(){q=!0,document.querySelector(".gameover").setAttribute("style","display: block;")}function N(){h(i),$(),z();let e=Date.now();function n(){const o=Date.now();o-e>=S&&(e=o,y({x:s.x,y:s.y+1},a,f[i])?(T(f[i],a,s.x,s.y),K(a),s.y===0&&D(),s.x=0,s.y=0,i=Math.floor(Math.random()*7),b=v.colorRandomizer(),x(a),h(i)):(g({x:0,y:1}),d.clearRect(0,0,p.width,p.height),x(a),h(i))),q||requestAnimationFrame(n)}n()}N();document.addEventListener("keydown",e=>{let n=!1;switch(e.key){case"ArrowDown":y({x:s.x,y:s.y+1},a,f[i])||(g({x:0,y:1}),n=!0);break;case"ArrowLeft":y({x:s.x-1,y:s.y},a,f[i])||(g({x:-1,y:0}),n=!0);break;case"ArrowRight":y({x:s.x+1,y:s.y},a,f[i])||(g({x:1,y:0}),n=!0);break;case"ArrowUp":R(f[i],a),n=!0;break}n&&(d.clearRect(0,0,p.width,p.height),x(a),h(i))});document.addEventListener("keydown",e=>{switch(e.key){}});P.addEventListener("click",()=>{location.reload()});
