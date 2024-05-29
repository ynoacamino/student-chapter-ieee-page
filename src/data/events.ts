export interface EventIEEE {
  title: string;
  date: string[];
  link?: string;
  description: string;
  background: string;
  time?: string;
  poster: {
    full: string;
    thumbnail: string;
    width: number;
    height: number;
  };
}

export const UPCOMING_EVENTS: EventIEEE[] = [
  {
    title: 'Introduccion al uso de Flutter',
    date: ['22-03-2024'],
    description: 'Aprende a desarrollar aplicaciones móviles con Flutter, el framework de Google para crear aplicaciones nativas.',
    background: '',
    poster: {
      full: '/images/poster/22032024-IntroduccionAFlutter.png',
      thumbnail: '/images/poster/22032024-IntroduccionAFlutter.webp',
      width: 1080,
      height: 1080,
    },
    // link: '',
    time: '7:00 PM',
  },
  {
    title: 'Preparacion profesional con AWS academy',
    date: ['14-05-2024'],
    description: '¡Potencia tu carrera con AWS Academy! Prepárate para el éxito en la nube.',
    background: '',
    poster: {
      full: '/images/poster/14052024-PreparacionAWS.png',
      thumbnail: '/images/poster/14052024-PreparacionAWS.webp',
      width: 1080,
      height: 1080,
    },
  },
];

export const FUTURE_EVENTS: EventIEEE[] = UPCOMING_EVENTS;

export const PAST_EVENTS: EventIEEE[] = [
  {
    title: 'Envenenamiento de parámetros HTTP',
    date: ['25-11-2023'],
    description: 'Aprende a detectar y prevenir el envenenamiento de parámetros HTTP con el experto en ciberseguridad',
    background: '',
    poster: {
      full: '/images/poster/25122023-EnvenenamientoParametros.png',
      thumbnail: '/images/poster/25122023-EnvenenamientoParametros.webp',
      width: 1080,
      height: 1080,
    },
    link: 'meet.google.com/abc-xyz-123',
    time: '3:00 PM',
  },
  {
    title: 'Preparación profesional con AWS ACADEMY',
    date: ['01-12-2023'],
    description: '¡Potencia tu carrera con AWS Academy! Prepárate para el éxito en la nube.',
    background: '',
    poster: {
      full: '/images/poster/22012023-AWS.png',
      thumbnail: '/images/poster/22012023-AWS.webp',
      width: 1080,
      height: 1080,
    },
    link: 'meet.google.com/abc-xyz-123',
    time: '8:30 PM',
  },
  {
    title: 'Fundamentos de IBM Cloud',
    date: ['01-02-2024'],
    description: 'Con Amando Millones como ponente, aprende los fundamentos de IBM Cloud y cómo aplicarlos en tu vida profesional.',
    background: '',
    poster: {
      full: '/images/poster/22012024-IBMCloud.png',
      thumbnail: '/images/poster/22012024-IBMCloud.webp',
      width: 1080,
      height: 1080,
    },
    link: 'meet.google.com/abc-xyz-123',
    time: '11:00 AM',
  },
  {
    title: 'Semana de desarrollo móvil',
    date: ['12-02-2024', '13-02-2024', '14-02-2024'],
    description: 'Dos universidades, dos universos, un objetivo, una visión! Únete al encuentro de desarrollo móvil donde la innovación se fusiona.',
    background: '',
    poster: {
      full: '/images/poster/DesarrolloMovil.png',
      thumbnail: '/images/poster/DesarrolloMovil.webp',
      width: 2000,
      height: 2000,
    },
    link: '',
  },
  {
    title: 'Análisis de datos con Python',
    date: ['24-02-2024'],
    description: 'Con Laura López como ponente, aprende a analizar datos con Python y cómo aplicarlos en tu vida profesional.',
    background: '',
    poster: {
      full: '/images/poster/24022024-AnalisisDatos.png',
      thumbnail: '/images/poster/24022024-AnalisisDatos.webp',
      width: 1080,
      height: 1080,
    },
    link: 'meet.google.com/abc-xyz-123',
    time: '6:00 PM - 7:00 PM',
  },
];
