import React from "react";
import { useComments } from "../../../../hooks/swr/useComments";
import { LinearProgress, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Header from "./Header";
import FirstComments from "./FirstComments";

interface CommentProps {
  locationId: string;
  initialRating: number;
}

const Comments: React.FC<CommentProps> = ({ locationId, initialRating }) => {
  const { container } = useStyles();
  const { comments, error, isLoading } = useComments(locationId);

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (isLoading || !comments) {
    return <LinearProgress />;
  }

  const firstComments = comments.length >= 3 ? comments.slice(0, 3) : comments;

  return (
    <div className={container}>
      <Header {...{ initialRating }} />
      <FirstComments {...{ firstComments }} />
    </div>
  );
};

export default Comments;
