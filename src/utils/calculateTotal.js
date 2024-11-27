const calculateTotal = (favList) => {
  return favList.reduce((total, product) => {
    return total + product.price;
  }, 0);
};

export default calculateTotal;
