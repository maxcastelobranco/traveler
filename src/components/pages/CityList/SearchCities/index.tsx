import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useStyles } from "./styles";
import { Search } from "@material-ui/icons";

const options = require("../../../../db/cities.json") as string[];

export interface SearchCitiesProps {
  setChosenCityName: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchCities: React.FC<SearchCitiesProps> = ({ setChosenCityName }) => {
  const { container, button } = useStyles();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <form className={container} {...{ onSubmit }}>
      <Autocomplete
        fullWidth
        onChange={(_, value) => {
          setChosenCityName(value);
        }}
        renderInput={params => <TextField {...params} variant="outlined" label="Search Cities" />}
        {...{ options }}
      />
      <Button type="submit" size="medium" className={button}>
        <Search style={{ color: "white" }} />
      </Button>
    </form>
  );
};

export default SearchCities;
