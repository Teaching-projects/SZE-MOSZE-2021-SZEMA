import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TransferList from './TransferList';
import { useComponentDidMount } from '../utility';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';

export default function DetailsForm({quiz, setTheQuiz, quizzes, handleProps, state, users}) {
  const [activeModul,setActiveModul] = useState(quiz["modules"].length);

  const addModul = () => {
    let moduleName = "Module_" + quiz["modules"].length;
    setTheQuiz({...quiz, "modules":[...quiz["modules"], {name:moduleName}]});
    setActiveModul(activeModul+1);
  }
  const deleteModul = () => {
    delete quiz["modules"][activeModul-1]
    if(activeModul === quiz["modules"].length && activeModul > 0){
      setActiveModul(activeModul-1);
    }
    let moduleNoNull = [];
    quiz["modules"].map((obj) => {
      if(obj != null){
        console.log(JSON.stringify(obj));
        moduleNoNull.push(obj);
      }
    })
    setTheQuiz({...quiz, "modules":[...moduleNoNull]})
  }
  const handleNext = () => {
    if(activeModul<quiz["modules"].length){
      setActiveModul(activeModul+1);
    }
  }
  
  const handlePrev = () => {
    if(activeModul>1){
      setActiveModul(activeModul-1);
    }
  }

  const handleSelect = (event) => {
    // setAge(event.target.value);
  };

  useComponentDidMount(() => {

    if(state['usingMode'] === 'createNew'){
        
    }else if(state['usingMode'] === 'template'){
      /*var templateQuiz;
      quizzes.map((quiz) => {
        if(state['DocDetails'][0] === state['selectedQuiz']){
          templateQuiz = quiz;
        }
      })
      var old_questions = [];
      templateQuiz.map()*/
      /*state['questions'] = [...quizzes];
      state['group'] = [...users];*/
    }else if(state['usingMode'] === 'modify'){
      /*state['questions'] = [...quizzes];
      state['group'] = [...users];*/
    }
  });

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{marginBottom:'50px'}}> 
        Feladatok összeállítása
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4} sm={4}  style={{display:'flex',justifyContent:'flex-end'}}>
          <Button variant="contained" color="primary" style={{width: '200px', background: '#2196f3'}} onClick={handlePrev}>Előző modul</Button>
        </Grid>
        <Grid item xs={4} sm={4} style={{display:'flex',justifyContent:'center'}}>
          <h2>{activeModul}/{quiz["modules"].length}.Modul</h2>
        </Grid>
        <Grid item xs={4} sm={4} style={{display:'flex',justifyContent:'flex-start'}}>
          <Button variant="contained" color="primary" style={{width: '200px', background: '#2196f3'}} onClick={handleNext}>Következő modul</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{marginBottom:'50px'}}>
        <Grid item xs={6} sm={6} style={{display:'flex',justifyContent:'flex-end'}}>
          <Button variant="contained" style={{width: '200px'}} onClick={addModul}>Új modul hozzáadása</Button>
        </Grid>
        <Grid item xs={6} sm={6} style={{display:'flex',justifyContent:'flex-start'}}>
          <Button variant="contained" color="secondary" style={{width: '200px'}} onClick={deleteModul}>Aktuális modul törlése</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{marginBottom:'50px'}}>
        <TransferList type='question' quizzes={quizzes} state={state} handleProps={handleProps}/>
      </Grid>
      <Grid container spacing={3} style={{marginBottom:'100px'}}>
        <Grid item xs={4} sm={4}>
          <InputLabel id="demo-simple-select-label">Feladatsor</InputLabel>
          <Select
            fullWidth
            defaultValue=''
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleSelect}
          >
          </Select>
        </Grid>
        <Grid item xs={4} sm={4}>
          <InputLabel id="demo-simple-select-label">Modul</InputLabel>
          <Select
            fullWidth
            defaultValue=''
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleSelect}
          >
          </Select>
        </Grid>
        <Grid item xs={4} sm={4}>
          <form fullWidth noValidate autoComplete="off">
            <TextField fullWidth id="standard-basic" label="Keresés" />
          </form>
        </Grid>
      </Grid>
      <Divider style={{marginBottom:'50px'}}/>
      <Typography variant="h6" gutterBottom>
        Csoport kezelése
      </Typography>
      <Grid container spacing={3}>
        <TransferList type='group' state={state} users={users} handleProps={handleProps}/>
      </Grid>
    </React.Fragment>
  );
}