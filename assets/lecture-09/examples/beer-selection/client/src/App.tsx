import { Route, Routes } from 'react-router-dom';

import ThemeProvider from './store/ThemeProvider';

import Home from './views/Home';
import Layout from './views/Layout';
import Types from './views/beers/Types';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beers">
            <Route index element={<Types />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
