import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { getFavorites, deleteCard } from "../../services/ApiService";
import { UserContext } from "../../context/userContext";
import Card from "../../component/Card";
import { Container } from "@mui/material";
import Title from "../../component/Title";
import "./MyCards.css";
import { CardProps } from "../../interface/InterCard";
import { toast } from "react-toastify";




function MyCards() {
  const { favorites, setFavorites } = useContext(UserContext);
  const [origData, setOrigData] = useState<Array<CardProps>>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesData = await getFavorites();
        console.log(favoritesData);
        setFavorites(favoritesData);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }

      
    };

    fetchFavorites();
    setOrigData(favorites);
    
  }, [setFavorites]);


  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);

    const term = value.toLowerCase();
    const result = [...origData].filter((card) =>
      card.subtitle.toLowerCase().includes(term)
    );

    setFavorites(result);
  }

  async function onDelete(_id: string) {
    try {
      
      await deleteCard(_id);
      console.log(`Card ${_id} deleted successfully!`);
  
     
      const updatedFavorites = await getFavorites();
      console.log("Updated favorites:", updatedFavorites);
  
      
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error("Error deleting card:", error);
      toast.error("Failed to delete card");
    }
  }
  return (
    <>
      <div className="myCards">
      <Title
          mainText={"My Cards"}
          subText={"Here you can find all yours favorite cards:"}
        />

        <div className="main">
        <Container fixed>
        <div className="d-flex">
              <div className="px-5">
                <input
                  className="form-control mx-3"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
            </div>

        {favorites.length === 0 && <div>No Cards</div>}
        <div className="cards">
          {favorites &&
            favorites.map((favorite) => (
              <div className="card" key={favorite._id}>
                <Card key={favorite._id}  onDelete={onDelete} card={favorite} {...favorite} />
              </div>
            ))}
        </div>
        </Container>
        </div>
      </div>
    </>
  );
}

export default MyCards;
