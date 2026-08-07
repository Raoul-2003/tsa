export const orientationData = {
  categories: [
    {
      id: 'grandesEcoles',
      title: 'Grandes Écoles',
      description: 'Découvrez les possibilités d\'intégration des grandes écoles accessibles aux étudiants issus de la formation TSA.',
      buttonText: 'Découvrir',
      icon: 'account_balance',
      variant: 'large',
      iconClass: 'w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-md text-primary',
      buttonClass: 'font-label-md text-label-md text-primary flex items-center gap-xs hover:gap-sm transition-all',
      cardClass: 'md:col-span-8 bg-surface-container-lowest rounded-xl p-lg relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300 border border-outline-variant/30 text-left'
    },
    {
      id: 'concours',
      title: 'Concours',
      description: 'Calendrier, modalités et préparation aux épreuves écrites et orales.',
      buttonText: 'Découvrir',
      icon: 'quiz',
      variant: 'accent',
      iconClass: 'w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-md text-on-tertiary',
      buttonClass: 'font-label-md text-label-md text-on-tertiary flex items-center gap-xs hover:gap-sm transition-all mt-auto pt-lg',
      cardClass: 'md:col-span-4 bg-tertiary rounded-xl p-lg relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-300 text-left'
    },
    {
      id: 'passerelles',
      title: 'Passerelles',
      description: 'Voies d\'admission parallèles et réorientations pour diversifier vos opportunités.',
      buttonText: 'Découvrir',
      icon: 'alt_route',
      variant: 'default',
      iconClass: 'w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary',
      buttonClass: 'font-label-md text-label-md text-secondary flex items-center gap-xs hover:gap-sm transition-all mt-md',
      cardClass: 'md:col-span-4 bg-surface-container-lowest rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-outline-variant/30 text-left'
    },
    {
      id: 'universites',
      title: 'Universités',
      description: 'Licences, Masters et filières d\'excellence universitaires accessibles post-TSA.',
      buttonText: 'Découvrir',
      icon: 'school',
      variant: 'default',
      iconClass: 'w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary',
      buttonClass: 'font-label-md text-label-md text-secondary flex items-center gap-xs hover:gap-sm transition-all mt-md',
      cardClass: 'md:col-span-4 bg-surface-container-lowest rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-outline-variant/30 text-left'
    },
    {
      id: 'bourses',
      title: 'Bourses & Aides',
      description: 'Soutien financier, bourses d\'excellence et modalités de financement des études.',
      buttonText: 'Découvrir',
      icon: 'monetization_on',
      variant: 'default',
      iconClass: 'w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary',
      buttonClass: 'font-label-md text-label-md text-secondary flex items-center gap-xs hover:gap-sm transition-all mt-md',
      cardClass: 'md:col-span-4 bg-surface-container-lowest rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border border-outline-variant/30 text-left'
    }
  ],
  details: {
    grandesEcoles: {
      title: "Grandes Écoles",
      description: "Les détails sur les grandes écoles accessibles seront publiés prochainement par l'administration. Consultez votre encadrement pour les informations officielles.",
      items: []
    },
    concours: {
      title: "Concours",
      description: "Les informations sur les concours (calendrier, conditions, modalités) seront publiées prochainement. Rapprochez-vous de votre administration.",
      items: []
    },
    passerelles: {
      title: "Passerelles",
      description: "Les possibilités de passerelles et réorientations académiques seront détaillées prochainement par l'administration.",
      items: []
    },
    universites: {
      title: "Universités",
      description: "Les filières universitaires accessibles post-TSA seront publiées prochainement. Contactez votre administration pour plus d'informations.",
      items: []
    },
    bourses: {
      title: "Bourses & Aides",
      description: "Les informations sur les bourses et aides financières seront publiées prochainement. Rapprochez-vous du service des affaires étudiantes.",
      items: []
    }
  }
};
