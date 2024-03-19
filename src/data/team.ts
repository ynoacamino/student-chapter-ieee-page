interface Team {
  name: string;
  avatar: string;
  photo: string;
  position: {
    en: string;
    es: string;
  };
  icon: string;
  description: string;

}

export const TEAM: Team[] = [
  {
    name: 'Valentina Milagros Chambilla Perca',
    avatar: '/images/teams/avatar/chair.webp',
    photo: '/images/teams/photo/chair.jpg',
    position: {
      en: 'Chair',
      es: 'Presidenta',
    },
    icon: '💻',
    description: 'Estudiante de Séptimo Ciclo de la Carrera Profesional de Ingeniería de Sistemas en la Universidad Nacional de San Agustín de Arequipa. Es una estudiante entusiasta en el campo de IoT y uso de Tecnologías en la Nube.',
  },
  {
    name: 'Rodrigo Alejandro Véliz Saihua',
    avatar: '/images/teams/avatar/viceChair.webp',
    photo: '/images/teams/photo/viceChair.jpg',
    position: {
      en: 'Vice Chair',
      es: 'Vicepresidente',
    },
    icon: '📊',
    description: 'Estudiante de Séptimo Ciclo de la Carrera Profesional de Ingeniería de Sistemas en la Universidad Nacional de San Agustín de Arequipa. Es una estudiante bastante centrado en el campo de Desarrollo Web, con experiencia freelancer en el campo de Desarrollo Web FrontEnd y FullStack.',
  },
  {
    name: "Frank's Javier Vilca Quispe",
    avatar: '/images/teams/avatar/treasurer.webp',
    photo: '/images/teams/photo/treasurer.jpg',
    position: {
      en: 'Treasurer',
      es: 'Tesorero',
    },
    icon: '📈',
    description: 'Estudiante de Séptimo Ciclo de la Carrera Profesional de Ingeniería de Sistemas en la Universidad Nacional de San Agustín de Arequipa. Es una estudiante bastante centrado en el campo de Desarrollo Web y de Tecnologías de Despliegue y Servicios en la Nube. Estudiante que se centra actualmente en su capacitación AWS y en demás campos tecnológicos.',
  },
  {
    name: 'Antony Jacob Blanco Trujillo',
    avatar: '/images/teams/avatar/secretary.webp',
    photo: '/images/teams/photo/secretary.png',
    position: {
      en: 'Secretary',
      es: 'Secretario',
    },
    icon: '📊',
    description: 'Estudiante de Séptimo Ciclo de la Carrera Profesional de Ingeniería de Sistemas en la Universidad Nacional de San Agustín de Arequipa. Es un estudiante con gran interés por los diversos campos, pero con mayor experiencia en el campo de Redes y de Despliegue de Páginas Web en Desarrollo BackEnd. Actual integrante del Centro de Investigación CiTeSoft de la UNSA.',
  },
  {
    name: 'Christian Raúl Mestas Zegarra',
    avatar: '/images/teams/avatar/webMaster.webp',
    photo: '/images/teams/photo/webMaster.jpg',
    position: {
      en: 'Web Master',
      es: 'Web Master',
    },
    icon: '📖',
    description: 'Estudiante de Tercer Ciclo de la Carrera Profesional de Ingeniería de Sistemas en la Universidad Nacional de San Agustín de Arequipa. Es un estudiante con un gran interés por Desarrollo BackEnd en Páginas Web y en Desarrollo de Videojuegos. Actual integrante del Centro de Investigación CiTeSoft de la UNSA.',
  },
];
