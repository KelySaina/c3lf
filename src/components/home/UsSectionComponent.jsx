import { Link } from "react-router-dom";

const HomeUsSectionComponent = () => {
  return (
    <div>
      {/* Who We Are Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 animate__animated animate__fadeIn">
            Who We Are
          </h3>
          <p className="mt-4 text-gray-600 mb-8 animate__animated animate__fadeIn">
            We are a passionate team of students, developers, and innovators
            committed to promoting open-source technologies for learning,
            teaching, and professional development. Our mission is to make
            knowledge and tools accessible to everyone.
          </p>

          {/* Icons and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Icon 1: Collaboration */}
            <div className="flex flex-col items-center">
              <i className="text-4xl text-blue-700 fas fa-users"></i>
              <h4 className="font-semibold text-xl mt-2 text-gray-800">
                Collaboration
              </h4>
              <p className="text-gray-600 mt-2 text-justify">
                We believe in the power of collaboration to achieve greater
                things. Our team works together to create open-source solutions
                for all.
              </p>
            </div>

            {/* Icon 2: Development */}
            <div className="flex flex-col items-center">
              <i className="text-4xl text-blue-700 fas fa-laptop"></i>
              <h4 className="font-semibold text-xl mt-2 text-gray-800">
                Development
              </h4>
              <p className="text-gray-600 mt-2 text-justify">
                We build software that empowers students, educators, and
                professionals alike to unlock the potential of open-source
                technologies.
              </p>
            </div>

            {/* Icon 3: Robotics */}
            <div className="flex flex-col items-center">
              <i className="text-4xl text-blue-700 fas fa-robot"></i>
              <h4 className="font-semibold text-xl mt-2 text-gray-800">
                Robotics
              </h4>
              <p className="text-gray-600 mt-2 text-justify">
                From automation to robotics, we explore the endless
                possibilities of technology to shape the future of industries
                and education.
              </p>
            </div>
          </div>

          {/* Meet the Team Link */}
          <div className="text-center mt-10">
            <Link
              to="/team"
              className="px-12 py-4 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeUsSectionComponent;
