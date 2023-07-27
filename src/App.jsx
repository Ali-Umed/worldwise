import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<Homepage />} />*/}
        {/*  away xwaresh haman shta wata gar nanusrabu hish ba defaualt ka  index bkreta  */}
        <Route index element={<Homepage />} />

        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          {/*  index routes it is mean default route gar hichyan nausrabu ka chwa naw app ba awa bkrytawa */}
          <Route index element={<p> default route list</p>} />

          <Route path="cities" element={<p>cities</p>} />
          <Route path="countries" element={<p>countries</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
