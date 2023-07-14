import React, { useEffect, useState } from "react";
import Title from "../../component/Title";
import Card, { CardProps } from "../../component/Card";
import "./Home.css";
import "../../component/Header";
import { addCard, getCards } from "../../services/ApiService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const data: Array<CardProps> = [
  // {
  //   title: "GILA-wedding dresses",
  //   image:
  //     "https://cdn.pixabay.com/photo/2020/08/20/18/20/bride-5504342_640.jpg",
  //   text: "Gila is a designer of modern wedding dresses",
  //   phone: "039288756",
  //   address: "22 Dizengoff, Tel Aviv",
  //   cardNumber: 0,
  // },
  // {
  //   title: "JACKSON",
  //   image:
  //     "https://cdn.pixabay.com/photo/2017/10/02/02/31/ring-2807717_640.jpg",
  //   text: "Wedding ring shop - come and find the perfect ring for you",
  //   phone: "03-6127245",
  //   address: "Harkon 15, Ramat Gan",
  //   cardNumber: 0,
  // },
  // {
  //   title: "Hofit-flower",
  //   image:
  //     "https://cdn.pixabay.com/photo/2017/08/31/11/55/wedding-2700495_640.jpg",
  //   text: "Natural flowers, bouquets and decorations for the bride and groom's car",
  //   phone: "038554233",
  //   address: "Jabotinsky 130, Ramat Gan",
  //   cardNumber: 0,
  // },
  // {
  //   title: "SEGAL",
  //   image:
  //     "https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_640.jpg",
  //   text: "Groom suits at good prices",
  //   phone: "035887412",
  //   address: "Sderot Giborei Israel 5, Netanya,",
  //   cardNumber: 0,
  // },
];

function Home() {
  const [cards, setCards] = useState<Array<CardProps>>([]);

  useEffect(() => {
    getCards().then((json) => {
      setCards(json);
    });
  }, []);

  function onAdd(card: CardProps) {
    addCard(card).then((json) => {
      setCards([...cards, json]);

      toast.success(
        `Vacation to ${json.cardNumber} has been added successfully`
      );
    });
  }

  // const filtered: Array<CardProps> = data.filter((card) =>
  //   card.title.toLowerCase().includes(value.trim().toLowerCase())
  // );
  // setCards(filtered);

  return (
    <>
      <Title
        mainText={"Cards Page"}
        subText={"Here you can find business cards from all categories"}
      />
      <div className="row row-cols-md-4 g-4">
        {cards.length === 0 && <div>No Cards</div>}
        {cards.map((card) => (
          <div className="">
            <Card
              title={card.title}
              imageUrl={card.imageUrl}
              subtitle={card.subtitle}
              phone={card.phone}
              country={card.country}
              cardNumber={card.cardNumber}
              _id={card._id}
              children={undefined}
              description={""}
              imageAlt={""}
              email={""}
              web={""}
              state={""}
              city={""}
              street={""}
              houseNumber={0}
              zip={0}
            />
          </div>
        ))}
        <Link to="add">
          <i className="bi bi-plus-circle-fill"></i>
        </Link>
      </div>
    </>
  );
}

export default Home;
