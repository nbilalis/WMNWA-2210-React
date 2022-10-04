import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';

import Menu from './components/Menu';
import Index from './views/pokemon/Index';
import List from './views/pokemon/List';
import Details from './views/pokemon/Details';

import './App.scss';

const App = () => (
  <>
    <h1>This site is made with React and ♥</h1>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pokemon" element={<Index />}>
        <Route index element={<List />} />
        <Route path=":id" element={<Details />} />
      </Route>
    </Routes>
  </>
);

export default App;
