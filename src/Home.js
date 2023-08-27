import {Link} from 'react-router-dom';
import AutoTyper from './AutoTyper';
import image from "./blue-computer-and-blackboard.jpg";
import './Home.css';

function Home() {
  return (
    <div className="Home">
    <div className="about-container">
	  <h1>About Our Club</h1>
	  <p>We are a group of students learning computer programming both for its own sake and to practice as a career. We meet weekly to hone our skills, and we work together on larger <Link to="/projects">projects</Link> over the long term.</p>
	  <h1>About This Website</h1>
	  <p> We created this website to provide access to the <Link to="/projects">projects</Link> that we make together for Christendom students and anyone else who finds them useful, and to help prospective employers learn about our <Link to="/members">members</Link>.</p>
	  <h1>Join Us</h1>
	  <p>Membership is open to all Christendom students. If you are interested in joining, message us on <a href="https://discord.gg/tZ6eTDkpk8" target="_blank">Discord</a> or come to one of our scheduled meetings.</p>
    </div>
    <div className="autotyper-image-container">
    <img src={image} />
    <AutoTyper width={50} height={25} deltaTime={30} />
    </div>
    </div>
  );
}

export default Home;
