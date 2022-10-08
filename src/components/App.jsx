import {PageTitle} from "./PageTitle/PageTitle";
import {EventBoard} from "./EventBoard/EventBoard";
import upcomingEvents from '../upcoming-events.json'


export function App() {
  return(
      <div>
        <PageTitle text = '24th Core Worlds Coalition Conference' />
        <EventBoard events={ upcomingEvents } />
      </div>
  )
}

export default App;