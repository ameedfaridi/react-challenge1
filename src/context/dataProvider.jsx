import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

const DataContext = React.createContext();

export const useMovie = () => {
  return useContext(DataContext);
};

const BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key=";
const API_KEY = "c7a021f957c3b757437da02814317b07";

export const DataProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [resultData, setResultData] = useState([]);
  const [recent, setRecent] = useState([]);
  const router = useHistory();

  const search = async () => {
    if (searchValue === "") return alert("Enter Some Value");
    const res = await fetch(`${BASE_URL}${API_KEY}&query=${searchValue}`);
    const data = await res.json();
    setRecent((prev) => [searchValue, ...prev]);
    setResultData(data.results);
    router.push("/search-result");
  };

  const value = {
    recent,
    search,
    resultData,
    searchValue,
    setSearchValue,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
