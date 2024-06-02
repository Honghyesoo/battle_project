import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginimg">
      <form className="loginForm">
        <img
          className="loginlogo"
          src={require("../../img/battleLogo.jpg")}
          alt="/"
        />
        <input type="text" name="user_id" placeholder="ID" />
        <input type="password" name="password" placeholder="PASSWORD" />
        <button className="w-btn w-btn-indigo" type="button">
          LOGIN
        </button>

        <Link to="/join">계정만들기</Link>
      </form>
    </div>
  );
};

export default Login;
