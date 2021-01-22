import { NextPage } from "next";

import { CircularProgress, Typography } from "@material-ui/core";
import { useCity } from "../../hooks/swr/useCity";
import { useRouter } from "next/router";
import Header from "../../components/global/Header";
import { useLocations } from "../../hooks/swr/useLocations";
import CityImage from "../../components/pages/CityDetails/CityImage";
import Details from "../../components/pages/CityDetails/Details";

const City: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { city, error: cityError, isLoading: isCityLoading } = useCity(id as string);
  const { locations, error, isLoading: areLocationsLoading } = useLocations(id as string);

  if (isCityLoading || areLocationsLoading || !city || !locations) {
    return <CircularProgress />;
  }

  if (error || cityError) {
    return (
      <Typography variant="h4" color="error">
        {error && error}
        {cityError && cityError}
      </Typography>
    );
  }

  const { name, image } = city;

  return (
    <>
      <Header showGoBackButton middleComponent={<Typography variant="h4">City</Typography>} />
      <CityImage src={image} {...{ name }} />
      <Details {...{ city, locations }} />
    </>
  );
};

export default City;
