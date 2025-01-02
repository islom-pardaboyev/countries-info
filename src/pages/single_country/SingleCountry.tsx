import { useNavigate, useParams } from "react-router-dom";
import { useGetCountryByNameQuery } from "../../store/api/get-country-by-name-api";
import { MoveLeft } from "lucide-react";
import { SingleCountryContext } from "../../utils";
import Zoom from "react-medium-image-zoom";
import { dotStream } from "ldrs";
dotStream.register();

function SingleCountry() {
  const navigate = useNavigate();
  const { name } = useParams();
  console.log(name);
  const { data, isLoading } = useGetCountryByNameQuery(name) as {
    data: SingleCountryContext[];
    isLoading: boolean;
  };
  console.log(data);
  return (
    <section className="w-full h-screen bg-white_background absolute top-0 left-0 flex items-center justify-center">
      {isLoading && (
        <l-dot-stream size="100" speed="2.5" color="black"></l-dot-stream>
      )}
      {data && (
        <div className="container">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-20 bg-white rounded-md shadow-lg px-8 py-2"
          >
            <MoveLeft />
            Back
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 items-center">
            <Zoom>
              <img
                className="w-full object-cover h-[400px]"
                src={data[0].flags.png}
                alt=""
              />
            </Zoom>
            <div>
              <h1 className="text-3xl font-extrabold">{data[0].name.common}</h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 my-20 items-center justify-between">
                <div className="flex flex-col gap-2">
                  <p>
                    <span className="font-bold">Native Name:</span>{" "}
                    {data[0].name.official}
                  </p>
                  <p>
                    <span className="font-bold">Population:</span>{" "}
                    {data[0].population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-bold">Region:</span> {data[0].region}
                  </p>
                  <p>
                    <span className="font-bold">Sub Region:</span>{" "}
                    {data[0].subregion}
                  </p>
                  <p>
                    <span className="font-bold">Capital:</span>{" "}
                    {data[0].capital}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>
                    <span className="font-bold">Top Level Domain:</span>{" "}
                    {data[0].tld.map((tld) => tld)}
                  </p>
                  <p>
                    <span className="font-bold">Currencies:</span>{" "}
                    {
                      data[0].currencies[Object.keys(data[0].currencies)[0]]
                        .name
                    }
                  </p>
                  <p>
                    <span className="font-bold">Languages:</span>{" "}
                    {Object.values(data[0].languages).join(", ")}
                  </p>
                </div>
              </div>
              {data[0].borders && (
                <p>
                  <span className="font-bold">Border Countries:</span>{" "}
                  {data[0].borders.join(", ")}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      {!data &&!isLoading && (
        <p className="text-center text-2xl">No country found with the name {name}</p>
      )}
    </section>
  );
}

export default SingleCountry;
