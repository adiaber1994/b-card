import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

interface Props {
    children: ReactNode
}


function AdminGuard({children}: Props) {
    const { userData } = useContext(UserContext);
    

    function isNotAdmin(): boolean {
       
        return !userData?.isAdmin || false;
        
    }
    return isNotAdmin (  ) ? (
        <Navigate
        to={"/"}
        replace={true}
        />
        
    ): (
        <>{children}</>
    )
}

export default AdminGuard;