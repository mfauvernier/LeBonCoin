/* eslint-disable */
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const BackButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <FaRegArrowAltCircleLeft className="text-3xl" />
    </button>
  );
};

export default BackButton;
