const header=document.querySelector("#site-header"),footer=document.querySelector("#site-footer"),page=location.pathname.split("/").pop()||"index.html";header.innerHTML='<header><div class="container nav"><a class="brand" href="index.html"><span class="brand-mark"><img src="hassni-plumbers-logo.png" alt="Hassni Plumbers logo"></span><div><strong>Hassni Plumbers</strong><small>Hassni Group · Since 1991</small></div></a><button class="menu" aria-label="Open navigation" aria-expanded="false">☰</button><nav class="nav-links"><a href="index.html">Home</a><a href="about.html">Company profile</a><a href="capabilities.html">Capabilities</a><a href="projects.html">Projects</a><a href="contact.html">Contact</a></nav></div></header>';footer.innerHTML='<footer><div class="container footer-inner"><span><strong>Hassni Plumbers</strong> · Engineering Contractors &amp; Distributors</span><span>Hassni Group · Hyderabad, India</span></div></footer>';document.querySelectorAll(".nav-links a").forEach(a=>{if(a.getAttribute("href")===page)a.classList.add("active")});const menu=document.querySelector(".menu");menu.addEventListener("click",()=>{const links=document.querySelector(".nav-links"),open=links.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
const revealItems=document.querySelectorAll(".section-heading,.split,.card,.capability,.project,.contact-card");
revealItems.forEach((item,index)=>{
  item.classList.add(item.classList.contains("split") ? (index % 2 ? "reveal-right" : "reveal-left") : "reveal-up");
  if(item.matches(".card,.capability,.project")) item.style.transitionDelay=`${Math.min((index % 4) * 90, 270)}ms`;
});
if("IntersectionObserver"in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}
  }),{threshold:.14,rootMargin:"0px 0px -8% 0px"});
  revealItems.forEach(item=>observer.observe(item));
}else revealItems.forEach(item=>item.classList.add("visible"));
const siteHeader=document.querySelector("header");
const syncHeader=()=>siteHeader.classList.toggle("scrolled",window.scrollY>32);
syncHeader();
window.addEventListener("scroll",syncHeader,{passive:true});
const heroVideo=document.querySelector(".hero-video");
const heroVideoPlay=document.querySelector(".hero-video-play");
if(heroVideo && !window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  heroVideo.muted=true;
  heroVideo.defaultMuted=true;
  const startHeroVideo=()=>{
    heroVideo.play().then(()=>{
      if(heroVideoPlay) heroVideoPlay.hidden=true;
    }).catch(()=>{
      if(heroVideoPlay) heroVideoPlay.hidden=false;
    });
  };
  heroVideo.addEventListener("canplay",startHeroVideo,{once:true});
  if(heroVideo.readyState>=3) startHeroVideo();
  if(heroVideoPlay) heroVideoPlay.addEventListener("click",startHeroVideo);
}
