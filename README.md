:root {
  --bg: #f5f8fb;
  --panel: #ffffff;
  --panel-alt: #eef6ff;
  --primary: #5a7cff;
  --primary-dark: #3b5de5;
  --primary-soft: #ecf1ff;
  --accent: #ffb766;
  --success: #2bb673;
  --warning: #f5b73a;
  --danger: #ef5b5b;
  --text: #1f2d3d;
  --muted: #63758a;
  --line: #e3ebf5;
  --shadow: 0 18px 48px rgba(49, 86, 146, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #f6f9ff 0%, #edf5ff 100%);
  color: var(--text);
}

button,
input,
select {
  font: inherit;
}

button {
  border: none;
  cursor: pointer;
}

img {
  display: block;
  width: 100%;
}

#app {
  min-height: 100vh;
}

.app-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 16px 96px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow);
  border-radius: 20px;
  padding: 18px 22px;
  position: sticky;
  top: 15px;
  z-index: 10;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: linear-gradient(135deg, #fff3d4, #ffc861);
  font-size: 1.8rem;
  box-shadow: inset 0 3px 10px rgba(255, 255, 255, 0.75);
}

.brand-mark.small {
  width: 40px;
  height: 40px;
  font-size: 1.3rem;
}

.brand-name {
  font-size: 1.15rem;
  font-weight: 800;
}

.brand-tag {
  font-size: 0.7rem;
  color: var(--muted);
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-btn,
.mobile-nav-btn,
.link-btn,
.toggle-btn {
  background: transparent;
  color: var(--muted);
  font-weight: 600;
  border-radius: 999px;
  transition: 0.2s ease;
}

.nav-btn {
  padding: 10px 16px;
}

.nav-btn.active,
.toggle-btn.active {
  background: var(--primary-soft);
  color: var(--primary-dark);
}

.primary-btn,
.secondary-btn {
  border-radius: 14px;
  padding: 14px 18px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  box-shadow: 0 12px 24px rgba(90, 124, 255, 0.28);
}

.secondary-btn {
  background: #edf3ff;
  color: var(--primary-dark);
}

.primary-btn.small,
.secondary-btn.small {
  padding: 10px 14px;
  font-size: 0.9rem;
}

.primary-btn:hover,
.secondary-btn:hover,
.nav-btn:hover,
.mobile-nav-btn:hover,
.link-btn:hover {
  transform: translateY(-1px);
}

.desktop-only {
  display: inline-flex;
}

.page-shell {
  padding-top: 24px;
}

.card {
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
  padding: 30px;
}

.hero-panel {
  background: linear-gradient(135deg, rgba(255,255,255,0.85), rgba(238,246,255,0.83));
}

.eyebrow {
  display: inline-block;
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--primary-dark);
  margin-bottom: 10px;
}

.hero-copy h1,
.page-header h1,
.section-header h2 {
  margin: 0 0 12px;
  line-height: 1.1;
}

.hero-copy h1 {
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  max-width: 560px;
}

.hero-copy p {
  font-size: 1.06rem;
  line-height: 1.7;
  color: var(--muted);
  max-width: 620px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.mini-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 30px;
  max-width: 430px;
}

.mini-stats div {
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(90, 124, 255, 0.04);
  border: 1px solid var(--line);
}

.mini-stats strong,
.stat-card strong,
.detail-grid strong {
  display: block;
  font-size: 1.15rem;
}

.mini-stats span,
.detail-grid span,
.profile-grid span,
.stat-card span,
.booking-details span,
.theme-note {
  color: var(--muted);
}

.hero-art {
  display: grid;
  place-items: center;
}

.floating-card {
  width: min(100%, 360px);
  padding: 18px;
  background: linear-gradient(180deg, rgba(252, 248, 240, 0.9), rgba(255,255,255,0.95));
}

.badge,
.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.74rem;
  font-weight: 700;
}

.badge.success,
.status.status-accepted,
.chip.badge {
  background: rgba(43, 182, 115, 0.12);
  color: #1e8e5c;
}

.badge.okay {
  background: rgba(90, 124, 255, 0.12);
  color: var(--primary-dark);
}

.mini-profile-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 14px;
}

.mini-profile-row img {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 16px;
}

.mini-profile-row strong,
.mini-profile-row span {
  display: block;
}

