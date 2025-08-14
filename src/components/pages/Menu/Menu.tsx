import { useParams, Link } from "react-router-dom";

const Menu = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Menu</h1>
      <p>{id} </p>
      <h2>
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/about"}>About</Link>
      </h2>
    </div>
  );
};

export default Menu;
