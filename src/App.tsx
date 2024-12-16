import React, { useEffect, useState } from "react";
import "./App.css";
import { CountriesGrid } from "./components/countriesGrid";
import { IPais } from "./types/country";

function App() {
  const [countries, setCountries] = useState<IPais[]>([]);
  const [filteredCountries, setFilteredCountries] =
    useState<IPais[]>(countries);
  const [search, setSearch] = useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      });
  }, []);

  useEffect(() => {
    if (!search) return setFilteredCountries(countries);

    const filteredCountries = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()) ||
        country.continents.includes(search.toLowerCase())
    );
    setFilteredCountries(filteredCountries);
  }, [search, countries]);

  return (
    <div className="App">
      <h1>Hello CAMPEON DEL MUNDO</h1>
      <CountriesGrid
        countries={filteredCountries.slice(0, 10)}
        search={search}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
