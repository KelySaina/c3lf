const TeamPage = () => {
  const teamMembers = [
    {
      name: "Kely Saina",
      role: "Designer - WebMaster -Mentor",
      description:
        "Kely Saina has been a dedicated mentor since 2021, sharing his expertise in Open-Source technologies and inspiring students to explore Linux and its benefits. Passionate about problem-solving and innovation, he not only creates solutions but also fosters a welcoming and approachable mentoring style, making complex topics accessible to all.",
      photo: "/images/imagesMembers/KelySaina.jpg",
      socialLinks: [
        {
          icon: "linkedin",
          url: "https://www.linkedin.com/in/thierry-michael-7b8a71251/",
        },
        { icon: "github", url: "https://github.com/KelySaina" },
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Introduction Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">Meet Our Team</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Our team is made up of passionate individuals dedicated to promoting
          open-source knowledge, creating a collaborative environment for both
          learners and mentors. Get to know the people behind the mission!
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="flex justify-between gap-4">
                <div className="text-justify gap-2 mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                <div className="flex gap-2">
                  {member.socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      <i className={`fab fa-${link.icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-4">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
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

export default TeamPage;
