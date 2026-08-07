import { documentsData } from '../data/documents.js';

const documentTypeConfig = [
  {
    key: 'cours',
    title: 'Cours Magistraux',
    icon: 'menu_book',
    iconColor: 'text-primary'
  },
  {
    key: 'td',
    title: 'Travaux Dirigés (TD)',
    icon: 'assignment',
    iconColor: 'text-primary'
  },
  {
    key: 'annales',
    title: 'Annales / Autres',
    icon: 'quiz',
    iconColor: 'text-primary'
  }
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '');
}

function highlightMatches(text, query) {
  if (!query) return escapeHtml(text);

  const escapedText = escapeHtml(text);
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedQuery})`, 'gi');

  return escapedText.replace(regex, '<mark class="bg-primary/10 text-primary rounded px-1 py-0.5">$1</mark>');
}

function renderLevels() {
  const levelsContainer = document.getElementById('courses-levels');
  if (!levelsContainer) return;

  levelsContainer.innerHTML = documentsData.levels
    .map((level) => {
      const isActive = level.name === documentsData.currentLevel;
      return `
        <button data-level="${level.name}" aria-pressed="${isActive}" class="level-tab shrink-0 lg:w-full flex items-center justify-center lg:justify-between px-md py-sm rounded-lg ${isActive ? 'bg-primary/10 text-primary relative group transition-colors font-bold' : 'text-on-surface-variant hover:bg-surface-container transition-colors group'}">
          ${isActive ? '<div class="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>' : ''}
          <span class="font-label-md">${level.label}</span>
          <span class="material-symbols-outlined text-[20px] hidden lg:block ${isActive ? '' : 'opacity-0 group-hover:opacity-100 transition-opacity'}">chevron_right</span>
        </button>
      `;
    })
    .join('');
}

function renderHeader() {
  const title = document.getElementById('courses-title');
  const description = document.getElementById('courses-description');
  const updateText = document.getElementById('courses-update-text');

  if (title) title.textContent = `${documentsData.currentSubject} — ${documentsData.currentLevel}`;
  
  const currentLevelData = documentsData.data[documentsData.currentLevel];
  if (description && currentLevelData) {
    description.textContent = currentLevelData.description;
  }
  
  if (updateText) updateText.textContent = documentsData.updateText;
}

function renderSubjectCards() {
  const grid = document.getElementById('subjects-grid');
  if (!grid) return;

  const currentLevelData = documentsData.data[documentsData.currentLevel];
  if (!currentLevelData) {
    grid.innerHTML = '';
    return;
  }

  grid.innerHTML = currentLevelData.subjects
    .map((subject) => {
      const isActive = subject.name === documentsData.currentSubject;
      const cardClass = isActive
        ? 'bg-primary/5 border border-primary/20 p-md rounded-2xl shadow-sm transition-shadow group relative overflow-hidden cursor-pointer'
        : 'bg-surface-container-lowest p-md rounded-2xl shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden cursor-pointer';

      return `
        <button type="button" data-subject="${escapeHtml(subject.name)}" class="subject-card text-left w-full ${cardClass}">
          <div class="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500"></div>
          <div class="${subject.iconWrapperClass}">
            <span class="material-symbols-outlined ${isActive ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary transition-colors'} text-[24px]">${subject.icon}</span>
          </div>
          <h3 class="font-headline-sm ${isActive ? 'text-primary' : 'text-on-surface'} mb-xs">${subject.name}</h3>
          <p class="font-label-sm text-on-surface-variant mb-lg">${subject.count} Documents</p>
          <div class="font-label-md ${isActive ? 'text-primary' : 'text-on-surface-variant'} flex items-center gap-xs">
            Afficher les documents <span class="material-symbols-outlined text-[18px]">arrow_downward</span>
          </div>
        </button>
      `;
    })
    .join('');
}

function renderDocuments() {
  const container = document.getElementById('documents-lists');
  if (!container) return;

  const currentLevelData = documentsData.data[documentsData.currentLevel];
  if (!currentLevelData) {
    container.innerHTML = '';
    return;
  }

  const subject = currentLevelData.subjects.find(s => s.name === documentsData.currentSubject) || currentLevelData.subjects[0];
  
  if (!subject) {
    container.innerHTML = '<p class="text-on-surface-variant">Aucune matière sélectionnée.</p>';
    return;
  }

  const sectionsMarkup = documentTypeConfig
    .map((config) => {
      const documents = subject.sections[config.key] || [];
      const rowsMarkup = documents
        .map((documentItem, index) => `
          <div class="flex flex-col sm:flex-row sm:items-center justify-between p-md gap-md ${index === documents.length - 1 ? '' : 'border-b border-surface-container/50'} hover:bg-surface-container/20 transition-colors">
            <div class="flex items-start sm:items-center gap-md">
              <span class="material-symbols-outlined text-error text-[24px] shrink-0">picture_as_pdf</span>
              <div>
                <h4 class="font-label-md text-on-surface">${documentItem.title}</h4>
                <p class="font-label-sm text-on-surface-variant mt-1">${documentItem.meta}</p>
              </div>
            </div>
            <div class="flex items-center gap-xs shrink-0 self-end sm:self-auto">
              <button class="p-xs text-primary hover:bg-primary/10 rounded-lg transition-colors font-label-md hidden sm:block">Ouvrir</button>
              <button aria-label="Télécharger" class="p-xs text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                <span class="material-symbols-outlined text-[20px]">download</span>
              </button>
              <button aria-label="Ajouter à Drive" class="p-xs text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                <span class="material-symbols-outlined text-[20px]">add_to_drive</span>
              </button>
            </div>
          </div>
        `)
        .join('');

      return `
        <section class="mb-lg opacity-0 translate-y-4 animate-[fade-in-up_0.5s_ease-out_forwards]">
          <div class="flex items-center gap-sm mb-lg">
            <span class="material-symbols-outlined ${config.iconColor} text-[28px]">${config.icon}</span>
            <h2 class="font-headline-md text-on-background">${config.title}</h2>
          </div>
          <div class="bg-surface-container-lowest rounded-2xl shadow-sm overflow-hidden">
            ${rowsMarkup || `
              <div class="p-md text-on-surface-variant">Aucun document disponible pour cette catégorie.</div>
            `}
          </div>
        </section>
      `;
    })
    .join('');

  container.innerHTML = `
    <section class="space-y-xl mb-xl">
      <div class="flex items-center gap-sm mb-lg border-b border-outline-variant/30 pb-sm">
        <span class="material-symbols-outlined text-primary text-[28px]">${subject.icon}</span>
        <h2 class="font-headline-md text-on-background">${subject.name} <span class="text-on-surface-variant font-normal text-lg">(${documentsData.currentLevel})</span></h2>
      </div>
      <div class="space-y-xl">
        ${sectionsMarkup}
      </div>
    </section>
  `;
}

function buildSearchIndex() {
  const entries = [];

  documentsData.levels.forEach((level) => {
    entries.push({
      type: 'year',
      category: 'Années',
      title: level.label,
      detail: `Niveau • ${level.label}`,
      keywords: [level.label, level.name, 'année', 'niveau']
    });
  });

  Object.values(documentsData.data).forEach((levelData) => {
    levelData.subjects.forEach((subject) => {
      entries.push({
        type: 'subject',
        category: 'Matières',
        title: subject.name,
        detail: `${subject.count} documents disponibles`,
        keywords: [subject.name, 'matière', 'cours', 'ressource']
      });

      Object.entries(subject.sections).forEach(([sectionKey, documents]) => {
        const sectionTitle = documentTypeConfig.find((item) => item.key === sectionKey)?.title || sectionKey;
        documents.forEach((documentItem) => {
          entries.push({
            type: 'document',
            category: 'Documents',
            title: documentItem.title,
            detail: `${subject.name} • ${sectionTitle}`,
            keywords: [documentItem.title, documentItem.meta, subject.name, sectionTitle, 'document', 'cours', 'td', 'annale']
          });
        });
      });
    });
  });

  return entries;
}

function renderSearchResults(query) {
  const resultsPanel = document.getElementById('courses-search-results');
  const input = document.getElementById('courses-search-input');

  if (!resultsPanel || !input) return;

  const normalizedQuery = normalizeText(query.trim());
  if (!normalizedQuery) {
    resultsPanel.classList.add('hidden');
    return;
  }

  const entries = buildSearchIndex()
    .filter((entry) => entry.keywords.some((keyword) => normalizeText(keyword).includes(normalizedQuery)))
    .slice(0, 8);

  if (!entries.length) {
    resultsPanel.innerHTML = `
      <div class="search-empty-state">
        <span class="material-symbols-outlined text-[22px]">search_off</span>
        <p>Aucun résultat pour “${escapeHtml(query)}”.</p>
      </div>
    `;
    resultsPanel.classList.remove('hidden');
    return;
  }

  const resultsByCategory = {
    Documents: entries.filter((entry) => entry.category === 'Documents'),
    Matières: entries.filter((entry) => entry.category === 'Matières'),
    Années: entries.filter((entry) => entry.category === 'Années')
  };

  const groupsMarkup = Object.entries(resultsByCategory)
    .filter(([, items]) => items.length)
    .map(([category, items]) => `
      <div class="search-group">
        <div class="search-group-title">${category}</div>
        ${items.map((item) => `
          <div class="search-result-item">
            <div class="search-result-icon">
              <span class="material-symbols-outlined">${item.type === 'year' ? 'calendar_month' : item.type === 'subject' ? 'school' : 'picture_as_pdf'}</span>
            </div>
            <div class="search-result-content">
              <div class="search-result-title">${highlightMatches(item.title, query)}</div>
              <div class="search-result-detail">${highlightMatches(item.detail, query)}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `)
    .join('');

  resultsPanel.innerHTML = `
    <div class="search-results-list">${groupsMarkup}</div>
  `;
  resultsPanel.classList.remove('hidden');
}

