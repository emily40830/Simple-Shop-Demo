const CartProductRow = ({ title, quantities, price }) => {
  return (
    <div className="flex bg-white justify-between p-3 mb-4 rounded-md drop-shadow-xl">
      <h5 className="text-m">{title}</h5>
      <div>
        <span className="text-m mr-5">NT$ {price}</span>
        <span className="text-m">{quantities} 個</span>
      </div>
    </div>
  );
};

export default CartProductRow;
