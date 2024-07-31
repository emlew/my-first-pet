import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

export const StartPage: React.FC = () => {
  // TODO: match link styles to button styles
  return (
    <>
      <img className="logo" src={logoImg} alt="Pet Project Logo" />
      <h1>Pet Project: Which Pet is Right for you?</h1>
      <div className="card">
        <Link to={"quiz"}>Take the quiz!</Link>
      </div>
      <Link to={"info"}>See all pet information</Link>
    </>
  );
};
