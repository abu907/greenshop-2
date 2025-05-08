"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import InventoryIcon from "@mui/icons-material/Inventory";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [addForm, setAddForm] = useState({
    title: "",
    price: "",
    description: "",
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  const handleCloseDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleAddProduct = async () => {
    setAddLoading(true);
    try {
      await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: addForm.title,
          price: addForm.price,
          description: addForm.description,
        }),
      });
      toast.success("Product added successfully");
      setOpenAddDialog(false);
      setAddForm({ title: "", price: "", description: "" });
    } catch {
      toast.error("Something went wrong");
    } finally {
      setAddLoading(false);
    }
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      <Navbar />
      <hr className="mt-5 max-w-[1440px] mx-auto border-green-600" />

      <div className="max-w-[1440px] mx-auto px-4 mt-10">
        <div className="flex justify-between flex-wrap gap-8">
          <div className="w-full sm:w-[300px] bg-white rounded-xl shadow-md p-4">
            <h2 className="font-bold text-2xl mb-6 text-gray-900">My Account</h2>

            <div className="flex items-center gap-3 mb-6">
              <InventoryIcon className="text-gray-700 text-4xl" />
              <Link
                className="font-semibold text-lg text-gray-800 hover:underline"
                href="/pages/Profile/MyProduct"
              >
                My Products
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <ExitToAppIcon className="text-red-500 text-4xl" />
              <button
                onClick={() => setOpenLogoutDialog(true)}
                className="font-semibold text-lg text-red-600 hover:underline"
              >
                Log Out
              </button>
            </div>
          </div>

          <div className="flex items-start">
            <button
              className="bg-green-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-green-700 transition"
              onClick={() => setOpenAddDialog(true)}
            >
              Add New Product
            </button>
          </div>
        </div>
      </div>

      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            value={addForm.title}
            onChange={(e) =>
              setAddForm((f) => ({ ...f, title: e.target.value }))
            }
          />
          <TextField
            label="Price"
            type="number"
            fullWidth
            margin="normal"
            value={addForm.price}
            onChange={(e) =>
              setAddForm((f) => ({ ...f, price: e.target.value }))
            }
          />
          <TextField
            label="Description"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            value={addForm.description}
            onChange={(e) =>
              setAddForm((f) => ({ ...f, description: e.target.value }))
            }
          />
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              backgroundColor: "#A0A0A0",
              fontWeight: "600",
              color: "white",
            }}
            onClick={() => setOpenAddDialog(false)}
            disabled={addLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddProduct}
            variant="contained"
            style={{
              backgroundColor: "#46A358",
              fontWeight: "600",
              color: "white",
            }}
            disabled={addLoading || !addForm.title || !addForm.price}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openLogoutDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ fontWeight: "600" }}>
          Are you sure you want to log out?
        </DialogTitle>
        <DialogContent>
          <p className="text-gray-700 font-medium">Do you really want to leave?</p>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: "white",
              width: "100px",
              height: "40px",
              backgroundColor: "green",
              fontSize: "11px",
            }}
            onClick={handleCloseDialog}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            sx={{
              color: "white",
              width: "100px",
              height: "40px",
              backgroundColor: "red",
            }}
            onClick={handleLogout}
            color="secondary"
          >
            Log Out
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Profile;
