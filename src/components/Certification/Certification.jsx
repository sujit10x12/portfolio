import "./certification.css"
import  { Certificates } from "./Certificates"

export const Certification = () => {
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Certification</h2>
            <span className="section__subtitle">Credentials</span>
            <Certificates />
        </section>
    )
}