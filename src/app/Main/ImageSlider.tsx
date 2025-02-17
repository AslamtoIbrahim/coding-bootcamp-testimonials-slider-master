import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import next from "../../../public/sources/images/icon-next.svg";
import previous from "../../../public/sources/images/icon-prev.svg";
import Image from "next/image";

interface slide {
  name: string;
  position: string;
  quote: string;
  image: string;
}
type prop = {
  images: slide[];
};

const ImageSlider = ({ images }: prop) => {
  const [current, setcurrent] = useState(0);
  const nextSlide = () =>
    setcurrent((prev: number) => (prev + 1) % images.length);
  const prevSlide = () =>
    setcurrent((prev: number) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const hnadleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", hnadleKeyDown);
    return () => window.removeEventListener("keydown", hnadleKeyDown);
  }, []);

  //   swipe gesture
  const handleDrag = (_event: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) nextSlide();
    if (info.offset.x > 50) prevSlide();
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 relative">
      <AnimatePresence mode="wait">
        <motion.div>
          <motion.img
            key={images[current].image}
            onDragEnd={handleDrag}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full h-auto rounded-xl shadow-md cursor-grab active:cursor-grabbing"
            src={images[current].image}
            alt={images[current].name}
          />
        </motion.div>
      </AnimatePresence>
      <section
        className="bg-white p-3 flex items-center justify-center gap-8
       rounded-full shadow-md absolute bottom-0"
      >
        <button onClick={prevSlide} className="outline-none ">
          <Image src={previous} alt="prev icon" />
        </button>
        <button onClick={nextSlide} className="outline-none">
          <Image src={next} alt="next icon" />
        </button>
      </section>
    </div>
  );
};

export default ImageSlider;
