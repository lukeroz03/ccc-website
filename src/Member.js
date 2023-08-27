import "./Member.css";
import image from "./headshot with dress clothes.jpg";

function Member(props) {
  return (
    <div className="member-container">
	<div className="member-image-container">
	<img src={image} alt="headshot with dress clothes" />
	</div>

	<div className="member-info-container">

        <h1>{props.member.name}</h1>

        <p className="member-class">Class of {props.member.class}, Major: Undeclared</p>
	  
	<h3>About Me</h3>
	<p className="member-description">I am a guy and I do things. My favorite color is blue and I like to eat food. My favorite language is JavaScript because I love not having to use types.</p>

        <a href={props.member.link}>Personal Website</a>
	</div>
    </div>
  );
}

export default Member;
