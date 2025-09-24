import { Suspense } from 'react';
import './App.css';
import Countrys from './countrys';

// Keep your original structure: promise assigned to variable
const countryPromis = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>Nadir Vai Loading....</p>}>
        <Countrys countryPromis={countryPromis}></Countrys>
      </Suspense>
    </>
  );
}

export default App;
