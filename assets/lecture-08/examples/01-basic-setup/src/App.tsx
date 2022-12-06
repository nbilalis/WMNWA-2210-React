import { Route, Routes } from 'react-router-dom';

import About from './views/About';
import Home from './views/Home';

import './App.scss';

function App() {
  return (
    <>
      <h1>Welcome to my site!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
