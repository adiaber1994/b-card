import { useState } from "react";
import FormLayout from "../../component/FormLayout";
import Title from "../../component/Title";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { addCard } from "../../services/ApiService";
import { CardProps } from "../../component/Card";

// interface Card {
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
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [web, setWeb] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHousenumber] = useState(0);
  const [zip, setZip] = useState(0);
  const [error, setError] = useState("");

  function validate(): boolean {
    if (!title) {
      setError("title is required");
      return false;
    }

    setError("");
    return false;
  }

  function handleClick() {
    if (!validate()) {
      return;
    }

    addCard({
      title,
      subtitle,
      description,
      email,
      web,
      imageUrl,
      imageAlt,
      phone,
      country,
      city,
      street,
      state,
      houseNumber,
      zip,
    }).then((card) => {
      console.log(card);
      navigate("/");
    });
  }

  return (
    <>
      <div className="text-center mb-5">
        <Title mainText={"Ceate Card"} />
      </div>
      <form className="">
        <FormLayout>
          <div className="col-sm-2">
            <input
              className="form-control text-center"
              placeholder="Title*"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="text-danger">{error}</div>
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>
        </FormLayout>

        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Description*"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control text-center"
              placeholder="Phone*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Web"
              value={web}
              onChange={(e) => setWeb(e.target.value)}
            />
          </div>
        </FormLayout>
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
              placeholder="City*"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control text-center"
              placeholder="Street*"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Housenumber*"
              value={houseNumber}
              onChange={(e) => setHousenumber(e.target.valueAsNumber)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control text-center"
              placeholder="Zip"
              value={zip}
              onChange={(e) => setZip(e.target.valueAsNumber)}
            />
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
        <div>
          <Link
            to="/"
            className="text-center btn btn btn-secondary col-4"
            onClick={handleClick}
          >
            SUBMIT
          </Link>
        </div>
      </form>
    </>
  );
}

export default AddCard;
