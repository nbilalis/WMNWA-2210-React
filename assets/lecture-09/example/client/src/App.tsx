import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';

import Subjects from './views/Subjects';
import Papers from './views/Papers.easy';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Subjects />} />
        <Route path="papers/:id" element={<Papers />} />
      </Route>
    </Routes>
  );
}

export default App;
