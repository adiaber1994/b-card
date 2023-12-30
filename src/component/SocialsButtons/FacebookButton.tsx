import { ReactNode } from "react";
import SocialButton from "./SocialButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import { blue } from '@mui/material/colors'

function FacebookButton({icon}: {icon: ReactNode}) {
    return ( 
        <SocialButton
        text="Facebook"
        url="https://facbook....."
        icon={icon}
        />


     );
}

export default FacebookButton;