import React, { useState } from "react";
import { useComments } from "../../../../hooks/swr/useComments";
import { LinearProgress, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Header from "./Header";
import FirstComments from "./FirstComments";
import AllComments from "./AllComments";
import AddComment from "./AddComment";

interface CommentProps {
  locationId: string;
  initialRating: number;
}

const Comments: React.FC<CommentProps> = ({ locationId, initialRating }) => {
  const { container } = useStyles();
  const { comments, error, isLoading } = useComments(locationId);
  const [allCommentsDialogOpen, setAllCommentsDialogOpen] = useState(false);
  const openAllCommentsDialog = () => {
    setAllCommentsDialogOpen(true);
  };
  const closeAllCommentsDialog = () => {
    setAllCommentsDialogOpen(false);
  };
  const [addCommentDialogOpen, setAddCommentDialogOpen] = useState(false);
  const openAddCommentDialog = () => {
    setAddCommentDialogOpen(true);
  };
  const closeAddCommentDialog = () => {
    setAddCommentDialogOpen(false);
  };

  if (error) {
    return <Typography>{error.message}</Typography>;
  }
  if (isLoading || !comments) {
    return <LinearProgress />;
  }

  const firstComments = comments.length >= 3 ? comments.slice(0, 3) : comments;

  return (
    <div className={container}>
      <Header {...{ initialRating, openAllCommentsDialog, openAddCommentDialog }} />
      <FirstComments {...{ firstComments }} />
      <AllComments
        open={allCommentsDialogOpen}
        onClose={closeAllCommentsDialog}
        {...{ comments, initialRating }}
      />
      <AddComment open={addCommentDialogOpen} onClose={closeAddCommentDialog} />
    </div>
  );
};

export default Comments;
