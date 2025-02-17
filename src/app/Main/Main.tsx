"use client";
import React, { useState } from "react";
import testimonials from "../data";
import ImageSlider from "./ImageSlider";
import TextCard from "./TextCard";
const Main = () => {
  const [currentItem, setcurrentItem] = useState(0);

  const onSelectItem = (index: number) => {
    setcurrentItem(index);
  };

  return (
    <div className="bg-curve bg-no-repeat bg-bottom h-screen flex flex-col gap-8 ">
      <section className="bg-pattern bg-no-repeat bg-contain p-6 ">
        <ImageSlider images={testimonials} handleItem={onSelectItem} />
      </section>
      <section className="bg-quote bg-no-repeat bg-top bg-[length:20%] px-4 pt-8">
        <TextCard item={testimonials} index={currentItem} />
      </section>
    </div>
  );
};

export default Main;