.mini-profile-row span {
  font-size: 0.82rem;
  color: var(--muted);
}

.travel-pill {
  margin: 18px 0 12px;
  background: rgba(255, 183, 102, 0.18);
  color: #91510a;
  border-radius: 999px;
  padding: 10px 14px;
  font-weight: 600;
}

.card-list,
.database-grid,
.safety-grid,
.steps-grid,
.testimonial-grid,
.dashboard-grid {
  display: grid;
  gap: 18px;
}

.steps-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.testimonial-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.section-block {
  margin-top: 32px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
}

.step-card,
.testimonial,
.stat-card,
.booking-card,
.profile-card,
.dog-card,
.site-footer,
.text-card,
.contact-card,
.message-thread,
.payment-card,
.profile-detail,
.safety-item {
  padding: 18px;
}

.step-number {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  background: var(--primary-soft);
  color: var(--primary-dark);
  border-radius: 14px;
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 18px;
}

.step-card h3,
.testimonial h3,
.profile-card h3,
.dog-card h3,
.booking-card h3,
.stat-card strong,
.contact-card p {
  margin: 0 0 10px;
}

.step-card p,
.testimonial p,
.card p,
.text-card p,
.contact-card p,
.safety-item p {
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}

.safety-box {
  padding: 20px;
}

.safety-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.safety-item {
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(245, 248, 251, 0.9);
}

