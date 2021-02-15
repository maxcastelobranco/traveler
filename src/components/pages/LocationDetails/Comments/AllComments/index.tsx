import React from "react";
import { Avatar, Button, Dialog, IconButton, Typography } from "@material-ui/core";
import { CommentData } from "../../../../../hooks/swr/types";
import { CloseOutlined, CommentOutlined, StarBorder } from "@material-ui/icons";
import { useStyles } from "./styles";
import { Rating } from "@material-ui/lab";

interface AllCommentsProps {
  open: boolean;
  onClose(): void;
  comments: CommentData[];
  initialRating: number;
}

const AllComments: React.FC<AllCommentsProps> = ({ open, onClose, comments, initialRating }) => {
  const { header, commentContainer, avatar } = useStyles();

  return (
    <Dialog {...{ open, onClose }} maxWidth="sm">
      <header className={header}>
        <div>
          <Typography variant="h3" color="secondary">
            Rating {initialRating}
          </Typography>
          <CommentOutlined />
          <Typography>{comments.length} comments</Typography>
        </div>
        <div>
          <Button>Add rating</Button>
          <IconButton onClick={onClose}>
            <CloseOutlined />
          </IconButton>
        </div>
      </header>
      {comments.map(({ id, image, username, comment, rating }) => (
        <div key={id} className={commentContainer}>
          <Avatar src={image} className={avatar} />
          <article>
            <Typography variant="h5">{username}</Typography>
            <Typography variant="subtitle1">{comment}</Typography>
            <Rating value={rating} precision={0.5} readOnly emptyIcon={<StarBorder />} />
          </article>
        </div>
      ))}
    </Dialog>
  );
};

export default AllComments;
