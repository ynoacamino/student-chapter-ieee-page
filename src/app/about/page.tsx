import Title from '@/components/pages/about/Title';
import WhatIs from '@/components/pages/about/WhatIs';
import VisionAndMision from '@/components/pages/about/VisionAndMision';
import Info from '@/components/pages/about/Info';
import Background from '@/components/pages/about/Background';

export default function AboutPage() {
  return (
    <>
      <Title />
      <Background />
      <WhatIs />
      <VisionAndMision />
      <Info />
    </>
  );
}
