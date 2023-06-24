import Title from "../component/Title";

function signup() {
  return (
    <>
      <Title mainText={"REGISTER"} />

      <div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>
      </div>

      <button className="btn btn-secondary"> Cancel</button>
    </>
  );
}

export default signup;
