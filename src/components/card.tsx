import { IPais } from "@/types/country";

interface CardProps {
  country: IPais;
}

export const Card: React.FC<CardProps> = ({ country }) => {
  return (
    <article
      className="card flex items-center p-4 border-2 border-black rounded-md shadow-md"
      onClick={() => window.open(country.maps.googleMaps, "_blank")?.focus()}
    >
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width={200}
        height={200}
      />
      <h3 className="text-xl">{country.name.common}</h3>
      <section className="flex flex-col items-center">
        {country.continents.map((continent) => (
          <span key={continent}>{continent}</span>
        ))}
      </section>
    </article>
  );
};
