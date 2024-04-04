'use client';

import { motion } from 'framer-motion';

const IMAGES = [
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903364/mgmqaorpyocwutjj7l1y.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903379/flwwsodtiiwmexcyujqv.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903394/la07diffgkjlcb8lyhtj.webp',
    alt: '',
  },
  {
    src: 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1710903410/g236shsfhahnpipmwvf8.webp',
    alt: '',
  },
];

export default function Background() {
  const transitions = Array.from({ length: IMAGES.length }, (_, i) => ({
    delay: i * 0.3,
    type: 'spring',
    stiffness: 300,
    damping: 24,
  }));

  return (
    <div className="flex flex-col gap-4 max-w-4xl mb-24 w-full px-6 overflow-hidden">
      <div className="grid md:grid-cols-25 gap-4 w-full">
        <motion.img
          className="aspect-square md:col-span-9 object-cover w-full h-full rounded-lg hidden md:flex"
          src={IMAGES[0].src}
          alt={IMAGES[0].alt}
          width={600}
          height={600}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transitions[3]}
        />
        <motion.img
          className="aspect-video h-auto col-span-16/16 w-full rounded-lg"
          src={IMAGES[1].src}
          alt={IMAGES[1].alt}
          width={600}
          height={600}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transitions[0]}
        />
      </div>
      <div className="grid md:grid-cols-25 gap-4 w-full">
        <motion.img
          className="aspect-video h-auto md:col-span-16/16 w-full rounded-lg"
          src={IMAGES[3].src}
          alt={IMAGES[3].alt}
          width={600}
          height={600}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transitions[1]}
        />
        <motion.img
          className="aspect-square h-full col-span-9 object-cover rounded-lg hidden md:flex"
          src={IMAGES[2].src}
          alt={IMAGES[2].alt}
          width={600}
          height={600}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitions[2]}
        />
      </div>
    </div>
  );
}
