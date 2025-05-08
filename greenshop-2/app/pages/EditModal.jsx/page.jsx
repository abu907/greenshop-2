"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const EditModal = ({ open, onClose, postId, currentTitle, onUpdated }) => {
  const [newTitle, setNewTitle] = useState(currentTitle);

  const handleSubmit = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });
      
      if (!res.ok) {
        throw new Error('Failed to update post');
      }

      const data = await res.json();
      toast.success("Post updated!"); 
      onUpdated(data); 
      onClose(); 
    } catch (err) {
      toast.error("Error updating post!"); 
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Title</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="New Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)} 
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button sx={{backgroundColor:"green" }} variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
