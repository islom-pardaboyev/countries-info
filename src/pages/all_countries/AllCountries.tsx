import { Search } from "lucide-react";
import { Input } from "../../components/ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import { useGetAllCountriesQuery } from "../../store/api/get-all-countries-api";
import { SingleCountryContext } from "../../utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import CountryCard from "../../components/country_card/CountryCard";

function AllCountries() {
  const { data = [] } = useGetAllCountriesQuery(true) as {
    data: SingleCountryContext[];
  };
  const [dataForShow, setDataForShow] = useState<SingleCountryContext[]>();
  const [regions, setRegions] = useState<string[]>();
  const [regionName, setRegionName] = useState<string>();
  const [countryName, setCountryName] = useState<string>();
  
  // unical regions
  useEffect(() => {
    const regions = data.reduce((acc, curr) => {
      if (!acc.includes(curr.region)) {
        acc.push(curr.region);
      }
      return acc;
    }, [] as string[]);
    setRegions(regions);
    setDataForShow(data);
  }, [data]);

  // filter by region
  useEffect(() => {
    if (regionName === "All") {
      setDataForShow(data);
    } else {
      setDataForShow(data.filter((d) => d.region === regionName));
    }
  }, [regionName]);

  // filter by country name
  useEffect(() => {
    if (countryName && data) {
      setDataForShow(
        data.filter((d) =>
          d.name.common.toLowerCase().includes(countryName.toLowerCase())
        )
      );
    } else {
      setDataForShow(data);
    }
  }, [countryName]);

  console.log(dataForShow);
  return (
    <section className="bg-white_background dark:bg-dark_background w-full h-screen overflow-y-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0 justify-between my-10">
          <div className="flex items-center dark:bg-dark_header bg-white gap-1 py-2 px-3 rounded-md">
            <Search className="dark:text-white" />
            <Input
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                setCountryName(e.target.value)
              }
              className="focus-visible:ring-0 dark:text-white outline-none w-[500px] ring-0 border-none"
              placeholder="Search for a country"
            />
          </div>
          <Select onValueChange={(e) => setRegionName(e)}>
            <SelectTrigger className="w-[180px] text-black dark:text-white border-none outline-none ring-0 focus:ring-0">
              <SelectValue placeholder="Filter by Regions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              {regions &&
                regions.map((reg, inx) => (
                  <SelectItem key={inx} value={reg}>
                    {reg}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        {dataForShow && (
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 px-10 md:px-0 gap-14">
            {dataForShow.map((country, inx) => (
              <CountryCard key={inx} {...country}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default AllCountries;
