import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

//function App() {
export default function QuestionAddAnswer() {
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), questionOption: '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), questionOption: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  return (
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
        { inputFields.map(inputField => (
          <div key={inputField.id}>
          <TextField
          name="questionOption"
          //style = {{width: 100}}
          label="Új válasz lehetőség"
          style ={{width: '80%'}}
          placeholder="Kérem adjon meg egy válasz lehetőséget..."
          InputLabelProps={{shrink: true,}}
          variant="outlined"
          value={inputField.questionOption}
          onChange={event => handleChangeInput(inputField.id, event)}
          />

          <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
            <RemoveIcon /></IconButton>
          <IconButton onClick={handleAddFields}> <AddIcon /> </IconButton>
          </div>
        )) }
      </form>
  );
}