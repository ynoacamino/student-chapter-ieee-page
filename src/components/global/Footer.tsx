import IEEEOfficial from '../logos/IEEEOfficial';
import Link from '../ui/link';

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 w-full mb-10 mt-20 max-w-6xl gap-x-10 gap-y-14">
      <div className="w-full flex justify-center md:justify-start">
        <IEEEOfficial className="w-full max-w-md" />
      </div>
      <div className="w-full flex justify-around md:justify-end items-center md:gap-10">
        {
          Array.from({ length: 3 }).map(() => (
            <div key={crypto.randomUUID()}>
              <h4 className="font-bold text-primary-title text-2xl px-4 py-2">About</h4>
              <div className="flex flex-col">
                {
                  Array.from({ length: 4 }).map(() => (
                    <Link href="/" key={crypto.randomUUID()} className="">About 1</Link>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </footer>
  );
}
