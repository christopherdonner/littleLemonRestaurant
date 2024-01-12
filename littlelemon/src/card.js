
const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (<div className="card">
    <img src={imageSrc} width='200px'></img>
    
    <h1>{title}</h1>
    <p>{description}</p>
  </div>);
};

export default Card;
