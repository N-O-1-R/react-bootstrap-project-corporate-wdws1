import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/Header';
import AppHero from './components/Hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppTeams from './components/teams';
import Testimonials from './components/testimonials';
import AppPricing from './components/pricing';
import AppBlog from './components/blog';

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
        <AppWorks />
        <AppTeams />
        <Testimonials />
        <AppPricing />
        <AppBlog />
      </main>
    </div>
  );
}

export default App;
