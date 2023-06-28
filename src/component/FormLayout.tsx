import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function FormLayout({ children }: Props) {
  return (
    <>
      <div className="row g-3 justify-content-center mb-2">{children}</div>
    </>
  );
}

export default FormLayout;
