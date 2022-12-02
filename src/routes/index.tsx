import { Routes as Router, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Calculator } from '../pages/Calculator';
import { Finances } from '../pages/Finances'
import { Pokemon } from '../pages/Pokemon';
import { Shop } from '../pages/Shop';

export function Routes() {
  return (
    <Router>
      <Route path='/' element={<Home />} />
      <Route path='/calculadora' element={<Calculator />} />
      <Route path='/financas' element={<Finances />} />
      <Route path='/pokemon' element={<Pokemon />} />
      <Route path='/Shop' element={<Shop />} />
    </Router>
  )
}
