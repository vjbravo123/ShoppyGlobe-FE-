import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
