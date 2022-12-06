import { Route, Routes } from 'react-router-dom';

import About from './views/About';
import Home from './views/Home';
import Details from './views/products/Details';
import List from './views/products/List';

import Menu from './components/Menu';

import './App.scss';

function App() {
  return (
    <>
      <h1>Welcome to my site!</h1>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products">
          <Route index element={<List />} />
          <Route path=":id" element={<Details />} />
        </Route>
        {/*
        <Route path="/products" element={<List />} />
        <Route path="/products/:id" element={<Details />} />
        */}
      </Routes>
    </>
  );
}

export default App;
