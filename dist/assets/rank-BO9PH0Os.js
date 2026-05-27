import"./tokens-g_pl08HU.js";const k=document.documentElement,u=localStorage.getItem("theme"),m=window.matchMedia("(prefers-color-scheme: dark)").matches;k.dataset.theme=u??(m?"dark":"light");const i=[{id:"me",nick:"erin",rank:12,grade:"gold",cur:5,longest:9,reward:220,isMe:!0},{id:"u1",nick:"Faker",rank:1,grade:"diamond",cur:21,longest:21,reward:980},{id:"u2",nick:"Chovy",rank:2,grade:"diamond",cur:18,longest:19,reward:820},{id:"u3",nick:"Zeus",rank:3,grade:"platinum",cur:16,longest:17,reward:660},{id:"u4",nick:"Keria",rank:4,grade:"platinum",cur:14,longest:15,reward:540},{id:"u5",nick:"Canyon",rank:5,grade:"platinum",cur:13,longest:14,reward:480},{id:"u6",nick:"Gumayusi",rank:6,grade:"gold",cur:11,longest:13,reward:360},{id:"u7",nick:"Peyz",rank:7,grade:"gold",cur:9,longest:11,reward:300},{id:"u8",nick:"Bdd",rank:8,grade:"gold",cur:8,longest:10,reward:280},{id:"u9",nick:"Oner",rank:9,grade:"gold",cur:7,longest:9,reward:240},{id:"u10",nick:"Deft",rank:10,grade:"gold",cur:6,longest:8,reward:220},{id:"u11",nick:"Doran",rank:11,grade:"gold",cur:6,longest:7,reward:220},{id:"u13",nick:"Kiin",rank:13,grade:"silver",cur:4,longest:7,reward:140},{id:"u14",nick:"Pyosik",rank:14,grade:"silver",cur:4,longest:6,reward:140},{id:"u15",nick:"Showmaker",rank:15,grade:"silver",cur:3,longest:6,reward:120},{id:"u16",nick:"Aiming",rank:16,grade:"silver",cur:3,longest:5,reward:120},{id:"u17",nick:"Lehends",rank:17,grade:"bronze",cur:2,longest:4,reward:60},{id:"u18",nick:"Beryl",rank:18,grade:"bronze",cur:1,longest:3,reward:60},{id:"u19",nick:"Teddy",rank:19,grade:"participant",cur:0,longest:2,reward:20},{id:"u20",nick:"Cuzz",rank:20,grade:"participant",cur:0,longest:1,reward:20}],p=[{key:"diamond",label:"Diamond",reward:800},{key:"platinum",label:"Platinum",reward:500},{key:"gold",label:"Gold",reward:250},{key:"silver",label:"Silver",reward:130},{key:"bronze",label:"Bronze",reward:60},{key:"participant",label:"Participant",reward:20}];function c(e){return e.slice(0,1).toUpperCase()}function v(){var r;const e=i.slice().sort((s,d)=>s.rank-d.rank).slice(0,5),n=((r=e[0])==null?void 0:r.longest)||1,a=document.getElementById("top5Card");a.innerHTML=e.map(s=>{const d=Math.max(8,s.longest/n*220);return`
      <div class="top5-bar" title="${s.nick}">
        <span class="streak">W${s.cur}</span>
        <div class="bar" style="height:${d}px"></div>
        <span class="nick">${s.nick}</span>
      </div>
    `}).join("")}function l(e,n=!1){return`
    <div class="${n?"my-rank":"row"}" data-id="${e.id}">
      <span class="rank-num">${e.rank}</span>
      <div class="avatar">${c(e.nick)}</div>
      <div class="row-info">
        <span class="nick">${e.nick}${n?" (나)":""}</span>
        <span class="grade ${e.grade}">${e.grade}</span>
      </div>
      <div class="row-stats">
        <span class="cur">W${e.cur}</span>
        <span class="meta">최장 ${e.longest}</span>
        <span class="reward">+${e.reward} E</span>
      </div>
    </div>
  `}function w(){const e=i.find(n=>n.isMe);document.getElementById("myRank").innerHTML=l(e,!0)}function y(){const e=i.filter(a=>!a.isMe&&a.rank>=6).sort((a,r)=>a.rank-r.rank),n=document.getElementById("gradeSections");n.innerHTML=p.map(a=>{const r=e.filter(d=>d.grade===a.key);if(r.length===0)return"";const s=r.map(d=>l(d)).join("");return`
      <div class="grade-section">
        <div class="grade-header">
          <span class="label">${a.label}</span>
          <span class="reward">+${a.reward} E</span>
        </div>
        ${s}
      </div>
    `}).join("")}function f(e){const n=i.find(r=>r.id===e);if(!n)return;const a=document.getElementById("detailSheet");a.innerHTML=`
    <div class="avatar-lg">${c(n.nick)}</div>
    <div class="nick-lg">${n.nick}</div>
    <span class="grade ${n.grade}">${n.grade}</span>
    <div class="stats-grid">
      <div class="stat"><span class="v">W${n.cur}</span><span class="l">현재</span></div>
      <div class="stat"><span class="v">${n.longest}</span><span class="l">최장</span></div>
      <div class="stat"><span class="v">+${n.reward}</span><span class="l">예상 E</span></div>
    </div>
    <button class="close-modal" id="closeDetailBtn">닫기</button>
  `,document.getElementById("detailScrim").classList.add("open"),document.getElementById("closeDetailBtn").addEventListener("click",o)}function o(){document.getElementById("detailScrim").classList.remove("open")}function E(){document.querySelectorAll("[data-id]").forEach(e=>{e.addEventListener("click",()=>f(e.dataset.id))})}function g(){v(),w(),y(),E()}document.getElementById("monthSelect").addEventListener("change",g);document.getElementById("detailScrim").addEventListener("click",e=>{e.target.id==="detailScrim"&&o()});const t=document.getElementById("infoScrim");document.getElementById("infoBtn").addEventListener("click",()=>t.classList.add("open"));document.getElementById("closeInfoBtn").addEventListener("click",()=>t.classList.remove("open"));t.addEventListener("click",e=>{e.target.id==="infoScrim"&&t.classList.remove("open")});g();
