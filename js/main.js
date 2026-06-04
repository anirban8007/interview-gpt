// InterviewGPT Landing Page — Main Script

// PARTICLES
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas(){canvas.width=canvas.offsetWidth;canvas.height=canvas.offsetHeight}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
for(let i=0;i<80;i++){
  particles.push({
    x:Math.random()*canvas.width,y:Math.random()*canvas.height,
    vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,
    r:Math.random()*1.5+.5,
    alpha:Math.random()*.4+.1
  });
}
function animParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0)p.x=canvas.width;if(p.x>canvas.width)p.x=0;
    if(p.y<0)p.y=canvas.height;if(p.y>canvas.height)p.y=0;
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(167,139,250,${p.alpha})`;ctx.fill();
  });
  // draw connections
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<100){
        ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);
        ctx.strokeStyle=`rgba(124,58,237,${.15*(1-dist/100)})`;ctx.lineWidth=.5;ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animParticles);
}
animParticles();

// COUNTER ANIMATION
function animateCounter(el){
  const target=parseInt(el.dataset.target);
  const suffix=el.dataset.suffix||'';
  const decimal=parseInt(el.dataset.decimal)||0;
  const duration=1800;
  const start=performance.now();
  function update(now){
    const t=Math.min((now-start)/duration,1);
    const ease=1-Math.pow(1-t,4);
    let val=(target*ease);
    if(decimal)el.textContent=(val/10).toFixed(1)+suffix;
    else el.textContent=Math.round(val).toLocaleString()+suffix;
    if(t<1)requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// SCROLL REVEAL + COUNTER TRIGGER
const revealEls = document.querySelectorAll('.reveal');
const statNums = document.querySelectorAll('.stat-num[data-target]');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      if(e.target.dataset.target) animateCounter(e.target);
      io.unobserve(e.target);
    }
  });
},{threshold:0.15});
revealEls.forEach(el=>io.observe(el));
statNums.forEach(el=>io.observe(el));

// FAQ
function toggleFaq(btn){
  const a=btn.nextElementSibling;
  const isOpen=btn.classList.contains('open');
  document.querySelectorAll('.faq-q.open').forEach(b=>{b.classList.remove('open');b.nextElementSibling.classList.remove('open')});
  if(!isOpen){btn.classList.add('open');a.classList.add('open')}
}

// DEMO COUNTDOWN
let cd=8;
const countdownEl=document.getElementById('countdown');
setInterval(()=>{
  cd--;if(cd<=0)cd=8;
  if(countdownEl)countdownEl.textContent=cd;
},1000);

// TYPING EFFECT for hero questions
const userPhrases=['Tell me about yourself.','What are your strengths?','Where do you see yourself in 5 years?','Why do you want this role?'];
const aiPhrases=['Great! Walk me through your most challenging project.','Can you give me an example of leadership?','How do you handle conflicting priorities?','What excites you most about this opportunity?'];
let phraseIdx=0;
function cycleChat(){
  phraseIdx=(phraseIdx+1)%userPhrases.length;
  const u=document.getElementById('user-speech');
  const a=document.getElementById('ai-speech');
  if(u&&a){
    u.style.opacity='0';a.style.opacity='0';
    setTimeout(()=>{
      u.textContent=userPhrases[phraseIdx];
      a.innerHTML=aiPhrases[phraseIdx]+' <span class="typing-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>';
      u.style.transition='opacity .5s';a.style.transition='opacity .5s';
      u.style.opacity='1';a.style.opacity='1';
    },400);
  }
}
setInterval(cycleChat,5000);

// ===== ANTIGRAVITY ENHANCEMENTS =====

// Scroll progress bar
const scrollBar = document.getElementById('scroll-bar');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  scrollBar.style.width = pct + '%';
  // Nav shrink
  document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 60);
  // Back to top
  document.getElementById('back-top').classList.toggle('visible', window.scrollY > 400);
}, {passive: true});

// Mobile menu
function toggleMobile(){
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobile-menu').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobile-menu').classList.contains('open') ? 'hidden' : '';
}
function closeMobile(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobile-menu').classList.remove('open');
  document.body.style.overflow = '';
}

// Cursor trail
const trail = document.getElementById('cursor-trail');
let trailVisible = false;
const trailDots = [];
for(let i = 0; i < 8; i++){
  const d = document.createElement('div');
  d.className = 'cursor-trail';
  d.style.opacity = (1 - i * 0.12).toString();
  d.style.width = (10 - i).toString() + 'px';
  d.style.height = (10 - i).toString() + 'px';
  d.style.background = i < 4 ? 'rgba(124,58,237,.6)' : 'rgba(6,182,212,.4)';
  document.body.appendChild(d);
  trailDots.push({el: d, x: 0, y: 0});
}
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
(function animTrail(){
  trailDots.forEach((dot, i) => {
    const prev = i === 0 ? {x: mouseX, y: mouseY} : trailDots[i - 1];
    dot.x += (prev.x - dot.x) * 0.35;
    dot.y += (prev.y - dot.y) * 0.35;
    dot.el.style.left = dot.x + 'px';
    dot.el.style.top = dot.y + 'px';
  });
  requestAnimationFrame(animTrail);
})();
trail.remove(); // remove the original placeholder

// 3D Tilt effect on feature cards
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const cx = r.width / 2, cy = r.height / 2;
    const rotX = (y - cy) / cy * -8;
    const rotY = (x - cx) / cx * 8;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    const shine = card.querySelector('.tilt-shine');
    if(shine){ shine.style.setProperty('--mx', (x/r.width*100)+'%'); shine.style.setProperty('--my', (y/r.height*100)+'%'); }
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});