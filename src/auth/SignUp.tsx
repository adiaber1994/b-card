import FormLayout from "../component/FormLayout";
import Title from "../component/Title";

function Signup() {
  return (
    <>
      <div className="text-center">
  
      <Title mainText={"REGISTER"} />
      <div>
      </div>
      <div className="row g-3 justify-content-center">
  <div className="col-sm-3">
    <input type="text" className="form-control" placeholder="City" aria-label="City"/>
  </div>
  <div className="col-sm-3">
    <input type="text" className="form-control" placeholder="State" aria-label="State"/>
  </div>
</div>
</div>
<div className="row g-3 justify-content-center">
  <div className="col-sm-3">
    <input type="text" className="form-control" placeholder="City" aria-label="City"/>
  </div>
  <div className="col-sm-3">
    <input type="text" className="form-control" placeholder="State" aria-label="State"/>
  </div>
</div>
       
    
  
  </>
  
  );
}

export default Signup;
