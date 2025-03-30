import { Link } from "react-router-dom";

const HomeUsSectionComponent = () => {
  return (
    <div>
      {/* Who We Are Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-6 animate-fade-in">
            Who We Are
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in">
            We are a passionate team of students, developers, and innovators
            committed to promoting open-source technologies for learning,
            teaching, and professional development. Our mission is to make
            knowledge and tools accessible to everyone.
          </p>

          {/* Icons and Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Icon 1: Collaboration */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <i className="text-5xl text-blue-700 fas fa-users mb-4 animate-bounce"></i>
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Collaboration
              </h4>
              <p className="text-gray-600 text-justify">
                We believe in the power of collaboration to achieve greater
                things. Our team works together to create open-source solutions
                for all.
              </p>
            </div>

            {/* Icon 2: Development */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <i className="text-5xl text-blue-700 fas fa-laptop mb-4 animate-bounce"></i>
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Development
              </h4>
              <p className="text-gray-600 text-justify">
                We build software that empowers students, educators, and
                professionals alike to unlock the potential of open-source
                technologies.
              </p>
            </div>

            {/* Icon 3: Robotics */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <i className="text-5xl text-blue-700 fas fa-robot mb-4 animate-bounce"></i>
              <h4 className="font-semibold text-xl text-gray-800 mb-2">
                Robotics
              </h4>
              <p className="text-gray-600 text-justify">
                From automation to robotics, we explore the endless
                possibilities of technology to shape the future of industries
                and education.
              </p>
            </div>
          </div>

          {/* Meet the Team Link */}
          <div className="text-center mt-12">
            <Link
              to="/team"
              className="px-12 py-4 text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-lg transform transition-transform hover:scale-110"
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
