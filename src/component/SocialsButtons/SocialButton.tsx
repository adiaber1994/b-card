import { ReactNode } from "react"


interface Props {
    text: string;
    url: string;
    icon: ReactNode;
   
}


function SocialButton({text, url, icon}: Props) {

    function handleClick() {
        window.location.href = url;


    }
    return ( 
        <button className="btn btn-outline rounded-pill mx-2" onClick={handleClick}>
                    {icon}{text}
        </button>
     );
}

export default SocialButton;