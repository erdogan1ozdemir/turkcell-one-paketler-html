/* Turkcell One klon · ortak etkileşimler + footer + paket verisi + CRO varyant sistemi */
(function(){
  /* ---- footer (canlı site ile bire bir kolon yapısı) ---- */
  const FCOLS=[
    ["Hakkımızda",["İletişim","Müşteri Memnuniyeti Politikası","Genel Bakış","Gizlilik Ve Güvenlik","İnsan Kaynakları","Kurumsal İletişim ve Sürdürülebilirlik","Turkcell Medya","Yatırımcı İlişkileri","Toptan","Afet Tedbirleri"]],
    ["Ürün ve Hizmetler",["Paketler","Faturalı Hat","Faturasız Hat","Turkcell Rahat","Turkcell Çocuk","Turkcell Tourist","Turkcell 5G","Turkcell Blog","Pasaj Blog","Kampanyalar"]],
    ["Popüler Marka ve Kategoriler",["Apple","Samsung","Dyson","Akıllı Saatler","Bluetooth Kulaklıklar","Tablet","Laptop","Oyun Bilgisayarı","Robot Süpürge","Kahve Makinesi"]],
    ["Cep Telefonları ve Markalar",["Cep Telefonu","iPhone Modelleri","Android Telefonlar","Yenilenmiş Telefonlar","Yenilenmiş iPhone","Samsung Telefon","iPhone 17","iPhone Air","iPhone 17 Pro","iPhone 17 Pro Max"]],
    ["İşlem Merkezi",["Giriş Yap","Numara Taşıma & Yeni Hat","Fatura Sorgula & Öde","TL & Paket Yükle","Sipariş Takibi"]],
    ["Destek",["En Yakın Mağaza","Masterpass™","Puk Sorgulama","Turkcell Pasaj İşlem Rehberi","Sıkça Sorulan Sorular - Faturalı Hat","Sıkça Sorulan Sorular - Hazır Kart","Yurt Dışı","Arabuluculuk Başvuru Formu"]],
    ["Özel Günler",["Gold Üyelik","Taksitli Harikalar Diyarı","Fırsatlar Pasajı","Uykusu Kaçanlar Kulübü","Sevgililer Günü Hediyeleri","Anneler Günü Hediyeleri","Babalar Günü Hediyeleri","Yılbaşı Hediyeleri","Ramazan Kampanyaları"]],
    ["Tüketici Şikayetleri",["Şikayet Talebi Oluşturma","Şikayet Takibi","Alacak Sorgulama, TL İade Talep","BTK İade Duyurusu"]]
  ];
  const SOC=[["x.svg","X"],["facebook.svg","Facebook"],["instagram.svg","Instagram"],["youtube.svg","Youtube"],["linkedin.svg","Linkedin"]];
  const PART=["p-fizy","p-superonline","p-platinum","p-bip","p-tvplus","p-lifebox","p-paycell","p-gameplus","p-gnc","p-globalbilgi"];
  const more=["Hakkımızda","Ürün ve Hizmetler","Popüler Marka ve Kategoriler","Cep Telefonları ve Markalar"];
  const f=document.getElementById('footer');
  if(f){
    const cols=FCOLS.map(([h,it])=>`<div class="fcol"><h5>${h}</h5>${it.map(i=>`<a>${i}</a>`).join('')}${more.includes(h)?'<a class="more">Tümünü Gör ⌄</a>':''}</div>`).join('');
    const acc=FCOLS.map(([h,it])=>`<details><summary>${h}<span>⌄</span></summary>${it.map(i=>`<a>${i}</a>`).join('')}</details>`).join('');
    const soc=`<div class="footer__social"><span>Bizi Takip Edin</span>${SOC.map(([s,a])=>`<a title="${a}"><img src="assets/${s}" alt="${a}"></a>`).join('')}</div>`;
    const part=`<div class="footer__partners">${PART.map(p=>`<img src="assets/${p}.png" alt="${p}">`).join('')}</div>`;
    f.innerHTML=`<div class="wrap"><div class="footer__cols">${cols}</div></div><div class="facc">${acc}</div><div class="wrap">${soc}</div>${part}<div class="footer__legal"><div class="wrap"><span>Gizlilik ve Güvenlik</span><span>© 2026 Turkcell</span></div></div>`;
  }

  /* ---- mobil drawer + toggle ---- */
  const drawer=document.getElementById('drawer'),burger=document.getElementById('burger');
  if(burger)burger.addEventListener('click',()=>drawer.classList.add('open'));
  if(drawer)drawer.querySelectorAll('[data-close]').forEach(e=>e.addEventListener('click',()=>drawer.classList.remove('open')));
  const tg=document.getElementById('cmpToggle');if(tg)tg.addEventListener('click',()=>tg.classList.toggle('on'));

  /* ---- paket verisi (doğrulanmış: DonanımHaber + AI Overview) ---- */
  const PLAT={
    tvplus:["pl-tvplus.png","TV+","Canlı TV ve içerikler"],
    hbo:["pl-hbo.png","HBO Max","TV+ uygulaması içinde"],
    nTemel:["pl-netflix-temel.png","Netflix","Temel kademe"],
    nStandart:["pl-netflix-standart.png","Netflix","Standart kademe"],
    nPremium:["pl-netflix-premium.png","Netflix","Premium kademe"],
    amazon:["pl-amazonprime.png","Amazon Prime","Prime Video ve ayrıcalıklar"],
    ytp:["pl-ytpremium.png","YouTube Premium","Reklamsız, arka planda oynatma"],
    ytm:["pl-ytmusic.png","YouTube Music","Sınırsız müzik"],
    fizy:["pl-fizy.png","fizy","Müzik ve sesli kitap"],
    wonjo:["pl-wonjo.png","Wonjo Kids","2-6 yaş çocuk içerikleri"],
    lifebox:["pl-lifebox.png","Lifebox","Bulut depolama"]
  };
  const PKG={
    star:{name:"Turkcell One Star",disc:"%44",t:500,nt:750,tier:"Netflix Temel",feat:false,plats:["tvplus","hbo","nTemel","amazon","ytp","ytm","wonjo","lifebox"]},
    plus:{name:"Turkcell One Plus",disc:"%42",t:600,nt:850,tier:"Netflix Standart",feat:true,plats:["tvplus","hbo","nStandart","amazon","ytp","ytm","fizy","wonjo","lifebox"]},
    premium:{name:"Turkcell One Premium",disc:"%39",t:690,nt:950,tier:"Netflix Premium",feat:false,plats:["tvplus","hbo","nPremium","amazon","ytp","ytm","fizy","wonjo","lifebox"]}
  };
  const tiles=ks=>ks.map(k=>`<img src="assets/${PLAT[k][0]}" alt="${PLAT[k][1]}" title="${PLAT[k][1]}">`).join('');
  const oldPrice=t=>Math.round(t/0.6/10)*10; // ~%40 daha uygun varsayımı (tasarım göstergesi)

  /* ---- liste: zenginleştirilmiş paket kartları (tüm varyant öğeleri DOM'da, CSS ile gösterilir) ---- */
  const cardsEl=document.getElementById('cards');
  if(cardsEl){
    const detailRows=p=>p.plats.map(k=>`<li><img src="assets/${PLAT[k][0]}" alt="${PLAT[k][1]}"><span>${PLAT[k][1]}<em>${PLAT[k][2]}</em></span></li>`).join('');
    cardsEl.innerHTML=Object.entries(PKG).map(([id,p])=>`
      <div class="pcard ${p.feat?'feat':''}" data-id="${id}">
        <span class="disc-ribbon">Servislerde geçerli ${p.disc} indirim avantajı</span>
        <div class="pcard__head">
          <button class="pcard__detail-top" data-toggle type="button">Detaylar ›</button>
          <span class="disc">Servislerde Geçerli ${p.disc} İndirim</span>
          <h3>${p.name}</h3>
          ${p.feat?'<span class="feat-rib">En Çok Tercih Edilen</span>':''}
        </div>
        <div class="pcard__body">
          <p class="desc">${p.name} ile tek bir yerden ve sabit fiyat garantisiyle favori platformlarınızın keyfini çıkarın!</p>
          <div class="save-line"><span class="old">Tek tek ~${oldPrice(p.t)} TL</span><span class="new">${p.t} TL</span><span class="tag">~%40 daha uygun</span></div>
          <div class="inc-label">Pakete dahil platformlar</div>
          <div class="plats">${tiles(p.plats)}</div>
          <div class="hl-row"><span class="chip-tier">${p.tier}</span><span class="chip-fix">✓ 12 ay sabit fiyat</span></div>
          <div class="pcard__foot">
            <div class="pcard__price">${p.t} TL<small>/1 AY</small></div>
            <a class="pcard__go" href="detay.html?paket=${id}">İncele ›</a>
            <button class="pcard__go pcard__go--d" data-toggle type="button">Detaylar <span class="cv">▾</span></button>
          </div>
          <div class="pcard__details">
            <div class="pd-grid">
              <div><div class="pd-label">Pakete dahil platformlar</div><ul class="pd-list">${detailRows(p)}</ul></div>
              <div><div class="pd-label">Öne çıkanlar</div><ul class="pd-hl"><li>Tek fatura · hepsi mobil faturanda</li><li>12 ay sabit fiyat garantisi</li><li>Tek tek almaya göre ~%40 daha uygun</li><li>Kredi kartı gerekmez · faturana yansır</li></ul><div class="pd-tier">${p.tier} · Taahhütlü ${p.t} TL · Taahhütsüz ${p.nt} TL</div></div>
            </div>
            <a class="pd-cta" href="detay.html?paket=${id}">Paketi incele ve satın al →</a>
          </div>
        </div>
      </div>`).join('');
    cardsEl.querySelectorAll('[data-toggle]').forEach(b=>b.addEventListener('click',e=>{
      e.preventDefault();e.stopPropagation();
      const card=b.closest('.pcard');const wasOpen=card.classList.contains('open');
      cardsEl.querySelectorAll('.pcard.open').forEach(c=>c.classList.remove('open'));
      if(!wasOpen)card.classList.add('open');
    }));
    // karta tıkla → paket detayına git (Detaylar / link / açık popover hariç)
    cardsEl.querySelectorAll('.pcard').forEach(card=>card.addEventListener('click',e=>{
      if(e.target.closest('[data-toggle]')||e.target.closest('a')||e.target.closest('.pcard__details'))return;
      location.href='detay.html?paket='+card.dataset.id;
    }));
    // dışarı tıkla → açık popover'ı kapat
    document.addEventListener('click',e=>{if(!e.target.closest('.pcard'))cardsEl.querySelectorAll('.pcard.open').forEach(c=>c.classList.remove('open'));});
  }

  /* ---- detay sayfası ---- */
  if(document.body.classList.contains('detailpage')){
    const id=(new URLSearchParams(location.search).get('paket'))||'star';
    const p=PKG[id]||PKG.star;
    const set=(s,v)=>{const e=document.querySelector(s);if(e)e.textContent=v;};
    set('#dName',p.name); set('#dCardName',p.name); set('#crumbCur',p.name);
    document.querySelectorAll('.d-desc').forEach(e=>e.textContent=`${p.name} ile tek bir yerden ve sabit fiyat garantisiyle favori platformlarınızın keyfini çıkarın!`);
    document.querySelector('#prT').innerHTML=p.t+'<small> TL</small>';
    document.querySelector('#prN').innerHTML=p.nt+'<small> TL</small>';
    document.title=p.name;
    // platform grid (tam)
    const pg=document.getElementById('platGrid');
    if(pg)pg.innerHTML=p.plats.map(k=>{const[l,n,d]=PLAT[k];return `<div class="plat-item"><img src="assets/${l}" alt="${n}"><div><b>${n}</b><span>${d}</span></div></div>`;}).join('');
    // platform şeridi (hero · varyant B/C)
    const strip=document.getElementById('dPlatStrip');
    if(strip){const show=p.plats.slice(0,8);strip.innerHTML=tiles(show)+(p.plats.length>show.length?`<span class="more">+${p.plats.length-show.length}</span>`:'');}
    // zenginleştirilmiş sol kart: logolar + hap bilgiler (varyant A & D)
    const cplats=document.getElementById('dCardPlats');
    if(cplats)cplats.innerHTML=tiles(p.plats);
    const cpills=document.getElementById('dCardPills');
    if(cpills)cpills.innerHTML=`<span class="pill-i">${p.disc} indirim</span><span class="pill-i">${p.tier}</span><span class="pill-i fix">✓ 12 ay sabit fiyat</span><span class="pill-i fix">~%40 daha uygun</span>`;
    // değer kutusu (varyant C · sol karta taşındı)
    const cval=document.getElementById('dCardValue');
    if(cval)cval.innerHTML=`<div class="dcv-row"><span class="dcv-old">Tek tek ~${oldPrice(p.t)} TL</span><span class="dcv-new">${p.t} TL<small>/ay</small></span></div><span class="dcv-sub">Dahil platformları tek tek almaya kıyasla ~%40 daha uygun · 12 ay boyunca sabit fiyat garantisi.</span>`;
    // detay butonları kaydırma
    document.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',e=>{
      e.preventDefault();const t=document.querySelector(b.dataset.scroll);if(t)t.scrollIntoView({behavior:'smooth',block:'start'});
    }));
    // option select + sticky
    const boxes=[...document.querySelectorAll('.opt-box')];
    const sBar=document.querySelector('#stickyPrice'),sLab=document.querySelector('#stickyLab');
    function sel(b){boxes.forEach(x=>x.classList.remove('sel'));b.classList.add('sel');const isT=b.dataset.opt==='t';if(sBar)sBar.innerHTML=(isT?p.t:p.nt)+'<small> TL</small>';if(sLab)sLab.textContent=isT?'TAAHHÜTLÜ ABONELİK':'TAAHHÜTSÜZ ABONELİK';}
    boxes.forEach(b=>b.addEventListener('click',()=>sel(b)));
    if(boxes[0])sel(boxes[0]);
  }

  /* ============================================================
     CRO VARYANT SİSTEMİ · floating seçici + kalıcılık (localStorage)
     ============================================================ */
  const VARIANTS=[
    ['a','Zengin','Geniş açıklama, büyük logolar ve etiketler · bilgi yoğun.'],
    ['b','Sade','Küçük logolar, az metin, düz başlık, tek güçlü fiyat/CTA.'],
    ['c','Değer','Tasarruf satırı + tam genişlik indirim şeridi · değer odaklı.'],
    ['d','Detay','Türk Telekom tarzı belirgin "Detaylar" butonları (üst + alt).']
  ];
  const KEY='tcone_v';
  function getV(){
    const m=(location.hash||'').match(/v=([abcd])/i);     // ?#v=b ile QA / paylaşım override
    if(m){const v=m[1].toLowerCase();try{localStorage.setItem(KEY,v);}catch(e){}return v;}
    try{return localStorage.getItem(KEY)||'a';}catch(e){return 'a';}
  }
  function applyV(v){document.body.dataset.variant=v;
    document.querySelectorAll('.vopt').forEach(o=>o.classList.toggle('on',o.dataset.v===v));
    const dot=document.querySelector('.vswitch__tab .dot');if(dot)dot.textContent=v.toUpperCase();
  }
  function setV(v){try{localStorage.setItem(KEY,v);}catch(e){}applyV(v);}

  const sw=document.createElement('div');
  sw.className='vswitch';
  sw.innerHTML=`
    <button class="vswitch__tab" aria-label="Varyantlar">VARYANT <span class="dot">A</span></button>
    <div class="vswitch__panel">
      <h5>Tasarım Varyantı</h5>
      <div class="vsub">CRO denemesi · seçim liste ve detay sayfasında geçerli</div>
      ${VARIANTS.map(([k,t,d])=>`<div class="vopt" data-v="${k}"><span class="k">${k.toUpperCase()}</span><span class="vtxt"><b>${t}</b><span>${d}</span></span></div>`).join('')}
      <div class="vswitch__note">Seçim tarayıcında saklanır; sayfalar arası korunur. Sunum/teslim için tek varyant sabitlenebilir.</div>
    </div>`;
  document.body.appendChild(sw);
  sw.querySelector('.vswitch__tab').addEventListener('click',()=>sw.classList.toggle('open'));
  sw.querySelectorAll('.vopt').forEach(o=>o.addEventListener('click',()=>setV(o.dataset.v)));
  document.addEventListener('click',e=>{if(!sw.contains(e.target))sw.classList.remove('open');});
  window.addEventListener('hashchange',()=>applyV(getV()));
  applyV(getV());
})();
