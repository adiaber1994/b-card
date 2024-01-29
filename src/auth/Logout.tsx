import { useNavigate } from "react-router-dom";
import { removeToken, removeUser } from "./TokenManager";

function Logout() {
  const navigate = useNavigate();

  function handleClick() {
    removeUser();
    
  }

  

  return (
    <button className="nav-link" onClick={handleClick}>
      LOG OUT
    </button>
  );
}

export default Logout;
