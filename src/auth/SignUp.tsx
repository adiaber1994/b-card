import { toast } from "react-toastify";
import FormLayout from "../component/FormLayout";
import Title from "../component/Title";
import { useState } from "react";

function Signup() {
  const [firstName, setFirstName] = useState("");
  // const [name, setName] = useSate("");
  // const [name, setName] = useSate("");
  // const [name, setName] = useSate("");

  function validate() {
    if (!firstName) {
      console.log("firstname is reqired");
    }
  }

  //   function validate(): boolean {
  //     if (! ||< 2) {
  //         toast.error('fiers name is required')
  //         return false
  //     }
  //     if (!email) { // also check that email is required with regex
  //         toast.error('email is required.')
  //         return false
  //     }

  //     if (!password || password.length < 6) {
  //         toast.error('Password must contain at least 6 characters.')
  //         return false
  //     }

  //     return true
  // }

  return (
    <>
      <div className="text-center mb-5">
        <Title mainText={"REGISTER"} />
      </div>
      <form className="">
        <FormLayout>
          <div className="col-sm-2">
            <input
              className="form-control text-center"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Middele Name"
              aria-label=" middele name"
            />
          </div>
        </FormLayout>

        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Last Name"
              aria-label="last name"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control text-center"
              placeholder="Phone"
              aria-label="Phone"
            />
          </div>
        </FormLayout>

        <div className="row g-2 justify-content-center mb-5">
          <div className="col-sm-2">
            <input
              type="email"
              className="form-control text-center"
              placeholder="Email"
              aria-label="email"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="password"
              className="form-control text-center"
              placeholder="Password"
              aria-label="password"
            />
          </div>
        </div>

        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Image url"
              aria-label="image"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Image alt"
              aria-label="image"
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="State"
              aria-label="state"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Country"
              aria-label="country"
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="City"
              aria-label="city"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Street"
              aria-label="street"
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control text-center"
              placeholder="House number"
              aria-label="house"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control text-center"
              placeholder="Zip"
              aria-label="zip"
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="form-check col-sm-4 mb-5">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
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
          <button className="btn btn btn-secondary col-4">SUBMIT</button>
        </div>
      </form>
    </>
  );
}

export default Signup;
