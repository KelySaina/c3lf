import TextImageComponent from "../components/TextImageComponent";

const aboutContent = [
  {
    img: "/images/imagesAboutPage/teach-tech.avif",
    title: "What We Teach",
    desc: "We provide tutorials on Linux, SysAdmin, and Robotics. Our goal is to equip students and professionals with the skills needed to thrive in the tech industry. Through hands-on learning and community engagement, we make these complex topics accessible to everyone.",
    imgpos: "l",
  },
  {
    img: "/images/imagesAboutPage/approach.jpg",
    title: "Our Approach",
    desc: "Our approach is centered around practical knowledge and real-world applications. We provide resources that are not only informative but also enable hands-on practice. Our goal is to create a collaborative environment where learners can experiment, create, and grow.",
    imgpos: "r",
  },
  {
    img: "/images/imagesAboutPage/community.avif",
    title: "Get Involved",
    desc: "Join us in promoting open-source knowledge! Whether you’re a student eager to learn, a mentor guiding the next generation, or a tech enthusiast passionate about sharing, we encourage you to contribute to our community. Your involvement will not only help expand our resources and reach but also provide invaluable learning experiences for students and opportunities for mentors to give back. Together, we can make open-source education more accessible and impactful.",
    imgpos: "l",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Introduction Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-opacity-30 bg-gradient-to-b from-transparent to-cyan pointer-events-none"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-extrabold text-white mb-6 animate-fade-in">
            About Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of students, developers, and innovators
            committed to promoting open-source technologies for learning,
            teaching, and professional development. We believe in the power of
            knowledge-sharing and community collaboration to drive positive
            change.
          </p>
          <div className="mt-8">
            <a
              href="#about-content"
              className="inline-block px-8 py-3 text-lg font-semibold text-blue-700 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Informational Sections */}
      <div id="about-content" className="container mx-auto py-16 px-6 space-y-16">
        {aboutContent.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${section.imgpos === "l" ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 transition-transform transform hover:scale-105 duration-300`}
          >
            <div className="flex-1">
              <img
                src={section.img}
                alt={section.title}
                className="rounded-lg shadow-lg w-full max-w-sm"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {section.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="text-center py-12 bg-gradient-to-r from-purple-600 to-blue-500">
        <a
          href="https://github.com/KelySaina/c3lf/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-lg transform transition-transform hover:scale-110"
        >
          I want to CONTRIBUTE
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
