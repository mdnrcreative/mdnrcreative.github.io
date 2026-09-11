const toggle=document.querySelector(".menu-toggle"),menu=document.querySelector("#menu");
toggle?.addEventListener("click",()=>{const open=menu.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("open");toggle?.setAttribute("aria-expanded","false");}));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
document.querySelector("#year").textContent=new Date().getFullYear();
