const ViewComponent = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          
        </li>
      ))}
    </ul>
  );
};

export default ViewComponent;



