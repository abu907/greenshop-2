"use client";

import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  width: 500,
  height: 400,
};

const LoginModal = ({ open, handleClose, handleLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password,
        expiresInMins: 30,
      }),
    });
    const res = await response.json();
    console.log(res);

    if (res.accessToken) {
      handleLoginSuccess(email);
      localStorage.setItem("user", email);
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h2"
          className="text-center font-[800] text-[20px] leading-[0.8] text-[#46a358]"
        >
          Log in
        </Typography>

        <h1 className="font-normal text-[13px] leading-[1.23077] text-[#3d3d3d] text-center mt-[30px]">
          Enter your username and password to log in.
        </h1>
        <form className="flex flex-col gap-4 mt-[14px]" onSubmit={handleLogin}>
          <div className="flex justify-center flex-col items-center gap-5">
            <input
              type="text"
              placeholder="Username"
              className="border-[1px] text-[#000] p-[5] border-[#000] rounded-[5px] w-[300px] h-[40px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border-[1px] text-[#000] p-[5] border-[#000] rounded-[5px] w-[300px] h-[40px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              sx={{
                backgroundColor: "#46a358",
                color: "#fff",
                borderRadius: "5px",
                width: "300px",
                height: "40px",
                textTransform: "none", // Prevent text from being uppercase
              }}
              type="submit"
            >
              Log in
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default LoginModal;
