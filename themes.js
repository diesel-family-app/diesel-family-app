/* ============================================================================
   Diesel Family App — theme system (palettes, cursors, decorations)
   Shared by the app. applyTheme(key) reskins the whole interface.
   ============================================================================ */
const THEMES = {
  coastal:{name:"Coastal",tag:"sea & sand",decor:"sea",vars:{bg:"#eef3f6",surface:"#ffffff",surface2:"#f4f8fa",ink:"#13303a",muted:"#5b7682",line:"#dde7ec",accent:"#0e8c9e",accentInk:"#ffffff",accentSoft:"#d9f0f3",good:"#2fa37a",warn:"#e0912f",danger:"#d65745"}},
  coastalNight:{name:"Coastal Night",tag:"deep sea",decor:"sea",vars:{bg:"#0c1a20",surface:"#122730",surface2:"#16303a",ink:"#e6f1f3",muted:"#8fa8b0",line:"#223b44",accent:"#2bb7c9",accentInk:"#04242a",accentSoft:"#113038",good:"#3ecf8e",warn:"#ffb74d",danger:"#ff6b6b"}},
  roses:{name:"Pink & Roses",tag:"roses all around",decor:"roses",vars:{bg:"#fbf1f4",surface:"#fffafb",surface2:"#f8e7ec",ink:"#3d2230",muted:"#8a6472",line:"#f0d8e0",accent:"#d6486f",accentInk:"#ffffff",accentSoft:"#fadbe4",good:"#4f9a6f",warn:"#cf8f3a",danger:"#c74f5e"}},
  golden:{name:"Sun & Moon",tag:"light · stars everywhere",decor:"celestial",vars:{bg:"#eef3fb",surface:"#ffffff",surface2:"#f6f9ff",ink:"#273349",muted:"#6b7489",line:"#e3e9f3",accent:"#dca22b",accentInk:"#3a2a05",accentSoft:"#faeccb",good:"#3f9a7a",warn:"#dca22b",danger:"#d6615a"}},
  cats:{name:"Cats",tag:"cottage cats, bows & blooms",decor:"cats",vars:{bg:"#f5efe3",surface:"#fffdf7",surface2:"#f1ead9",ink:"#4a4238",muted:"#9a8f7e",line:"#e8dfcd",accent:"#7e9cc0",accentInk:"#ffffff",accentSoft:"#dce7f1",good:"#7faa86",warn:"#d8b45e",danger:"#cf7a6e"}},
  pictures:{name:"Pictures",tag:"your family photos flow by",decor:"pictures",vars:{bg:"#eef0f3",surface:"#ffffff",surface2:"#f4f6f8",ink:"#22262b",muted:"#6b7280",line:"#e2e6ea",accent:"#6366e4",accentInk:"#ffffff",accentSoft:"#e6e7fb",good:"#2fa37a",warn:"#e0912f",danger:"#d65745"}},
  ai:{name:"AI",tag:"flowing & bright",decor:"ai",vars:{bg:"#f7f9fd",surface:"#ffffff",surface2:"#eef2fb",ink:"#202533",muted:"#5f6782",line:"#e4e8f3",accent:"#5b6ef5",accentInk:"#ffffff",accentSoft:"#e4e7fd",good:"#34a853",warn:"#f9ab00",danger:"#ea4335"}},
  dragons:{name:"Dragons",tag:"wings, fire & embers",decor:"dragons",vars:{bg:"#141019",surface:"#1e1824",surface2:"#271f2e",ink:"#f1e7dc",muted:"#a8988c",line:"#352a3e",accent:"#e08a3c",accentInk:"#241002",accentSoft:"#2e2016",good:"#5fbf8f",warn:"#e0b84a",danger:"#e05a4a"}}
};
window.THEMES = THEMES;
window.DFA_galleryUrls = window.DFA_galleryUrls || [];

const SP='M12,0 C13,7 17,11 24,12 C17,13 13,17 12,24 C11,17 7,13 0,12 C7,11 11,7 12,0Z';
function _spark(pos,w,dur,del,c){return `<svg class="dec" style="${pos};width:${w}px;animation:twinkle ${dur}s ease-in-out ${del}s infinite" viewBox="0 0 24 24"><path d="${SP}" fill="${c}"/></svg>`;}

