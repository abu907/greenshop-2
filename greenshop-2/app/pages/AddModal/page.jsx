import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPostModal = ({ showModal, setShowModal, setPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Handle the addition of a new post
  const handleAddPost = async () => {
    const newPost = {
      title: title || "No title",  // Default title if not provided
      body: body || "No content",  // Default content if not provided
      userId: 123,  // Hardcoded user ID for the post
    };

    try {
      const res = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      // Check if the response is OK
      if (res.ok) {
        toast.success("Post added successfully!");
        setShowModal(false);  // Close the modal on success
      } else {
        const data = await res.json();
        toast.error(data.message || "An error occurred while adding the post!");
      }
    } catch (err) {
      toast.error("Error connecting to the server!");
    }
  };

  return (
    <Modal open={showModal} onClose={() => setShowModal(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Add New Post
        </Typography>

        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />

        <TextField
          label="Post Content"
          fullWidth
          multiline
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          margin="normal"
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 2 }}>
          <Button variant="outlined" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleAddPost}
            sx={{ bgcolor: "#46a358" }}
          >
            Add Post
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddPostModal;
