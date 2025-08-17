// i18n strings
const i18n = {
  en:{dir:'ltr',
    title:'Asma Mohammadkhani Web Developer & Travel Consultant',
    subtitle:'Monochrome, minimal & focused. I build clean, accessible websites and bring 8+ years of tourism experience to digital solutions.',
    cta:'Contact me', cta2:'See my skills',
    about_k:'About', about_h:'Who I am',
    about_p1:'Tourism & hospitality professional turned web developer. I combine HTML/CSS and basic JavaScript with real-world travel operations to design simple, effective, bilingual websites.',
    about_p2:'Open to remote collaborations in travel tech, hospitality, and small business websites.',
    skills_k:'Skills', tech_h:'Technical', tour_h:'Tourism & Soft',
    contact_k:'Contact', contact_h:'Let’s work together'
  },
  fa:{dir:'rtl',
    title:'اسما محمدخانی   توسعه‌ دهنده وب و مشاور سفر',
    subtitle:'تک‌رنگ، مینیمال و متمرکز. وب‌سایت‌های تمیز و قابل‌دسترس می‌سازم و ۸+ سال تجربه گردشگری را به راهکارهای دیجیتال می‌آورم.',
    cta:'ارتباط با من', cta2:'مهارت‌ها',
    about_k:'درباره', about_h:'من کی هستم',
    about_p1:'متخصص گردشگری و هتلداری که وارد دنیای توسعه وب شده‌ام. با HTML/CSS و جاوااسکریپت پایه، همراه با تجربه واقعی سفر، وب‌سایت‌های ساده، مؤثر و دوزبانه طراحی می‌کنم.',
    about_p2:'مشتاق همکاری‌های دورکار در حیطه گردشگری، هتلداری و وب‌سایت کسب‌وکارهای کوچک.',
    skills_k:'مهارت‌ها', tech_h:'فنی', tour_h:'گردشگری و نرم',
    contact_k:'تماس', contact_h:'با هم کار کنیم'
  }
};

// apply language
const els = document.querySelectorAll('[data-t]');
const select = document.getElementById('lang');
function apply(lang){
  const d = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;
  document.documentElement.dir  = d.dir;
  els.forEach(el => {
    const k = el.getAttribute('data-t');
    if (d[k]) el.textContent = d[k];
  });
}
select.addEventListener('change', e => apply(e.target.value));
apply('en');

// year
document.getElementById('y')?.replaceWith((() => {
  const s = document.createElement('span'); s.id='y'; s.textContent = new Date().getFullYear(); return s;
})());

// reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
