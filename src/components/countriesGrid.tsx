import { IPais } from "@/types/country";
import { Card } from "./card";
import { useEffect, useState } from "react";

interface CountriesGridProps {
  countries: IPais[];
  search: string;
  handleSearch: (value: string) => void;
}

export const CountriesGrid: React.FC<CountriesGridProps> = ({
  countries,
  search,
  handleSearch,
}) => {
  return (
    <>
      <input
        className="searchBar"
        type="search"
        value={search}
        placeholder="Buscar país..."
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      />
      <section className="grid">
        {countries.map((country) => (
          <Card key={country.name.common} country={country} />
        ))}
      </section>
    </>
  );
};
