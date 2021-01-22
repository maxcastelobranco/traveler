import { useTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Header from "../components/global/Header";
import SearchCities from "../components/pages/CityListPage/SearchCities";
import { useActiveItem } from "../hooks/useActiveItem";
import { useListPageCities } from "../hooks/swr/useListPageCities";
import { CityData } from "../hooks/types";
import api from "../services/api";
import CityGrid from "../components/pages/CityListPage/CityGrid";
import CityGridPagination from "../components/pages/CityListPage/CityGridPagination";
import { NextPage } from "next";

const LIMIT = 8;

const CityList: NextPage = () => {
  const { palette } = useTheme();
  const [chosenCityName, setChosenCityName] = useState<string | null>(null);
  const { activeItem: activeCity, setActiveItem: setActiveCity } = useActiveItem();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [renderedCities, setRenderedCities] = useState<CityData[]>([]);

  const { cities } = useListPageCities({
    page,
    limit: LIMIT,
    setCount,
  });

  const onChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (cities) {
      if (chosenCityName) {
        api.get("cities", { params: { name: chosenCityName } }).then(({ data }) => {
          setRenderedCities(data);
        });
      } else {
        setRenderedCities(cities);
      }
    }
  }, [chosenCityName, cities]);

  return (
    <>
      <Header
        boxShadow
        middleComponent={<SearchCities {...{ setChosenCityName }} />}
        backgroundColor={palette.common.white}
      />
      <CityGrid {...{ renderedCities, activeCity, setActiveCity }} />
      {count !== 0 && (
        <CityGridPagination disabled={renderedCities.length === 1} {...{ count, page, onChange }} />
      )}
    </>
  );
};

export default CityList;
