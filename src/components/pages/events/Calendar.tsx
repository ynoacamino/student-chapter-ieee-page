import Gradient from '@/components/ui/gradient';
import { FIRST_WEEK, SECOND_WEEK, THIRD_WEEK } from '@/data/Calendar';
import DateSalider from './DateSlider';

export default function Calendar() {
  return (
    <div className="w-full flex flex-col relative max-w-6xl mx-auto pb-32 overflow-hidden">
      <DateSalider dates={FIRST_WEEK} duration={10} />
      <DateSalider dates={SECOND_WEEK} duration={15} />
      <DateSalider dates={THIRD_WEEK} duration={10} />
      <Gradient direction="l" />
      <Gradient direction="r" />
    </div>
  );
}
