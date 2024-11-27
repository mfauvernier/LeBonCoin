/* eslint-disable */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Product = ({ product, addFav, removeFav, theme }) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavClick = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(product);
    } else {
      setIsFav(true);
      addFav(product);
    }
  };

  return (
    <article className="flex h-[430px] w-44 shrink-0 flex-col justify-between">
      <div>
        <div className="mb-2 flex items-center gap-1">
          <img
            src={product.avatar}
            alt={product.username}
            className="size-8 rounded-full"
          />
          <span className="truncate font-bold">{product.username}</span>
          {product.comments && product.stars ? (
            <>
              <FaStar className="mb-3 mr-1 text-star" />
              <span className="font-bold">{product.stars}</span>
              <span className="text-xs">({product.comments})</span>
            </>
          ) : null}
        </div>
        <img
          src={product.image}
          alt={product.title}
          className="h-52 w-full rounded-lg object-cover"
        />
        <p>{product.title}</p>
        <p>{product.price} €</p>
      </div>
      <div>
        {product.delivery && (
          <span
            className={
              "rounded-2xl bg-light-blue px-2 py-1 text-sm font-bold text-black"
            }
          >
            Livraison possible
          </span>
        )}
        <div className="flex items-end justify-between">
          <div className="text-text mt-2 text-xs">
            <p>{product.place}</p>
            <p>{product.date}</p>
          </div>
          <button onClick={handleFavClick}>
            {isFav ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Product;
