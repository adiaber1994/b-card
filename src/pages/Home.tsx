import React from "react";
import Title from "../component/Title";
import Card from "../component/Card";

function Home() {
  return (
    <>
      <>
        <Title
          mainText={"Cards Page"}
          subText={"Here you can find business cards from all categories"}
        />
        <div className="d-flex">
          <Card
            title="title 1"
            image="https://cdn.pixabay.com/photo/2015/08/01/23/28/manicure-870857_1280.jpg"
          />
          <Card
            title="title 2"
            image="https://cdn.pixabay.com/photo/2015/08/01/23/28/manicure-870857_1280.jpg"
          />
          <Card
            title="title 3"
            image="https://cdn.pixabay.com/photo/2015/08/01/23/28/manicure-870857_1280.jpg"
          />
        </div>
      </>
    </>
  );
}

export default Home;
