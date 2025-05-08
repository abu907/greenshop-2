"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import LoginModal from "./LoginModal";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsername(user);
    }
  }, []);

  const handleOpen = () => {
    if (username) {
      router.push("/Profile");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const handleLoginSuccess = (user) => {
    setUsername(user);
    localStorage.setItem("user", user);
    handleClose();
  };

  return (
    <header>
      <div className="container max-w-[1440px] mx-auto mt-[20px]">
        <div className="flex">
          <div className="wrapper flex items-center justify-between w-full">
            <div className="logo">
              <Image src="/logo.png" alt="logo" width={170} height={35} />
            </div>

            <div className="menu w-full flex justify-center">
              <ul className="flex gap-8 text-[18px]">
                <li>
                  <Link className="text-[#000]" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-[#000]" href="/pages/Blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <SearchIcon className="text-[#000]" />
              <ShoppingCartIcon className="text-[#000]" />
              <Button
                variant="contained"
                color="success"
                onClick={handleOpen}
              >
                {username ? username : "Login"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <LoginModal
        open={open}
        handleClose={handleClose}
        handleLoginSuccess={handleLoginSuccess}
      />
    </header>
  );
};

export default Navbar;