export function initCoursesPage() {
  // Initialisation par défaut si nécessaire
  if (!documentsData.currentSubject) {
    const defaultData = documentsData.data[documentsData.currentLevel];
    if (defaultData && defaultData.subjects.length > 0) {
      documentsData.currentSubject = defaultData.subjects[0].name;
    }
  }

  renderLevels();
  renderHeader();
  renderSubjectCards();
  renderDocuments();

  // Click handler pour les niveaux (sidebar)
  const levelsContainer = document.getElementById('courses-levels');
  if (levelsContainer) {
    levelsContainer.addEventListener('click', (event) => {
      const btn = event.target.closest('.level-tab');
      if (!btn) return;
      const newLevel = btn.getAttribute('data-level');
      if (newLevel && newLevel !== documentsData.currentLevel) {
        documentsData.currentLevel = newLevel;
        documentsData.levels.forEach(l => l.active = (l.name === newLevel));
        
        // Sélectionner la première matière du nouveau niveau par défaut
        const newLevelData = documentsData.data[newLevel];
        if (newLevelData && newLevelData.subjects.length > 0) {
          documentsData.currentSubject = newLevelData.subjects[0].name;
        } else {
          documentsData.currentSubject = null;
        }

        renderLevels();
        renderHeader();
        renderSubjectCards();
        renderDocuments();
      }
    });
  }

  // Click handler pour les cartes de matières
  const grid = document.getElementById('subjects-grid');
  if (grid) {
    grid.addEventListener('click', (event) => {
      const card = event.target.closest('.subject-card');
      if (!card) return;
      const subjectName = card.getAttribute('data-subject');
      
      if (subjectName && subjectName !== documentsData.currentSubject) {
        documentsData.currentSubject = subjectName;
        renderHeader();
        renderSubjectCards();
        renderDocuments();
        
        // Scroll vers les documents
        const docsList = document.getElementById('documents-lists');
        if (docsList) {
          const y = docsList.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  }

  const searchInput = document.getElementById('courses-search-input');
  const resultsPanel = document.getElementById('courses-search-results');

  if (!searchInput || !resultsPanel) return;

  searchInput.addEventListener('input', (event) => {
    renderSearchResults(event.target.value);
  });

  document.addEventListener('click', (event) => {
    if (!resultsPanel.contains(event.target) && event.target !== searchInput) {
      resultsPanel.classList.add('hidden');
    }
  });
}
