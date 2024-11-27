/* eslint-disable */

const Modal = ({ fav, total, setShowModal }) => {
  return (
    <div
      className="bg-modal-back fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center"
      onClick={() => {
        setShowModal(false);
      }}
    >
      <div
        className="relative w-[600px] rounded-xl bg-white p-10 text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="absolute right-4 top-4 text-xl font-bold"
        >
          X
        </button>
        {fav.map((product) => {
          return (
            <article
              key={product.id}
              className="flex items-center justify-between p-2"
            >
              <img
                src={product.image}
                alt={product.title}
                className="size-14 rounded-xl object-cover"
              />
              <span className="w-3/4 truncate p-4">{product.title}</span>
              <span>{product.price} €</span>
            </article>
          );
        })}
        <div className="flex justify-between pt-6 text-xl font-bold">
          <p className="">Prix total : </p>
          <p>{total} €</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
