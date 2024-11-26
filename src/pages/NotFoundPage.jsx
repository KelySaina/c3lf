import { useLocation } from "react-router-dom";
import NotFound from "../components/NotFound";

const NotFoundPage = () => {
  // Get the current pathname from the URL
  const location = useLocation();

  // Split the pathname, remove empty strings, and join with ' > '
  const currentPath = location.pathname
    .split("/")
    .filter(Boolean) // This removes any empty strings (e.g., for leading "/")
    .join(" > ");

  return <NotFound pageName={currentPath} />;
};

export default NotFoundPage;
