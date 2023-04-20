import "./footer.css";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="icons">
        <span>
          <FaTwitterSquare className="icon" />
        </span>
        <span>
          <FaFacebookSquare className="icon" />
        </span>
        <span>
          <FaInstagramSquare className="icon" />
        </span>
        <span>
          <FaGithubSquare className="icon" />
        </span>
      </div>
    </footer>
  );
}
