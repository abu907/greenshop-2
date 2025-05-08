"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../../components/navbar/Navbar";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddPostModal from "../../AddModal/page";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import VisibilityIcon from '@mui/icons-material/Visibility';

const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <div>
      <Navbar />
      <ToastContainer />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold mb-6 text-green-600">
            Blog Posts
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
          >
            Add Post
          </button>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-xl transition-all"
            >
              <Link href={`/pages/Blog/Cards/${post?.id}`} passHref>
                <a>
                  <h2 className="text-2xl font-semibold mb-3 text-gray-800 hover:text-green-600">
                    {post.title}
                  </h2>
                </a>
              </Link>
              <p className="text-gray-600 mb-4">{post.body}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-green-600 text-white px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {isLoggedIn ? (
                <div className="flex flex-wrap justify-between text-sm text-gray-500">
                  <div>
                    <PersonOutlineIcon className="mr-2" /> User ID: {post.userId}
                  </div>
                  <div>
                    <ThumbUpIcon className="mr-2" /> Likes: {post.reactions?.likes || 0}
                  </div>
                  <div>
                    <ThumbDownAltIcon className="mr-2" /> Dislikes: {post.reactions?.dislikes || 0}
                  </div>
                  <div> 
                    <VisibilityIcon className="mr-2" /> Views: {post.views || "Unknown"}
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm mt-4">
                  User not logged in
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <AddPostModal
          showModal={showModal}
          setShowModal={setShowModal}
          setPosts={setPosts}
        />
      )}
    </div>
  );
};

export default Cards;
