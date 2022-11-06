import { Routes, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Receivables } from '../pages/Receivables';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/receivables" element={<Receivables />} />
  </Routes>
);

export default MainRouter;
