"use client";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { toast } from "react-toastify";

const DeleteModal = ({ open, onClose, productId, onDeleted }) => {
  const handleDelete = async () => {
    try {
      await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "DELETE",
      });
      toast.success("Product has been deleted!");
      onDeleted();
    } catch (err) {
      toast.error("Error while deleting the product.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ fontWeight: 600 }}>
        Are you sure you want to delete this product?
      </DialogTitle>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} variant="outlined" color="inherit">
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          variant="contained"
          color="error"
        >
          Yes, Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
