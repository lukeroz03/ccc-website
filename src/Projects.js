import Project from './Project.js';

function Projects(props) {
  return (
    <div>
	  {
		  props.projects.map((project) => {
			  return <Project project={project} />
		  }
	  )
	  }
    </div>
  );
}

export default Projects;
