'use client'
import React from "react";
import testimonials from "../data";
import ImageSlider from "./ImageSlider";
const Main = () => {
  return (
    <div>
      <ImageSlider images={testimonials} />
    </div>
  );
};

export default Main;
