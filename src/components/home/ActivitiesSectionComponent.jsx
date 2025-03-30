import HomeCardComponent from "./CardComponent";

const HomeActivitiesSectionComponent = () => {
  const activities = [
    {
      img: "/images/imagesCardHome/linux.avif",
      title: "Linux Tutorials",
      desc: "Master Linux with hands-on tutorials for beginners and professionals alike.",
    },
    {
      img: "/images/imagesCardHome/robotic.avif",
      title: "Robotics",
      desc: "Explore robotics and automation with cutting-edge tools and open-source solutions.",
    },
    {
      img: "/images/imagesCardHome/sysad.avif",
      title: "SysAdmin Tutorials",
      desc: "Learn system administration skills to manage servers and networks efficiently.",
    },
  ];
  return (
    <div>
      {/* What We Do */}
      <section id="what-we-do" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-extrabold text-blue-600 mb-6 animate-fade-in">
            What We Do
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Discover our wide range of activities designed to empower learners and professionals in the tech industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="transform transition-transform hover:scale-105 duration-300"
              >
                <HomeCardComponent
                  Img={activity.img}
                  Title={activity.title}
                  Desc={activity.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeActivitiesSectionComponent;
