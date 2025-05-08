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

const EditModal = ({ open, onClose, productId, currentProduct: product, onUpdated }) => {
  const [formData, setFormData] = useState({
    title: product?.title || "",
    price: product?.price || "",
    description: product?.description || "",
  });

  const handleSubmit = async () => {
    try {
      await fetch(`https://dummyjson.com/products/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      toast.success("Product successfully updated!");
      onUpdated();
    } catch (err) {
      toast.error("An error occurred while updating.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>Edit Product</DialogTitle>
      <DialogContent dividers>
        <TextField
          fullWidth
          margin="normal"
          label="Product Name"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Price"
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          multiline
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} variant="outlined" color="inherit">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ backgroundColor: "#46a358", color: "#fff" }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