function decSea(){return `
  <svg class="dec" style="bottom:34px;left:0;width:230px;opacity:.16;animation:swim 46s linear infinite" viewBox="0 0 240 110"><path d="M28,55 L6,36 L15,55 L6,74 Z" fill="#2f6f7e"/><path d="M150,30 L166,10 L182,34 Z" fill="#2f6f7e"/><path d="M118,78 L132,100 L150,80 Z" fill="#2a6473"/><path d="M28,55 Q70,22 158,30 Q216,35 236,55 Q216,75 158,80 Q70,88 28,55 Z" fill="#357585"/><path d="M30,56 Q90,86 158,80 Q216,75 236,55 Q210,66 158,66 Q92,70 30,56 Z" fill="#cfe6ea"/><circle cx="214" cy="50" r="3.2" fill="#13303a"/><g fill="#bfe0e6"><circle cx="70" cy="46" r="3"/><circle cx="92" cy="40" r="3"/><circle cx="114" cy="44" r="3"/><circle cx="136" cy="40" r="3"/><circle cx="158" cy="46" r="3"/><circle cx="108" cy="60" r="3"/></g></svg>
  <svg class="dec" style="left:20px;bottom:96px;width:58px;opacity:.72;animation:sway 9s ease-in-out infinite" viewBox="0 0 60 60"><path d="M30,4 L36.5,21.1 L54.7,21.97 L36.47,33.4 L45.3,51 L30,41 L14.7,51 L23.5,33.4 L5.3,21.97 L23.5,21.1 Z" fill="#e2915a"/></svg>
  <svg class="dec" style="right:26px;top:150px;width:46px;opacity:.66;animation:sway 11s ease-in-out infinite reverse" viewBox="0 0 60 60"><path d="M30,4 L36.5,21.1 L54.7,21.97 L36.47,33.4 L45.3,51 L30,41 L14.7,51 L23.5,33.4 L5.3,21.97 L23.5,21.1 Z" fill="#e8b06a"/></svg>
  <svg class="dec" style="left:30px;top:210px;width:52px;opacity:.7;animation:rock 7s ease-in-out infinite" viewBox="0 0 60 54"><path d="M6,46 C6,16 54,16 54,46 Z" fill="#ecc89b"/><g stroke="#d7a86e" stroke-width="2" fill="none" stroke-linecap="round"><path d="M30,46 L30,18"/><path d="M30,46 L16,22"/><path d="M30,46 L44,22"/></g></svg>
  <span class="bub" style="left:46px;bottom:0;width:10px;height:10px;animation-duration:13s"></span><span class="bub" style="right:60px;bottom:0;width:9px;height:9px;animation-duration:14s;animation-delay:5s"></span>`;}

function _roseHead(size,main,soft){let p="";for(let a=0;a<360;a+=60)p+=`<ellipse cx="30" cy="13" rx="9" ry="14" fill="${soft}" transform="rotate(${a} 30 30)"/>`;for(let a=36;a<360;a+=72)p+=`<ellipse cx="30" cy="18" rx="6" ry="11" fill="${main}" opacity=".85" transform="rotate(${a} 30 30)"/>`;return `<svg viewBox="0 0 60 60" width="${size}" height="${size}"><g>${p}<circle cx="30" cy="30" r="8" fill="${main}"/><circle cx="30" cy="30" r="3.5" fill="${soft}"/></g></svg>`;}
function decRoses(v){const spots=[["left:10px;top:70px",66,0],["right:14px;top:84px",58,1.5],["left:26px;top:300px",50,3],["right:30px;top:330px",54,2.2],["left:16px;bottom:60px",62,1],["right:20px;bottom:84px",56,2.6],["left:40%;top:6px",44,0.6],["right:30%;bottom:18px",42,0.9]];let s="";spots.forEach((p,i)=>{const main=i%2?"#e76f9a":v.accent,soft=i%2?"#f7c5d6":v.accentSoft;s+=`<div class="dec" style="${p[0]};opacity:.8;animation:sway ${8+p[2]}s ease-in-out ${p[2]}s infinite">${_roseHead(p[1],main,soft)}</div>`;});return s;}

