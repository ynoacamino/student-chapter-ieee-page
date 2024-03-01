import Calendar from '@/components/pages/events/Calendar';
import Title from '@/components/pages/events/Title';
import UpcomingEvents from '@/components/pages/events/UpcomingEvents';
import CommingSoonEvents from '@/components/pages/events/CommingSoonEvents';
import PastEvents from '@/components/pages/events/PastEvents';

export default function EventsPage() {
  return (
    <>
      <Title />
      <Calendar />
      <UpcomingEvents />
      <CommingSoonEvents />
      <PastEvents />
    </>
  );
}
