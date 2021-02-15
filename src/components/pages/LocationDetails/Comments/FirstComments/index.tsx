import React from "react";
import { useStyles } from "./styles";
import { Avatar, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { StarBorder } from "@material-ui/icons";
import { CommentData } from "../../../../../hooks/swr/types";

interface FirstCommentsProps {
  firstComments: CommentData[];
}

const FirstComments: React.FC<FirstCommentsProps> = ({ firstComments }) => {
  const { container, avatar } = useStyles();

  return (
    <>
      {firstComments.map(({ image, username, comment, rating, id }) => (
        <div key={id} className={container}>
          <Avatar src={image} className={avatar} />
          <article>
            <div>
              <Typography variant="h5">{username}</Typography>
              <Rating value={rating} precision={0.5} readOnly emptyIcon={<StarBorder />} />
            </div>
            <Typography variant="subtitle1" align="justify">
              {comment}
            </Typography>
          </article>
        </div>
      ))}
    </>
  );
};

export default FirstComments;
