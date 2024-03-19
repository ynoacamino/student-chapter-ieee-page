import { TEAM } from './team';

export const NAVLINKS = [
  {
    href: '/',
    text: 'Inicio',
    links: [
      {
        name: 'Sobre nosotros',
        path: '/#about',
      },
      {
        name: 'Sobre nosotros 2',
        path: '/#about2',
      },
      {
        name: 'Eventos próximos',
        path: '/#upcoming-events',
      },
    ],
  },
  {
    href: '/about',
    text: 'Conócenos',
    links: [
      {
        name: '¿Qué es?',
        path: '/about/#what-is',
      },
      {
        name: 'Visión y Misión',
        path: '/about/#vision-and-mission',
      },
      {
        name: 'Mas información',
        path: '/about/#more-info',
      },
    ],
  },
  {
    href: '/events',
    text: 'Eventos',
    links: [
      {
        name: 'Eventos próximos',
        path: '/events/#upcoming-events',
      },
      {
        name: 'Próximamente más eventos',
        path: '/events/#comming-soon-events',
      },
      {
        name: 'Eventos pasados',
        path: '/events/#past-events',
      },
    ],
  },
  {
    href: '/gallery',
    text: 'Galería',
    links: null,
  },
  {
    href: '/teams',
    text: 'Equipo',
    links: TEAM.map(({ position }) => ({
      name: position.es,
      path: `/teams/#${position.en}`,
    })),
  },
];
