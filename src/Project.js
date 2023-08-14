function Project(props) {
	console.log(props.project);
	return (
		<div>
		<div>{props.project.name}</div>
		<div>{props.project.description}</div>
		<div>{props.project.link}</div>
		</div>
	);
	// <div>
	// {props.project.languages.map((language) => language).join(", ")}
	// </div>
	// <div>{props.project.date}</div>
	// </div>
}

export default Project;
