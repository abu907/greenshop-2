"use client";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { toast } from "react-toastify";

const DeleteModal = ({ open, onClose, postId, onDeleted }) => {
  const handleDelete = async () => {
    try {
      await fetch(`https://dummyjson.com/posts/${postId}`, {
        method: "DELETE",
      });
      toast.success("Post deleted!");
      onDeleted();
    } catch (err) {
      toast.error("Error deleting post!");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure you want to delete this post?</DialogTitle>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={handleDelete} color="error" variant="contained">
          Yes, delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
