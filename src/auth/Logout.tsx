import { useNavigate } from "react-router-dom";
import { removeToken } from "./TokenManager";

function Logout() {
  const navigate = useNavigate();

  function handleClick() {
    removeToken();
    
    navigate("/login");
  }

  return (
    <button className="nav-link" onClick={handleClick}>
      LOG OUT
    </button>
  );
}

export default Logout;
