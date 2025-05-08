"use client";

import React, { useState } from "react";
import Cards from "./Cards";
import Categories from "./Categories/page";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("beauty");

  return (
    <div className="bg-[#f5f7f9] min-h-screen py-10 px-6 sm:px-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="bg-white p-5 rounded-xl shadow-sm md:col-span-1">
            <Categories
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </aside>

          <main className="md:col-span-3">
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <Cards category={selectedCategory} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Product;
