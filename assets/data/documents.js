export const documentsData = {
  currentLevel: 'TS1',
  currentSubject: 'Analyse', // Matière par défaut
  levels: [
    { name: 'TS1', label: 'TS1', active: true },
    { name: 'TS2', label: 'TS2', active: false },
    { name: 'TS3', label: 'TS3', active: false }
  ],
  updateText: 'Derniers documents ajoutés le 24 Oct.',
  data: {
    'TS1': {
      description: 'Explorez les ressources, cours magistraux, et travaux dirigés pour maîtriser le programme de première année.',
      subjects: [
        {
          name: 'Analyse',
          icon: 'calculate',
          count: 24,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 1 : Espaces Vectoriels', meta: '2.4 MB • Modifié le 12 Sept 2023' },
              { title: 'Chapitre 2 : Applications Linéaires', meta: '3.1 MB • Modifié le 19 Sept 2023' }
            ],
            td: [
              { title: 'TD 1 : Sous-espaces Vectoriels', meta: '1.2 MB • Modifié le 15 Sept 2023' },
              { title: 'Corrigé TD 1', meta: '1.5 MB • Modifié le 22 Sept 2023' }
            ],
            annales: [
              { title: 'Annales 2022 — Analyse', meta: '1.8 MB • Modifié le 08 Oct 2023' }
            ]
          }
        },
        {
          name: 'Algèbre Linéaire',
          icon: 'function',
          count: 18,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 3 : Matrices et Déterminants', meta: '2.6 MB • Modifié le 16 Sept 2023' }
            ],
            td: [
              { title: 'TD 2 : Calcul matriciel', meta: '1.3 MB • Modifié le 20 Sept 2023' }
            ],
            annales: [
              { title: 'Annales 2021 — Algèbre', meta: '1.4 MB • Modifié le 02 Oct 2023' }
            ]
          }
        },
        {
          name: 'Probabilités',
          icon: 'data_usage',
          count: 12,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 4 : Événements et Probabilités', meta: '2.1 MB • Modifié le 11 Sept 2023' }
            ],
            td: [
              { title: 'TD 3 : Lois de probabilité', meta: '1.1 MB • Modifié le 17 Sept 2023' }
            ],
            annales: [
              { title: 'Annales 2023 — Probabilités', meta: '1.6 MB • Modifié le 06 Oct 2023' }
            ]
          }
        }
      ]
    },
    'TS2': {
      description: 'Découvrez les cours avancés et les travaux dirigés de la deuxième année de la filière TSA.',
      subjects: [
        {
          name: 'Thermodynamique',
          icon: 'thermostat',
          count: 15,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 1 : Premier Principe', meta: '3.0 MB • Modifié le 01 Oct 2023' }
            ],
            td: [
              { title: 'TD 1 : Bilans d\'énergie', meta: '1.1 MB • Modifié le 05 Oct 2023' }
            ],
            annales: [
              { title: 'Examen 2022 — Thermo', meta: '1.5 MB • Modifié le 15 Oct 2023' }
            ]
          }
        },
        {
          name: 'Électromagnétisme',
          icon: 'bolt',
          count: 10,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 1 : Électrostatique', meta: '2.8 MB • Modifié le 10 Sept 2023' }
            ],
            td: [
              { title: 'TD 1 : Champ Électrique', meta: '1.3 MB • Modifié le 15 Sept 2023' }
            ],
            annales: []
          }
        }
      ]
    },
    'TS3': {
      description: 'Accédez aux ressources de spécialisation et de préparation aux diplômes finaux de la troisième année.',
      subjects: [
        {
          name: 'Mécanique Quantique',
          icon: 'blur_on',
          count: 8,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 1 : Postulats', meta: '4.2 MB • Modifié le 05 Sept 2023' }
            ],
            td: [
              { title: 'TD 1 : Équation de Schrödinger', meta: '1.8 MB • Modifié le 12 Sept 2023' }
            ],
            annales: []
          }
        },
        {
          name: 'Optique Ondulatoire',
          icon: 'waves',
          count: 14,
          buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
          iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
          sections: {
            cours: [
              { title: 'Chapitre 1 : Interférences', meta: '3.5 MB • Modifié le 22 Sept 2023' }
            ],
            td: [
              { title: 'TD 1 : Trous d\'Young', meta: '1.2 MB • Modifié le 28 Sept 2023' }
            ],
            annales: [
              { title: 'Annales 2023 — Optique', meta: '2.0 MB • Modifié le 10 Oct 2023' }
            ]
          }
        }
      ]
    }
  }
};
