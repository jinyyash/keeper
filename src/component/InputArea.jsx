import React, { useState } from "react";
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';

function InputArea(props) {
  const [inputText, setInputText] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitNote(event){
    props.onAdd(inputText);
    setInputText({title: "", content: ""});
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={inputText.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={inputText.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}><Icon sx={{ color: green[500] }}>add_circle</Icon>
</button>
      </form>
    </div>
  );
}

export default InputArea;
