export function initSchools() {
  const schoolsGrid = document.getElementById('schools-grid');
  const searchInput = document.getElementById('school-search');
  const searchClear = document.getElementById('school-search-clear');
  const noResults = document.getElementById('schools-no-results');

  if (!schoolsGrid) return; // Seulement sur orientation.html

  // render function
  function renderSchools(schools) {
    schoolsGrid.innerHTML = '';
    if (schools.length === 0) {
      schoolsGrid.classList.add('hidden');
      noResults.classList.remove('hidden');
    } else {
      schoolsGrid.classList.remove('hidden');
      noResults.classList.add('hidden');
      
      schools.forEach(school => {
        const card = document.createElement('div');
        card.className = 'bg-surface-container-lowest rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-outline-variant/30 text-left group flex flex-col h-full';
        
        card.innerHTML = `
          <div class="flex items-start gap-md mb-md">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${school.colorClass}">
              <span class="material-symbols-outlined text-[24px]">${school.icon}</span>
            </div>
            <div>
              <h3 class="font-headline-sm text-on-surface mb-1 group-hover:text-primary transition-colors">${school.name}</h3>
              <p class="text-xs text-on-surface-variant flex items-center gap-1">
                <span class="material-symbols-outlined text-[14px]">location_on</span>
                ${school.institution}
              </p>
            </div>
          </div>
          <div class="space-y-sm flex-grow">
            <div>
              <span class="text-xs text-on-surface-variant uppercase tracking-wider font-semibold block mb-1">Domaine</span>
              <p class="font-body-md text-sm text-on-surface">${school.domain}</p>
            </div>
            <div>
              <span class="text-xs text-on-surface-variant uppercase tracking-wider font-semibold block mb-1">Admission</span>
              <p class="font-body-md text-sm text-on-surface">${school.admission}</p>
            </div>
          </div>
          <div class="mt-lg pt-4 border-t border-outline-variant/30">
            <a href="#" class="inline-flex items-center gap-2 text-primary font-label-md hover:gap-3 transition-all cursor-not-allowed opacity-70" title="Informations à venir">
              Détails <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        `;
        schoolsGrid.appendChild(card);
      });
    }
  }

  // normalisation pour la recherche
  function normalizeText(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  // initial render
  if (typeof schoolsData !== 'undefined') {
    renderSchools(schoolsData);

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = normalizeText(e.target.value);
        if (query.length > 0) {
          searchClear.classList.remove('hidden');
        } else {
          searchClear.classList.add('hidden');
        }
        
        const filtered = schoolsData.filter(school => 
          normalizeText(school.name).includes(query) ||
          normalizeText(school.domain).includes(query) ||
          normalizeText(school.institution).includes(query)
        );
        renderSchools(filtered);
      });

      if (searchClear) {
        searchClear.addEventListener('click', () => {
          searchInput.value = '';
          searchClear.classList.add('hidden');
          renderSchools(schoolsData);
          searchInput.focus();
        });
      }
    }
  }
}
