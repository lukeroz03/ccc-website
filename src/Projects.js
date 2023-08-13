import Project from "./Project.js";

function Projects(props) {
  return (
    <>
      <h1>Projects</h1>
      <div>
        {props.projects.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </>
  );
}

export default Projects;
