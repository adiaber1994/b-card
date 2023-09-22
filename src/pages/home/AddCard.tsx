import { useState } from "react";
import FormLayout from "../../component/FormLayout";
import Title from "../../component/Title";
import { useNavigate } from "react-router-dom";
import { addCard } from "../../services/ApiService";
import { useInputText } from "../../hooks/useInputText";


// interface CardProps {
//   _id?: Number;
//   title: string;
//   subtitle: string;
//   description: string;
//   imageUrl?: string;
//   imageAlt: string;
//   phone: string;
//   email: string;
//   web: string;
//   state: string;
//   country: string;
//   city: string;
//   street: string;
//   houseNumber: number;
//   zip: number;
//   cardNumber?: number;
// }

 function AddCard() {
  const navigate = useNavigate();
  const titleProps = useInputText(''); 
  const subTitleProps = useInputText('');
  const decriptionProps = useInputText('');
  const phoneProps = useInputText('');
  const emailProps = useInputText('');
  const webProps = useInputText('');
  const imageUrlProps = useInputText('');
  const imageAltProps = useInputText('');
  const stateProps = useInputText('');
  const countryProps = useInputText('');
  const cityProps = useInputText('');
  const streetProps = useInputText('');
  const houseNumberProps = useInputText('');
  const zipProps = useInputText('');
  const [error, setError] = useState("");
  

  function validate(): boolean {
    if (!titleProps) {
      setError("title is required");
      return false;
    }
 

    setError("");
    return true;
  }

  

  function handleClick() {
    if (!validate()) {
      return;
    }

    addCard({
      title: titleProps.value,
      subtitle: subTitleProps.value,
      description: decriptionProps.value,
      imageUrl: imageUrlProps.value,
      imageAlt:imageAltProps.value,
      phone: phoneProps.value,
      email: emailProps.value,
      web: webProps.value,
      state:stateProps.value,
      country:countryProps.value,
      city:cityProps.value,
      street:streetProps.value,
      houseNumber:houseNumberProps.value,
      zip:zipProps.value,
    }).then(() => {
      console.log();
      navigate("/")
    
    })


  };

  return (
    <>
      <div className="text-center mb-5">
        <Title mainText={"Ceate Card"} />
      </div>
      <form>
        <FormLayout>
          <div className="col-sm-3 form-floating">
            <input
             id="floatingInput" 
              className="form-control"
              placeholder="Title*"
             {...titleProps}
             
            />
            <label htmlFor="floatingInput"> Title*</label>
            {/* <div className="text-danger">{error}</div> */}
          </div>
          <div className="col-sm-3 form-floating">
            <input
            id="floatingInput"
              type="text"
              className="form-control"
              placeholder="Subtitle*"
              {...subTitleProps}
            />
            <label htmlFor="floatingInput"> Subtitle*</label>
          </div>
        </FormLayout>

        <FormLayout>
          <div className="col-sm-3 form-floating">
            <input
            id="floatingInput"
              type="text"
              className="form-control"
              placeholder="Description*"
              {...decriptionProps}
            />
            <label htmlFor="floatingInput"> Description*</label>
          </div>
          <div className="col-sm-3 form-floating">
            <input
            id="floatingInput"
              type="text"
              className="form-control"
              placeholder="Phone*"
              {...phoneProps}
            />
            <label htmlFor="floatingInput"> Phone*</label>
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-3 form-floating">
            <input
             id="floatingInput"
              type="text"
              className="form-control"
              placeholder="Email*"
              {...emailProps}
            />
            <label htmlFor="floatingInput"> Email*</label>
          </div>
          <div className="col-sm-3 form-floating">
            <input
            id="floatingInput"
              type="text"
              className="form-control"
              placeholder="Web"
              {...webProps}
            />
            <label htmlFor="floatingInput"> Web</label>
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-3 form-floating">
            <input
             id="floatingInput"
              type="text"
              className="form-control"
              placeholder="Image url*"
              {...imageUrlProps}
            />
            <label htmlFor="floatingInput">Image Url*</label>
          </div>
          <div className="col-sm-3 form-floating">
            <input
            id="floatingInput"
              type="text"
              className="form-control"
              placeholder="Image alt*"
              {...imageAltProps}
            />
            <label htmlFor="floatingInput">Image Alt*</label>
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-3 form-floating">
            <input
            id="floatingInput"
              type="text"
              className="form-control"
              placeholder="State"
              {...stateProps }
            />
            <label htmlFor="floatingInput">State</label>
          </div>
          <div className="col-sm-3 form-floating">
            <input
            id="floatingInput"
              type="text"
              className="form-control"
              placeholder="Country"
              {...countryProps}
            />
            <label htmlFor="floatingInput form-floating">Country*</label>
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-3 form-floating">
            <input
            id="floatingInput"
              type="text"
              className="form-control"
              placeholder="City*"
              {...cityProps}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="string"
              className="form-control"
              placeholder="Street*"
              {...streetProps}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-3 mb-4">
            <input
              type="string"
              className="form-control"
              placeholder="Housenumber*"
              {...houseNumberProps}
            />
          </div>
          <div className="col-sm-3">
            <input
              type="number"
              className="form-control"
              placeholder="Zip"
              {...zipProps}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="text-center mb-4">
            <button className="btn btn-outline-danger col-3">CANCEL</button>
            <button className="btn btn-outline-primary col-3">
              <i className="bi bi-arrow-repeat"></i>
            </button>
          </div>
        </FormLayout>
        <div className="text-center">
          <button
           
            className="text-center btn btn btn-secondary col-5"
            onClick={handleClick}
          
          >
            ADD
          </button>
        </div>
      </form>
    </>
  );
}

export default AddCard;

