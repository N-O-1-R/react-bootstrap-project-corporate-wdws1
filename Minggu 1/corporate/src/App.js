import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/Header';
import AppHero from './components/Hero';
import AppAbout from './components/about';
import AppServices from './components/services';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header> 
      <main>
        <AppHero />
        <AppAbout />
        <AppServices />
      </main>
    </div>
  );
}

export default App;
