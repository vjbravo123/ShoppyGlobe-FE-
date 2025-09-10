import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
        <Link to="/" className="text-blue-600 mt-4 block">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h3>
        <Link
          to="/checkout"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
