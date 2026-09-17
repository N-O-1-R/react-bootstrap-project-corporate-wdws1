import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/Header';
import AppHero from './components/Hero';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header> 
      <main>
        <AppHero />
      </main>
    </div>
  );
}

export default App;
