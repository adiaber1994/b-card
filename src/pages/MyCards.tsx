import { useEffect, useState } from "react";
import AddCard from "../component/AddCard";
import Card, { CardProps } from "../component/Card";
import Title from "../component/Title";
import { getCards } from "../services/ApiService";

function MyCards() {
  const [card, setCards] = useState<Array<CardProps>>([]);

  useEffect(() => {
    getCards().then((json) => {
      setCards(json);
    });
  }, []);

  return (
    <>
      <Title mainText="My Cards" subText="All my cards" />

      <Card
        title={""}
        image={""}
        text={""}
        phone={""}
        address={""}
        cardNumber={0}
      />

      <AddCard />
    </>
  );
}

export default MyCards;
