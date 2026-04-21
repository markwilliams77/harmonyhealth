import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import LandingPage from './pages/LandingPage';
import TreatmentsPage from './pages/TreatmentsPage';
import DestinationsPage from './pages/DestinationsPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent-gold selection:text-primary-teal bg-off-white font-sans">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/treatments/:id" element={<TreatmentDetailPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
