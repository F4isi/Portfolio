/* ==========================================================================
   Faisal Noushad — Unity Game Developer Portfolio Main Scripts
   Interactive UI, Project Modal, Dynamic Grid, Ambient Background Canvas
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initNavbar();
  initProjectsGrid();
  initProjectModal();
  initContactForm();
  initCopyEmail();
  initSmoothScroll();
});

/* ==========================================================================
   Ambient Particle Canvas (Subtle, High Performance)
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  const particleCount = Math.min(width > 768 ? 45 : 20, 60);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.15,
      color: Math.random() > 0.6 ? '#00f2fe' : '#38bdf8'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();

      // Connect near particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = '#00f2fe';
          ctx.globalAlpha = (1 - dist / 110) * 0.07;
          ctx.stroke();
        }
      }
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   Navbar & Navigation
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close mobile nav when clicking a link
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  // Active section indicator
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (activeLink) activeLink.classList.add('active');
      } else {
        if (activeLink) activeLink.classList.remove('active');
      }
    });
  });
}

/* ==========================================================================
   Filterable Games Grid
   ========================================================================== */
function initProjectsGrid() {
  const grid = document.getElementById('games-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid || typeof PROJECTS_DATA === 'undefined') return;

  function renderGrid(filter = 'all') {
    grid.innerHTML = '';

    const filtered = PROJECTS_DATA.filter(p => {
      if (filter === 'all') return true;
      if (filter === 'featured') return p.isFeatured;
      if (filter === '3d') return p.category.includes('3d');
      if (filter === '2d') return p.category.includes('2d');
      if (filter === 'ai') return p.category.includes('ai');
      return true;
    });

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.setAttribute('data-id', project.id);

      const techBadges = project.techStack
        .slice(0, 3)
        .map(t => `<span class="badge">${t}</span>`)
        .join('');

      card.innerHTML = `
        <div class="game-card-media">
          <img src="${project.thumbnail || project.image}" alt="${project.title}" loading="lazy" />
          <span class="game-card-platform">${project.platform}</span>
        </div>
        <div class="game-card-body">
          <div class="game-card-genre">${project.genre}</div>
          <h3 class="game-card-title">${project.title}</h3>
          <p class="game-card-desc">${project.tagline}</p>
          <div class="game-card-tags">
            ${techBadges}
          </div>
          <div class="game-card-footer">
            <button class="btn btn-outline-cyan btn-sm view-details-btn" data-id="${project.id}">
              Case Study
            </button>
            ${project.playUrl ? `
              <a href="${project.playUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                Play Game ↗
              </a>
            ` : `
              <a href="${project.githubUrl || '#'}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                Code ↗
              </a>
            `}
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    // Reattach listeners to card buttons
    grid.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  // Initial render
  renderGrid('all');

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderGrid(filter);
    });
  });

  // Featured Case study view details buttons
  document.querySelectorAll('.open-case-study-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openProjectModal(id);
    });
  });
}

/* ==========================================================================
   Project Detail Modal Logic
   ========================================================================== */
function initProjectModal() {
  const backdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!backdrop) return;

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const backdrop = document.getElementById('project-modal');
  if (!backdrop || typeof PROJECTS_DATA === 'undefined') return;

  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modalImg = document.getElementById('modal-img');
  const modalGenre = document.getElementById('modal-genre');
  const modalTitle = document.getElementById('modal-title');
  const modalTagline = document.getElementById('modal-tagline');
  const modalTags = document.getElementById('modal-tags');
  const modalOverview = document.getElementById('modal-overview');
  const modalRole = document.getElementById('modal-role');
  const modalFeatures = document.getElementById('modal-features');
  const modalHighlights = document.getElementById('modal-highlights');
  const modalChallenge = document.getElementById('modal-challenge');
  const modalSolution = document.getElementById('modal-solution');
  const modalActions = document.getElementById('modal-actions');

  modalImg.src = project.image || project.thumbnail;
  modalImg.alt = project.title;
  modalGenre.textContent = `${project.genre} • ${project.platform}`;
  modalTitle.textContent = project.title;
  modalTagline.textContent = project.tagline;

  // Tech tags
  modalTags.innerHTML = project.techStack
    .map(t => `<span class="badge badge-cyan">${t}</span>`)
    .join('');

  modalOverview.textContent = project.overview;
  modalRole.textContent = project.role;

  // Key Features
  modalFeatures.innerHTML = project.keyFeatures
    .map(f => `<li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> ${f}</li>`)
    .join('');

  // Technical Highlights
  if (project.technicalHighlights && project.technicalHighlights.length) {
    modalHighlights.innerHTML = project.technicalHighlights
      .map(h => `
        <div class="modal-highlight-box">
          <h4>${h.title}</h4>
          <p>${h.desc}</p>
        </div>
      `)
      .join('');
  } else {
    modalHighlights.innerHTML = '';
  }

  // Challenge & Solution
  modalChallenge.textContent = project.challenge || "Optimizing gameplay mechanics and framerate stability in browser WebGL environments.";
  modalSolution.textContent = project.solution || "Structured clean modular C# scripts, decoupled events, and used object pooling to reduce garbage collector overhead.";

  // Modal Action Buttons
  modalActions.innerHTML = `
    ${project.playUrl ? `
      <a href="${project.playUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        Play Game in Browser ↗
      </a>
    ` : ''}
    ${project.itchUrl ? `
      <a href="${project.itchUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        View on Itch.io ↗
      </a>
    ` : ''}
    ${project.githubUrl ? `
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        GitHub Profile ↗
      </a>
    ` : ''}
  `;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   Copy Email To Clipboard
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'faisalnoushad11@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '✓ Copied to Clipboard!';
      copyBtn.style.color = 'var(--accent-emerald)';

      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.color = '';
      }, 2500);
    }).catch(() => {
      // Fallback
      window.location.href = `mailto:${email}`;
    });
  });
}

/* ==========================================================================
   Contact Form Client Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('sender-name').value;
    const email = document.getElementById('sender-email').value;
    const subject = document.getElementById('sender-subject').value || 'Game Developer Inquiry';
    const message = document.getElementById('sender-message').value;

    if (statusMsg) {
      statusMsg.className = 'form-status success';
      statusMsg.innerHTML = 'Thank you for reaching out! Opening your default mail client...';
    }

    // Launch mailto with user-filled information
    const mailtoLink = `mailto:faisalnoushad11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      form.reset();
    }, 600);
  });
}

/* ==========================================================================
   Smooth Scrolling & Back to Top
   ========================================================================== */
function initSmoothScroll() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}
