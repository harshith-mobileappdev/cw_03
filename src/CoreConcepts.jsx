import { CORE_CONCEPTS } from "./data.js"
import { Coreconcept } from "./components/Coreconcept.jsx"
export  function CoreConcepts(){
    return <section id="core-concepts">
    <h2>Core component</h2>
    <ul>
      {CORE_CONCEPTS.map((item)=>(<Coreconcept key={item.title} {...item}/>))}
    </ul>
  </section>
}