function decCelestial(v){let s=`<svg class="dec" style="left:28px;top:70px;width:72px;opacity:.85;animation:spin 80s linear infinite" viewBox="0 0 80 80"><circle cx="40" cy="40" r="17" fill="${v.accent}"/><g stroke="${v.accent}" stroke-width="3" stroke-linecap="round">`;for(let a=0;a<12;a++){const r=a*30*Math.PI/180;s+=`<line x1="${(40+Math.cos(r)*23).toFixed(1)}" y1="${(40+Math.sin(r)*23).toFixed(1)}" x2="${(40+Math.cos(r)*32).toFixed(1)}" y2="${(40+Math.sin(r)*32).toFixed(1)}"/>`;}s+=`</g></svg><svg class="dec" style="right:32px;top:62px;width:58px;opacity:.85;animation:bob 8s ease-in-out infinite" viewBox="0 0 60 60"><path d="M42,8 A24,24 0 1,0 42,52 A20,20 0 1,1 42,8 Z" fill="#e7c879"/></svg>`;
  const pos=["left:10%;top:120px","left:24%;top:70px","left:38%;top:140px","left:52%;top:90px","left:66%;top:150px","left:80%;top:100px","left:92%;top:170px","left:16%;top:240px","left:46%;top:250px","left:74%;top:270px","left:88%;top:330px","left:40%;top:400px","left:20%;top:470px","left:82%;top:460px"];
  pos.forEach((p,i)=>{s+=_spark(p,9+(i%3)*4,2.8+(i%4),(i*0.5)%4,"#e3ad3b");});return s;}

