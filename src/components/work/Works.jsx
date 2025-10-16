import "./work.css"
import { projectData } from "./Data"
import { projectNav } from "./Data"
import { WorkItems } from "./WorkItems"
import { useEffect, useState } from "react"

export const Works = () => {

    const [item, setItem] = useState({ name: "Featured Projects" })
    const [projects, setProjects] = useState([])
    
    useEffect(() => {
        if (item.name === "Featured Projects") {
            const newProjects = projectData.filter(
                (project) => project.isFeaturedProject
            )
            setProjects(newProjects)
        } else {
            const newProjects = projectData.filter(
                (project) => project.category.includes(item.name)
            )
            setProjects(newProjects)
        }
    }, [item])

    // Handle dropdown selection
    const handleSelectChange = (event) => {
        setItem({ name: event.target.value })
    }

    return (
        <div>
            {/* Dropdown filter */}
            <div className="work__filters" style={{ textAlign: "center", marginBottom: "1rem" }}>
                <select 
                    className="work__dropdown"
                    value={item.name}
                    onChange={handleSelectChange}
                    style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #ccc",
                        fontSize: "1rem",
                        cursor: "pointer",
                        outline: "none"
                    }}
                >
                    {projectNav.map((option) => (
                        <option key={option.name} value={option.name}>
                            {option.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Note message */}
            <div>
                <p style={{
                    textAlign: "center",
                    paddingBottom: "1rem",
                    fontSize: "0.8rem",
                    color: "#123e57"
                }}>
                    Choose a project category from the dropdown menu
                </p>
            </div>

            {/* Projects list */}
            <div className="work__container container grid">
                {projects &&
                    projects.map((item) => (
                        <WorkItems item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}
