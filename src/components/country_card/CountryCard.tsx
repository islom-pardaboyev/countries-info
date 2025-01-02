import { useNavigate } from "react-router-dom";
import { SingleCountryContext } from "../../utils";

function CountryCard(country: SingleCountryContext) {
    const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/${country.name.common}`)}
      className="rounded-lg cursor-pointer hover:shadow-md hover:scale-110 duration-300 bg-white overflow-hidden"
    >
      <img
        className="w-full h-[400px] md:h-[200px] md:object-cover"
        src={country.flags.png}
        alt=""
      />
      <div className="p-5">
        <p className="font-extrabold line-clamp-1 text-lg">
          {country.name.common}
        </p>
        <div className="mt-5">
          <p>
            <span className="font-bold">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-bold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-bold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
