import React from "react";
import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../store/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex items-center gap-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-blue-600 font-bold">${item.price}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => dispatch(increaseQty(item.id))}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Remove */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-600 hover:underline"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
