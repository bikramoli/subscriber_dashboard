import "./Style.css";

const CardWrapper = (props) => {
  return <div className="activity-card">{props.children}</div>;
};
export default CardWrapper;
