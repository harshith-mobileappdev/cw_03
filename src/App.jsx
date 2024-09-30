import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import {Header} from './components/Header/Header.jsx'
import {Coreconcept} from './components/Coreconcept.jsx'
import { Tabbuttons } from "./components/Tabbuttons.jsx";
import {EXAMPLES} from './data.js'
function App() {
  const [selectedTopic,setSelectedTopic] = useState()
  function handleSelect(selector){
  setSelectedTopic(selector)
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core component</h2>
          <ul>
            <Coreconcept {...CORE_CONCEPTS[1]}/>
            <Coreconcept {...CORE_CONCEPTS[2]}/>
            <Coreconcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
          <Tabbuttons onSelect={()=> handleSelect('components')} highlight={selectedTopic==='components'} >Components</Tabbuttons>
          <Tabbuttons onSelect={()=> handleSelect('props')} highlight={selectedTopic==='props'}>Props</Tabbuttons>
          <Tabbuttons onSelect={()=> handleSelect('jsx')} highlight={selectedTopic==='jsx'}>JSX</Tabbuttons>
          <Tabbuttons onSelect={()=> handleSelect('state')} highlight={selectedTopic==='state'}>State</Tabbuttons>
          </menu>
          
            {!selectedTopic ? <p>Please select a topic</p>:
            (<div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
          </div>)}
        </section>
      </main>
    </div>
  );
}

export default App;
