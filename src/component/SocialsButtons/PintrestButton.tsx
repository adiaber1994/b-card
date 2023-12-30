import { ReactNode } from "react";
import SocialButton from "./SocialButton";


function PintrestButton({icon}: {icon: ReactNode}) {
    return ( 
        <SocialButton
        text="Pintrest"
        url="https://Pintrest....."
        icon={icon}
        />
     );
}

export default PintrestButton;