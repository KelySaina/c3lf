import { Link } from "react-router-dom";

const HomeHeroSectionComponent = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-100">
        <div className="container mx-auto px-4 lg:px-20 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="lg:w-1/2 fade-in">
            <h2 className="text-4xl font-bold text-blue-600 leading-tight">
              Promoting Open-Source Software in Universities and Beyond
            </h2>
            <p className="my-4 text-lg text-gray-700">
              At C3LF, we empower students and professionals with the tools,
              knowledge, and community to embrace open-source software, Linux
              systems, and robotics.
            </p>
            <Link
              to="/about"
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/technology.avif"
              alt="Technology"
              className="rounded-lg shadow-lg hidden lg:block"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHeroSectionComponent;
