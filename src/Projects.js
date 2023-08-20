import Project from "./Project";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
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

  return (
    <div>
      <h1>Projects</h1>
      <input
        type="text"
        placeholder="Search Projects"
        value={searchQuery}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      {filteredProjects.map((project) => {
        return <Project key={project.link} project={project} />;
      })}
    </div>
  );
}

export default Projects;
