var h="tsa-theme",v="dark",u="dark",g="light",I="(prefers-color-scheme: dark)",d=window.matchMedia(I);function y(){try{return localStorage.getItem(h)}catch{return null}}function j(e){try{localStorage.setItem(h,e)}catch{}}function H(){let e=y();return e===u||e===g?e:d.matches?u:g}function O(e){let t=e===u;document.querySelectorAll("[data-theme-toggle]").forEach(n=>{n.setAttribute("aria-pressed",String(t)),n.setAttribute("title",t?"Activer le mode clair":"Activer le mode sombre");let s=n.querySelector(".material-symbols-outlined");s&&(s.textContent=t?"light_mode":"dark_mode")})}function w(e){let t=e===u;document.documentElement.classList.toggle(v,t),document.documentElement.dataset.theme=e,O(e)}function b(){w(H())}b();function C(){b(),document.querySelectorAll("[data-theme-toggle]").forEach(t=>{t.addEventListener("click",()=>{let n=document.documentElement.classList.contains(v)?g:u;j(n),w(n)})});let e=()=>{y()||b()};typeof d.addEventListener=="function"?d.addEventListener("change",e):typeof d.addListener=="function"&&d.addListener(e)}function P(){let e=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll("header nav a, .mobile-nav a").forEach(t=>{let n=t.getAttribute("href")?.split("/").pop()?.split("#")[0]||"";(e===""||e==="index.html")&&(n==="index.html"||n==="")||n!==""&&e===n?(t.classList.add("text-primary","font-bold"),t.setAttribute("aria-current","page")):(t.classList.remove("font-bold"),t.setAttribute("aria-current","false"))})}function m(e){let t=document.querySelector("[data-nav-toggle]"),n=document.getElementById("mobile-nav"),s=document.getElementById("mobile-nav-overlay");if(!t||!n)return;n.classList.toggle("open",e),s?.classList.toggle("open",e),t.classList.toggle("is-open",e),t.setAttribute("aria-expanded",String(e));let o=t.querySelector(".material-symbols-outlined");o&&(o.textContent=e?"close":"menu"),document.body.classList.toggle("mobile-menu-open",e),document.documentElement.classList.toggle("mobile-menu-open",e),document.body.style.overflow=e?"hidden":"",document.documentElement.style.overflow=e?"hidden":""}function R(){let e=document.querySelector("[data-nav-toggle]"),t=document.getElementById("mobile-nav");if(!e||!t)return;let n=document.getElementById("mobile-nav-overlay");n||(n=document.createElement("div"),n.id="mobile-nav-overlay",n.className="mobile-nav-overlay",document.body.appendChild(n)),e.addEventListener("click",s=>{s.stopPropagation();let o=!t.classList.contains("open");m(o)}),n.addEventListener("click",()=>m(!1)),t.querySelectorAll("a").forEach(s=>{s.addEventListener("click",()=>m(!1))}),document.addEventListener("keydown",s=>{s.key==="Escape"&&m(!1)}),document.addEventListener("click",s=>{t.classList.contains("open")&&!t.contains(s.target)&&!e.contains(s.target)&&!n.contains(s.target)&&m(!1)})}function E(){P(),R()}function _(){let e=document.getElementById("hero-bg-img");if(!e)return;requestAnimationFrame(()=>{e.style.transform="scale(1) translateY(0px)"});let t=document.getElementById("hero-section");t&&window.addEventListener("scroll",()=>{let n=window.scrollY,s=t.offsetHeight;if(n<s){let o=n*.35;e.style.transform=`scale(1) translateY(${o}px)`}},{passive:!0})}function L(e,t="0s",n="0.6s"){e.style.animation=`fade-in-up ${n} ease-out forwards ${t}`}function S(e){return e.style.transitionDelay||window.getComputedStyle(e).transitionDelay||"0s"}var $=[{selector:".stat-card",duration:"0.6s",useDelay:!0},{selector:".feature-header",duration:"0.8s",useDelay:!1},{selector:".feature-card",duration:"0.6s",useDelay:!0}];function M(){let e=new IntersectionObserver((t,n)=>{t.forEach(s=>{if(!s.isIntersecting)return;let o=s.target,a=$.find(({selector:l})=>o.matches(l));if(a){let l=a.useDelay?S(o):"0s";L(o,l,a.duration),o.classList.add("animated")}n.unobserve(o)})},{threshold:.1});$.forEach(({selector:t})=>{document.querySelectorAll(t).forEach(n=>e.observe(n))})}function z(){document.querySelectorAll(".faq-content.open").forEach(e=>{e.classList.remove("open")}),document.querySelectorAll(".faq-icon.rotated").forEach(e=>{e.classList.remove("rotated")})}function T(){let e=document.getElementById("faq-container");e&&e.querySelectorAll(".faq-item").forEach(t=>{let n=t.querySelector(".faq-header"),s=t.querySelector(".faq-content"),o=t.querySelector(".faq-icon");!n||!s||n.addEventListener("click",()=>{let a=s.classList.contains("open");z(),a||(s.classList.add("open"),o&&o.classList.add("rotated"))})})}var i={currentLevel:"TS1",levels:[{name:"TS1",label:"TS1",active:!0},{name:"TS2",label:"TS2",active:!1},{name:"TS3",label:"TS3",active:!1}],page:{title:"Math\xE9matiques \u2014 TS1",description:"Explorez les ressources, cours magistraux, et travaux dirig\xE9s pour ma\xEEtriser le programme de math\xE9matiques de premi\xE8re ann\xE9e."},updateText:"Derniers documents ajout\xE9s le 24 Oct.",subjects:[{name:"Analyse",icon:"calculate",count:24,buttonClass:"w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors",iconWrapperClass:"w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md",sections:{cours:[{title:"Chapitre 1 : Espaces Vectoriels",meta:"2.4 MB \u2022 Modifi\xE9 le 12 Sept 2023"},{title:"Chapitre 2 : Applications Lin\xE9aires",meta:"3.1 MB \u2022 Modifi\xE9 le 19 Sept 2023"}],td:[{title:"TD 1 : Sous-espaces Vectoriels",meta:"1.2 MB \u2022 Modifi\xE9 le 15 Sept 2023"},{title:"Corrig\xE9 TD 1",meta:"1.5 MB \u2022 Modifi\xE9 le 22 Sept 2023"}],annales:[{title:"Annales 2022 \u2014 Analyse",meta:"1.8 MB \u2022 Modifi\xE9 le 08 Oct 2023"}],resumes:[{title:"R\xE9sum\xE9 de cours \u2014 Chapitres 1 \xE0 3",meta:"860 KB \u2022 Modifi\xE9 le 05 Oct 2023"}]}},{name:"Alg\xE8bre Lin\xE9aire",icon:"function",count:18,buttonClass:"w-full py-sm bg-surface text-primary rounded-lg font-label-md hover:bg-surface-container transition-colors shadow-sm",iconWrapperClass:"w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md",sections:{cours:[{title:"Chapitre 3 : Matrices et D\xE9terminants",meta:"2.6 MB \u2022 Modifi\xE9 le 16 Sept 2023"}],td:[{title:"TD 2 : Calcul matriciel",meta:"1.3 MB \u2022 Modifi\xE9 le 20 Sept 2023"}],annales:[{title:"Annales 2021 \u2014 Alg\xE8bre",meta:"1.4 MB \u2022 Modifi\xE9 le 02 Oct 2023"}],resumes:[{title:"Fiche de r\xE9vision \u2014 Algebra",meta:"640 KB \u2022 Modifi\xE9 le 09 Oct 2023"}]}},{name:"Probabilit\xE9s",icon:"data_usage",count:12,buttonClass:"w-full py-sm bg-surface text-primary rounded-lg font-label-md hover:bg-surface-container transition-colors shadow-sm",iconWrapperClass:"w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md",sections:{cours:[{title:"Chapitre 4 : \xC9v\xE9nements et Probabilit\xE9s",meta:"2.1 MB \u2022 Modifi\xE9 le 11 Sept 2023"}],td:[{title:"TD 3 : Lois de probabilit\xE9",meta:"1.1 MB \u2022 Modifi\xE9 le 17 Sept 2023"}],annales:[{title:"Annales 2023 \u2014 Probabilit\xE9s",meta:"1.6 MB \u2022 Modifi\xE9 le 06 Oct 2023"}],resumes:[{title:"R\xE9sum\xE9 rapide \u2014 Formules cl\xE9s",meta:"520 KB \u2022 Modifi\xE9 le 11 Oct 2023"}]}}]};var k=[{key:"cours",title:"Cours Magistraux",icon:"menu_book",iconColor:"text-primary"},{key:"td",title:"Travaux Dirig\xE9s (TD)",icon:"assignment",iconColor:"text-primary"},{key:"annales",title:"Annales",icon:"quiz",iconColor:"text-primary"},{key:"resumes",title:"R\xE9sum\xE9s",icon:"description",iconColor:"text-primary"}];function x(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function A(e){return String(e).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"")}function B(e,t){if(!t)return x(e);let n=x(e),s=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${s})`,"gi");return n.replace(o,'<mark class="bg-primary/10 text-primary rounded px-1 py-0.5">$1</mark>')}function F(){let e=document.getElementById("courses-levels");e&&(e.innerHTML=i.levels.map(t=>{let n=t.name===i.currentLevel;return`
        <button class="w-full flex items-center justify-between p-sm rounded-lg ${n?"bg-primary/5 text-primary relative group transition-colors":"text-on-surface-variant hover:bg-surface-container transition-colors group"}">
          ${n?'<div class="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>':""}
          <span class="font-label-md">${t.label}</span>
          <span class="material-symbols-outlined text-[20px] ${n?"":"opacity-0 group-hover:opacity-100 transition-opacity"}">chevron_right</span>
        </button>
      `}).join(""))}function N(){let e=document.getElementById("courses-title"),t=document.getElementById("courses-description"),n=document.getElementById("courses-update-text");e&&(e.textContent=i.page.title),t&&(t.textContent=i.page.description),n&&(n.textContent=i.updateText)}function V(){let e=document.getElementById("subjects-grid");e&&(e.innerHTML=i.subjects.map(t=>`
        <div class="${t.buttonClass.includes("bg-primary"),"bg-surface-container-lowest p-md rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"}">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
          <div class="${t.iconWrapperClass}">
            <span class="material-symbols-outlined text-primary text-[24px]">${t.icon}</span>
          </div>
          <h3 class="font-headline-sm text-on-surface mb-xs">${t.name}</h3>
          <p class="font-label-sm text-on-surface-variant mb-lg">${t.count} Documents</p>
          <button class="${t.buttonClass}">Acc\xE9der</button>
        </div>
      `).join(""))}function K(){let e=document.getElementById("documents-lists");e&&(e.innerHTML=i.subjects.map(t=>{let n=k.map(s=>{let o=t.sections[s.key]||[],a=o.map((l,r)=>`
              <div class="flex items-center justify-between p-md ${r===o.length-1?"":"border-b border-surface-container/50"} hover:bg-surface-container/20 transition-colors">
                <div class="flex items-center gap-md">
                  <span class="material-symbols-outlined text-error text-[24px]">picture_as_pdf</span>
                  <div>
                    <h4 class="font-label-md text-on-surface">${l.title}</h4>
                    <p class="font-label-sm text-on-surface-variant mt-1">${l.meta}</p>
                  </div>
                </div>
                <div class="flex items-center gap-xs">
                  <button class="p-xs text-primary hover:bg-primary/10 rounded-lg transition-colors font-label-md hidden sm:block">Ouvrir</button>
                  <button aria-label="T\xE9l\xE9charger" class="p-xs text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                    <span class="material-symbols-outlined text-[20px]">download</span>
                  </button>
                  <button aria-label="Ajouter \xE0 Drive" class="p-xs text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                    <span class="material-symbols-outlined text-[20px]">add_to_drive</span>
                  </button>
                </div>
              </div>
            `).join("");return`
            <section class="mb-lg">
              <div class="flex items-center gap-sm mb-lg">
                <span class="material-symbols-outlined ${s.iconColor} text-[28px]">${s.icon}</span>
                <h2 class="font-headline-md text-on-background">${s.title}</h2>
              </div>
              <div class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
                ${a||`
                  <div class="p-md text-on-surface-variant">Aucun document disponible pour cette cat\xE9gorie.</div>
                `}
              </div>
            </section>
          `}).join("");return`
        <section class="space-y-xl mb-xl">
          <div class="flex items-center gap-sm mb-lg">
            <span class="material-symbols-outlined text-primary text-[28px]">school</span>
            <h2 class="font-headline-md text-on-background">${t.name}</h2>
          </div>
          <div class="space-y-xl">
            ${n}
          </div>
        </section>
      `}).join(""))}function U(){let e=[];return i.levels.forEach(t=>{e.push({type:"year",category:"Ann\xE9es",title:t.label,detail:`Niveau \u2022 ${t.label}`,keywords:[t.label,t.name,"ann\xE9e","niveau"]})}),i.subjects.forEach(t=>{e.push({type:"subject",category:"Mati\xE8res",title:t.name,detail:`${t.count} documents disponibles`,keywords:[t.name,"mati\xE8re","cours","ressource"]})}),i.subjects.forEach(t=>{Object.entries(t.sections).forEach(([n,s])=>{let o=k.find(a=>a.key===n)?.title||n;s.forEach(a=>{e.push({type:"document",category:"Documents",title:a.title,detail:`${t.name} \u2022 ${o}`,keywords:[a.title,a.meta,t.name,o,"document","cours","td","annale","r\xE9sum\xE9"]})})})}),e}function Y(e){let t=document.getElementById("courses-search-results"),n=document.getElementById("courses-search-input");if(!t||!n)return;let s=A(e.trim());if(!s){t.classList.add("hidden");return}let o=U().filter(r=>r.keywords.some(f=>A(f).includes(s))).slice(0,8);if(!o.length){t.innerHTML=`
      <div class="search-empty-state">
        <span class="material-symbols-outlined text-[22px]">search_off</span>
        <p>Aucun r\xE9sultat pour \u201C${x(e)}\u201D.</p>
      </div>
    `,t.classList.remove("hidden");return}let a={Documents:o.filter(r=>r.category==="Documents"),Mati\u00E8res:o.filter(r=>r.category==="Mati\xE8res"),Ann\u00E9es:o.filter(r=>r.category==="Ann\xE9es")},l=Object.entries(a).filter(([,r])=>r.length).map(([r,f])=>`
      <div class="search-group">
        <div class="search-group-title">${r}</div>
        ${f.map(p=>`
          <div class="search-result-item">
            <div class="search-result-icon">
              <span class="material-symbols-outlined">${p.type==="year"?"calendar_month":p.type==="subject"?"school":"picture_as_pdf"}</span>
            </div>
            <div class="search-result-content">
              <div class="search-result-title">${B(p.title,e)}</div>
              <div class="search-result-detail">${B(p.detail,e)}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `).join("");t.innerHTML=`
    <div class="search-results-list">${l}</div>
  `,t.classList.remove("hidden")}function D(){F(),N(),V(),K();let e=document.getElementById("courses-search-input"),t=document.getElementById("courses-search-results");!e||!t||(e.addEventListener("input",n=>{Y(n.target.value)}),document.addEventListener("click",n=>{!t.contains(n.target)&&n.target!==e&&t.classList.add("hidden")}))}var c={\u00E9coles:[{title:"Grandes \xC9coles",description:"Panorama des \xE9tablissements prestigieux accessibles apr\xE8s la formation TSA. D\xE9couvrez leurs sp\xE9cialit\xE9s et crit\xE8res d'admission.",buttonText:"Explorer les \xE9coles",icon:"account_balance",variant:"large",iconClass:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-md text-primary",buttonClass:"font-label-md text-label-md text-primary flex items-center gap-xs hover:gap-sm transition-all",cardClass:"md:col-span-8 bg-surface-container rounded-xl p-lg relative overflow-hidden group shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.08)] transition-shadow duration-300"}],concours:[{title:"Concours",description:"Calendrier, modalit\xE9s et pr\xE9paration aux \xE9preuves \xE9crites et orales.",buttonText:"Voir le calendrier",icon:"quiz",variant:"accent",iconClass:"w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-md text-on-primary",buttonClass:"font-label-md text-label-md text-on-primary flex items-center gap-xs hover:gap-sm transition-all mt-auto pt-lg",cardClass:"md:col-span-4 bg-primary rounded-xl p-lg relative overflow-hidden group shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.08)] transition-shadow duration-300"}],passerelles:[{title:"Passerelles",description:"Voies d'admission parall\xE8les et admissions sur titre pour diversifier vos opportunit\xE9s.",icon:"alt_route",variant:"default",iconClass:"w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary",cardClass:"md:col-span-4 bg-surface-container rounded-xl p-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col justify-between"}],universit\u00E9s:[{title:"Universit\xE9s",description:"Licences, Masters et fili\xE8res d'excellence universitaires accessibles post-TSA.",icon:"school",variant:"default",iconClass:"w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary",cardClass:"md:col-span-4 bg-surface-container rounded-xl p-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col justify-between"}],bourses:[{title:"Bourses & Aides",description:"Soutien financier, bourses d'excellence et modalit\xE9s de financement des \xE9tudes.",icon:"monetization_on",variant:"default",iconClass:"w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary",cardClass:"md:col-span-4 bg-surface-container rounded-xl p-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col justify-between"}]};function W(){let e=document.getElementById("orientation-cards");if(!e)return;let n=[{key:"\xE9coles",items:c.\u00E9coles,extraClass:"md:col-span-8"},{key:"concours",items:c.concours,extraClass:"md:col-span-4"},{key:"passerelles",items:c.passerelles,extraClass:"md:col-span-4"},{key:"universit\xE9s",items:c.universit\u00E9s,extraClass:"md:col-span-4"},{key:"bourses",items:c.bourses,extraClass:"md:col-span-4"}].flatMap(({items:s})=>s).map(s=>s.variant==="large"?`
          <div class="${s.cardClass}">
            <div class="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 orientation-card-image"></div>
            <div class="relative z-10">
              <div class="${s.iconClass}">
                <span class="material-symbols-outlined">${s.icon}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface mb-xs">${s.title}</h2>
              <p class="font-body-md text-body-md text-on-surface-variant mb-md max-w-md">${s.description}</p>
              <button class="${s.buttonClass}">
                ${s.buttonText}
                <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        `:s.variant==="accent"?`
          <div class="${s.cardClass}">
            <div class="relative z-10">
              <div class="${s.iconClass}">
                <span class="material-symbols-outlined">${s.icon}</span>
              </div>
              <h2 class="font-headline-lg text-headline-lg text-on-primary mb-xs">${s.title}</h2>
              <p class="font-body-md text-body-md text-primary-fixed-dim mb-md">${s.description}</p>
              <button class="${s.buttonClass}">
                ${s.buttonText}
                <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
            <svg class="absolute bottom-0 right-0 text-white/10 w-32 h-32 translate-x-1/4 translate-y-1/4" fill="currentColor" viewBox="0 0 100 100">
              <path d="M50 0 L100 50 L50 100 L0 50 Z"></path>
            </svg>
          </div>
        `:`
        <div class="${s.cardClass}">
          <div>
            <div class="flex items-center gap-sm mb-md">
              <div class="${s.iconClass}">
                <span class="material-symbols-outlined text-[18px]">${s.icon}</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface">${s.title}</h3>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant">${s.description}</p>
          </div>
        </div>
      `).join("");e.innerHTML=n}function q(){W()}document.addEventListener("DOMContentLoaded",()=>{C(),E(),_(),M(),T(),D(),q()});
