import Header from "./Header";
import Footer from "./Footer";
import React, { useState } from 'react';
import InputArea from "./InputArea";
import Note from "./Note";

function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
     setItems(prevItems => {
      return [...prevItems, inputText];
     });
  }
  
   function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
     });
   }
  return (
    <div>
      <Header />
      <InputArea onAdd={addItem} />

      { items.map((note, index) => {
         return(<Note key={index} id ={index} title={note.title} content={note.content} onDelete={deleteItem} />) ;
      }) }

      <Footer />
    </div>
  );
}

export default App;
