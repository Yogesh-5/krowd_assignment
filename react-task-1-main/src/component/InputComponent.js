const InputComponent = ({ value, onChange, onAdd, disabled }) => {
  return (
    <div>
      <input class='one' type="text" value={value} onChange={onChange} placeholder="Enter Item" />
      <br/>

      <button onClick={onAdd} class='two' >
        Add
      </button>
    </div>
  );
};

export default InputComponent;
