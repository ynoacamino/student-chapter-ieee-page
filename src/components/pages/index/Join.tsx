import IEEELogo from '@/components/logos/IEEELogo';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';

export default function Join() {
  return (
    <Section bgDirection="r">
      <div className="w-full flex flex-col items-center gap-4 text-center text-xl max-w-6xl mx-auto">
        <IEEELogo className="w-60 aspect-square" />
        <h1 className="text-4xl text-primary font-bold my-4">
          Únete al capitulo estudiantil
        </h1>
        <h2>
          Te enviaremos un correo cuando estén abiertas las postulaciones
        </h2>
        <Button>
          Postula ahora
        </Button>
      </div>
    </Section>
  );
}
