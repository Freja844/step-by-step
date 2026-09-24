const demo = {
  owner: {
    name: 'Lisa',
    age: 60,
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    location: '2100 København Ø',
    bio: 'Jeg elsker at tage lange gåture med Minnie og holde kontakt med trygge hundeluftere.',
    phone: '+45 22 22 22 22',
    emailVerified: true,
    phoneVerified: true,
    identityVerified: false,
  },
  walker: {
    name: 'Alex',
    age: 16,
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    location: '2000 Frederiksberg',
    bio: 'Jeg er altid glad for at gå med hunde, især aktive hunde og rustige racer.',
    experience: '2+ år med hunde',
    experienceYears: 2,
    price: 100,
    availability: 'Fredag 16:00',
    maxDistance: 4,
    breeds: ['Poodle', 'Labrador', 'Corgi'],
    rating: 4.9,
    completedWalks: 23,
    emailVerified: true,
    phoneVerified: true,
    identityVerified: false,
    demo: true,
  },
  dogs: [
    {
      id: 'minnie',
      name: 'Minnie',
      photo:
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
      breed: 'Poodle',
      age: 4,
      size: 'Mellem',
      energy: 'Mellem',
      personality: 'Loves lange ture',
      otherDogs: 'Venlig med andre hunde',
      offLeash: false,
      special: 'Holder sig til snor',
      notes: 'Vil helst undgå store hunde.',
      owner: 'Lisa',
      distance: '1.2 km',
      when: 'Fredag',
      time: '16:00–17:00',
      price: 100,
      requestedBy: 'Lisa',
    },
    {
      id: 'luna',
      name: 'Luna',
      photo:
        'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80',
      breed: 'Cavalier King Charles',
      age: 3,
      size: 'Lille',
      energy: 'Lav',
      personality: 'Sødt og roligt',
      otherDogs: 'God med mennesker',
      offLeash: true,
      special: 'Behøver rolig tur',
      notes: 'Må gerne gå i parken.',
      owner: 'Sofie',
      distance: '3.4 km',
      when: 'Lørdag',
      time: '10:00–11:00',
      price: 140,
      requestedBy: 'Sofie',
    },
    {
      id: 'max',
      name: 'Max',
      photo:
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
      breed: 'Labrador',
      age: 6,
      size: 'Stor',
      energy: 'Høj',
      personality: 'Elsker at løbe',
      otherDogs: 'Velfungerer med andre hunde',
      offLeash: true,
      special: 'Skal have en længere tur',
      notes: 'Hjælper gerne med at få afløb.',
      owner: 'Mikkel',
      distance: '2.7 km',
      when: 'Mandag',
      time: '18:30–19:30',
      price: 160,
      requestedBy: 'Mikkel',
    },
  ],
  walkerProfiles: [
    {
      id: 'alex',
      name: 'Alex',
      age: 16,
      photo:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
      distance: '1.2 km væk',
      rating: 4.9,
      completedWalks: 23,
      price: 100,
      experience: '2+ år',
      availability: 'Fredag 16:00',
      verified: ['Email', 'Telefon', 'Identitet'],
      badges: ['Demo', 'Verified'],
      demo: true,
      bio: 'Jeg går gerne med aktive hunde og holder altid sikkert afstand.',
      location: '2000 Frederiksberg',
      maxDistance: 4,
    },
    {
      id: 'emma',
      name: 'Emma',
      age: 17,
      photo:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
      distance: '2.4 km væk',
      rating: 4.8,
      completedWalks: 18,
      price: 110,
      experience: '1+ år',
      availability: 'Lørdag 10:00',
      verified: ['Email', 'Telefon'],
      badges: ['Demo'],
      demo: true,
      bio: 'Jeg har god erfaring med mindre hunde og rolig pacing.',
      location: '2200 København N',
      maxDistance: 5,
    },
    {
      id: 'noah',
      name: 'Noah',
      age: 21,
      photo:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
      distance: '3.0 km væk',
      rating: 5.0,
      completedWalks: 31,
      price: 120,
      experience: '3+ år',
      availability: 'Tirsdag 18:00',
      verified: ['Email', 'Telefon', 'Identitet'],
      badges: ['Demo', 'Top rated'],
      demo: true,
      bio: 'Jeg er ansvarlig, rolig og elsker hunde i alle aldre.',
      location: '2300 København S',
      maxDistance: 6,
    },
  ],
  bookings: [
    {
      id: 'b1',
      dog: 'Minnie',
      owner: 'Lisa',
      walker: 'Alex',
      date: 'Fredag',
      startTime: '16:00',
      duration: 60,
      price: 100,
      status: 'requested',
      message: 'Ny forespørgsel',
    },
    {
      id: 'b2',
      dog: 'Luna',
      owner: 'Sofie',
      walker: 'Emma',
      date: 'Lørdag',
      startTime: '10:00',
      duration: 45,
      price: 110,
      status: 'accepted',
      message: 'Tur bekræftet',
    },
    {
      id: 'b3',
      dog: 'Max',
      owner: 'Mikkel',
      walker: 'Noah',
      date: 'Mandag',
      startTime: '18:30',
      duration: 90,
      price: 160,
      status: 'completed',
      message: 'Tur gennemført',
    },
  ],
  messages: [
    {
      id: 'm1',
      person: 'Lisa',
      preview: 'Minnie elsker lange ture. Hun kan dog ikke lide store hunde.',
      unread: 1,
      messages: [
        { sender: 'Lisa', text: 'Hej Alex! Minnie elsker lange ture. Hun kan dog ikke lide store hunde.' },
        { sender: 'Alex', text: 'Det er helt fint! Jeg sørger for at holde afstand.' },
      ],
    },
    {
      id: 'm2',
      person: 'Emma',
      preview: 'Tak for at tage dig af Luna.',
      unread: 0,
      messages: [
        { sender: 'Emma', text: 'Tak for at tage dig af Luna.' },
        { sender: 'Alex', text: 'Det var en fornøjelse!' },
      ],
    },
  ],
  reviews: [
    {
      user: 'Lisa',
      rating: 5,
      text: 'Alex var utrolig ansvarlig og venlig. Minnie var glad hele turen.',
    },
    {
      user: 'Sofie',
      rating: 4,
      text: 'Emma var punktlig og gjorde en god indsats med Luna.',
    },
    {
      user: 'Mikkel',
      rating: 5,
      text: 'Noah gav Max en fantastisk, aktiv tur og var meget professionel.',
    },
  ],
  metrics: {
    walletTarget: 500,
    walletCurrent: 350,
    totalEarned: 2840,
    completedWalks: 31,
    upcomingBookings: 4,
    rating: 4.9,
  },
};

