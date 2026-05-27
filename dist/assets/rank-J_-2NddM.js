import"./tokens-g_pl08HU.js";const f=document.documentElement,E=localStorage.getItem("theme"),p=window.matchMedia("(prefers-color-scheme: dark)").matches;f.dataset.theme=E??(p?"dark":"light");const o="me",c=[{rank:1,name:"Faker",current:"W12",long:12},{rank:2,name:"Chovy",current:"W10",long:10},{rank:3,name:"Ruler",current:"W9",long:9},{rank:4,name:"Zeus",current:"W7",long:7},{rank:5,name:"Oner",current:"W6",long:6}],s=[{key:"diamond",name:"Diamond",reward:200,users:[{id:"u6",rank:6,name:"Canyon",current:5,long:8},{id:"u7",rank:7,name:"Keria",current:5,long:7}]},{key:"platinum",name:"Platinum",reward:120,users:[{id:"u8",rank:8,name:"Gumayusi",current:4,long:6},{id:o,rank:9,name:"erin",current:4,long:5},{id:"u10",rank:10,name:"Showmaker",current:3,long:5}]},{key:"gold",name:"Gold",reward:60,users:[{id:"u11",rank:11,name:"Deft",current:2,long:4},{id:"u12",rank:12,name:"BeryL",current:2,long:3}]}];function h(){for(const n of s){const e=n.users.find(t=>t.id===o);if(e)return{...e,grade:n.name,gradeKey:n.key,reward:n.reward}}return null}function m(n){return`g-${n}`}function l(){const n=document.getElementById("barGraph"),e=Math.max(...c.map(t=>t.long),1);n.innerHTML=c.map(t=>`
      <div class="bar-col">
        <div class="bar-fill" style="height: ${Math.max(t.long/e*100,4)}%;">
          <div class="bar-streak">${t.current}</div>
        </div>
        <div class="bar-name">${t.rank}. ${t.name}</div>
      </div>
    `).join("")}function u(n,e,t,a,k){const y=n.name.charAt(0).toUpperCase();return`
    <div class="rank-row${k?" me":""}" data-id="${n.id}" data-grade="${e}" data-reward="${a}">
      <div class="rank-num">${n.rank}</div>
      <div class="avatar">${y}</div>
      <div class="nick-block">
        <div class="nick">${n.name}</div>
        <div class="grade-badge ${m(e)}">${t}</div>
      </div>
      <div class="streak-block">
        <div class="streak-current">W${n.current}</div>
        <div class="streak-sub">최장 ${n.long} · +${a}E</div>
      </div>
    </div>
  `}function g(){const n=h(),e=document.getElementById("myRank");if(!n){e.innerHTML='<div class="rank-row"><div class="rank-num">-</div><div class="nick">랭킹 정보 없음</div></div>';return}e.innerHTML=u(n,n.gradeKey,n.grade,n.reward,!0)}function v(){const n=document.getElementById("gradeSections");n.innerHTML=s.map(e=>`
    <section class="grade-section">
      <div class="grade-header">
        <span class="name">${e.name}</span>
        <span class="reward">+${e.reward}E</span>
      </div>
      ${e.users.map(t=>u(t,e.key,e.name,e.reward,t.id===o)).join("")}
    </section>
  `).join("")}const r=document.getElementById("modal"),$=document.getElementById("mAvatar"),w=document.getElementById("mName"),i=document.getElementById("mGrade"),L=document.getElementById("mCurrent"),B=document.getElementById("mLong"),I=document.getElementById("mReward");function C(n){for(const e of s){const t=e.users.find(a=>a.id===n);if(t)return{...t,grade:e.name,gradeKey:e.key,reward:e.reward}}return null}function M(n){const e=C(n);e&&($.textContent=e.name.charAt(0).toUpperCase(),w.textContent=e.name,i.textContent=e.grade,i.className=`grade-badge ${m(e.gradeKey)}`,L.textContent=`W${e.current}`,B.textContent=e.long,I.textContent=`${e.reward}E`,r.classList.add("open"))}document.addEventListener("click",n=>{const e=n.target.closest(".rank-row");e&&!e.closest("#myRank")&&M(e.dataset.id)});document.getElementById("modalClose").addEventListener("click",()=>{r.classList.remove("open")});r.addEventListener("click",n=>{n.target===r&&r.classList.remove("open")});const d=document.getElementById("infoModal");document.getElementById("infoBtn").addEventListener("click",()=>{d.classList.add("open")});document.getElementById("infoClose").addEventListener("click",()=>{d.classList.remove("open")});d.addEventListener("click",n=>{n.target===d&&d.classList.remove("open")});document.getElementById("monthSelect").addEventListener("change",()=>{l(),g(),v()});l();g();v();
