/* eslint-disable */
import BackButton from "./BackButton";
import { useRef } from "react";

const TopCarousel = ({ data }) => {
  const carouselRef = useRef("");

  const scroll = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={carouselRef}
      className="flex w-full gap-4 overflow-x-scroll whitespace-nowrap no-scrollbar"
    >
      {data.map((product) => {
        return (
          <div key={product.id} className="relative flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="size-32 rounded-2xl object-cover"
            />
            <p className="absolute bottom-2 left-0 w-full text-center text-sm font-light text-white">
              {product.title}
            </p>
          </div>
        );
      })}
      <BackButton onClick={scroll} />
    </div>
  );
};

export default TopCarousel;
