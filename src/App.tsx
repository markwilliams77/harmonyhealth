import { Routes, Route } from 'react-router-dom';
import { ContactModalProvider } from './context/ContactModalCotext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LiveChat } from './components/LiveChat';
import LandingPage from './pages/LandingPage';
import TreatmentsPage from './pages/TreatmentsPage';
import DestinationsPage from './pages/DestinationsPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <ContactModalProvider>
      <div className="min-h-screen selection:bg-accent-gold selection:text-primary-teal bg-off-white font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/treatments/:id" element={<TreatmentDetailPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <LiveChat />
    </ContactModalProvider>
  );
}
