import {PageTitle} from "./PageTitle/PageTitle";
import {EventBoard} from "./EventBoard/EventBoard";
import upcomingEvents from '../upcoming-events.json'
import { FaBeer } from 'react-icons/fa';

export function App() {
  return(
      <div>
        <PageTitle text = '24th Core Worlds Coalition Conference' />
        <EventBoard events={ upcomingEvents } />
      </div>
  )
}

export default App;