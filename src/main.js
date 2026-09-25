const demo = {
  walkers: [
    { name: 'Alex', age: 16, distance: '1,2 km', rating: 4.9, walks: 23, price: 100, time: 'Fredag 16:00', experience: '2+ år', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
    { name: 'Emma', age: 17, distance: '2,4 km', rating: 4.8, walks: 18, price: 110, time: 'Lørdag 10:00', experience: '1+ år', photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80' },
    { name: 'Noah', age: 21, distance: '3,0 km', rating: 5.0, walks: 31, price: 120, time: 'Tirsdag 18:00', experience: '3+ år', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80' },
  ],
  dogs: [
    { name: 'Minnie', breed: 'Poodle', age: 4, energy: 'Mellem energi', distance: '1,2 km', time: 'Fredag 16:00–17:00', price: 100, photo: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=700&q=80' },
    { name: 'Luna', breed: 'Cavalier King Charles', age: 3, energy: 'Lav energi', distance: '3,4 km', time: 'Lørdag 10:00–11:00', price: 140, photo: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=700&q=80' },
    { name: 'Max', breed: 'Labrador', age: 6, energy: 'Høj energi', distance: '2,7 km', time: 'Mandag 18:30–19:30', price: 160, photo: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=700&q=80' },
  ],
};

const state = { page: 'home', role: 'walker', chat: 0, filters: { price: 'all', rating: 'all' } };
const app = document.querySelector('#app');
const price = (n) => `${n} DKK`;

function go(page) { state.page = page; render(); window.scrollTo(0, 0); }
function stars(n) { return '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n)); }

function layout(content) {
  return `<div class="app-shell">
    <header class="topbar">
      <button class="brand" data-page="home"><span class="paw">🐾</span><span><b>Step by Step</b><small>Walk dogs. Earn money. Make a difference.</small></span></button>
      <nav class="desktop-nav">
        <button data-page="home">Forside</button><button data-page="find-walkers">Find hundelufter</button><button data-page="find-dogs">Find hund</button><button data-page="bookings">Bookinger</button><button data-page="messages">Beskeder</button><button data-page="profile">Profil</button>
      </nav>
      <button class="primary-btn desktop-only" data-page="dashboard">Min konto</button>
    </header>
    <main>${content}</main>
    <nav class="bottom-nav"><button data-page="home">🏠<span>Home</span></button><button data-page="find-walkers">🔎<span>Find</span></button><button data-page="bookings">📅<span>Bookinger</span></button><button data-page="messages">💬<span>Beskeder</span></button><button data-page="profile">👤<span>Profil</span></button></nav>
  </div>`;
}

function pageHeader(label, title, text = '') { return `<div class="page-header"><span class="eyebrow">${label}</span><h1>${title}</h1>${text ? `<p>${text}</p>` : ''}</div>`; }
function card(content, className = '') { return `<article class="card ${className}">${content}</article>`; }

function home() {
  return `<section class="hero card"><div><span class="eyebrow">Demo prototype • Danmark</span><h1>Find en hund.<br>Tjen lidt ekstra. 🐕</h1><p>Step by Step gør det nemt at finde en hund at gå tur med — eller finde en tryg hundelufter i nærheden.</p><div class="actions"><button class="primary-btn" data-page="find-dogs">Jeg vil lufte hunde</button><button class="secondary-btn" data-page="find-walkers">Jeg har brug for en hundelufter</button></div><div class="stats"><b>1.2k+<small>gåture</small></b><b>89%<small>gentagelser</small></b><b>4.9/5<small>gennemsnit</small></b></div></div><div class="hero-art">${card('<span class="badge green">Live demo</span><div class="mini-dog"><img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=80" alt="Minnie"><div><b>Minnie</b><small>Poodle • 4 år</small></div></div><strong>📍 1,2 km væk • Fredag 16:00</strong><p>100 DKK/time</p>')}</div></section>
  <section class="section"><div class="section-title"><span class="eyebrow">Sådan fungerer det</span><h2>Så nemt er det</h2></div><div class="grid four">${['Opret en profil','Find et match i nærheden','Aftal en gåtur','Gå tur og tjen penge'].map((x, i) => card(`<span class="number">${i + 1}</span><h3>${x}</h3><p>${['Opret dig som hundeejer eller hundelufter.','Find et trygt match tæt på dig.','Send og accepter en booking.','Få erfaring, anmeldelser og indtjening.'][i]}</p>`)).join('')}</div></section>
  <section class="section safety card"><div><span class="eyebrow">Sikkerhed</span><h2>Trygt, tydeligt og ansvarligt</h2></div><div class="grid three"><div>🔒<h3>Privatliv først</h3><p>Eksakte adresser vises ikke offentligt.</p></div><div>✅<h3>Demoverifikation</h3><p>Badge er tydeligt markeret som prototype.</p></div><div>🚩<h3>Rapportér og blokér</h3><p>Du kan rapportere eller blokere brugere.</p></div></div><button class="secondary-btn" data-page="safety">Læs om sikkerhed</button></section>
  <section class="section"><div class="section-title"><span class="eyebrow">Anmeldelser</span><h2>Det siger vores demo-brugere</h2></div><div class="grid three">${[['Lisa','Jeg fandt en fantastisk hundelufter til Minnie.','★★★★★'],['Alex','Jeg kan tjene lidt ekstra i weekenden.','★★★★★'],['Emma','Det føles som et rigtigt produkt.','★★★★☆']].map(([name, text, rating]) => card(`<div class="stars">${rating}</div><p>“${text}”</p><strong>${name}</strong><small>Demo-konto</small>`)).join('')}</div></section>
  <footer class="footer card"><b>🐾 Step by Step</b><div><button data-page="about">Om os</button><button data-page="safety">Sikkerhed</button><button data-page="privacy">Privatliv</button><button data-page="terms">Vilkår</button><button data-page="contact">Kontakt</button></div></footer>`;
}

function findWalkers() {
  let list = demo.walkers.filter((w) => state.filters.price === 'all' || w.price <= Number(state.filters.price)).filter((w) => state.filters.rating === 'all' || w.rating >= Number(state.filters.rating));
  return pageHeader('Find hundelufter', 'Se hundeluftere i nærheden', 'Alle profiler er demo-konti. Placeringer er omtrentlige.') + `<div class="filters card"><label>Pris<select id="price-filter"><option value="all">Alle priser</option><option value="100">Op til 100 DKK</option><option value="120">Op til 120 DKK</option></select></label><label>Rating<select id="rating-filter"><option value="all">Alle ratings</option><option value="4.8">4,8+</option><option value="4.9">4,9+</option></select></label></div><div class="list">${list.map((w) => card(`<div class="person"><img src="${w.photo}" alt="${w.name}"><div><h2>${w.name}, ${w.age}</h2><p>⭐ <b>${w.rating}</b> (${w.walks} gåture)</p><p>📍 ${w.distance} væk</p><span class="badge">Demo</span> <span class="badge green">Email verified</span></div></div><div class="details"><span><small>Pris</small><b>${price(w.price)}/time</b></span><span><small>Erfaring</small><b>${w.experience}</b></span><span><small>Ledig</small><b>${w.time}</b></span></div><button class="primary-btn full" data-page="bookings">Send forespørgsel</button>`)).join('')}</div>`;
}

function findDogs() {
  return pageHeader('Find en hund', 'Hunde, der leder efter en gåtur', 'Se hundens behov, tidspunkt og omtrentlige afstand.') + `<div class="list">${demo.dogs.map((d) => card(`<div class="dog-row"><img src="${d.photo}" alt="${d.name}"><div><h2>${d.name} 🐩</h2><p>${d.breed} • ${d.age} år</p><p>📍 ${d.distance} væk</p><p>${d.time} • ${price(d.price)}</p><span class="badge">${d.energy}</span><p>Venlig med mennesker • Skal holde snor</p></div></div><button class="primary-btn full" data-page="bookings">Jeg vil gerne gå med ${d.name}</button>`)).join('')}</div>`;
}

function bookings() {
  return pageHeader('Bookinger', 'Din aftaleoversigt') + card(`<div class="payment-preview"><div><span class="eyebrow">Demo betalingsoversigt</span><h3>Walk: ${price(100)}</h3><p>Step by Step servicegebyr: ${price(10)}</p><h3>Total: ${price(110)}</h3></div><b>Betaling kommer snart</b></div><small>Dette er en prototype. Ingen reelle penge overføres.</small>`, 'payment') + `<div class="list"><div class="booking card"><div><h2>Minnie</h2><p>Lisa → Alex</p><p>Fredag 16:00 • 60 minutter • ${price(100)}</p></div><span class="status requested">requested</span><div class="actions"><button class="primary-btn small">Accepter</button><button class="secondary-btn small">Afvis</button></div></div><div class="booking card"><div><h2>Luna</h2><p>Emma • Lørdag 10:00</p><p>45 minutter • ${price(110)}</p></div><span class="status accepted">Tur bekræftet</span></div></div>`;
}

function messages() {
  const chats = [['Lisa','Hej Alex! Minnie elsker lange ture. Hun kan dog ikke lide store hunde.'],['Emma','Tak for at tage dig af Luna.']];
  const [name, text] = chats[state.chat];
  return pageHeader('Beskeder', 'Chats tilknyttet din booking') + `<div class="messages card"><aside>${chats.map((c, i) => `<button class="thread ${i === state.chat ? 'selected' : ''}" data-chat="${i}"><b>${c[0]}</b><small>${c[1]}</small></button>`).join('')}</aside><section class="chat"><h2>${name}</h2><div class="bubble">${text}</div><div class="bubble outgoing">Det er helt fint! Jeg sørger for at holde afstand.</div><div class="composer"><input placeholder="Skriv en besked..."><button class="primary-btn small">Send</button></div></section></div>`;
}

function dashboard() {
  const owner = state.role === 'owner';
  return pageHeader('Dashboard', owner ? 'Hej Lisa 👋' : 'Hej Alex 👋') + `<div class="role-toggle"><button class="${!owner ? 'active' : ''}" data-role="walker">Hundelufter</button><button class="${owner ? 'active' : ''}" data-role="owner">Hundeejer</button></div>${owner ? `<div class="grid two">${card('<span class="eyebrow">Dine hunde</span><h2>Minnie 🐩</h2><p>Poodle • 4 år</p>')}${card('<span class="eyebrow">Kommende ture</span><h2>Fredag 16:00</h2><p>Alex • 60 minutter</p>')}</div>` : `<div class="dashboard-grid"><div class="card goal"><span class="eyebrow">Dit mål</span><h2>350 / 500 DKK</h2><div class="progress"><i></i></div></div>${[['Total optjent','2.840 DKK'],['Fuldførte ture','31'],['Rating','4,9'],['Kommende bookinger','4']].map(([a,b]) => card(`<small>${a}</small><h2>${b}</h2>`)).join('')}</div>${card('<span class="eyebrow">Dine kommende ture</span><h2>Minnie</h2><p>Fredag 16:00 • 60 minutter • 100 DKK</p><span class="status accepted">Tur bekræftet</span>')}</div>`}`;
}

function profile() { return pageHeader('Profil', 'Alex, 16') + card(`<div class="profile-head"><img src="${demo.walkers[0].photo}" alt="Alex"><div><h2>Alex, 16</h2><p>📍 2000 Frederiksberg</p><span class="badge green">✓ Email verified</span> <span class="badge green">✓ Phone verified</span><p class="note">Demo/prototype-funktionalitet — rigtig identitetsverifikation er ikke implementeret.</p></div></div><div class="details"><span><small>Biografi</small><b>Jeg går gerne med aktive hunde.</b></span><span><small>Erfaring</small><b>2+ år med hunde</b></span><span><small>Rating</small><b>⭐ 4,9 (23 ture)</b></span><span><small>Tilgængelig</small><b>Fredag 16:00</b></span></div>`); }
function info(title, text) { return pageHeader('Step by Step', title) + card(`<p>${text}</p>`); }
function safety() { return pageHeader('Sikkerhed', 'Tryghed er vigtig') + `<div class="grid three">${['Del ikke unødvendige personlige oplysninger.','Eksakte adresser vises ikke offentligt.','Mød gerne i en offentlig og sikker lokation.','Du kan rapportere eller blokere en bruger.','MVP’en har endnu ikke ægte identitetsverifikation eller forsikring.'].map((x) => card(`<h3>🛡️</h3><p>${x}</p>`)).join('')}</div><div class="actions"><button class="primary-btn">Report user</button><button class="secondary-btn">Block user</button></div>`; }

function render() {
  const pages = { home, 'find-walkers': findWalkers, 'find-dogs': findDogs, bookings, messages, dashboard, profile, safety, about: () => info('Om Step by Step','En dansk prototype, hvor hundeejere finder hundeluftere, og unge og voksne kan tjene penge på gåture.'), privacy: () => info('Privatliv','Vi bruger kun demo-data i denne prototype og viser kun omtrentlige placeringer.'), terms: () => info('Vilkår','Dette er en gratis MVP/prototype. Priser, profiler og anmeldelser er kun illustrationer.'), contact: () => info('Kontakt','Email: hello@stepbystep-demo.dk') };
  app.innerHTML = layout(pages[state.page] ? pages[state.page]() : home());
  document.querySelectorAll('[data-page]').forEach((el) => el.addEventListener('click', () => go(el.dataset.page)));
  document.querySelectorAll('[data-chat]').forEach((el) => el.addEventListener('click', () => { state.chat = Number(el.dataset.chat); render(); }));
  document.querySelectorAll('[data-role]').forEach((el) => el.addEventListener('click', () => { state.role = el.dataset.role; render(); }));
  const pf = document.querySelector('#price-filter'); if (pf) { pf.value = state.filters.price; pf.addEventListener('change', (e) => { state.filters.price = e.target.value; render(); }); }
  const rf = document.querySelector('#rating-filter'); if (rf) { rf.value = state.filters.rating; rf.addEventListener('change', (e) => { state.filters.rating = e.target.value; render(); }); }
}
render();
