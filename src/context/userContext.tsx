import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "../interface/InterUser";
import { getUser } from "../auth/TokenManager";
import { getFavorites } from "../services/ApiService";

interface UserData extends User {}
interface Props {
  children: ReactNode;
}

type UserContextType = {
  userData: User | null;
  favorites: any[];
  setFavorites: (favs: any[]) => void
  setUserData: (data: User | null) => void;
 
 
};

export const  UserContext = createContext<UserContextType>({


  userData: null,
  favorites: [],
  setFavorites: () => {},
  setUserData: () => {},
  

});
export const UserProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [favorites, setFavorites] = useState<any[]>([]);
  

  useEffect(() => {
    // הסתרת קריאה כפולה ל getUser()
    const userFromToken = getUser();
    setUserData(userFromToken ? userFromToken : null);
  }, []);

  useEffect(() => {
    console.log("Current favorites:", favorites);
    // וודאות שיש שינוי במספר הפייבוריטים
    if (userData && favorites.length === 0) {
      const fetchFavorites = async () => {
        try {
          const favoritesData = await getFavorites();
          console.log('Favorites Data:', favoritesData);
          setFavorites(favoritesData);

        } catch (error) {
          console.error("Error fetching favorites:", error);
        }
      };
      fetchFavorites();
    }
  }, [userData, favorites.length]);

  return <UserContext.Provider value={{ userData, setUserData, favorites, setFavorites }}>{children}</UserContext.Provider>;
};