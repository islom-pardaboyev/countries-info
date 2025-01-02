import { useRoutes } from "react-router-dom";
import { AllCountries, SingleCountry } from "../pages";
import Header from "../components/header/Header";

function CustomRoutes() {
  return (
    <main className="transition-all">
      <Header />
      {useRoutes([
        {
          path: "/",
          element: <AllCountries />,
        },
        {
          path: "/:name",
          element: <SingleCountry />,
        },
      ])}
    </main>
  );
}

export default CustomRoutes;
