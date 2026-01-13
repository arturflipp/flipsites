import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FlipSection } from './components/FlipSection';
import { StepsSection } from './components/StepsSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <FlipSection />
        <StepsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
