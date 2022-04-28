import { Routes as Router, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Calculator } from '../pages/Calculator';
import { Finances } from '../pages/Finances'

export function Routes() {
  return (
    <Router>
      <Route path='/' element={<Home />} />
      <Route path='/calculadora' element={<Calculator />} />
      <Route path='/financas' element={<Finances />} />
    </Router>
  )
}
