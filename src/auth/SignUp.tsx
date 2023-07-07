import { toast } from "react-toastify";
import FormLayout from "../component/FormLayout";
import Title from "../component/Title";
import { useState } from "react";
import { signup } from "../services/ApiService";

export interface User {
  _id?: string;
  firstName?: string;
  middeleName: string;
  lastName: string;
  phone: string;
  email: string;
  password?: string;
  imageUrl: string;
  imageAlt: string;
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip: number;
  checkBox: Boolean;
}

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [middeleName, setMiddeleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [zip, setZip] = useState("");
  const [checkBox, setCheckbox] = useState("");

  function validate(): boolean {
    if (!firstName || firstName.length < 2) {
      toast.error("firstname is reqired");
      return false;
    }

    if (!email) {
      // also check that email is required with regex
      toast.error("email is required.");
      return false;
    }

    if (!password || password.length < 6) {
      toast.error("Password must contain at least 6 characters.");
      return false;
    }

    return true;
  }

  function handleClick() {
    if (!validate()) {
      return;
    }

    signup({
      firstName,
      middeleName,
      lastName,
      email,
      password,
      imageUrl,
      imageAlt,
      country,
      city,
      street,
      phone: "",
      state: "",
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
        <Title mainText={"REGISTER"} />
      </div>
      <form className="">
        <FormLayout>
          <div className="col-sm-2">
            <input
              className="form-control"
              placeholder="First Name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control"
              placeholder="middele Name"
              value={middeleName}
              onChange={(e) => setMiddeleName(e.target.value)}
            />
          </div>
        </FormLayout>

        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </FormLayout>

        <div className="row g-2 justify-content-center mb-5">
          <div className="col-sm-2">
            <input
              type="email"
              className="form-control text-center"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="password"
              className="form-control text-center"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Image url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Image alt"
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control text-center"
              placeholder="House number"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control text-center"
              placeholder="Zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="form-check col-sm-4 mb-5">
            <input
              className="form-check-input"
              type="checkbox"
              value={checkBox}
              onChange={(e) => setCheckbox(e.target.value)}
            />
            <label className="form-check-label">Signup as business</label>
          </div>
        </FormLayout>
        <FormLayout>
          <div className="text-center gap-2">
            <button className="btn btn-outline-danger col-2">CANCEL</button>
            <button className="btn btn-outline-primary col-2">
              <i className="bi bi-arrow-repeat"></i>
            </button>
          </div>
        </FormLayout>
        <div className="text-center">
          <button className="btn btn btn-secondary col-4" onClick={handleClick}>
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}

export default Signup;
