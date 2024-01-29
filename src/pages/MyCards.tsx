import React, { useContext, useEffect } from 'react';

import { getFavorites } from '../services/ApiService';
import { UserContext } from '../context/userContext';
import Card from '../component/Card';
import { Container } from '@mui/material';


function MyCards() {
  const { favorites, setFavorites } = useContext(UserContext);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesData = await getFavorites();
        setFavorites(favoritesData);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, [setFavorites]);

  return (
    <>
       <div>
          <h1>My Favorite Cards</h1>
           
           {favorites.length === 0 && <div>No Cards</div>}
           <div className="cards">
           {favorites.map((favorite) => (
            <div className='cards' key={favorite._id}>
             <Card   
              
              
              key={favorite._id}
              card={favorite}
              {...favorite}            
            />
        </div>
      ))}
      </div>
      
      </div>

    </>
  );
}

export default MyCards;