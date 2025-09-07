import "./skills.css"
import { Frontend, Backend, OtherTools } from "../../index"

import { FaDatabase } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiFormula } from "react-icons/ri";
import { DiJsBadge } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";

import { RiFileExcel2Fill } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoLogoTableau } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiJupyter } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

import { PiMicrosoftPowerpointLogoBold } from "react-icons/pi";
import { PiMicrosoftWordLogoBold } from "react-icons/pi";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { IoIosAnalytics } from "react-icons/io";
import { FaChartPie } from "react-icons/fa";

export const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Techinal Level</span>

            <div className="skills__container container grid">
                <div className="skills__group">
                    <h3 className="skill__title">Languages</h3>
                    <ul>
                        <li><span className="skills-icon"><FaDatabase size={20}/></span> SQL</li>
                        <li><span className="skills-icon"><FaPython size={20}/></span> Python</li>
                        <li><span className="skills-icon"><RiFormula size={20}/></span> DAX</li>
                        <li><span className="skills-icon"><DiJsBadge size={20}/></span> JavaScript</li>
                        <li><span className="skills-icon"><FaHtml5 size={20}/></span> HTML5</li>
                        <li><span className="skills-icon"><FaCss3Alt size={20}/></span> CSS3</li>
                    </ul>
                </div>
                <div className="skills__group">
                    <h3 className="skill__title">Software & Tools</h3>
                    <ul>
                        <li><span className="skills-icon"><RiFileExcel2Fill size={20}/></span> Excel</li>
                        <li><span className="skills-icon"><TbBrandGoogleAnalytics size={20}/></span> Power Bi</li>
                        <li><span className="skills-icon"><IoLogoTableau size={20}/></span> Tableau</li>
                        <li><span className="skills-icon"><BiLogoPostgresql size={20}/></span> pgAdmin</li>
                        <li><span className="skills-icon"><SiJupyter size={20}/></span> Jupyter Notebook</li>
                        <li><span className="skills-icon"><VscVscode size={20}/></span> VS Code</li>
                        <li><span className="skills-icon"><FaGithub size={20}/></span> Github</li>
                        {/* <li><span className="skills-icon"><PiMicrosoftPowerpointLogoBold size={20}/></span> MS Powerpoint</li>
                        <li><span className="skills-icon"><PiMicrosoftWordLogoBold size={20}/></span> MS Word</li> */}
                    </ul>
                </div>
                <div className="skills__group">
                    <h3 className="skill__title">Libraries </h3>
                    <ul>
                        <li><span className="skills-icon"><SiNumpy size={20}/></span> Numpy</li>
                        <li><span className="skills-icon"><SiPandas size={20}/></span> Pandas</li>
                        <li><span className="skills-icon"><FaChartPie size={20}/></span> Matplotlib</li>
                        <li><span className="skills-icon"><IoIosAnalytics size={25}/></span> Seaborn</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}