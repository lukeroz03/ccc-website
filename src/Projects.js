import Project from "./Project";
import LabelAndSearch from "./LabelAndSearch";
import "./Projects.css";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetch("https://3.17.192.123/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      });
  }, []);

  function handleSearch(query) {
    setSearchQuery(query);
    const lowercaseQuery = query.toLowerCase();
    const filtered = projects.filter((project) => {
      return project.name.toLowerCase().includes(lowercaseQuery);
    });
    setFilteredProjects(filtered);
  }

	function handleSearch(query) {
		setSearchQuery(query);
		const lowercaseQuery = query.toLowerCase();
		const filtered = projects.filter((project) => {
			return project.name.toLowerCase().includes(lowercaseQuery);
		});
		setFilteredProjects(filtered);
	}

	return (
		<div className="projects-page">
		<LabelAndSearch label="Club Projects" placeholder="Search" value={searchQuery} handleSearch={handleSearch} />

		<div className="projects-container">

		{filteredProjects.map((project) => {
			return <Project key={project.link} project={project}/>;
		})}

		</div>
		</div>
	);
}

export default Projects;
