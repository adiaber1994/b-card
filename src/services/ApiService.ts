import { CardProps } from "../component/Card";

const serverUrl = "http://localhost:3000";

export async function getCards(): Promise<Array<CardProps>> {
  const res = await fetch(`${serverUrl}cards`);
  return res.json();
}
