import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Advisory } from './pages/Advisory';
import { AIDevsourcing } from './pages/AI-Devsourcing';
import { Studio } from './pages/Studio';
import { Perspectives } from './pages/Perspectives';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="/AI-developer-outsourcing" element={<AIDevsourcing />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/perspectives" element={<Perspectives />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}