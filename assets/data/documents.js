export const documentsData = {
  currentLevel: 'TS1',
  levels: [
    { name: 'TS1', label: 'TS1', active: true },
    { name: 'TS2', label: 'TS2', active: false },
    { name: 'TS3', label: 'TS3', active: false }
  ],
  page: {
    title: 'Mathématiques — TS1',
    description: 'Explorez les ressources, cours magistraux, et travaux dirigés pour maîtriser le programme de mathématiques de première année.'
  },
  updateText: 'Derniers documents ajoutés le 24 Oct.',
  subjects: [
    {
      name: 'Analyse',
      icon: 'calculate',
      count: 24,
      buttonClass: 'w-full py-sm bg-primary text-on-primary rounded-lg font-label-md hover:bg-primary-container transition-colors',
      iconWrapperClass: 'w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-md',
      sections: {
        cours: [
          {
            title: 'Chapitre 1 : Espaces Vectoriels',
            meta: '2.4 MB • Modifié le 12 Sept 2023'
          },
          {
            title: 'Chapitre 2 : Applications Linéaires',
            meta: '3.1 MB • Modifié le 19 Sept 2023'
          }
        ],
        td: [
          {
            title: 'TD 1 : Sous-espaces Vectoriels',
            meta: '1.2 MB • Modifié le 15 Sept 2023'
          },
          {
            title: 'Corrigé TD 1',
            meta: '1.5 MB • Modifié le 22 Sept 2023'
          }
        ],
        annales: [
          {
            title: 'Annales 2022 — Analyse',
            meta: '1.8 MB • Modifié le 08 Oct 2023'
          }
        ],
        resumes: [
          {
            title: 'Résumé de cours — Chapitres 1 à 3',
            meta: '860 KB • Modifié le 05 Oct 2023'
          }
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
          {
            title: 'Chapitre 3 : Matrices et Déterminants',
            meta: '2.6 MB • Modifié le 16 Sept 2023'
          }
        ],
        td: [
          {
            title: 'TD 2 : Calcul matriciel',
            meta: '1.3 MB • Modifié le 20 Sept 2023'
          }
        ],
        annales: [
          {
            title: 'Annales 2021 — Algèbre',
            meta: '1.4 MB • Modifié le 02 Oct 2023'
          }
        ],
        resumes: [
          {
            title: 'Fiche de révision — Algebra',
            meta: '640 KB • Modifié le 09 Oct 2023'
          }
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
          {
            title: 'Chapitre 4 : Événements et Probabilités',
            meta: '2.1 MB • Modifié le 11 Sept 2023'
          }
        ],
        td: [
          {
            title: 'TD 3 : Lois de probabilité',
            meta: '1.1 MB • Modifié le 17 Sept 2023'
          }
        ],
        annales: [
          {
            title: 'Annales 2023 — Probabilités',
            meta: '1.6 MB • Modifié le 06 Oct 2023'
          }
        ],
        resumes: [
          {
            title: 'Résumé rapide — Formules clés',
            meta: '520 KB • Modifié le 11 Oct 2023'
          }
        ]
      }
    }
  ]
};
