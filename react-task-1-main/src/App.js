import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputComponent from './component/InputComponent';
import ViewComponent from './component/ViewComponent';
import ViewList from './component/View';
import ParentComponent from './component/ParentComponent';


function App() {


  const [listText, setInputList] = useState([])
  const handleChange3 = (e) => setInputList(e.target.value);
  const [textList, setButtonList] = useState([]);
  const handleList = () => {
    setButtonList([...textList, listText,]);
    setInputList("");

  }

  return (

 
    <div>
      <div class='head'>

      <p class='it'>Item List Manager</p>
      </div>
      <p class='item1'>Item List</p>
      <div><ParentComponent /></div>
    </div>
  )

}
export default App;