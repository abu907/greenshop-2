"use client";

import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const Slider = () => {
  const contentStyle = {
    height: "500px",
    color: "black",
    display: "flex",
    justifyContent: "center", // Center elements horizontally
    alignItems: "center", // Center elements vertically
    background:
      "linear-gradient(135deg, rgba(245, 245, 245, 0.5) 0%, rgba(245, 245, 245, 0.5) 100%)", // Gradient background
  };

  return (
    <div className="container max-w-[1440px] mx-auto">
      <div className="mt-[60px]">
        <Carousel autoplay autoplaySpeed={5000}>
          {/* Slide 1 */}
          <div>
            <div style={contentStyle}>
              <div className="wrapper flex w-full justify-between items-center">
                <div className="right p-9">
                  <h1 className="font-medium text-[14px] leading-[1.14286] text-[#3d3d3d]">
                    Welcome to GreenShop
                  </h1>
                  <p className="font-black text-[70px] leading-none uppercase text-[#3d3d3d]">
                    Let’s Make a <br /> Better{" "}
                    <span className="text-[#46a358]">Planet</span>
                  </p>
                  <h5 className="font-normal text-[14px] mt-[10px] leading-[1.71429] text-[#727272]">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create a unique Urban
                    Jungle. Order your favorite plants!
                  </h5>
                  <div className="flex justify-start">
                    <button className="rounded-[6px] w-[140px] h-[40px] bg-[#46a358] font-bold text-[16px] leading-tight uppercase text-[#fff] mt-[44px]">
                      Shop Now
                    </button>
                  </div>
                </div>

                <div className="left">
                  <Image
                    src="/picture.png"
                    width={500}
                    height={500}
                    alt="slider"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div style={contentStyle}>
              <div className="wrapper flex w-full justify-between items-center">
                <div className="right p-9">
                  <h1 className="font-medium text-[14px] leading-[1.14286] text-[#3d3d3d]">
                    Welcome to GreenShop
                  </h1>
                  <p className="font-black text-[70px] leading-none uppercase text-[#3d3d3d]">
                    Let’s Make a <br /> Better{" "}
                    <span className="text-[#46a358]">Planet</span>
                  </p>
                  <h5 className="font-normal text-[14px] mt-[10px] leading-[1.71429] text-[#727272]">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create a unique Urban
                    Jungle. Order your favorite plants!
                  </h5>
                  <div className="flex justify-start">
                    <button className="rounded-[6px] w-[140px] h-[40px] bg-[#46a358] font-bold text-[16px] leading-tight uppercase text-[#fff] mt-[44px]">
                      Shop Now
                    </button>
                  </div>
                </div>

                <div className="left">
                  <Image
                    src="/picture.png"
                    width={500}
                    height={500}
                    alt="slider"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div style={contentStyle}>
              <div className="wrapper flex w-full justify-between items-center">
                <div className="right p-9">
                  <h1 className="font-medium text-[14px] leading-[1.14286] text-[#3d3d3d]">
                    Welcome to GreenShop
                  </h1>
                  <p className="font-black text-[70px] leading-none uppercase text-[#3d3d3d]">
                    Let’s Make a <br /> Better{" "}
                    <span className="text-[#46a358]">Planet</span>
                  </p>
                  <h5 className="font-normal text-[14px] mt-[10px] leading-[1.71429] text-[#727272]">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create a unique Urban
                    Jungle. Order your favorite plants!
                  </h5>
                  <div className="flex justify-start">
                    <button className="rounded-[6px] w-[140px] h-[40px] bg-[#46a358] font-bold text-[16px] leading-tight uppercase text-[#fff] mt-[44px]">
                      Shop Now
                    </button>
                  </div>
                </div>

                <div className="left">
                  <Image
                    src="/picture.png"
                    width={500}
                    height={500}
                    alt="slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
