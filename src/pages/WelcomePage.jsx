import { Link } from "react-router-dom";
import CarouselComponent from "../components/CarouselComponent";

const WelcomePage = () => {
  const images = [
    {
      src: "/images/imagesCarousel/c1.png",
      legend: "Greatness is not what you have, but what you give.",
      alt: "c1",
    },
    {
      src: "/images/imagesCarousel/c2.png",
      legend:
        "True fulfillment comes from knowing your actions made a difference.",
      alt: "c2",
    },
    {
      src: "/images/imagesCarousel/c3.png",
      legend:
        "A small act of kindness today can spark a ripple of change tomorrow.",
      alt: "c3",
    },
    {
      src: "/images/imagesCarousel/c4.png",
      legend:
        "Your contribution to the world is measured by the smiles you create.",
      alt: "c4",
    },
  ];
  return (
    <div className="space-y-10 py-10 px-[8%] relative bg-gradient-to-b from-blue-50 to-white">
      {/* Quote Section */}
      <div className="flex justify-center mt-2">
        <p className="text-center italic text-xl font-semibold text-gray-700 relative w-full md:w-[max-content] before:absolute before:inset-0 before:bg-white before:animate-typewriter">
          "Promote the use of free software in the academic and professional world."
        </p>
      </div>

      <div className="md:flex md:items-center md:space-x-10">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="relative">
            <CarouselComponent Images={images} />
            <div className="absolute top-0 left-0 w-20 h-20 bg-blue-400 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>

        {/* Text and Buttons Section */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-6 animate-fade-in">
            Welcome!!!
          </h2>
          <div className="text-justify text-lg text-gray-700 leading-relaxed animate-fade-in">
            <p>
              This site is the result of a collaboration between several
              open-source enthusiasts, individuals eager to learn how to use
              Git.
            </p>
            <p className="mt-4">
              We encourage everyone who wants to contribute to join us.
            </p>
          </div>

          <div className="flex flex-col space-y-4 mt-8 md:mt-10">
            <a
              href="https://github.com/KelySaina/c3lf/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center px-8 py-3 text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            >
              I want to CONTRIBUTE
            </a>
            <Link
              to="/home"
              className="flex justify-center px-8 py-3 bg-gray-200 font-medium text-blue-700 hover:bg-gray-300 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              Take a tour
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
