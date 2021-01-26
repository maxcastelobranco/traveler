import { NextPage } from "next";
import { useRouter } from "next/router";
import { LinearProgress, Typography } from "@material-ui/core";
import { useLocation } from "../../hooks/swr/useLocation";
import { useComments } from "../../hooks/swr/useComments";
import Details from "../../components/pages/LocationDetails/Details";
import LocationImage from "../../components/pages/LocationDetails/LocationImage";

const Location: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  const { location, isLoading: isLocationLoading, error: locationError } = useLocation(
    id as string
  );
  const { comments, isLoading: areCommentsLoading, error: commentsError } = useComments(
    id as string
  );

  if (!location || !comments || isLocationLoading || areCommentsLoading) {
    return <LinearProgress />;
  }

  if (locationError || commentsError) {
    return (
      <Typography>
        {locationError && locationError}
        {commentsError && commentsError}
      </Typography>
    );
  }

  const { name, image } = location;

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <Details {...location} />
      <LocationImage src={image} {...{ name }} />
    </div>
  );
};

export default Location;
