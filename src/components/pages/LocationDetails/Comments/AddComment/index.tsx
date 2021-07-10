import React from "react";
import {
  Button,
  Dialog,
  IconButton,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import { CloseOutlined, WarningOutlined } from "@material-ui/icons";

interface AddCommentProps {
  open: boolean;
  onClose(): void;
}

const AddComment: React.FC<AddCommentProps> = ({ open, onClose }) => {
  return (
    <Dialog {...{ open, onClose }}>
      <header>
        <Typography variant="h3">Add rating</Typography>
        <IconButton>
          <CloseOutlined />
        </IconButton>
      </header>
      <TextField variant="outlined" label="Full name" />
      <TextareaAutosize />
      <WarningOutlined />
      <Typography>Your submission is awaiting moderation</Typography>
      <Button variant="outlined">Submit</Button>
    </Dialog>
  );
};

export default AddComment;
