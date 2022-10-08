import {PageTitle} from "../PageTitle/PageTitle";
import {EventBoard} from "../EventBoard/EventBoard";
import upcomingEvents from '../../upcoming-events.json';
import { Main } from "./App.styled";


export function App() {
  return(
      <Main>
        <PageTitle text = '24th Core Worlds Coalition Conference' />
        <EventBoard events={ upcomingEvents } />
      </Main>
  )
}

export default App;