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
  user_id?: string;
  favorites?: string[];
}
