import { User } from "../auth/SignUp";
import { CardProps } from "../component/Card";

const serverUrl = "http://localhost:3000";
const cardsUrl = `${serverUrl}cards/`;
const usersUrl = `${serverUrl}users/`;

export async function getCards(): Promise<Array<CardProps>> {
  const res = await fetch(`${cardsUrl}`);
  return res.json();
}

export async function AddCard(card: CardProps): Promise<CardProps> {
  const res = await fetch(`${cardsUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });
  return res.json();
}

export async function deleteCard(_id: string): Promise<CardProps> {
  const res = await fetch(`${cardsUrl}${_id}`, {
    method: "DELETE",
  });
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

export async function login(user: User): Promise<User> {
  const res = await fetch(`${usersUrl}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return res.json();
}
