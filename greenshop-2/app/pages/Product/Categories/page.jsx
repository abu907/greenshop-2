"use client";

import React, { useEffect, useState } from "react";

const Categories = ({ setSelectedCategory, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );

        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Categories</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <ul className="space-y-3">
        {categories.map((category) => (
          <li
            key={category.slug}
            className={`cursor-pointer p-3 rounded-lg transition-all duration-300 text-lg font-semibold text-gray-800 hover:bg-[#46a358] hover:text-white ${
              selectedCategory === category.slug
                ? "bg-[#46a358] text-white"
                : "hover:bg-[#f0f0f0]"
            }`}
            onClick={() => setSelectedCategory(category.slug)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
