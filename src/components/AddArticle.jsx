/* eslint-disable */
import { FaRegPlusSquare } from "react-icons/fa";

const AddArticle = ({ className }) => {
  return (
    <button
      className={`bg-button flex items-center justify-center gap-2 rounded-2xl px-4 py-2 font-bold text-white ${className}`}
    >
      <FaRegPlusSquare className="text-lg" />
      <p>Déposer une annonce</p>
    </button>
  );
};

export default AddArticle;