.icon-wrap {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: var(--primary-soft);
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.stars {
  color: #ffb041;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}

.testimonial-person {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.testimonial-person span {
  color: var(--muted);
  font-size: 0.85rem;
}

.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-top: 30px;
  padding: 20px 22px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-brand strong {
  display: block;
  margin-bottom: 4px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.link-btn {
  padding: 8px 10px;
  color: var(--muted);
  font-weight: 600;
}

.filter-bar {
  margin-top: 18px;
  padding: 18px;
}

.filter-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.filter-grid label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-weight: 600;
}

.filter-grid select,
.composer input {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
  background: rgba(247, 250, 253, 0.9);
  color: var(--text);
}

.profile-card,
.dog-card,
.booking-card {
  padding: 20px;
}

.profile-main {
  display: flex;
  gap: 16px;
  align-items: center;
}

.profile-main img {
  width: 84px;
  height: 84px;
  object-fit: cover;
  border-radius: 20px;
}

.rating-line {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
}

.location {
  margin: 8px 0;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 18px 0;
}

.full {
  width: 100%;
}

.dog-header,
.booking-topline,
.profile-header-row,
.message-person-row,
.payment-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.dog-body {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 18px;
  margin: 16px 0 18px;
}

.dog-body img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 16px;
}

.dog-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.booking-hero,
.payment-box {
  margin-top: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.payment-badge,
.confirmation-banner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 999px;
  font-weight: 700;
}

.payment-badge {
  background: rgba(255, 183, 102, 0.15);
  color: #91510a;
}

.confirmation-banner {
  margin-top: 16px;
  background: rgba(43, 182, 115, 0.12);
  color: #1e8e5c;
}

.fine-print {
  font-size: 0.8rem;
  color: var(--muted);
}

.booking-actions,
.action-row {
  display: flex;
  gap: 12px;
  margin-top: 16px;
}

.status {
  text-transform: capitalize;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.status-requested {
  background: rgba(255, 183, 102, 0.18);
  color: #8d5d12;
}

.status-accepted {
  background: rgba(43, 182, 115, 0.12);
  color: #1e8e5c;
}

.status-declined {
  background: rgba(239, 91, 91, 0.12);
  color: #a53b3b;
}

.status-cancelled {
  background: rgba(130, 138, 146, 0.12);
  color: #5c6470;
}

.status-completed {
  background: rgba(90, 124, 255, 0.1);
  color: var(--primary-dark);
}

.messages-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 0;
  overflow: hidden;
}

.message-list {
  border-right: 1px solid var(--line);
  background: rgba(247, 250, 255, 0.94);
}

.message-thread {
  width: 100%;
  text-align: left;
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
  background: transparent;
}

.message-thread.active {
  background: rgba(90, 124, 255, 0.08);
}

.message-thread span {
  display: block;
  color: var(--muted);
  margin-top: 4px;
}

.unread-dot {
  display: inline-grid;
  place-items: center;
  min-width: 24px;
  height: 24px;
  padding: 0 6px;
  border-radius: 999px;
  background: var(--primary);
  color: white;
  font-size: 0.72rem;
}

.chat-panel {
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.chat-header {
  padding: 18px 20px;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.chat-bubbles {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.bubble {
  max-width: 75%;
  border-radius: 18px;
  padding: 12px 14px;
}

.bubble strong {
  display: block;
  margin-bottom: 4px;
}

.bubble p {
  margin: 0;
  line-height: 1.5;
}

.bubble.incoming {
  background: rgba(243, 247, 255, 0.95);
}

.bubble.outgoing {
  background: rgba(90, 124, 255, 0.08);
  margin-left: auto;
}

.composer {
  display: flex;
  gap: 12px;
  padding: 18px 20px;
  border-top: 1px solid var(--line);
}

.composer input {
  flex: 1;
}

.dashboard-grid {
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-bottom: 28px;
}

.highlight-card {
  grid-column: span 2;
  padding: 20px;
  background: linear-gradient(135deg, rgba(90,124,255,0.08), rgba(255,183,102,0.08));
}

.progress-bar {
  margin-top: 16px;
  width: 100%;
  height: 14px;
  border-radius: 999px;
  background: rgba(90, 124, 255, 0.08);
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--success));
  border-radius: inherit;
}

.dashboard-switcher {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.pill-toggle {
  display: inline-flex;
  background: rgba(90, 124, 255, 0.06);
  border-radius: 999px;
  padding: 6px;
}

.toggle-btn {
  padding: 10px 14px;
}

.profile-detail {
  margin-top: 28px;
}

.profile-header-row {
  align-items: flex-start;
}

.profile-header-row img {
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 26px;
}

.profile-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.profile-grid p {
  margin: 8px 0 0;
  color: var(--text);
}

.large {
  padding: 20px;
}

.action-row {
  margin-top: 20px;
}

.payment-card {
  margin-top: 22px;
  max-width: 520px;
}

.payment-row {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.payment-row.total {
  font-size: 1.08rem;
}

.payment-banner {
  margin-top: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 12px;
  font-weight: 700;
  background: rgba(255, 183, 102, 0.18);
  color: #91510a;
}

.database-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 24px;
}

.database-grid ul {
  margin: 14px 0 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.8;
}

.text-card,
.contact-card {
  margin-top: 24px;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 12px 14px calc(12px + env(safe-area-inset-bottom));
  background: rgba(255, 255, 255, 0.96);
  border-top: 1px solid var(--line);
  backdrop-filter: blur(16px);
  z-index: 20;
}

.mobile-nav-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 8px 8px;
  border-radius: 12px;
  color: var(--muted);
}

.mobile-nav-btn.active {
  background: var(--primary-soft);
  color: var(--primary-dark);
}

.mobile-nav-btn span {
  font-size: 0.68rem;
}

@media (max-width: 960px) {
  .hero,
  .steps-grid,
  .safety-grid,
  .testimonial-grid,
  .dashboard-grid,
  .database-grid,
  .messages-layout,
  .filter-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .desktop-nav {
    display: none;
  }

  .desktop-only {
    display: none;
  }

  .messages-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .app-shell {
    padding: 14px 12px 88px;
  }

  .topbar {
    padding: 12px 14px;
  }

  .hero,
  .steps-grid,
  .safety-grid,
  .testimonial-grid,
  .filter-grid,
  .database-grid,
  .dashboard-grid,
  .profile-grid,
  .detail-grid,
  .dog-body {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    font-size: 2.4rem;
  }

  .hero {
    padding: 18px 16px;
  }

  .hero-actions,
  .booking-actions,
  .action-row,
  .site-footer,
  .section-header,
  .dashboard-switcher,
  .booking-hero,
  .profile-header-row,
  .dog-header,
  .booking-topline,
  .message-person-row,
  .composer {
    flex-direction: column;
    align-items: flex-start;
  }

  .site-footer {
    padding: 18px;
  }

  .profile-main,
  .profile-header-row {
    display: block;
  }

  .profile-main img,
  .profile-header-row img {
    width: 100%;
    max-width: 180px;
    margin-bottom: 12px;
  }

  .mini-stats {
    grid-template-columns: 1fr;
  }
}
