import { Date } from '@/types/Date';
import Gradient from '@/components/ui/gradient';
import DateSalider from './DateSlider';

export default function Calendar() {
  const firstWeek: Date[] = [
    { day: 1, event: null },
    { day: 2, event: null },
    { day: 3, event: null },
    { day: 4, event: null },
    { day: 5, event: 'Expose passionate people.' },
    { day: 6, event: null },
    { day: 7, event: null },
  ];
  const secondWeek: Date[] = [
    { day: 8, event: null },
    { day: 9, event: 'Expose passionate people.' },
    { day: 10, event: null },
    { day: 11, event: null },
    { day: 12, event: null },
    { day: 13, event: null },
    { day: 14, event: null },
  ];
  const thirdWeek: Date[] = [
    { day: 8, event: null },
    { day: 9, event: 'Expose passionate people.' },
    { day: 10, event: null },
    { day: 11, event: null },
    { day: 12, event: null },
    { day: 13, event: null },
    { day: 14, event: null },
  ];
  return (
    <div className="w-full flex flex-col relative">
      <DateSalider dates={firstWeek} duration={10} />
      <DateSalider dates={secondWeek} duration={15} />
      <DateSalider dates={thirdWeek} duration={10} />
      <Gradient direction="l" />
      <Gradient direction="r" />
    </div>
  );
}
