/* eslint-disable */
import { useRef } from "react";
import BackButton from "./BackButton";
import Product from "./Product";

const ProductCarousel = ({ data, theme, favDispatch }) => {
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
            theme={theme}
            favDispatch={favDispatch}
          />
        );
      })}
      <BackButton onClick={scroll} />
    </section>
  );
};

export default ProductCarousel;
