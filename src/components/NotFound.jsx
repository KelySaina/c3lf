import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NotFound = ({ pageName }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-row-reverse items-center p-10 bg-white shadow-lg rounded-lg w-full max-w-3xl">
        {/* Image on the right */}
        <img
          src="/404-img.avif"
          alt="404"
          className="w-1/2 rounded-lg ml-4 hidden lg:block"
        />

        {/* Text content on the left */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page <b>{pageName}</b> Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            This page is currently under development.
          </p>
          <p className="text-gray-600 mb-4">
            We invite your contribution to the development of this page.
            Interested?
          </p>
          <div className="flex flex-col space-y-2 mt-4 md:mt-6">
            <a
              href="https://github.com/KelySaina/c3lf/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 text-center text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
            >
              I want to CONTRIBUTE
            </a>
            <Link
              to="/home"
              className="flex justify-center px-6 py-2 bg-gray-200 font-medium text-blue-700 hover:bg-gray-300 rounded-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
