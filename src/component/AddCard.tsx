import { useState } from "react";
import FormLayout from "./FormLayout";
import Title from "./Title";

interface Props {
  onAdd: Function;
}

function AddCard({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [web, setWeb] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [housenumber, setHousenumber] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");

  function validate(): boolean {
    if (!title) {
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
    onAdd({
      title,
      subtitle,
      description,
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Web"
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Image url"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Image alt"
              aria-label="Phone"
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="State"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Country"
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="City*"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control text-center"
              placeholder="Street*"
            />
          </div>
        </FormLayout>
        <FormLayout>
          <div className="col-sm-2">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Housenumber*"
            />
          </div>
          <div className="col-sm-2">
            <input
              type="number"
              className="form-control text-center"
              placeholder="Zip"
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
        <div className="text-center">
          <button className="btn btn btn-secondary col-4" onClick={handleClick}>
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
}

export default AddCard;
