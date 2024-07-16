import EventList from '../components/events/event-list';

import { getFeaturedEvents } from '../helpers/api-util';
function HomePage(props) {
  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const filteredFeaturedEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: filteredFeaturedEvents
    }
  }
}

export default HomePage;