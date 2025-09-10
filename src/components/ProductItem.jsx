import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <Link to={`/product/${product.id}`} className="flex-1">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-blue-600 font-bold mt-1">${product.price}</p>
      </Link>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-3 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