const state = {
  page: 'home',
  activeChat: 'm1',
  dashboardRole: 'walker',
  filterDistance: 'all',
  filterPrice: 'all',
  filterAvailability: 'all',
  filterExperience: 'all',
  filterDogSize: 'all',
  filterRating: 'all',
};

const app = document.querySelector('#app');

function formatPrice(value) {
  return `${value} DKK`;
}

function toStars(rating) {
  return '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
}

function setPage(nextPage) {
  state.page = nextPage;
  render();
}

function render() {
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="brand-wrap">
          <div class="brand-mark">🐾</div>
          <div>
            <div class="brand-name">Step by Step</div>
            <div class="brand-tag">Walk dogs. Earn money. Make a difference.</div>
          </div>
        </div>
        <nav class="desktop-nav" aria-label="Hovednavigation">
          <button class="nav-btn ${state.page === 'home' ? 'active' : ''}" data-page="home">Forside</button>
          <button class="nav-btn ${state.page === 'find-walkers' ? 'active' : ''}" data-page="find-walkers">Find hundelufter</button>
          <button class="nav-btn ${state.page === 'find-dogs' ? 'active' : ''}" data-page="find-dogs">Find hund</button>
          <button class="nav-btn ${state.page === 'bookings' ? 'active' : ''}" data-page="bookings">Bookinger</button>
          <button class="nav-btn ${state.page === 'messages' ? 'active' : ''}" data-page="messages">Beskeder</button>
          <button class="nav-btn ${state.page === 'profile' ? 'active' : ''}" data-page="profile">Profil</button>
        </nav>
        <button class="primary-btn desktop-only" data-page="dashboard">Min konto</button>
      </header>

      <main class="page-shell">
        ${renderPage()}
      </main>

      <nav class="bottom-nav" aria-label="Mobilnavigation">
        <button class="mobile-nav-btn ${state.page === 'home' ? 'active' : ''}" data-page="home">🏠<span>Home</span></button>
        <button class="mobile-nav-btn ${state.page === 'find-walkers' ? 'active' : ''}" data-page="find-walkers">🔎<span>Find</span></button>
        <button class="mobile-nav-btn ${state.page === 'bookings' ? 'active' : ''}" data-page="bookings">📅<span>Bookinger</span></button>
        <button class="mobile-nav-btn ${state.page === 'messages' ? 'active' : ''}" data-page="messages">💬<span>Beskeder</span></button>
        <button class="mobile-nav-btn ${state.page === 'profile' ? 'active' : ''}" data-page="profile">👤<span>Profil</span></button>
      </nav>
    </div>
  `;

  document.querySelectorAll('[data-page]').forEach((button) => {
    button.addEventListener('click', () => {
      const page = button.dataset.page;
      if (page === 'dashboard') {
        state.page = 'dashboard';
      } else {
        state.page = page;
      }
      render();
    });
  });
}

function renderPage() {
  switch (state.page) {
    case 'find-walkers':
      return renderFindWalkersPage();
    case 'find-dogs':
      return renderFindDogsPage();
    case 'bookings':
      return renderBookingsPage();
    case 'messages':
      return renderMessagesPage();
    case 'dashboard':
      return renderDashboardPage();
    case 'profile':
      return renderProfilePage();
    case 'safety':
      return renderSafetyPage();
    case 'payment':
      return renderPaymentPage();
    case 'about':
      return renderAboutPage();
    case 'privacy':
      return renderPrivacyPage();
    case 'terms':
      return renderTermsPage();
    case 'contact':
      return renderContactPage();
    case 'database':
      return renderDatabasePage();
    default:
      return renderHomePage();
  }
}

function renderHomePage() {
  return `
    <section class="hero card hero-panel">
      <div class="hero-copy">
        <span class="eyebrow">Demo prototype • Danmark</span>
        <h1>Find en hund. Tjen lidt ekstra. 🐕</h1>
        <p>
          Step by Step gør det nemt at finde en hund at gå tur med — eller finde en tryg hundelufter i nærheden.
        </p>
        <div class="hero-actions">
          <button class="primary-btn" data-page="find-dogs">Jeg vil lufte hunde</button>
          <button class="secondary-btn" data-page="find-walkers">Jeg har brug for en hundelufter</button>
        </div>
        <div class="mini-stats">
          <div><strong>1.2k+</strong><span>gange</span></div>
          <div><strong>89%</strong><span>gentagelser</span></div>
          <div><strong>4.9/5</strong><span>gennemsnit</span></div>
        </div>
      </div>
      <div class="hero-art">
        <div class="floating-card card">
          <span class="badge success">Live demo</span>
          <div class="mini-profile-row">
            <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=80" alt="Minnie" />
            <div>
              <strong>Minnie</strong>
              <span>Poodle • 4 år</span>
            </div>
          </div>
          <div class="travel-pill">1.2 km væk • Fredag 16:00</div>
          <div class="card-list">
            <span>100 DKK/time</span>
            <span>Tryg og venlig</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-header">
        <div>
          <span class="eyebrow">Sådan fungerer det</span>
          <h2>Så nemt er det</h2>
        </div>
      </div>
      <div class="steps-grid">
        <article class="step-card card">
          <div class="step-number">1</div>
          <h3>Opret en profil</h3>
          <p>Skab din konto som hundeejer eller hundelufter med grundlæggende oplysninger.</p>
        </article>
        <article class="step-card card">
          <div class="step-number">2</div>
          <h3>Find et match</h3>
          <p>Se hundeluftere eller hunde i nærheden baseret på afstand, pris og tilgængelighed.</p>
        </article>
        <article class="step-card card">
          <div class="step-number">3</div>
          <h3>Aftal en gåtur</h3>
          <p>Send en forespørgsel, accepter en aftale, og planlæg turen i appen.</p>
        </article>
        <article class="step-card card">
          <div class="step-number">4</div>
          <h3>Gå tur og tjen penge</h3>
          <p>Følg aftalen, få feedback og byg videre på din profil.</p>
        </article>
      </div>
    </section>

    <section class="section-block safety-box card">
      <div class="section-header">
        <div>
          <span class="eyebrow">Sikkerhed</span>
          <h2>Trygt, tydeligt og ansvarligt</h2>
        </div>
        <button class="secondary-btn small" data-page="safety">Læs mere</button>
      </div>
      <div class="safety-grid">
        <div class="safety-item">
          <div class="icon-wrap">🔒</div>
          <h3>Beskyttelse af oplysninger</h3>
          <p>Eksakte adresser vises ikke offentligt, og du deler kun det, du har brug for.</p>
        </div>
        <div class="safety-item">
          <div class="icon-wrap">✅</div>
          <h3>Demoverifikation</h3>
          <p>Verifikationsbadge er markeret som demo/prototype-funktionalitet.</p>
        </div>
        <div class="safety-item">
          <div class="icon-wrap">🚩</div>
          <h3>Rapporter og blokér</h3>
          <p>Hvis noget føles forkert, kan du rapportere eller blokere en bruger.</p>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-header">
        <div>
          <span class="eyebrow">Anmeldelser</span>
          <h2>Det siger vores demo-brugere</h2>
        </div>
      </div>
      <div class="testimonial-grid">
        <article class="testimonial card">
          <div class="stars">★★★★★</div>
          <p>“Jeg fandt en fantastisk hundelufter til Minnie på 10 minutter. Hun var sikker, venlig og super professionel.”</p>
          <div class="testimonial-person">
            <strong>Lisa</strong>
            <span>Hundeejer • Demo-konto</span>
          </div>
        </article>
        <article class="testimonial card">
          <div class="stars">★★★★★</div>
          <p>“Jeg kunne tjene lidt ekstra i weekenden og få en god rutine med hunde i mit område.”</p>
          <div class="testimonial-person">
            <strong>Alex</strong>
            <span>Hundelufter • Demo-konto</span>
          </div>
        </article>
        <article class="testimonial card">
          <div class="stars">★★★★☆</div>
          <p>“Det føltes som et virkelig produkt, og jeg kunne nemt se, hvordan vi ville bruge det i praksis.”</p>
          <div class="testimonial-person">
            <strong>Emma</strong>
            <span>Hundelufter • Demo-konto</span>
          </div>
        </article>
      </div>
    </section>

    <footer class="site-footer card">
      <div class="footer-brand">
        <div class="brand-mark small">🐾</div>
        <div>
          <strong>Step by Step</strong>
          <p>Prototype til dansk hundegåtur-markedsplads.</p>
        </div>
      </div>
      <div class="footer-links">
        <button class="link-btn" data-page="about">Om Step by Step</button>
        <button class="link-btn" data-page="safety">Sikkerhed</button>
        <button class="link-btn" data-page="privacy">Privatliv</button>
        <button class="link-btn" data-page="terms">Vilkår</button>
        <button class="link-btn" data-page="contact">Kontakt</button>
      </div>
    </footer>
  `;
}

function renderFindWalkersPage() {
  const filtered = demo.walkerProfiles.filter((walker) => {
    const matchDistance = state.filterDistance === 'all' || (state.filterDistance === 'under2' ? walker.distance.includes('1.2') || walker.distance.includes('2.4') : true);
    const matchPrice = state.filterPrice === 'all' || Number(walker.price) <= (state.filterPrice === 'under100' ? 100 : 150);
    const matchExperience = state.filterExperience === 'all' || (state.filterExperience === '2plus' ? walker.experience.includes('2') || walker.experience.includes('3') : true);
    const matchRating = state.filterRating === 'all' || Number(walker.rating) >= Number(state.filterRating);
    return matchDistance && matchPrice && matchExperience && matchRating;
  });

  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Find hundelufter</span>
        <h1>Se hundeluftere i nærheden</h1>
      </div>
    </section>

    <section class="filter-bar card">
      <div class="filter-grid">
        <label>
          <span>Afstand</span>
          <select data-filter="distance">
            <option value="all">Alle</option>
            <option value="under2">Under 2 km</option>
            <option value="under5">Under 5 km</option>
          </select>
        </label>
        <label>
          <span>Pris</span>
          <select data-filter="price">
            <option value="all">Alle</option>
            <option value="under100">Op til 100 DKK</option>
            <option value="under150">Op til 150 DKK</option>
          </select>
        </label>
        <label>
          <span>Erfaring</span>
          <select data-filter="experience">
            <option value="all">Alle</option>
            <option value="2plus">2+ år</option>
            <option value="3plus">3+ år</option>
          </select>
        </label>
        <label>
          <span>Rating</span>
          <select data-filter="rating">
            <option value="all">Alle</option>
            <option value="4.8">4.8+</option>
            <option value="4.9">4.9+</option>
          </select>
        </label>
      </div>
    </section>

    <section class="card-list">
      ${filtered.map((walker) => `
        <article class="profile-card card">
          <div class="profile-main">
            <img src="${walker.photo}" alt="${walker.name}" />
            <div class="profile-meta">
              <h3>${walker.name}</h3>
              <p>${walker.age} år</p>
              <div class="rating-line">
                <span class="star">⭐</span>
                <strong>${walker.rating}</strong>
                <span>(${walker.completedWalks} gåture)</span>
              </div>
              <p class="location">📍 ${walker.distance}</p>
              <div class="chip-row">
                ${walker.badges.map((badge) => `<span class="chip badge">${badge}</span>`).join('')}
              </div>
            </div>
          </div>
          <div class="detail-grid">
            <div><span>Pris</span><strong>${formatPrice(walker.price)}/time</strong></div>
            <div><span>Erfaring</span><strong>${walker.experience}</strong></div>
            <div><span>Tilgængelig</span><strong>${walker.availability}</strong></div>
            <div><span>Verificeret</span><strong>${walker.verified.join(', ')}</strong></div>
          </div>
          <button class="primary-btn full">Send forespørgsel</button>
        </article>
      `).join('')}
    </section>
  `;

  setTimeout(() => {
    document.querySelectorAll('[data-filter]').forEach((select) => {
      select.addEventListener('change', (event) => {
        const key = event.target.dataset.filter;
        const value = event.target.value;
        if (key === 'distance') state.filterDistance = value;
        if (key === 'price') state.filterPrice = value;
        if (key === 'experience') state.filterExperience = value;
        if (key === 'rating') state.filterRating = value;
        render();
      });
    });
  }, 0);
}

