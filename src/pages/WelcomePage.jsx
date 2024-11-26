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
    <div className="space-y-5 py-4 px-[8%] relative">
      {/* Quote Section */}
      <div className="flex justify-center mt-6">
        <p className="text-center italic relative w-full md:w-[max-content] before:absolute before:inset-0 before:bg-white before:animate-typewriter">
          “Promouvoir l&apos;utilisation des logiciels libres dans le monde
          Universitaire et Professionnel.”
        </p>
      </div>
      <div className="md:flex md:items-center md:space-x-6">
        {/* Image Section */}
        <div className="md:w-1/2">
          <CarouselComponent Images={images} />
        </div>

        {/* Text and Buttons Section */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-2xl md:text-3xl text-left">Welcome!!!</h2>
          <div className="text-justify">
            <p>
              This site is the result of a collaboration between several
              open-source enthusiasts, individuals eager to learn how to use
              Git.
            </p>
            <p>We encourage everyone who wants to contribute to join us.</p>
          </div>

          <div className="flex flex-col space-y-2 mt-4 md:mt-6">
            <a
              href="https://github.com/KelySaina/c3lf/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center px-6 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
            >
              I want to CONTRIBUTE
            </a>
            <Link
              to="/home"
              className="flex justify-center px-6 py-2 bg-gray-200 font-medium text-blue-700 hover:bg-gray-300 rounded-lg"
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
