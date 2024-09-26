import { CORE_CONCEPTS } from "./data.js";
import {Header} from './components/Header/Header.jsx'
import {Coreconcept} from './components/Coreconcept.jsx'
import { Tabbuttons } from "./components/Tabbuttons.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core component</h2>
          <ul>
            <Coreconcept {...CORE_CONCEPTS[0]}/>
            <Coreconcept {...CORE_CONCEPTS[1]}/>
            <Coreconcept {...CORE_CONCEPTS[2]}/>
            <Coreconcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          <Tabbuttons>Components</Tabbuttons>
          <Tabbuttons>Props</Tabbuttons>
          <Tabbuttons>JSX</Tabbuttons>
          <Tabbuttons>State</Tabbuttons>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