function decCats(v){
  const C={char:"#4e4e56",grey:"#9ea4ac",cream:"#e9dfcb",black:"#3c3c42"};
  function catSit(b,stripe){const st=stripe?`<g stroke="${stripe}" stroke-width="2.4" stroke-linecap="round"><line x1="28" y1="40" x2="28" y2="52"/><line x1="21" y1="44" x2="21" y2="53"/><line x1="35" y1="44" x2="35" y2="53"/></g>`:"";return `<svg viewBox="0 0 56 64"><path d="M12,60 C9,40 17,32 28,32 C39,32 47,40 44,60 Z" fill="${b}"/><path d="M44,58 C57,54 55,40 45,40 C50,47 47,54 38,56 Z" fill="${b}"/><circle cx="28" cy="24" r="15" fill="${b}"/><path d="M17,14 L14,3 L26,12 Z" fill="${b}"/><path d="M39,14 L42,3 L30,12 Z" fill="${b}"/>${st}<circle cx="22" cy="24" r="1.8" fill="#333"/><circle cx="34" cy="24" r="1.8" fill="#333"/><path d="M26,28 L30,28 L28,31 Z" fill="#c98a8a"/></svg>`;}
  function catCurl(b){return `<svg viewBox="0 0 70 46"><ellipse cx="35" cy="30" rx="30" ry="15" fill="${b}"/><circle cx="17" cy="26" r="11" fill="${b}"/><path d="M10,18 L8,8 L17,15 Z" fill="${b}"/><path d="M24,18 L26,8 L17,15 Z" fill="${b}"/><path d="M60,30 C70,24 66,40 56,35 Z" fill="${b}"/><path d="M11,26 q4,3 8,0" stroke="#555" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>`;}
  function catPlay(b){return `<svg viewBox="0 0 74 50"><ellipse cx="30" cy="32" rx="20" ry="13" fill="${b}"/><circle cx="16" cy="24" r="10" fill="${b}"/><path d="M10,17 L8,8 L17,14 Z" fill="${b}"/><path d="M22,17 L24,8 L16,14 Z" fill="${b}"/><path d="M42,24 l9,-7 M46,30 l11,-4 M44,36 l10,3" stroke="${b}" stroke-width="3" stroke-linecap="round"/><circle cx="63" cy="34" r="8" fill="#9db8d6"/></svg>`;}
  function flower(){return `<svg viewBox="0 0 34 56"><path d="M17,54 C15,38 19,22 17,8" stroke="#9bb08f" stroke-width="1.6" fill="none"/><path d="M11,40 q-7,-2 -9,-8 q8,0 9,8Z" fill="#aec29f"/><path d="M23,28 q7,-2 9,-8 q-8,0 -9,8Z" fill="#aec29f"/><g><circle cx="13" cy="12" r="2.2" fill="#8aa6c8"/><circle cx="19" cy="12" r="2.2" fill="#8aa6c8"/><circle cx="16" cy="9" r="2.2" fill="#8aa6c8"/><circle cx="16" cy="15" r="2.2" fill="#8aa6c8"/><circle cx="16" cy="12" r="1.5" fill="#f0d98a"/></g></svg>`;}
  function bow(){return `<svg viewBox="0 0 50 38"><path d="M25,19 L6,7 Q1,19 6,31 Z" fill="#a6c0dc"/><path d="M25,19 L44,7 Q49,19 44,31 Z" fill="#a6c0dc"/><path d="M25,21 L17,36" stroke="#a6c0dc" stroke-width="4" stroke-linecap="round"/><path d="M25,21 L33,36" stroke="#a6c0dc" stroke-width="4" stroke-linecap="round"/><circle cx="25" cy="19" r="4.5" fill="#8aa6c8"/></svg>`;}
  const P=[["left:2%;top:40px",58,()=>catCurl(C.char),"sway",10],["right:4%;top:70px",54,()=>catSit(C.grey,"#777d85"),"bob",7],["left:5%;top:230px",60,()=>catSit(C.char),"bob",8],["right:3%;top:250px",64,()=>catPlay(C.black),"sway",11],["left:3%;bottom:90px",62,()=>catSit(C.cream),"bob",7.5],["right:5%;bottom:70px",58,()=>catCurl(C.grey),"sway",9],["left:40%;top:14px",50,()=>catSit(C.black),"bob",8.5],["right:34%;bottom:20px",56,()=>catCurl(C.cream),"sway",10]];
  const F=[["left:14%;top:120px",30],["right:16%;top:150px",28],["left:22%;bottom:160px",30],["right:22%;top:330px",26],["left:31%;top:360px",28],["right:30%;bottom:120px",30],["left:46%;top:90px",26]];
  const B=[["left:10%;top:300px",36],["right:10%;top:200px",34],["left:28%;bottom:70px",32],["right:26%;bottom:200px",34]];
  const H=["left:18%;top:70px","right:20%;bottom:90px","left:36%;top:260px","right:38%;top:300px","left:8%;top:430px"];
  const S=["left:24%;top:180px","right:14%;top:280px","left:44%;bottom:160px","right:48%;top:150px","left:60%;top:70px","right:60%;bottom:60px"];
  let s="";
  P.forEach((p,i)=>{s+=`<div class="dec" style="${p[0]};width:${p[1]}px;opacity:.92;animation:${p[3]} ${p[4]}s ease-in-out ${i*0.4}s infinite">${p[2]()}</div>`;});
  F.forEach((p,i)=>{s+=`<div class="dec" style="${p[0]};width:${p[1]}px;opacity:.85;transform-origin:bottom center;animation:sway ${7+i%4}s ease-in-out ${i*0.3}s infinite">${flower()}</div>`;});
  B.forEach((p,i)=>{s+=`<div class="dec" style="${p[0]};width:${p[1]}px;opacity:.9;animation:sway ${6+i}s ease-in-out ${i*0.5}s infinite">${bow()}</div>`;});
  H.forEach((p,i)=>{s+=`<svg class="dec" style="${p};width:16px;opacity:.7;animation:twinkle ${3+i%3}s ease-in-out ${i*0.4}s infinite" viewBox="0 0 24 24"><path d="M12,21 C4,14 2,9 6,6 C9,4 12,7 12,9 C12,7 15,4 18,6 C22,9 20,14 12,21Z" fill="#9db8d6"/></svg>`;});
  S.forEach((p,i)=>{s+=_spark(p,10+(i%3)*3,2.6+(i%4)*.6,(i*.5)%4,"#e3cf8e");});
  return s;}

