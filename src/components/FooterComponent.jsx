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
        // Fetch additional data for each contributor
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
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Contributors Section - Hidden on Small Screens */}
        <div className="hidden sm:flex flex-col justify-center items-center mb-6">
          <h3 className="text-sm">
            {contributors.length === 0
              ? ""
              : contributors.length > 1
              ? `${contributors.length} Contributors`
              : `${contributors.length} Contributor`}
          </h3>
          <ul className="flex flex-wrap items-center justify-center ml-4">
            {contributors.map((contributor) => (
              <li key={contributor.id} className="mx-2 my-2">
                <a
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={contributor.avatar_url}
                    alt={`Avatar of ${contributor.login}`}
                    className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Quick Links Section */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 underline">
              Quick Links
            </h4>
            <div className="flex justify-start space-x-6">
              <Link to="/about" className="text-white hover:text-gray-400">
                <i className="fas fa-info-circle text-xl"></i>
                <span className="ml-2">About Us</span>
              </Link>
              <Link to="/team" className="text-white hover:text-gray-400">
                <i className="fas fa-users text-xl"></i>
                <span className="ml-2">Team</span>
              </Link>
              <Link to="/activity" className="text-white hover:text-gray-400">
                <i className="fas fa-briefcase text-xl"></i>
                <span className="ml-2">Activities</span>
              </Link>
            </div>
          </div>

          {/* Contacts Section */}
          <div className="lg:text-right">
            <h4 className="text-lg font-semibold mb-2 underline">Contact Us</h4>
            <p className="text-sm mb-4">
              Have any questions or want to get in touch? Reach out to us!
            </p>
            <div className="flex justify-start lg:justify-end space-x-6">
              <a
                href="mailto:c3lf.business@gmail.com"
                className="text-white hover:text-gray-400"
              >
                <i className="fas fa-envelope text-xl"></i>
                <span className="ml-2">Email Us</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100085653040814"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <i className="fab fa-facebook text-xl"></i>
                <span className="ml-2">Facebook</span>
              </a>
              <a
                href="https://github.com/KelySaina/c3lf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <i className="fab fa-github text-xl"></i>
                <span className="ml-2">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
