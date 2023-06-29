export interface CardProps {
  title: string;
  image: string;
  text: string;
  phone: string;
  address: string;
  cardNumber: number;
}

function Card({ title, image, text, phone, address, cardNumber }: CardProps) {
  return (
    <div className="card m-3" style={{ width: "20rem" }}>
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
        <a href="#">
          <i className="bi bi-telephone-fill text-end"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
