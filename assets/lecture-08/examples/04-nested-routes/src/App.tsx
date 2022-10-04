import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';

import Menu from './components/Menu';
import List from './views/products/List';
import Details from './views/products/Details';

import './App.scss';

const App = () => (
  <>
    <h1>Welcome to my site!</h1>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/">
        <Route index element={<List />} />
        <Route path=":id" element={<Details />} />
      </Route>
    </Routes>
  </>
);

export default App;
