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
      <section id="what-we-do" className="py-20 bg-blue-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-600 fade-in">
            What We Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 fade-in">
            {activities.map((activity, i) => (
              <HomeCardComponent
                key={i}
                Img={activity.img}
                Title={activity.title}
                Desc={activity.desc}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeActivitiesSectionComponent;
