export const LEVELS = {
  PLATINUM: 0,
  GOLD: 1,
  SILVER: 2,
  BRONZE: 3,
  VENUE: 4,
  PARTNER: 5,
  SUPPORTER: 6,
};

export default {
  devseed: {
    name: 'Development Seed',
    logo: () => import('$images/logos/devseed.png?enhanced'),
    link: 'https://developmentseed.org/',
    level: LEVELS.GOLD
  },
  auspatious: {
    name: 'Auspatious',
    logo: () => import('$images/logos/auspatious.webp?enhanced'),
    link: 'https://auspatious.com/',
    level: LEVELS.SILVER
  },
  oslandia: {
    name: 'Oslandia',
    logo: () => import('$images/logos/oslandia.png?enhanced'),
    link: 'https://oslandia.com/',
    level: LEVELS.SILVER
  },
  uob: {
    name: 'University of Bristol',
    logo: () => import('$images/logos/university_of_bristol.png?enhanced'),
    link: 'https://www.bristol.ac.uk/venues/',
    level: LEVELS.VENUE
  },
  osgeouk: {
    name: 'OSGeoUK',
    logo: () => import('$images/logos/OSGeoUK.png?enhanced'),
    link: 'https://uk.osgeo.org/',
    level: LEVELS.PARTNER
  },
  visitwest: {
    name: 'VisitWest Convention Bureau',
    logo: () => import('$images/logos/visit_west.jpg?enhanced'),
    link: 'https://www.visitwestconventionbureau.co.uk/',
    level: LEVELS.PARTNER
  },
  osgeo: {
    name: 'OSGeo',
    logo: () => import('$images/logos/osgeo.png?enhanced'),
    link: 'https://www.osgeo.org/',
    level: LEVELS.PARTNER
  },
};
