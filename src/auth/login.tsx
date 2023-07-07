import { useState } from "react";
import Title from "../component/Title";
import { login, signup } from "../services/ApiService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validate(): boolean {
    if (!email) {
      setError("email is reqired");
      return false;
    }
    if (!password || password.length < 6) {
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
      middeleName: "",
      lastName: "",
      phone: "",
      imageUrl: "",
      imageAlt: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: 0,
      zip: 0,
      checkBox: Boolean(),
    }).then((user) => {
      console.log(user);
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
function setError(arg0: string) {
  throw new Error("Function not implemented.");
}
