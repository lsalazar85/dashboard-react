import { Routes, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Receivables } from '../pages/Receivables';
import { Login } from '../pages/Login';
import { PageNotFound } from '../pages/PageNotFound';

const MainRouter = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/receivables" element={<Receivables />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default MainRouter;
