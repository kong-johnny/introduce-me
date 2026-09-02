const progress=document.getElementById('progress');
if(progress){const update=()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h?scrollY/h*100:100)+'%'};addEventListener('scroll',update,{passive:true});update();}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
