export interface CardProps {
  _id: string;
  title: string;
  image: string;
  text: string;
  phone: string;
  address: string;
  cardNumber: number;
}

function Card({ title, image, text, phone, address, cardNumber }: CardProps) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <hr />
          <div>
            <p>phone: {phone}</p>
            <p>address: {address}</p>
            <p>card number: {cardNumber}</p>
          </div>
          <div className="card-footer">
            <div className="">
              <a className="" href="#">
                <i className="bi bi-telephone-fill"></i>
              </a>
              <a href="#">
                <i className="bi bi-heart-fill"></i>
              </a>
              <a href="#">
                <i className="bi bi-trash3-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
