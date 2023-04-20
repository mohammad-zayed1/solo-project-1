import Img from "../../img/Rectangle 90.png";
import { GrMail } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import "./header.css";
export default function Header() {
  return (
    <header>
      <img src={Img} alt="img" />
      <div className="text">
        <h3 className="name ">Laura Smith</h3>
        <p className="position ">Frontend Developer</p>
        <p className="website-link ">laurasmith.website</p>
      </div>
      <div className="buttons">
        <div className="btn mail">
          <GrMail /> <span>Email</span>
        </div>
        <div className="btn linkedin">
          <FaLinkedin /> <span>Linkedin</span>
        </div>
      </div>
    </header>
  );
}