function decAI(v){const cols=["#4285F4","#EA4335","#FBBC05","#34A853","#5b6ef5","#ec4899"];
  const o=[["left:6%;top:12%",220],["right:8%;top:18%",180],["left:30%;top:48%",200],["right:24%;top:60%",160],["left:14%;bottom:8%",190]];
  let s="";o.forEach((p,i)=>{s+=`<span class="orb" style="${p[0]};width:${p[1]}px;height:${p[1]}px;background:radial-gradient(circle,${cols[i%cols.length]},transparent 68%);opacity:.5;animation:float ${16+i*2}s ease-in-out ${i}s infinite"></span>`;});
  const dots=["left:20%;top:30%","left:60%;top:24%","left:44%;top:56%","left:76%;top:46%","left:30%;top:70%","left:84%;top:66%"];
  dots.forEach((p,i)=>{s+=`<span class="dec" style="${p};width:7px;height:7px;border-radius:50%;background:${cols[i%cols.length]};opacity:.7;animation:drift ${6+i}s ease-in-out ${i}s infinite"></span>`;});return s;}

function decDragons(v){
  function dragon(c){return `<svg viewBox="0 0 170 110" width="100%"><path d="M8,82 Q40,72 62,58 Q82,46 98,44 Q112,42 122,36 Q116,46 104,52 Q90,58 76,60 Q56,66 38,78 Q22,88 8,82 Z" fill="${c}"/><path d="M70,52 Q86,8 124,4 Q106,22 112,42 Q96,34 88,44 Q80,40 70,52 Z" fill="${c}" opacity=".55"/><path d="M66,54 Q70,10 38,0 Q52,22 44,46 Q58,38 66,54 Z" fill="${c}"/><path d="M122,36 L142,30 L136,39 L146,39 L134,48 L120,45 Z" fill="${c}"/><path d="M133,30 L137,21 L141,31 Z" fill="${c}"/><circle cx="131" cy="38" r="1.6" fill="#ffcf6a"/></svg>`;}
  function flame(w,c){return `<svg viewBox="-16 0 32 46" width="${w}"><path d="M0,46 C-15,22 -7,10 -2,0 C-1,8 3,10 4,4 C9,16 13,28 0,46 Z" fill="${c}"/></svg>`;}
  const D=[["left:4%;top:60px",150,14,0],["right:6%;top:120px",120,17,2],["left:30%;top:300px",130,16,1],["right:28%;bottom:120px",110,15,3]];
  let s="";D.forEach((p,i)=>{s+=`<div class="dec" style="${p[0]};width:${p[1]}px;opacity:.88;animation:float ${p[2]}s ease-in-out ${p[3]}s infinite">${dragon(i%2?"#4a3b55":"#3c3047")}</div>`;});
  const fl=[["left:3%;bottom:24px",60,"#e0913a"],["right:4%;bottom:30px",52,"#e06a2a"],["left:46%;bottom:18px",44,"#e0b84a"]];
  fl.forEach((p,i)=>{s+=`<div class="dec" style="${p[0]};opacity:.8;transform-origin:bottom center;animation:bob ${4+i}s ease-in-out ${i*0.4}s infinite">${flame(p[1],p[2])}</div>`;});
  for(let i=0;i<12;i++){const x=(i*8+5)%96,dur=8+(i%5)*2,del=(i*1.1)%8,w=4+(i%3)*2,col=["#e0913a","#e0b84a","#e06a2a"][i%3];s+=`<span class="dec" style="left:${x}%;bottom:0;width:${w}px;height:${w}px;border-radius:50%;background:${col};box-shadow:0 0 8px ${col};opacity:.7;animation:rise ${dur}s linear ${del}s infinite"></span>`;}
  ["left:18%;top:90px","right:16%;top:150px","left:54%;top:70px","right:44%;top:200px","left:80%;top:260px"].forEach((p,i)=>{s+=_spark(p,10+(i%3)*3,2.6+(i%4)*.6,(i*.5)%4,"#e0b84a");});
  return s;}

