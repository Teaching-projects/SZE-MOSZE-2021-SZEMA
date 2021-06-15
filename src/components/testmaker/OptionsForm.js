import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import '../../css/TestMakerDashboard.css'
const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function OptionsForm({quizzes, handleProps, state}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [name, setName] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [usingmode, setUsingMode] = React.useState('template');
  const handleChange = (event) => {
    setValue(event.target.value);
    handleProps(event)
  };
  const handleName = (event) => {
    setName(event.target.value);
    handleProps(event)
  };
  const handleMode = (event) => {
    if(event.target.value === 'createNew' && usingmode === 'createNew'){
      setUsingMode('template')
      state['usingMode'] = 'template';
    }else{
      setUsingMode(event.target.value);
      handleProps(event)
    }
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Opciók
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <div>
            <FormControl className={classes.formControl} fullWidth disabled={usingmode === 'createNew'}>
              <InputLabel id="demo-controlled-open-select-label"> Meglévő feladatsorok</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                onChange={handleChange}
                defaultValue=''
                name='selectedQuiz'
                value={state['selectedQuiz']}
              >
                { quizzes.map((quiz) => (
                   <MenuItem value={quiz['DocDetails'][0]} key={quiz['id']}>{quiz['DocDetails'][0]}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" disabled={usingmode === 'createNew'} >
            <RadioGroup aria-label="usingt" name="usingt" value={usingmode} onChange={handleMode}>
              <FormControlLabel name='usingMode' value="template" checked={state['usingMode'] === 'template'} control={<Radio />} label="Felhasználás sablonként" />
              <FormControlLabel name='usingMode' value="modify" checked={state['usingMode'] === 'modify'}  control={<Radio />} label="Létező feladatsor módosítása" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value='zh' />}
            label="Zárthelyi dolgozat"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox name='usingMode' value='createNew' onChange={handleMode} />}
            label="Új feladatsor létrehozása"
            checked={state['usingMode'] === 'createNew'}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            disabled={usingmode !== 'createNew'}
            required
            fullWidth
            value={state['quizName'] === '' ? name : state['quizName']}
            name='quizName'
            onChange={handleName}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}