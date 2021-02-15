import React from "react";
import { useComments } from "../../../../hooks/swr/useComments";
import { Avatar, Button, LinearProgress, Typography } from "@material-ui/core";
import { Star, StarBorder } from "@material-ui/icons";
import { useStyles } from "./styles";
import { Rating } from "@material-ui/lab";

interface CommentProps {
  locationId: string;
  initialRating: number;
}

const Comments: React.FC<CommentProps> = ({ locationId, initialRating }) => {
  const { container, header, commentContainer, avatar } = useStyles();
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
      <header className={header}>
        <div>
          <Typography variant="h4">Ratings</Typography>
          <Star color="secondary" />
          <Typography variant="h4" color="secondary">
            {initialRating}
          </Typography>
        </div>
        <div>
          <Button>Add</Button>
          <Button>See all</Button>
        </div>
      </header>
      {firstComments.map(({ image, username, comment, rating, id }) => (
        <div key={id} className={commentContainer}>
          <Avatar src={image} className={avatar} />
          <article>
            <div>
              <Typography variant="h5">{username}</Typography>
              <Rating value={rating} precision={0.5} readOnly emptyIcon={<StarBorder />} />
            </div>
            <Typography variant="subtitle1">{comment}</Typography>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Comments;
