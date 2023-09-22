import { useContext, useState } from "react";
import Title from "../component/Title";
import { login } from "../services/ApiService";
import { useNavigate } from "react-router-dom";
import { setToken } from "./TokenManager";
import { AppContext } from "../App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const [error, setError] = useState("");

  function validate(): boolean {
    if (!email) {
      setError("email is reqired");
      return false;
    }
    if (!password || password.length < 8) {
      setError("Password must contain at least 6 characters.");
      return false;
    }
    return true;
  }

  function handleClick() {
    if (!validate()) {
      return;
    }

    login({
      email,
      password,
    }).then((user) => {
      setToken(user.token)
      if (context) {
        context.setAdmin(user.isAdmin || false);
        context.setUserName(user.firstName);
      }
      navigate("/")
    });
  }

  return (
    <>
      <div className="text-center mb-5">
        <Title mainText={"LOGIN"} />
      </div>
      <div className="m-4 d-flex justify-content-center">
        <form className="col-sm-12 col-md-5">
          <div className="mb-3 form-floating">
            <input
              type="email"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label id="floatingInputInvalid">Email</label>
          </div>
          <div className="mb-5 form-floating">
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="d-flex flex-row mb-5">
            <button className="btn btn-outline-danger col-6">CANCEL</button>

            <button className="btn btn-outline-primary col-6">
              <i className="bi bi-arrow-repeat"></i>
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-primary col-12"
            onClick={handleClick}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;