function renderFindDogsPage() {
  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Find en hund</span>
        <h1>Hundesider, der leder efter en gåtur</h1>
      </div>
    </section>

    <section class="card-list">
      ${demo.dogs.map((dog) => `
        <article class="dog-card card">
          <div class="dog-header">
            <div>
              <h3>${dog.name} 🐩</h3>
              <p>${dog.distance} væk</p>
            </div>
            <span class="badge okay">${dog.when}</span>
          </div>
          <div class="dog-body">
            <img src="${dog.photo}" alt="${dog.name}" />
            <div class="dog-info">
              <p><strong>${dog.time}</strong></p>
              <p>${formatPrice(dog.price)}</p>
              <p>${dog.breed}</p>
              <p>${dog.energy} energi</p>
            </div>
          </div>
          <button class="primary-btn full" data-page="bookings">Jeg vil gerne gå med ${dog.name}</button>
        </article>
      `).join('')}
    </section>
  `;
}

function renderBookingsPage() {
  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Bookinger</span>
        <h1>Din aftaleoversigt</h1>
      </div>
    </section>

    <section class="booking-hero card payment-box">
      <div>
        <span class="eyebrow">Demo betalingsoversigt</span>
        <h3>Walk: ${formatPrice(100)}</h3>
        <p>Step by Step servicegebyr: ${formatPrice(10)}</p>
        <p><strong>Total: ${formatPrice(110)}</strong></p>
      </div>
      <div class="payment-badge">Betaling kommer snart</div>
      <p class="fine-print">Dette er en prototype. Ingen reelle penge overføres.</p>
    </section>

    <section class="card-list">
      ${demo.bookings.map((booking) => `
        <article class="booking-card card">
          <div class="booking-topline">
            <div>
              <strong>${booking.dog}</strong>
              <span>${booking.date} ${booking.startTime}</span>
            </div>
            <span class="status status-${booking.status}">${booking.status}</span>
          </div>
          <div class="booking-details">
            <span>Hundelufter: ${booking.walker}</span>
            <span>Hundeejer: ${booking.owner}</span>
            <span>${booking.duration} minutter</span>
            <span>${formatPrice(booking.price)}</span>
          </div>
          ${booking.status === 'requested' ? `
            <div class="booking-actions">
              <button class="primary-btn small">Accepter</button>
              <button class="secondary-btn small">Afvis</button>
            </div>
          ` : ''}
          ${booking.status === 'accepted' ? `<div class="confirmation-banner">Tur bekræftet</div>` : ''}
        </article>
      `).join('')}
    </section>
  `;
}

