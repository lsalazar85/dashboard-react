import { Routes, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Receivables } from '../pages/Receivables';
import { Login } from '../pages/Login';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/receivables" element={<Receivables />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default MainRouter;
