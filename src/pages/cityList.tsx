import { useTheme } from "@material-ui/core";
import React, { useState } from "react";
import Header from "../components/Header";
import SearchCities from "../components/CityListPage/SearchCities";

const CityList: React.FC = () => {
  const { palette } = useTheme();
  const [chosenCities, setChosenCities] = useState<string[]>([]);

  return (
    <>
      <Header
        boxShadow
        searchCities={<SearchCities {...{ chosenCities, setChosenCities }} />}
        backgroundColor={palette.common.white}
      />
    </>
  );
};

export default CityList;
