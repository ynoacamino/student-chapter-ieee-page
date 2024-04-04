import { Section } from '@/components/ui/section';

export default function VisionAndMision() {
  return (
    <Section bgDirection="r" id="vision-and-mission">
      <div className="grid grid-cols-1 md:grid-cols-2 text-center text-xl gap-x-20 gap-y-20 max-w-6xl">
        <article className="flex flex-col items-center gap-6" id="animation-text-l">
          <h1 className="text-4xl text-primary-title font-bold">
            Visión
          </h1>
          <div className="w-full max-w-md flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec aliquam eget dui et mattis. Cras scelerisque venenatis tellus
              sagittis tincidunt.
            </p>
            <p>
              Phasellus condimentum, ligula et semper mattis, est justo fringilla mi,
              a ultrices nunc nibh sed nulla. Donec faucibus, diam quis scelerisque semper,
              nunc sem vehicula risus, sed pulvinar diam felis vel libero.
            </p>
          </div>
        </article>
        <article className="flex flex-col items-center gap-6" id="animation-text-r">
          <h1 className="text-4xl text-primary-title font-bold">
            Misión
          </h1>
          <div className="w-full max-w-md flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec aliquam eget dui et mattis. Cras scelerisque venenatis tellus
              sagittis tincidunt.
            </p>
            <p>
              Phasellus condimentum, ligula et semper mattis, est justo fringilla mi,
              a ultrices nunc nibh sed nulla. Donec faucibus, diam quis scelerisque semper,
              nunc sem vehicula risus, sed pulvinar diam felis vel libero.
            </p>
          </div>
        </article>
      </div>
    </Section>
  );
}
