import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Title from "../../component/Title";
import "./Home.css";
import "../../component/Header";
import { deleteCard, favorite, getCards } from "../../services/ApiService";
import { Link } from "react-router-dom";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  CardActions,
  Checkbox,
  IconButton,
  Fab,
  Button,
  dividerClasses,
} from "@mui/material";
import "./Home.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { CardProps } from "../../interface/InterCard";
import { toast } from "react-toastify";
import Card from "../../component/Card";
import AdminGuard from "../../auth/AdminGuard";
import { UserContext } from "../../context/userContext";

function Home() {
  const [cards, setCards] = useState<Array<CardProps>>([]);
  // const context = useContext(AppContext)
  const [search, setSearch] = useState("");
  const [origData, setOrigData] = useState<Array<CardProps>>([]);
  const { userData, favorites, setFavorites } = useContext(UserContext);

  useEffect(() => {
    getCards().then((json) => {
      console.log(json);
      setCards(json);
      setOrigData(json);
    });
  }, []);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);

    const term = value.toLowerCase();
    const result = [...origData].filter((card) =>
      card.subtitle.toLowerCase().includes(term)
    );

    setCards(result);
  }

  async function onDelete(_id: string) {
    try {
      await deleteCard(_id);

      setCards((prevCards) => prevCards.filter((card) => card._id !== _id));

      toast.success(`Card ${_id} deleted successfully!`);
    } catch (error) {
      console.error("Error deleting card:", error);
      toast.error("Failed to delete card");
    }
  }

  return (
    <>
      <div className="home">
        <Title
          mainText={"Build your wedding"}
          subText={"Here you can choose and save all the cards you liked"}
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

            {cards.length === 0 && <div>No Cards</div>}
            <div className="cards">
              {cards.map((card) => (
                <div className="card" key={card._id}>
<<<<<<< HEAD
                  <Card key={card._id} onDelete={onDelete} card={card} {...card} />
=======
                  <Card card={card} onDelete={onDelete} {...card} />
>>>>>>> 0815495c6655f77807ffb60bd777588b3fa5b153
                </div>
              ))}
            </div>
            {userData?.isAdmin && (
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Link to="add">
                  <Fab color="primary" aria-label="add">
                    <AddIcon />
                  </Fab>
                </Link>
              </Box>
            )}
          </Container>
        </div>
      </div>
    </>
  );
}

export default Home;
