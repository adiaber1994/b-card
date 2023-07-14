import { useEffect, useState } from "react";
import AddCard from "./home/AddCard";
import Card, { CardProps } from "../component/Card";
import Title from "../component/Title";
import { deleteCard, getCards } from "../services/ApiService";
import { toast } from "react-toastify";

function MyCards() {
  // const [cards, setCards] = useState<Array<CardProps>>([]);

  // useEffect(() => {
  //   getCards().then((json) => {
  //     setCards(json);
  //   });
  // }, []);

  // function onAdd(card: CardProps) {
  //   AddCard(card).then((json) => {
  //     setCards([...cards, json]);
  //     toast.success('Card has been added successfully');
  //   });
  // }

  // async function onDelete(_id: string) {
  //   const res = await deleteCard(_id);
  //   const updated = [...cards].filter((card) => card._id !== _id);

  //   setCards(updated);
  // }

  return (
    <>
      <Title mainText="My Cards" subText="All my cards" />

      {/* <Card
        title={""}
        image={""}
        text={""}
        phone={""}
        address={""}
        cardNumber={0}
      /> */}

      {/* <AddCard onAdd={onAdd} /> */}
    </>
  );
}

export default MyCards;
