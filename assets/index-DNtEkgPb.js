(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=e(r);fetch(r.href,l)}})();const $=t=>({render:()=>`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="${t.profileImage}" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">${t.author}</p>
          <p class="text-sm text-gray-500">${t.createdAt}</p>
        </div>
      </div>
      <p>${t.content}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
  `,onRendered:null}),C=[{id:1,author:"홍길동",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",createdAt:"5분 전",profileImage:"https://placehold.co/40"},{id:2,author:"김철수",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",createdAt:"15분 전",profileImage:"https://placehold.co/40"},{id:3,author:"이영희",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",createdAt:"30분 전",profileImage:"https://placehold.co/40"},{id:4,author:"박민수",content:"주말에 등산 가실 분 계신가요? 함께 가요!",createdAt:"1시간 전",profileImage:"https://placehold.co/40"},{id:5,author:"정수연",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",createdAt:"2시간 전",profileImage:"https://placehold.co/40"}],L=()=>{const t=C.map($);return{render:()=>`
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
        <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
      </div>

      <div class="space-y-4">
        ${t.map(s=>s.render()).join("")}
      </div>
  `,onRendered:()=>{t.forEach(s=>{var r;return(r=s.onRendered)==null?void 0:r.call(s)})}}},B=(t={},o={})=>{let e={...t};const s=Object.entries(o).filter(([,n])=>n).map(([n])=>n);return s.length>0&&s.forEach(n=>{const c=JSON.parse(localStorage.getItem(n)??null);c&&(e[n]=c)}),{getState:(n=null)=>n?e[n]:{...e},setState:n=>{const c={...e,...n},d=Object.keys(n).filter(i=>n[i]!==e[i]&&s.includes(i));e=c,d.length>0&&d.forEach(i=>{localStorage.setItem(i,JSON.stringify(n[i]))})},resetState:({clearStorage:n=!1}={})=>{e={...t},n&&s.forEach(c=>{localStorage.removeItem(c)})}}},N={user:null,isLoggedIn:!1},H={user:!0,isLoggedIn:!1},p=B(N,H),M=({username:t,email:o="",bio:e=""})=>{p.setState({user:{username:t,email:o,bio:e},isLoggedIn:!0})},G=()=>{p.resetState({clearStorage:!0})},q=({username:t,email:o="",bio:e=""})=>{p.setState({user:{username:t,email:o,bio:e}})},A=()=>({render:()=>`
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
        내 프로필
      </h2>
      <form id="profile-form">
        <div class="mb-4">
          <label
            for="username"
            class="block text-gray-700 text-sm font-bold mb-2"
            >사용자 이름</label
          >
          <input
            type="text"
            id="username"
            name="username"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <label
            for="email"
            class="block text-gray-700 text-sm font-bold mb-2"
            >이메일</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full p-2 border rounded"
          />
        </div>    
        <div class="mb-6">
          <label
            for="bio"
            class="block text-gray-700 text-sm font-bold mb-2"
            >자기소개</label
          >
          <textarea
            id="bio"
            name="bio"
            rows="4"
            class="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white p-2 rounded font-bold"
        >
          프로필 업데이트
        </button>
      </form>
    </div>
  `,onRendered:()=>{const e=p.getState("user"),s=e.username??"",r=e.email??"",l=e.bio??"";document.getElementById("username").value=s,document.getElementById("email").value=r,document.getElementById("bio").value=l,document.querySelector("form").addEventListener("submit",n=>{n.preventDefault();const c=document.getElementById("username").value,d=document.getElementById("email").value,i=document.getElementById("bio").value;q({username:c,email:d,bio:i})})}}),h=new Map,y=(t,o)=>{h.set(t,o)},V=t=>{const o=h.get(t);o&&(o(),h.delete(t))},x=()=>{h.forEach(t=>t()),h.clear()},R="/front_5th_chapter1-1/",m={ACTIVE:"text-blue-600",INACTIVE:"text-gray-600",BOLD:"font-bold"},k=()=>{const t=p.getState("isLoggedIn");return{render:()=>`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
    
      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" id="home" class="${m.INACTIVE}">홈</a></li>
          ${t?`
                <li><a href="/profile" id="profile" class="${m.INACTIVE}">프로필</a></li>
                <li><a href="/login" id="logout" class="${m.INACTIVE}">로그아웃</a></li>
              `:`<li><a href="/login" id="login" class="${m.INACTIVE}">로그인</a></li>`}
        </ul>
      </nav>
    `,onRendered:()=>{const s=window.location.pathname.replace(R,"/"),r=document.querySelector("nav"),l=r.querySelectorAll("li"),a=r.querySelector(`a[href="${s}"]`);a&&(a.classList=`${m.ACTIVE} ${m.BOLD}`);const n=c=>{if(c.preventDefault(),c.target.classList.contains(m.ACTIVE))return;if(c.target.id==="logout"){V("header"),G(),b.navigate(u.LOGIN);return}const d=r.querySelector("a.text-blue-600");d.classList=`${m.INACTIVE}`,c.target.classList=`${m.ACTIVE} ${m.BOLD}`,b.navigate(c.target.pathname.replace(R,"/"))};l.forEach(c=>{c.addEventListener("click",n),y(`header-${c.id}`,()=>c.removeEventListener("click",n))})}}},_=()=>({render:()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `,onRendered:null}),O=t=>{const o=t(),e=k(),s=_();return{render:()=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${e.render()}

        <main id="main" class="p-4">
          ${o.render()}
        </main>

        ${s.render()}
      </div>
    </div>
  `,onRendered:()=>{var a,n;(a=o.onRendered)==null||a.call(o),(n=e.onRendered)==null||n.call(e)}}},j=()=>({render:()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input id="password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <button name="로그인" type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  `,onRendered:()=>{const e=document.querySelector("#login-form"),s=r=>{var a,n;r.preventDefault();const l=(a=e.querySelector("#username"))==null?void 0:a.value;(n=e.querySelector("#password"))==null||n.value,l&&(M({username:l}),b.navigate(u.HOME))};e.addEventListener("submit",s),y("loginPage",()=>{e.removeEventListener("submit",s)})}}),D=()=>({render:()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a id="home-link" href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `,onRendered:()=>{const e=document.querySelector("#home-link"),s=r=>{r.preventDefault(),b.navigate(u.HOME)};e.addEventListener("click",s),y("errorPage",()=>{e.removeEventListener("click",s)})}}),u={HOME:"/",PROFILE:"/profile",LOGIN:"/login",ERROR:"/error"},g={TAB:"TAB",PAGE:"PAGE"},P={[u.HOME]:{id:"home",type:g.TAB,container:()=>O(L),content:L,needAuth:!1},[u.PROFILE]:{id:"profile",type:g.TAB,container:()=>O(A),content:A,needAuth:!0},[u.LOGIN]:{id:"login",type:g.PAGE,container:j,needAuth:!1},[u.ERROR]:{id:"error",type:g.PAGE,container:D,needAuth:!1}},T="/front_5th_chapter1-1/",U=()=>{const t=a=>{const n=T+(a.startsWith("/")?a.slice(1):a);n!==window.location.pathname&&(window.history.pushState({},"",n),e())},o=(a,n)=>n.needAuth&&!p.getState("isLoggedIn")?{redirect:!0,path:u.LOGIN}:a===u.LOGIN&&p.getState("isLoggedIn")?{redirect:!0,path:u.HOME}:{redirect:!1},e=(a=!1)=>{var E,I,S;const c=(a?window.location.hash.slice(1):window.location.pathname).replace(T,"/"),d=P[c]??P[u.ERROR],i=o(c,d);if(i.redirect){t(i.path);return}const f=d.container();if(d.type===g.PAGE){x(),document.getElementById("root").innerHTML=f.render(),(E=f.onRendered)==null||E.call(f);return}const w=document.querySelector("#root #main");if(!w){x(),document.getElementById("root").innerHTML=f.render(),(I=f.onRendered)==null||I.call(f);return}const v=d.content();w.innerHTML=v.render(),(S=v.onRendered)==null||S.call(v)},s=()=>{e()},r=()=>{e(!0)};return{navigate:t,init:()=>{localStorage.getItem("user")&&p.setState({isLoggedIn:!0}),x(),window.addEventListener("popstate",s),window.addEventListener("hashchange",r),e()}}},b=U();(()=>{const o=new URLSearchParams(window.location.search).get("p");o&&window.history.replaceState(null,"",o),b.init()})();
