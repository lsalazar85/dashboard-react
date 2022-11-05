import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Receivables } from '../pages/Receivables';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/receivables" element={<Receivables />} />
  </Routes>
);

export default MainRouter;
