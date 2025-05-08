"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditModal from "../EditModal";
import DeleteModal from "../DeleteModal";

const sizes = ["S", "M", "L", "XL"];

const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState({ images: [] });
  const [selectedSize, setSelectedSize] = useState("M");
  const [mainImage, setMainImage] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.thumbnail || data.images?.[0] || "");
      });
  }, [id]);

  const handleEditSuccess = () => {
    setEditOpen(false);
  };

  const handleDeleteSuccess = () => {
    setDeleteOpen(false);
  };

  return (
    <div className="container mx-auto max-w-6xl p-8 flex flex-col md:flex-row gap-10">
      <ToastContainer />
      <EditModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        productId={id}
        currentProduct={product}
        onUpdated={handleEditSuccess}
      />
      <DeleteModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        productId={id}
        onDeleted={handleDeleteSuccess}
      />
      
      <div className="flex flex-col md:flex-row gap-8 w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          {product.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={product.title}
              className={`w-20 h-20 object-cover rounded border cursor-pointer ${
                mainImage === img ? "ring-2 ring-green-500" : ""
              }`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
        <img
          src={mainImage}
          alt={product.title}
          className="w-full max-w-xs h-[400px] object-contain mx-auto rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-2">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-3xl font-bold">{product.title}</h1>
        </div>
        <p className="text-green-600 text-xl font-bold mb-2">
          ${product.price}
        </p>
        <hr className="mb-4 border-green-200" />
        <div className="mb-2">
          <span className="font-semibold">Short Description:</span>
          <div className="ml-2 inline-block">{product.description}</div>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Size:</span>
          <div className="inline-flex gap-2 ml-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-semibold transition-all ${
                  selectedSize === size
                    ? "bg-[#46a358] text-white border-[#46a358]"
                    : "bg-white text-[#3d3d3d] border-gray-300"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mb-4">
          <button className="bg-[#46a358] text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition">
            BUY NOW
          </button>
          <button className="border border-[#46a358] text-[#46a358] px-6 py-2 rounded font-semibold hover:bg-[#46a358] hover:text-white transition">
            ADD TO CARD
          </button>
        </div>

        <div className="flex gap-4">
          <Button
            sx={{
              backgroundColor: "#46a358",
              color: "white",
              display: "block",
              marginTop: "20px",
            }}
            variant="contained"
            onClick={() => setEditOpen(true)}
          >
            Edit
          </Button>

          <Button
            sx={{
              backgroundColor: "red",
              color: "white",
              display: "block",
              marginTop: "20px",
            }}
            variant="contained"
            onClick={() => setDeleteOpen(true)}
          >
            Delete
          </Button>

          <Link
            className="text-[#46a358] border border-[#46a358] px-4 py-2 rounded mt-[20px] hover:text-green-600"
            href="/"
          >
            back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
