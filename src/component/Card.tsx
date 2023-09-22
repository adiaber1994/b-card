import { Box, Button, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

export interface CardProps {
  _id?: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  phone: string;
  email: string;
  web: string;
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  zip: string;
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
  cardNumber
}: Props) {
  return (
    <>
    
    
    
      
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {imageUrl}
          alt={imageAlt}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {subtitle}
          </Typography>
             
        </CardContent>
        <Typography>
        <p>phone: {phone} <br />
            email: {email} <br />
            
              address:{state} {country},{city} {street} {houseNumber}, {zip} <br />
              </p>
       </Typography>  
      </CardActionArea>
      <CardActions>

        <Button size="small" color="primary">
        <i className="bi bi-telephone-fill"></i>
        <i className="bi bi-heart-fill"></i>
        <i className="bi bi-trash3-fill"></i>

        </Button>
      </CardActions>
      
      
      
   
    

{/* 
    <div className="col">
      <div className="card h-100">
        <img src= {imageUrl} className="card-img-top" alt={imageAlt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle">{subtitle}</h6>
          <p className="card-text">{description}</p>
          <hr />
          <div>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
            <p>
              address:{state} {country},{city} {street} {houseNumber}, {zip}
            </p>
            <a href="#">
                web: {web}
              </a>
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
    </div> */}
    </>

    
  );
}

export default Card;
