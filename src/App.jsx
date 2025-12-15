import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Footer, Header y layout/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ReservationsPage from './pages/ReservationsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/carta" element={<MenuPage />} />
          <Route path="/reservas" element={<ReservationsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
