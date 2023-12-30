import { useContext, useEffect, useState } from "react";
import { CardProps } from "../interface/InterCard";
import Title from "../component/Title";
import Card from "../component/Card";
import {log} from "console"
import { getFavorites } from "../services/ApiService";
import { AppContext } from "../App";
import { UserContext } from "../context/userContext";


interface Props{
    card: CardProps,
    onDelete: Function,
    handleFavoriteClick: Function
  
}





function MyCards() {
    const [allFavoriteCards, setAllFavoriteCards] = useState<Array<CardProps>>([])
    const { userData } = useContext(UserContext);
    const [displayMode, setDisplayMode] = useState('grid');

       useEffect(() => {
        getFavorites().then((json) => {
            setAllFavoriteCards(json)
        }).catch(err => console.log(err))
    }, []);

    return (
        <>
            <Title
                mainText='My Cards'
                subText='my favorite cards:'
            />
           <div className="main">


            <section className="album">
   
             {allFavoriteCards.length === 0 && <div>No Cards</div>}
             <div className="cards">
               {allFavoriteCards.map(card => (

                   <div className="card">
                     <Card   
       
                      key={card._id}
                      card={card}
                     {...card}            
                                />

    
                    </div>
                ))
            }
            </div>
            </section>
            </div>

            
            {allFavoriteCards.length === 0 && (
                <div className='text-center m-4'>No Favorite Cards to show</div>
            )}
            <div className={displayMode}>
                {allFavoriteCards.map((card) => (
                    <Card
                        key={card._id}
                        card={card}
                    />
                ))}
            </div>
            
        </>
    );
}

export default MyCards;