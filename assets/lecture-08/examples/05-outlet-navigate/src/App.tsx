import { Route, Routes } from 'react-router-dom';

import About from './views/About';
import Home from './views/Home';
import Details from './views/pokemon/Details';
import Index from './views/pokemon/Index';
import List from './views/pokemon/List';

import Header from './components/Header';

import './App.scss';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon" element={<Index />}>
            <Route index element={<List />} />
            <Route path=":name" element={<Details />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
