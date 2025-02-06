import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-300 text-black py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">Connect with me:</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/AreebaNadeem567?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-500"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 hover:text-blue-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Areeba Nadeem</p>
      </div>
    </footer>
  );
};

export default Footer;