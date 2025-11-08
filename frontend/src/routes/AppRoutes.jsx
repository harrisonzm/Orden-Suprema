import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Reviews from '../pages/Reviews';
import Leaderboard from '../pages/Leaderboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
};

export default AppRoutes;
