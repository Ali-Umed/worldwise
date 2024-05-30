import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CItyList";
import { useEffect, useState } from "react";
import CountrieesList from "./components/CountrieesList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:9000";

function App() {
  // gar {} byet nabet chunka ka batala danusret cities . map is not a function
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function() {
    async function fetchCities() {
      try {
        setIsLoading(true);

        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("there was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

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
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />

          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          {/*  waku nardne parameter waya
          1 am xal create route and create path  and bcheta city katek bwa aw urla  
          2 am xal link url dakam  dachma city ietem
          */}
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<CountrieesList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
