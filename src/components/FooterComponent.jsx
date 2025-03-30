import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/KelySaina/c3lf/contributors"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch contributors");
        }
        const data = await response.json();
        const contributorsWithDetails = await Promise.all(
          data.map(async (contributor) => {
            const userResponse = await fetch(
              `https://api.github.com/users/${contributor.login}`
            );
            if (!userResponse.ok) {
              throw new Error(
                `Failed to fetch user details for ${contributor.login}`
              );
            }
            const userData = await userResponse.json();
            return {
              id: contributor.id,
              login: contributor.login,
              avatar_url: userData.avatar_url,
              html_url: contributor.html_url,
            };
          })
        );
        setContributors(contributorsWithDetails);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };
    fetchContributors();
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Contributors Section */}
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-lg font-semibold mb-4">
            {contributors.length === 0
              ? "Loading Contributors..."
              : `${contributors.length} Contributor${contributors.length > 1 ? "s" : ""}`}
          </h3>
          <ul className="flex flex-wrap justify-center gap-4">
            {contributors.map((contributor) => (
              <li
                key={contributor.id}
                className="transform hover:scale-110 transition duration-300"
              >
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={contributor.avatar_url}
                    alt={`Avatar of ${contributor.login}`}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 underline">Quick Links</h4>
            <div className="flex flex-col space-y-4">
              <Link
                to="/about"
                className="flex items-center text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fas fa-info-circle text-2xl mr-2"></i>
                About Us
              </Link>
              <Link
                to="/team"
                className="flex items-center text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fas fa-users text-2xl mr-2"></i>
                Team
              </Link>
              <Link
                to="/activity"
                className="flex items-center text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fas fa-briefcase text-2xl mr-2"></i>
                Activities
              </Link>
            </div>
          </div>

          {/* Contacts Section */}
          <div className="text-left md:text-right">
            <h4 className="text-xl font-semibold mb-4 underline">Contact Us</h4>
            <p className="text-sm mb-6">
              Have any questions or want to get in touch? Reach out to us!
            </p>
            <div className="flex flex-col md:items-end space-y-4">
              <a
                href="mailto:c3lf.business@gmail.com"
                className="flex items-center text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fas fa-envelope text-2xl mr-2"></i>
                Email Us
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100085653040814"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fab fa-facebook text-2xl mr-2"></i>
                Facebook
              </a>
              <a
                href="https://github.com/KelySaina/c3lf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-gray-400 transition duration-300"
              >
                <i className="fab fa-github text-2xl mr-2"></i>
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} C3LF. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
