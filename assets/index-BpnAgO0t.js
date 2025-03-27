(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(n){if(n.ep)return;n.ep=!0;const d=e(n);fetch(n.href,d)}})();const O=t=>({render:()=>`
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
  `,onRendered:null}),P=[{id:1,author:"홍길동",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",createdAt:"5분 전",profileImage:"https://placehold.co/40"},{id:2,author:"김철수",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",createdAt:"15분 전",profileImage:"https://placehold.co/40"},{id:3,author:"이영희",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",createdAt:"30분 전",profileImage:"https://placehold.co/40"},{id:4,author:"박민수",content:"주말에 등산 가실 분 계신가요? 함께 가요!",createdAt:"1시간 전",profileImage:"https://placehold.co/40"},{id:5,author:"정수연",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",createdAt:"2시간 전",profileImage:"https://placehold.co/40"}],L=()=>{const t=P.map(O);return{render:()=>`
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
        <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
      </div>

      <div class="space-y-4">
        ${t.map(s=>s.render()).join("")}
      </div>
  `,onRendered:()=>{t.forEach(s=>{var n;return(n=s.onRendered)==null?void 0:n.call(s)})}}},T=(t={},o={})=>{let e={...t};const s=Object.entries(o).filter(([,r])=>r).map(([r])=>r);return s.length>0&&s.forEach(r=>{const a=JSON.parse(localStorage.getItem(r)??null);a&&(e[r]=a)}),{getState:(r=null)=>r?e[r]:{...e},setState:r=>{const a={...e,...r},m=Object.keys(r).filter(c=>r[c]!==e[c]&&s.includes(c));e=a,m.length>0&&m.forEach(c=>{localStorage.setItem(c,JSON.stringify(r[c]))})},resetState:({clearStorage:r=!1}={})=>{e={...t},r&&s.forEach(a=>{localStorage.removeItem(a)})}}},$={user:null,isLoggedIn:!1},C={user:!0,isLoggedIn:!1},f=T($,C),B=({username:t,email:o="",bio:e=""})=>{f.setState({user:{username:t,email:o,bio:e},isLoggedIn:!0})},N=()=>{f.resetState({clearStorage:!0})},H=({username:t,email:o="",bio:e=""})=>{f.setState({user:{username:t,email:o,bio:e}})},S=()=>({render:()=>`
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
  `,onRendered:()=>{const e=f.getState("user"),s=e.username??"",n=e.email??"",d=e.bio??"";document.getElementById("username").value=s,document.getElementById("email").value=n,document.getElementById("bio").value=d,document.querySelector("form").addEventListener("submit",r=>{r.preventDefault();const a=document.getElementById("username").value,m=document.getElementById("email").value,c=document.getElementById("bio").value;H({username:a,email:m,bio:c})})}}),p=new Map,x=(t,o)=>{p.set(t,o)},M=t=>{const o=p.get(t);o&&(o(),p.delete(t))},v=()=>{p.forEach(t=>t()),p.clear()},i={ACTIVE:"text-blue-600",INACTIVE:"text-gray-600",BOLD:"font-bold"},G=()=>{const t=f.getState("isLoggedIn");return{render:()=>`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
    
      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" id="home" class="${i.ACTIVE} ${i.BOLD}">홈</a></li>
          ${t?`
                <li><a href="/profile" id="profile" class="${i.INACTIVE}">프로필</a></li>
                <li><a href="/login" id="logout" class="${i.INACTIVE}">로그아웃</a></li>
              `:`<li><a href="/login" id="login" class="${i.INACTIVE}">로그인</a></li>`}
        </ul>
      </nav>
    `,onRendered:()=>{const s=window.location.pathname,n=document.querySelector("nav"),d=n.querySelectorAll("li"),l=n.querySelector(`a[href="${s}"]`);l&&(l.classList=`${i.ACTIVE} ${i.BOLD}`);const r=a=>{if(a.preventDefault(),a.target.classList.contains(i.ACTIVE))return;if(a.target.id==="logout"){M("header"),N(),h.navigate(u.LOGIN);return}const m=n.querySelector("a.text-blue-600");m.classList=`${i.INACTIVE}`,a.target.classList=`${i.ACTIVE} ${i.BOLD}`,h.navigate(a.target.href)};d.forEach(a=>{a.addEventListener("click",r),x(`header-${a.id}`,()=>a.removeEventListener("click",r))})}}},q=()=>({render:()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `,onRendered:null}),A=t=>{const o=t(),e=G(),s=q();return{render:()=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${e.render()}

        <main id="main" class="p-4">
          ${o.render()}
        </main>

        ${s.render()}
      </div>
    </div>
  `,onRendered:()=>{var l,r;(l=o.onRendered)==null||l.call(o),(r=e.onRendered)==null||r.call(e)}}},V=()=>({render:()=>`
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
  `,onRendered:()=>{const e=document.querySelector("#login-form"),s=n=>{var l,r;n.preventDefault();const d=(l=e.querySelector("#username"))==null?void 0:l.value;(r=e.querySelector("#password"))==null||r.value,d&&(B({username:d}),h.navigate(u.HOME))};e.addEventListener("submit",s),x("loginPage",()=>{e.removeEventListener("submit",s)})}}),k=()=>({render:()=>`
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
  `,onRendered:()=>{const e=document.querySelector("#home-link"),s=n=>{n.preventDefault(),h.navigate(u.HOME)};e.addEventListener("click",s),x("errorPage",()=>{e.removeEventListener("click",s)})}}),u={HOME:"/",PROFILE:"/profile",LOGIN:"/login",ERROR:"/error"},g={TAB:"TAB",PAGE:"PAGE"},R={[u.HOME]:{id:"home",type:g.TAB,container:()=>A(L),content:L,needAuth:!1},[u.PROFILE]:{id:"profile",type:g.TAB,container:()=>A(S),content:S,needAuth:!0},[u.LOGIN]:{id:"login",type:g.PAGE,container:V,needAuth:!1},[u.ERROR]:{id:"error",type:g.PAGE,container:k,needAuth:!1}},j=()=>{const t=l=>{l!==window.location.pathname&&(window.history.pushState({},"",l),e())},o=(l,r)=>r.needAuth&&!f.getState("isLoggedIn")?{redirect:!0,path:u.LOGIN}:l===u.LOGIN&&f.getState("isLoggedIn")?{redirect:!0,path:u.HOME}:{redirect:!1},e=(l=!1)=>{var w,E,I;const r=l?window.location.hash.slice(1):window.location.pathname,a=R[r]??R[u.ERROR],m=o(r,a);if(m.redirect){t(m.path);return}const c=a.container();if(a.type===g.PAGE){v(),document.getElementById("root").innerHTML=c.render(),(w=c.onRendered)==null||w.call(c);return}const y=document.querySelector("#root #main");if(!y){v(),document.getElementById("root").innerHTML=c.render(),(E=c.onRendered)==null||E.call(c);return}const b=a.content();y.innerHTML=b.render(),(I=b.onRendered)==null||I.call(b)},s=()=>{e()},n=()=>{e(!0)};return{navigate:t,init:()=>{localStorage.getItem("user")&&f.setState({isLoggedIn:!0}),v(),window.addEventListener("popstate",s),window.addEventListener("hashchange",n),e()}}},h=j();h.init();
