import { Routes as Router, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Calculator } from '../pages/Calculator';

export const Routes: React.FC = () => (
  <Router>
    <Route path='/' element={<Home />} />
    <Route path='/calculadora' element={<Calculator />} />
  </Router>
)