import { CoreConcepts } from "./Coreconcepts.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Examples } from "./Examples.jsx";
function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
