const CartProductRow = ({ title, count }) => {
  return (
    <div className="flex bg-white justify-between p-3 mb-4 rounded-md drop-shadow-xl">
      <h3 className="text-lg">{title}</h3>
      <span className="text-lg">{count}</span>
    </div>
  );
};

export default CartProductRow;
