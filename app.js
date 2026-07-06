
const select=document.querySelector('[data-language-select]');
const defaultLang='es';
async function loadLang(lang){
  try{const res=await fetch(`languages/${lang}.json`); const dict=await res.json();
    document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n; if(dict[key]) el.textContent=dict[key];});
    document.documentElement.lang=lang; localStorage.setItem('waposLang',lang);
  }catch(e){console.warn('Language load failed',e)}
}
if(select){const saved=localStorage.getItem('waposLang')||defaultLang; select.value=saved; loadLang(saved); select.addEventListener('change',e=>loadLang(e.target.value));}
const intro=document.querySelector('.intro');
if(intro){ if(localStorage.getItem('waposIntroSeen')) intro.classList.add('hide'); else setTimeout(()=>{intro.classList.add('hide');localStorage.setItem('waposIntroSeen','1')},2200); }
