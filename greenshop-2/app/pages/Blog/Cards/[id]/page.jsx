"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "@/app/pages/DeleteModal/page";
import EditModal from "@/app/pages/EditModal.jsx/page";

const PostDetails = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <ToastContainer />
      <EditModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        postId={id}
        currentTitle={post.title}
        onUpdated={(updatedPost) => setPost(updatedPost)}
      />
      <DeleteModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        postId={id}
        onDeleted={() => {
          router.back();
        }}
      />
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-3xl mx-auto p-6 w-[500px] h-[500px] bg-[#e7e7e7] rounded-4xl">
          <h1 className="text-2xl font-bold mb-4 text-black">{post.title}</h1>
          <p className="mb-4 text-black">{post.body}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag, i) => (
              <span
                key={i}
                className="text-sm bg-[#46a358] text-white px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-between text-sm text-black">
            <div>🙋‍♂️ User ID: {post.userId}</div>
            <div>❤️ Likes: {post.reactions?.likes || 0}</div>
            <div>💔 Dislikes: {post.reactions?.dislikes || 0}</div>
            <div>👀 Views: {post.views || "Unknown"}</div>
          </div>

          <div className="flex gap-2 mt-6">
            <Button
              sx={{
                backgroundColor: "#46a358",
              }}
              variant="contained"
              color="primary"
              onClick={() => setEditOpen(true)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setDeleteOpen(true)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#46a358",
                "&:hover": { backgroundColor: "#3d8c4f" },
              }}
              onClick={() => router.back()}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
