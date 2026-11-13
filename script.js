const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const SK={"Software Development":["HTML","CSS","JavaScript","TypeScript","React","Vite","Tailwind CSS","Java","Python","C","C++","SQL"],"Hardware & Embedded":["Arduino Uno","ESP32","ESP32-CAM","Ultrasonic Sensors","Servo Motors","Motor Drivers","IoT","Robotics","Embedded Systems"],"AI & Computer Science":["Machine Learning Fundamentals","Linear Regression","Classification","Support Vector Machines","Data Structures","Object-Oriented Programming","Computer Organization","Problem Solving"],"Tools & Technologies":["Git","GitHub","VS Code","Arduino IDE","Linux","Ripes","Figma"]};
const P=[
{t:"MEDIFLIX",c:"Web Development",k:["web","ai"],d:"A healthcare-oriented web platform concept: chatbot, medicine reminder, patient–doctor referral, doctor profiles, continuous medical assessment and data storage.",tech:["Web","Chatbot"],s:"Concept with a previously developed website.",live:"https://imthecode777.github.io/ashik_mediflix/#/"},
{t:"ECOSNAP",c:"AI & ML",k:["ai"],d:"Smart plastic recycling and waste-management concept: AI waste scanner, disposal suggestions, ML prediction, eco-impact dashboard, QR rewards and smart-city integration.",tech:["AI","Machine Learning"],s:"Concept — repository not verified."},
{t:"SMART PARKING SYSTEM",c:"Hardware",k:["hw"],d:"Arduino-based smart parking: slot detection with sensors and automated parking management.",tech:["Arduino","Sensors","Embedded"],s:"Hardware project — repository not verified."},
{t:"RESCUE ROVER",c:"Hardware",k:["hw"],d:"Four-wheel robotic rover with motor-driver integration, ESP32 control and a web-based directional movement interface.",tech:["ESP32","Motor Driver","Web UI"],s:"Hardware project — repository not verified."},
{t:"SMART CPU & I/O ANALYZER",c:"Software",k:["sw"],d:"Computer Organization project on pipeline hazard detection, CPU pipeline concepts and I/O performance simulation.",tech:["Ripes","Computer Organization"],s:"Academic project — repository not verified."},
{t:"DISASTER MANAGEMENT SYSTEM",c:"Software",k:["sw"],d:"Java Swing desktop application concept for managing disaster information.",tech:["Java","Swing"],s:"Concept — repository not verified."}];
const F=[["all","All"],["sw","Software"],["hw","Hardware"],["ai","AI & ML"],["web","Web Development"]];
const $=s=>document.querySelector(s);
$('#go').onclick=()=>{$('#intro').classList.add('out');document.body.classList.add('go');scrollTo(0,0)};
// skills
const tb=$('#tabs'),sl=$('#skl');
Object.keys(SK).forEach((k,i)=>{const b=document.createElement('button');b.className='tab'+(i?'':' on');b.textContent=k;b.onclick=()=>{tb.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));b.classList.add('on');show(k)};tb.append(b)});
function show(k){sl.innerHTML=SK[k].map(x=>`<div class="glass sk">${x}</div>`).join('')}show(Object.keys(SK)[0]);
// projects
function render(f){$('#plist').innerHTML=P.map((p,i)=>({p,i})).filter(({p})=>f=='all'||p.k.includes(f)).map(({p,i})=>`<article class="proj rv in"><div class="pv"><span class="n">0${i+1}</span><svg viewBox="0 0 100 100"><use href="#bee"/></svg></div><div class="pt"><span class="cat">0${i+1} — ${p.c.toUpperCase()}</span><h3>${p.t}</h3><p class="mu">${p.d}</p><div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div><div class="st">Status: ${p.s}</div>${p.live?`<a class="vl" href="${p.live}" target="_blank" rel="noopener">VIEW LIVE DEMO <span class="arr">→</span></a>`:''}</div></article>`).join('')}
const pt=$('#ptabs');F.forEach((f,i)=>{const b=document.createElement('button');b.className='tab'+(i?'':' on');b.textContent=f[1];b.onclick=()=>{pt.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));b.classList.add('on');render(f[0])};pt.append(b)});render('all');
// github
fetch('https://api.github.com/users/nilakhandan/repos?per_page=12&sort=updated').then(r=>{if(!r.ok)throw 0;return r.json()}).then(a=>{$('#ghs').textContent=a.length+' public repositories';$('#repos').innerHTML=a.map(r=>`<a class="glass card" style="padding:20px" href="${r.html_url}" target="_blank" rel="noopener"><h3>${r.name}</h3><p class="mu" style="font-size:13px">${r.description||''}</p><small>${r.language||''} ★${r.stargazers_count} ⑂${r.forks_count}</small></a>`).join('')}).catch(()=>{$('#ghs').textContent='Live repository data could not be loaded here (API unavailable or rate-limited). Visit the GitHub profile to see all public repositories.'});
// nav
const nav=$('#nav'),ln=$('#links');addEventListener('scroll',()=>nav.classList.toggle('s',scrollY>40),{passive:true});
$('#ham').onclick=e=>{const o=ln.classList.toggle('open');e.target.setAttribute('aria-expanded',o)};ln.onclick=()=>ln.classList.remove('open');
const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ln.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')=='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
['home','about','skills','projects','education','contact'].forEach(i=>io2.observe($('#'+i)));
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.rv:not(.in)').forEach(x=>io.observe(x));
// contact
$('#cf').onsubmit=e=>{e.preventDefault();const f=e.target;location.href=`mailto:ashikalicr4@gmail.com?subject=${encodeURIComponent(f.s.value)}&body=${encodeURIComponent(f.m.value+'\n\n— '+f.n.value+' ('+f.e.value+')')}`;$('#fm').textContent='Your email app should open. If it did not, email ashikalicr4@gmail.com directly.'};
if(!RM){
// magnetic
document.querySelectorAll('.mag').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
// tilt
document.querySelectorAll('.tilt').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
// mouse gravity
let mx=0,my=0;addEventListener('mousemove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
const dn=document.querySelectorAll('[data-d]');
// particles
const cv=$('#cv'),x=cv.getContext('2d');let W,H,ps=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;ps=Array.from({length:Math.min(60,W/22|0)},()=>({x:Math.random()*W,y:Math.random()*H,z:Math.random()*.9+.1,r:Math.random()<.4}))}rs();addEventListener('resize',rs);
(function loop(){x.clearRect(0,0,W,H);const sy=scrollY;ps.forEach(p=>{p.y-=.12*p.z;if(p.y<-5)p.y=H+5;const px=p.x+mx*40*p.z,py=(p.y-sy*.15*p.z)%H;x.fillStyle=p.r?`rgba(240,24,37,${.2+p.z*.5})`:`rgba(255,255,255,${.1+p.z*.3})`;x.beginPath();x.arc(px,py<0?py+H:py,p.z*2.2,0,6.3);x.fill()});
dn.forEach(d=>{const k=+d.dataset.d;d.style.translate=`${mx*k}px ${my*k}px`});requestAnimationFrame(loop)})();
}
