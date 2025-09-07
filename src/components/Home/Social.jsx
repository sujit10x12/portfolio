import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

export const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/sujit10x12/" className="home__social-icon" target="_blank"><FaGithub /></a>
            <a href="mailto:sujit10x12@gmail.com" className="home__social-icon" target="_blank"><MdOutlineMailOutline /></a>
            <a href="https://www.linkedin.com/in/sujit10x12/" className="home__social-icon" target="_blank"><FaLinkedin /></a>
        </div>
    )
}