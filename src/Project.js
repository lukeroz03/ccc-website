import image from "./screenshot.png";
import "./Project.css";

function Project(props) {
	return (
		<div className="project-container">

		<div className="project-image-container">
		<img src={image} />
		</div>

		<div className="project-info-container">
		<h1>{props.project.name}</h1>
		<p>{props.project.description}</p>
		<a href={props.project.link}>project page</a>
		</div>
		</div>
	);
	// <div>
	// {props.project.languages.map((language) => language).join(", ")}
	// </div>
	// <div>{props.project.date}</div>
	// </div>
}

export default Project;
