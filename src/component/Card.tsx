export interface CardProps {
  _id?: Number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  imageAlt: string;
  phone: string;
  email: string;
  web: string;
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip: number;
  cardNumber?: number;
}

interface Props extends CardProps {
  children: React.ReactNode;
}

function Card({
  title,
  subtitle,
  description,
  imageAlt,
  imageUrl,
  phone,
  email,
  web,
  state,
  country,
  city,
  street,
  houseNumber,
  zip,
}: Props) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top" alt={imageAlt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle">{subtitle}</h6>
          <p className="card-text">{description}</p>
          <hr />
          <div>
            <p>phone: {phone}</p>
            <p>email:{email}</p>
            <p>
              address:{state} {country},{city} {street} {houseNumber}, {zip}
            </p>
            <p>web: {web}</p>
            <p>card number: {}</p>
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
