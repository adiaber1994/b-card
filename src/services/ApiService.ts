import { User } from "../interface/InterUser";
import { getToken } from "../auth/TokenManager";
import { CardProps } from "../interface/InterCard";

const serverUrl = "http://localhost:4000/";
const cardsUrl = `${serverUrl}cards/`;
const usersUrl = `${serverUrl}users/`;

export async function getCards(): Promise<Array<CardProps>> {
  const res = await fetch(`${cardsUrl}`);

  return res.json();
}

export async function getCardsById(_id: string): Promise<CardProps> {
  const res = await fetch(`${cardsUrl}${_id}`, {
    method: "GET",
    headers: {
      "x-auth-token": getToken(),
    },
  });
  return res.json();
}

export async function addCard(card: CardProps): Promise<CardProps> {
  const res = await fetch(`${cardsUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": getToken(),
    },
    body: JSON.stringify(card),
  });
  return res.json();
}

export async function deleteCard(_id: string): Promise<CardProps> {
  const res = await fetch(`${cardsUrl}${_id}`, {
    method: "DELETE",
    headers: {
      "x-auth-token": getToken(),
    },
  });
  return res.json();
}

export async function editCard(
  _id: string,
  card: CardProps
): Promise<CardProps | { error: string }> {
  try {
    const res = await fetch(`${cardsUrl}${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": getToken(),
      },
      body: JSON.stringify(card),
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json();
  } catch (error) {
    console.error("Error editing card:", error);
    return { error: "An error occurred while editing the card." } as {
      error: string;
    };
  }
}

export async function getUserById(_id: string): Promise<User> {
  const res = await fetch(`${usersUrl}me`, {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": getToken(),
    },
  });
  console.log(res);
  console.log(res.status);
  return res.json();
}

export async function signup(user: User): Promise<User> {
  const res = await fetch(`${usersUrl}signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return res.json();
}

type NewUser = Omit<User, "_id" | "favorite">;

export async function login(user: User): Promise<User> {
  const res = await fetch(`${usersUrl}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    const data = await res.json();
    if (data.details) {
      throw new Error(data.details.map((err: any) => err.message).join(", "));
    } else {
      throw new Error(data.message);
    }
  }
  return res.json();
}

export async function fetchUserData(): Promise<User> {
  try {
    const res = await fetch(`${usersUrl}me`, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": getToken(),
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }

    const userData = await res.json();
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}

export async function favorite(cardId: string): Promise<any> {
  console.log("Token sent with request:", getToken());

  const requestBody = JSON.stringify({ cardId });
  console.log("Request body:", requestBody);

  const res = await fetch(`${cardsUrl}set-favorites/${cardId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      "x-auth-token": getToken(),
    },
    body: requestBody,
  });

  console.log("Response:", res);
  return res.json();
}
export async function getFavorites(): Promise<Array<any>> {
  try {
    const res = await fetch(`${cardsUrl}favs`, {
      method: "GET",
      headers: {
        "x-auth-token": getToken(),
      },
    });
    console.log("Response from getFavorites:", res);
    return res.json();
  } catch (error) {
    console.error("Error in getFavorites:", error);
    throw error;
  }
}
