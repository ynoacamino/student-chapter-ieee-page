import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

/* eslint-disable react/jsx-pascal-case */
function Box({ aspectRatio }: { aspectRatio: '1/1' | '16/9' | '9/16' }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn('w-full aspect-[1/1] bg-web-gray-100 rounded-md transition-shadow hover:cursor-pointer hover:shadow-lg', {
          'aspect-[16/9]': aspectRatio === '16/9',
          'aspect-[9/16]': aspectRatio === '9/16',
          'aspect-[1/1]': aspectRatio === '1/1',
        })}
        />
      </DialogTrigger>
      <DialogContent className=" w-full">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className={cn('w-full bg-web-gray-100 rounded-md transition-shadow', {
          'aspect-[16/9]': aspectRatio === '16/9',
          'aspect-[9/16]': aspectRatio === '9/16',
          'aspect-[1/1]': aspectRatio === '1/1',
        })}
        />
        <DialogFooter>
          hola
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function Gallery() {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-6 mb-40">
      <div className="flex flex-col gap-6">
        <Box aspectRatio="9/16" />
        <Box aspectRatio="1/1" />
        <Box aspectRatio="1/1" />
        <Box aspectRatio="16/9" />
      </div>
      <div className="flex flex-col gap-6">
        <Box aspectRatio="16/9" />
        <Box aspectRatio="9/16" />
        <Box aspectRatio="1/1" />
        <Box aspectRatio="1/1" />
      </div>
      <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
        <Box aspectRatio="1/1" />
        <Box aspectRatio="16/9" />
        <Box aspectRatio="1/1" />
        <Box aspectRatio="9/16" />
      </div>
    </section>
  );
}
