/* eslint-disable */
import { useRef } from "react";
import BackButton from "./BackButton";
import Product from "./Product";

const ProductCarousel = ({ data, addFav, removeFav, theme }) => {
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
    <section
      ref={carouselRef}
      className="flex gap-3 overflow-x-scroll no-scrollbar"
    >
      {data.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            addFav={addFav}
            removeFav={removeFav}
            theme={theme}
          />
        );
      })}
      <BackButton onClick={scroll} />
    </section>
  );
};

export default ProductCarousel;