function decPictures(v){const urls=window.DFA_galleryUrls||[];
  const slots=[["left:3%;top:10%",150,116],["right:5%;top:16%",140,106],["left:10%;bottom:10%",160,120],["right:12%;bottom:16%",132,100],["left:38%;top:46%",150,114],["left:72%;top:60%",126,96]];
  if(!urls.length){let s="";slots.slice(0,5).forEach((p,i)=>{s+=`<div class="dec photoframe" style="${p[0]};width:${p[1]}px;height:${p[2]}px;animation:float ${16+i*2}s ease-in-out ${i}s infinite;background:${v.accentSoft};display:flex;align-items:center;justify-content:center;color:${v.muted};font-size:11px;text-align:center">Add photos<br>in Gallery</div>`;});return s;}
  let s="";urls.slice(0,slots.length).forEach((u,i)=>{const sl=slots[i];s+=`<div class="dec photoframe" style="${sl[0]};width:${sl[1]}px;height:${sl[2]}px;background-image:url(${u});background-size:cover;background-position:center;animation:float ${15+i*2}s ease-in-out ${i*1.3}s infinite"></div>`;});return s;}

const BUILDERS={sea:decSea,roses:decRoses,celestial:decCelestial,cats:decCats,pictures:decPictures,ai:decAI,dragons:decDragons};
function renderDecor(key){const el=document.getElementById("decor");if(!el)return;const t=THEMES[key];el.innerHTML=BUILDERS[t.decor]?BUILDERS[t.decor](t.vars):"";}

/* cursor */
const _curStyle=document.createElement("style");document.head.appendChild(_curStyle);
function _starPath(a){return `<path d="M15 2 l3 9 l9 0 l-7 5 l3 9 l-8 -6 l-8 6 l3 -9 l-7 -5 l9 0 Z" fill="${a}" stroke="#fff" stroke-width="1"/>`;}
function cursorFor(t){const a=t.vars.accent,d=t.decor;const wrap=(i)=>`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">${i}</svg>`;
  if(d==="sea")return wrap(`<path d="M3 15 C8 8 18 8 22 15 C18 22 8 22 3 15Z" fill="${a}" stroke="#fff" stroke-width="1.5"/><path d="M22 15 l6 -5 v10 Z" fill="${a}" stroke="#fff" stroke-width="1.5"/><circle cx="9" cy="13" r="1.6" fill="#fff"/>`);
  if(d==="roses")return wrap(`<circle cx="15" cy="15" r="9" fill="${a}" stroke="#fff"/><circle cx="15" cy="15" r="5" fill="#fff" fill-opacity=".5"/><circle cx="15" cy="15" r="2.4" fill="#fff"/>`);
  if(d==="celestial"||d==="ai")return wrap(_starPath(a));
  if(d==="cats")return wrap(`<ellipse cx="15" cy="19" rx="7" ry="6" fill="${a}" stroke="#fff"/><circle cx="8" cy="11" r="2.6" fill="${a}" stroke="#fff"/><circle cx="15" cy="9" r="2.6" fill="${a}" stroke="#fff"/><circle cx="22" cy="11" r="2.6" fill="${a}" stroke="#fff"/>`);
  if(d==="pictures")return wrap(`<rect x="5" y="8" width="20" height="15" rx="2" fill="${a}" stroke="#fff"/><circle cx="11" cy="13" r="2" fill="#fff"/><path d="M7,22 L13,16 L17,20 L21,17 L23,22Z" fill="#fff"/>`);
  if(d==="dragons")return wrap(`<path d="M15 3 C11 10 12 16 15 21 C18 16 20 11 17 6 C17 12 15 13 15 9 C14 13 12 15 13 18 C10 13 15 9 15 3Z" fill="${a}" stroke="#fff"/>`);
  return "";}
function setCursor(t){const cs=cursorFor(t);if(!cs){_curStyle.textContent="";return;}const c=`url("data:image/svg+xml,${encodeURIComponent(cs)}") 4 4, auto`;_curStyle.textContent=`*{cursor:${c}}\na,button,input,textarea,label,select,.nav a,.btn,.tcard,.bell,.me{cursor:pointer}`;}

function applyTheme(key){if(!THEMES[key])key="coastal";const t=THEMES[key],r=document.documentElement.style;for(const k in t.vars)r.setProperty("--"+k,t.vars[k]);setCursor(t);renderDecor(key);}
window.applyTheme=applyTheme;
