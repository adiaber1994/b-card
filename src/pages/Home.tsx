import React from "react";
import Title from "../component/Title";
import Card, { CardProps } from "../component/Card";

const data: Array<CardProps> = [
  {
    title: "GILA-wedding dresses",
    image:
      "https://cdn.pixabay.com/photo/2020/08/20/18/20/bride-5504342_640.jpg",
    text: "Gila is a designer of modern wedding dresses",
    phone: "039288756",
    address: "22 Dizengoff, Tel Aviv",
    cardNumber: 0,
  },
  {
    title: "JACKSON",
    image:
      "https://cdn.pixabay.com/photo/2017/10/02/02/31/ring-2807717_640.jpg",
    text: "Wedding ring shop - come and find the perfect ring for you",
    phone: "03-6127245",
    address: "Harkon 15, Ramat Gan",
    cardNumber: 0,
  },
  {
    title: "Hofit-flower",
    image:
      "https://cdn.pixabay.com/photo/2017/08/31/11/55/wedding-2700495_640.jpg",
    text: "Natural flowers, bouquets and decorations for the bride and groom's car",

    phone: "038554233",
    address: "Jabotinsky 130, Ramat Gan",
    cardNumber: 0,
  },
  {
    title: "SEGAL",
    image:
      "https://cdn.pixabay.com/photo/2016/11/22/22/25/groom-1850932_640.jpg",
    text: "Groom suits at good prices",
    phone: "035887412",
    address: "Sderot Giborei Israel 5, Netanya,",
    cardNumber: 0,
  },
];

function Home() {
  return (
    <>
      <Title
        mainText={"Cards Page"}
        subText={"Here you can find business cards from all categories"}
      />
      <div className="d-flex">
        {data.length === 0 && <div>No Cards</div>}
        {data.map((card) => (
          <Card
            title={card.title}
            image={card.image}
            text={card.text}
            phone={card.phone}
            address={card.address}
            cardNumber={card.cardNumber}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
