/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import citiesData from "../../../final/data/cities.json";
import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const [cities,setCities]=useState([]);
  // const [isLoading,setIsloading]=useState(false);
  // const [currentCity,setCurrentCity]=useState({});

  // useEffect(() => {
  //   async function fetchCities() {
  //     try {
  //       // setIsloading(true);
  //       // const res = await fetch(`${BASE_URL}/cities`);
  //       // const data = await res.json();
  //       // setCities(data);
  //     } catch (error) {
  //       // alert("there is an error whle loading data");
  //     } finally {
  //       // setIsloading(false);
  //     }
  //   }
  // }, []);

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });

      try {
        // const res = await fetch(`${BASE_URL}/cities`);
        // const data = await res.json(); // make it work in server
        dispatch({ type: "cities/loaded", payload: citiesData.cities });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities...",
        });
      }
    }
    fetchCities();
  }, []);

  // const getCity (id){
  // if (Number(id) === currentCity.id) return; // wata dwbra gar btawet citi ak bkaytawa
  // dispatch({ type: "loading" });
  // try {
  //   // const res = await fetch(`${BASE_URL}/cities`);
  //   //      const data = await res.json();
  // dispatch({ type: "city/loaded", payload: data });

  // } catch (error) {
  // dispatch({
  //   type: "rejected",
  //   payload: "There was an error loading the city...",
  // });
  // }
  // finally(
  //  setIsloading(false);
  // )
  // };

  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;

      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "city/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the city...",
        });
      }
    },
    [currentCity.id]
  );

  // const createCity (newcity){
  // try {
  //   // setIsloading(true);
  //   // const res = await fetch(`${BASE_URL}/cities`,{
  // method:"post",
  // body:JSON.stringify(newCity),
  // headers:{"content-Type":"application/json"}, });

  //   //      const data = await res.json();
  //   //     setCities((cities) => [...cities, data]);
  // } catch (error) {
  //   alert("error when loading data");
  // }
  // finally(
  //  setIsloading(false);
  // )
  // };

  async function createCity(newCity) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error creating the city...",
      });
    }
  }

  // const deleteCity (newcity){
  // try {
  //   // setIsloading(true);
  //   // const res = await fetch(`${BASE_URL}/cities`,{
  // method:"DELETE", });
  //  setCities((cities)=> cities.filter((city)=> city.id !== id))
  // } catch (error) {
  //   alert("error when deleteing data");
  // }
  // finally(
  //  setIsloading(false);
  // )
  // };

  async function deleteCity(id) {
    dispatch({ type: "loading" });

    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the city...",
      });
    }
  }

  //  2 optionman haya katek value bo context aniren wa dispatchman haya
  // yakam ka awanay xwarawam nardwa wa dispatach lagali bnirm wa aw kat datwanin lanaw component dispatch bakar byenm bo updatete state
  // balam la projay gawra hamu logikm lanaw reducer nia  balam dakret lanaw  compoenet
  // mn fetch dataka bkam u dispatch bangbkam ka zor jwan nia u clean nia

  // hangawe dwam awaya ka dispatch nanirm bo context wata gar nainerm hamu childakan natwann bakare byenn waya?
  // balam fanctionakanm nardwa waku create city and delete city ka aw bange dispathe krdwa awa clean tra

  // gar async datam nabyet wa bashtra yan dakret mn dispatch bnirm bo context

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
