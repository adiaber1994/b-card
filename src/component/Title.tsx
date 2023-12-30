import "./Title.css"
interface Props {
  mainText: string;
  subText?: string;
}

function Title({ mainText, subText }: Props) {
  return (
    <h2 className=" my-3" >
      {mainText }
      <br />
      {subText && <small>{subText}</small>}
    </h2>
  );
}

export default Title;