function renderMessagesPage() {
  const selected = demo.messages.find((message) => message.id === state.activeChat) || demo.messages[0];

  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Beskeder</span>
        <h1>Chats tilknyttet din booking</h1>
      </div>
    </section>

    <section class="messages-layout card">
      <aside class="message-list">
        ${demo.messages.map((message) => `
          <button class="message-thread ${state.activeChat === message.id ? 'active' : ''}" data-chat="${message.id}">
            <div class="message-person-row">
              <strong>${message.person}</strong>
              ${message.unread ? '<span class="unread-dot">1</span>' : ''}
            </div>
            <span>${message.preview}</span>
          </button>
        `).join('')}
      </aside>

      <div class="chat-panel">
        <div class="chat-header">
          <h3>${selected.person}</h3>
          <span>Booking tilknyttet</span>
        </div>
        <div class="chat-bubbles">
          ${selected.messages.map((message) => `
            <div class="bubble ${message.sender === 'Alex' ? 'outgoing' : 'incoming'}">
              <strong>${message.sender}:</strong>
              <p>${message.text}</p>
            </div>
          `).join('')}
        </div>
        <div class="composer">
          <input type="text" placeholder="Skriv en besked..." />
          <button class="primary-btn small">Send</button>
        </div>
      </div>
    </section>
  `;

  setTimeout(() => {
    document.querySelectorAll('[data-chat]').forEach((button) => {
      button.addEventListener('click', () => {
        state.activeChat = button.dataset.chat;
        render();
      });
    });
  }, 0);
}

function renderDashboardPage() {
  const progress = (demo.metrics.walletCurrent / demo.metrics.walletTarget) * 100;

  return `
    <section class="page-header dashboard-switcher">
      <div>
        <span class="eyebrow">Dashboard</span>
        <h1>${state.dashboardRole === 'walker' ? 'Hej Alex 👋' : 'Hej Lisa 👋'}</h1>
      </div>
      <div class="pill-toggle">
        <button class="toggle-btn ${state.dashboardRole === 'walker' ? 'active' : ''}" data-role="walker">Gående</button>
        <button class="toggle-btn ${state.dashboardRole === 'owner' ? 'active' : ''}" data-role="owner">Hundeejer</button>
      </div>
    </section>

    ${state.dashboardRole === 'walker' ? `
      <section class="dashboard-grid">
        <article class="card highlight-card">
          <span class="eyebrow">Dit mål</span>
          <h3>${demo.metrics.walletCurrent} / ${demo.metrics.walletTarget} DKK</h3>
          <div class="progress-bar"><span style="width:${Math.min(progress, 100)}%"></span></div>
        </article>
        <article class="stat-card card">
          <span>Total optjent</span>
          <strong>${formatPrice(demo.metrics.totalEarned)}</strong>
        </article>
        <article class="stat-card card">
          <span>Fuldførte ture</span>
          <strong>${demo.metrics.completedWalks}</strong>
        </article>
        <article class="stat-card card">
          <span>Rating</span>
          <strong>${demo.metrics.rating}</strong>
        </article>
        <article class="stat-card card">
          <span>Kommende bookinger</span>
          <strong>${demo.metrics.upcomingBookings}</strong>
        </article>
      </section>

      <section class="section-block">
        <div class="section-header">
          <div>
            <span class="eyebrow">Dine kommende ture</span>
            <h2>Minnie</h2>
          </div>
        </div>
        <div class="booking-card card">
          <div class="booking-topline">
            <div>
              <strong>Minnie</strong>
              <span>Fredag 16:00</span>
            </div>
            <span class="status status-accepted">bekræftet</span>
          </div>
          <div class="booking-details">
            <span>60 minutter</span>
            <span>${formatPrice(100)}</span>
          </div>
        </div>
      </section>
    ` : `
      <section class="dashboard-grid owner-grid">
        <article class="card">
          <span class="eyebrow">Dine hunde</span>
          <h3>Minnie 🐩</h3>
        </article>
        <article class="card">
          <span class="eyebrow">Kommende ture</span>
          <h3>Fredag 16:00</h3>
          <p>Alex • 60 minutter</p>
        </article>
      </section>
    `;
  `;

  setTimeout(() => {
    document.querySelectorAll('[data-role]').forEach((button) => {
      button.addEventListener('click', () => {
        state.dashboardRole = button.dataset.role;
        render();
      });
    });
  }, 0);
}

function renderProfilePage() {
  const selected = demo.walkerProfiles[0];

  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Profil</span>
        <h1>${selected.name}</h1>
      </div>
    </section>

    <section class="profile-detail card">
      <div class="profile-header-row">
        <img src="${selected.photo}" alt="${selected.name}" />
        <div>
          <h3>${selected.name}, ${selected.age}</h3>
          <p>${selected.location}</p>
          <div class="chip-row">
            <span class="chip badge">✓ Email verified</span>
            <span class="chip badge">✓ Phone verified</span>
            <span class="chip badge">✓ Identity verified</span>
          </div>
          <small class="fine-print">Demo/prototype-funktionalitet — rigtig verifikation er ikke implementeret.</small>
        </div>
      </div>
      <div class="profile-grid">
        <div><span>Biografi</span><p>${selected.bio}</p></div>
        <div><span>Erfaring</span><p>${selected.experience}</p></div>
        <div><span>Rating</span><p>${selected.rating} (${selected.completedWalks} gåture)</p></div>
        <div><span>Tilgængelighed</span><p>${selected.availability}</p></div>
      </div>
    </section>
  `;
}

function renderSafetyPage() {
  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Sikkerhed</span>
        <h1>Tryghed er en vigtig del af oplevelsen</h1>
      </div>
    </section>

    <section class="safety-grid large card">
      <div class="safety-item">
        <div class="icon-wrap">🤝</div>
        <h3>Del ikke unødvendige personlige oplysninger</h3>
        <p>Undgå at dele oplysninger, som ikke er nødvendige for aftalen, og sørg for at hold dig inden for appen.</p>
      </div>
      <div class="safety-item">
        <div class="icon-wrap">📍</div>
        <h3>Eksakte adresser er ikke offentligt synlige</h3>
        <p>Dette prototypemål viser kun omtrentlige placeringer, så du ikke deler din private adresse.</p>
      </div>
      <div class="safety-item">
        <div class="icon-wrap">🚩</div>
        <h3>Rapporter eller bloker en bruger</h3>
        <p>Du kan markere en bruger, hvis adfærden virker utryg, uprofessionel eller irriterende.</p>
      </div>
      <div class="safety-item">
        <div class="icon-wrap">🌳</div>
        <h3>Mød gerne et offentligt sted</h3>
        <p>Hvis du mødes i starten, så vælg et sikkert, offentligt sted og hold en tydelig plan.</p>
      </div>
      <div class="safety-item">
        <div class="icon-wrap">⚠️</div>
        <h3>MVP har ikke rigtig identitetskontrol eller forsikring</h3>
        <p>Dette er en prototype, og de faktiske sikkerhedsprocesser er ikke på plads endnu.</p>
      </div>
    </section>

    <section class="action-row">
      <button class="primary-btn">Report user</button>
      <button class="secondary-btn">Block user</button>
    </section>
  `;
}

function renderPaymentPage() {
  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Betaling</span>
        <h1>Prototypevisning af betaling</h1>
      </div>
    </section>

    <section class="card payment-card">
      <div class="payment-row"><span>Walk:</span><strong>${formatPrice(100)}</strong></div>
      <div class="payment-row"><span>Step by Step servicegebyr:</span><strong>${formatPrice(10)}</strong></div>
      <div class="payment-row total"><span>Total:</span><strong>${formatPrice(110)}</strong></div>
      <div class="payment-banner">Betaling kommer snart</div>
      <p class="fine-print">Dette er et demo-prototype. Ingen reelle penge overføres, og der sker ingen faktisk betaling.</p>
    </section>
  `;
}

function renderAboutPage() {
  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Om Step by Step</span>
        <h1>En dansk digital platform til hundegående</h1>
      </div>
    </section>
    <section class="card text-card">
      <p>Step by Step er en prototype, der hjælper hundeejere med at finde trygge hundeluftere i nærheden, og som giver unge og voksne mulighed for at tjene penge ved at gå tur med hunde.</p>
      <p>Formålet er at demonstrere en moderne, sikker og brugervenlig mobil-first løsning, uden at gøre krav på betaling, verificering eller forsikring i denne MVP-version.</p>
    </section>
  `;
}

function renderPrivacyPage() {
  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Privatliv</span>
        <h1>Vi håndterer data ansvarligt</h1>
      </div>
    </section>
    <section class="card text-card">
      <p>I denne prototype vises kun omtrentlige placeringer, aldrig fulde adresser. Profiloplysninger er demo-data og er ikke forbundet med rigtige personlige oplysninger.</p>
      <p>Vi gør ikke brug af rigtige betalingsoplysninger, MitID, eller faktiske identitetsbekræftelser i denne version.</p>
    </section>
  `;
}

function renderTermsPage() {
  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Vilkår</span>
        <h1>Prototype-vilkår</h1>
      </div>
    </section>
    <section class="card text-card">
      <p>Dette er en gratis MVP/prototype, der er designet til demonstrering og testning. Platformen skal ikke opfattes som en færdig fintech- eller identitetsbekræftelsesløsning.</p>
      <p>Alle demo-konti, priser og anmeldelser skal betragtes som illustrationer og ikke som reelle finansielle eller juridiske aftaler.</p>
    </section>
  `;
}

function renderContactPage() {
  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Kontakt</span>
        <h1>Har du spørgsmål?</h1>
      </div>
    </section>
    <section class="card contact-card">
      <p><strong>Email:</strong> hello@stepbystep-demo.dk</p>
      <p><strong>Telefon:</strong> +45 12 34 56 78</p>
      <p><strong>Adresse:</strong> København, Danmark</p>
      <p><strong>Note:</strong> Denne prototype er ikke et rigtigt forretningsdrifts- eller supportteam.</p>
    </section>
  `;
}

function renderDatabasePage() {
  return `
    <section class="page-header">
      <div>
        <span class="eyebrow">Database</span>
        <h1>Datamodellering til MVP</h1>
      </div>
    </section>

    <section class="database-grid">
      <article class="card">
        <h3>Users</h3>
        <ul>
          <li>id</li>
          <li>name</li>
          <li>email</li>
          <li>phone</li>
          <li>role (walker / owner / both)</li>
          <li>created_at</li>
        </ul>
      </article>
      <article class="card">
        <h3>Profiles</h3>
        <ul>
          <li>user_id</li>
          <li>first_name</li>
          <li>photo_url</li>
          <li>age</li>
          <li>postcode</li>
          <li>bio</li>
          <li>verification_status</li>
        </ul>
      </article>
      <article class="card">
        <h3>Dogs</h3>
        <ul>
          <li>id</li>
          <li>owner_id</li>
          <li>name</li>
          <li>breed</li>
          <li>age</li>
          <li>size</li>
          <li>energy_level</li>
          <li>off_leash</li>
        </ul>
      </article>
      <article class="card">
        <h3>Availability</h3>
        <ul>
          <li>walker_id</li>
          <li>day</li>
          <li>start_time</li>
          <li>end_time</li>
          <li>timezone</li>
        </ul>
      </article>
      <article class="card">
        <h3>Bookings</h3>
        <ul>
          <li>id</li>
          <li>dog_id</li>
          <li>walker_id</li>
          <li>owner_id</li>
          <li>date</li>
          <li>start_time</li>
          <li>duration_minutes</li>
          <li>price_dkk</li>
          <li>status</li>
        </ul>
      </article>
      <article class="card">
        <h3>Messages</h3>
        <ul>
          <li>id</li>
          <li>booking_id</li>
          <li>sender_id</li>
          <li>receiver_id</li>
          <li>content</li>
          <li>sent_at</li>
        </ul>
      </article>
      <article class="card">
        <h3>Reviews</h3>
        <ul>
          <li>id</li>
          <li>booking_id</li>
          <li>author_id</li>
          <li>target_user_id</li>
          <li>rating</li>
          <li>comment</li>
        </ul>
      </article>
    </section>
  `;
}

render();
