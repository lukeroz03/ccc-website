function Project(props) {
  return (
    <>
      <div>{props.project.name}</div>
      <div>{props.project.description}</div>
      <div>{props.project.link}</div>
      <div>{props.project.languages.map(language => language).join(', ')}</div>
      <div>{props.project.date}</div>
    </>
  );
}

export default Project;
