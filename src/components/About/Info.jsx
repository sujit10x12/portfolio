import { BsSuitcaseLg } from "react-icons/bs";
import { RiFileTextLine } from "react-icons/ri";
import { FiAward } from "react-icons/fi";

export const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <p className="about__icon"><BsSuitcaseLg /></p>
                <h3 className="about__title">Experience</h3>
                {/* <p className="about__subtitle">8 Years Working</p> */}
                <p className="about__subtitle">1 Year of Hands-on Practice</p>
            </div>
            
            <div className="about__box">
                <p className="about__icon"><RiFileTextLine /></p>
                {/* <h3 className="about__title">Completed</h3> */}
                {/* <p className="about__subtitle">42+ Projects</p> */}
                <h3 className="about__title">Projects</h3>
                <p className="about__subtitle">Multiple Industry-Relevant Projects</p>
            </div>
            <div className="about__box">
                {/* <p className="about__icon"><BiSupport /></p>
                <h3 className="about__title">Support</h3>
                <p className="about__subtitle">Online 24/7</p> */}
                <p className="about__icon"><FiAward /></p>
                <h3 className="about__title">Quality</h3>
                <p className="about__subtitle">Insight-Driven</p>
            </div>
        </div>
    )
}