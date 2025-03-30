import { Link } from "react-router-dom";

const HomeHeroSectionComponent = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-opacity-30 bg-gradient-to-b from-transparent to-cyan pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-20 py-20 flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
          {/* Text */}
          <div className="lg:w-1/2 fade-in">
            <h2 className="text-5xl font-extrabold leading-tight mb-6 animate-fade-in">
              Promoting Open-Source Software in Universities and Beyond
            </h2>
            <p className="my-4 text-lg text-gray-200 leading-relaxed animate-fade-in">
              At C3LF, we empower students and professionals with the tools,
              knowledge, and community to embrace open-source software, Linux
              systems, and robotics.
            </p>
            <Link
              to="/about"
              className="mt-6 px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/technology.avif"
              alt="Technology"
              className="rounded-lg shadow-lg w-full max-w-md lg:max-w-lg animate-slide-in"
            />
          </div>
        </div>
        {/* Decorative Shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500 rounded-full opacity-50 blur-2xl"></div>
      </section>
    </div>
  );
};

export default HomeHeroSectionComponent;
