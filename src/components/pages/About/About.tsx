import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>Aboutts</h1>
      <h2>
        <Link to="/">Home</Link>
        <br />
        <Link to="/menu/miaw">Menu</Link>
      </h2>
    </>
  );
};

export default About;
