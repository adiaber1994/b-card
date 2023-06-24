import { Children, ReactNode } from "react";

interface Props {
    children: ReactNode
}

function FormLayout({children}: Props) {
    return ( 
        <div className="m-4 d-flex jstify-content-center">
            <div className="col-sm-12 col-md-6">

                {children}

            </div>
        </div>
     );
}

export default FormLayout;