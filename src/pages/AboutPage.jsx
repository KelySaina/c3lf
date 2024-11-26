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
    <div>
      <div className="bg-gray-50">
        {/* Introduction Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We are a passionate team of students, developers, and innovators
              committed to promoting open-source technologies for learning,
              teaching, and professional development. We believe in the power of
              knowledge-sharing and community collaboration to drive positive
              change.
            </p>
          </div>
        </section>

        {/* Mapping Through Informational Sections */}
        {aboutContent.map((section, index) => (
          <TextImageComponent
            key={index}
            img={section.img}
            title={section.title}
            desc={section.desc}
            imgpos={section.imgpos}
          />
        ))}
      </div>
      <div className="text-center p-6">
        <a
          href="https://github.com/KelySaina/c3lf/blob/main/README.md"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center px-12 py-4 text-md font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
        >
          I want to CONTRIBUTE
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
