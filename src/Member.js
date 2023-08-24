import "./member.css";

function Member(props) {
  return (
    <div className="container">
      <div className="members">
        <div>{props.member.name}</div>
        <div>{props.member.image}</div>
        <div>{props.member.link}</div>
        <div>{props.member.class}</div>
      </div>
    </div>
  );
}

export default Member;
