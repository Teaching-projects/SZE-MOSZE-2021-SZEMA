import React, { useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SignedInStarterLinks from '../SignedInStarterLinks'
import 'firebase/firestore'
import { withStyles } from "@material-ui/core/styles";
import SearchField from 'react-search-field';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Tooltip from '@material-ui/core/Tooltip';

import QuestionAddAnswer from './questionBaseComponents/QuestionAddAnswer';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from "@material-ui/icons/Search";

//for lists
function ListItemLink(props) {
  
  
  return <ListItem button component="a" {...props} />;
  
}

const temakorok = [
  { title: 'Térelemek ábrázolása', id: 1 },
  { title: 'Síklapú testek vetületi ábrázolása', id: 2 },
  { title: 'Forgástestek vetületi ábrázolás', id: 3 },
  { title: 'Áthjatások/vetítési. Rajzi egyszerűsítések', id: 4 },
  { title: 'Metszeti ábrázolás', id: 5 },
  { title: "Méretmegadás műszaki rajzokon", id: 6 },
];

const kerdesek = [
  { title: 'Elso kerdes', id: 20 },
  { title: 'Masodik kerdes', id: 21 },
  { title: 'Harmadik kerdes', id: 22 },
  { title: 'Negyedik kerdes', id: 23 },
  { title: 'Otodik kerdes', id: 24 },
  { title: "Hatodik kerdes", id: 25 },
  { title: 'Hetedik kerdes', id: 26 },
];


const useStyles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    
  },
  themeQuestions: {
    display: 'inline-block',
    verticalAlign: 'text-top',
    margin: '15px',
    width: '100%',
    maxWidth: 450,
    backgroundColor: theme.palette.background.paper,
    //boxShadow: '0px 0px 12px 2px rgba(15, 15, 15, 0.281)',
    boxShadow: '0px 0px 12px 2px rgba(15, 15, 15, 0.2)',
    borderRadius: '6px',
    padding: '17px 10px',
    marginTop: '15px',
  },
  createQuestion: {
    display: 'center',
    //verticalAlign: 'text-top',
    //margin: '15px',
    //width: '100%',
    minWidth: 920,
    maxWidth: 450,
    backgroundColor: theme.palette.background.paper,
    //boxShadow: '0px 0px 12px 2px rgba(15, 15, 15, 0.281)',
    boxShadow: '0px 0px 12px 2px rgba(15, 15, 15, 0.2)',
    borderRadius: '6px',
    padding: '17px 10px',
    marginTop: '-25px',
    marginBottom: '15px',
  },
  gombok: {
    padding: '2rem',
  },
  formControl: {
    float: 'left',
    marginBottom: '10px',
    marginLeft: '16px',
  }
});

class QuestionBaseDashboard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
  }

  cancelCourse = () => { 
    this.setState({
      inputVal_1: ""
    });
  }

  state = {
    userInput: ''
   }

   onClick = () => {
    this.setState({
      userInput: 'Test'
    })
  }

  render(){
  

    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <SignedInStarterLinks />
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
             {/*  <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                 Kérdésbázis
              </Typography>*/}
            </Container>

            <center>
            
      <div className={classes.createQuestion}>
      <h1>Kérdés létrehozása</h1><Divider />
  
      <Container>
      <FormControl  className={classes.formControl}>
        <InputLabel  id="demo-simple-select-helper-label">Témakör kiválasztása</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper">
          <MenuItem value={0}>
            <em>Nincs témakör</em>
          </MenuItem>
          <MenuItem value={1}>Térelemek ábrázolása</MenuItem>
          <MenuItem value={2}>Síklapú testek vetületi ábrázolása</MenuItem>
          <MenuItem value={3}>Forgástestek vetületi ábrázolás</MenuItem>
          <MenuItem value={4}>Áthjatások/vetítési. Rajzi egyszerűsítések</MenuItem>
          <MenuItem value={5}>Metszeti ábrázolás</MenuItem>
          <MenuItem value={6}>Méretmegadás műszaki rajzokon</MenuItem>
        </Select>
        <FormHelperText>Témakör kiválasztása a kérdés kategorizálásához</FormHelperText>
      </FormControl>
      </Container>
      <form className={classes.root} noValidate autoComplete="off">
      
      <TextField 
          id="outlined-full-width"
          label="Új kérdés létrehozása"
          style={{ margin: 8 }}
          placeholder="Kérem írja be a kérdést..."
         // helperText="Full width!"
         style ={{width: '91%'}}
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Helyes válasz megadása"
          style={{ margin: 8 }}
          placeholder="Kérem írja be a helyes választ..."
         // helperText="Full width!"
         style ={{width: '91%'}}
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
          {/* ide a valasz lehetosegeket hozzaado comp */}
          <QuestionAddAnswer/> 

          {/*<input id="haha" value={this.state.userInput} name="sampleInput" />*/}

     {/* Elvetésre rányomva a módosítás gomb megjelenik és a hozzáadás is. Kérdések a ... témakörben-re rányomva pedig a módosítás és a hozzáadás eltűnik. */}
    <div className={classes.gombok}>
    <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue", margin: "2rem" }}>Ezzel a gombbal a kérdés létrehozása mezők törölhetők.</h1>}>
    <Button variant="contained" onClick={this.cancelCourse}>Elvetés</Button>
    </Tooltip>
    <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Ezzel a gombbal a jelenleg betöltött kérdés módosítható.</h1>}>
    <Button variant="contained" color="primary" style={{margin:"1rem"}} >Módosítás</Button>
    </Tooltip>
    <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Ezzel a gombbal a eegy új kérdés adható hozzá a kiválasztott témakorhöz.</h1>}>
    <Button variant="contained" color="secondary">Hozzáadás</Button>
    </Tooltip>
    </div>
       

  {/*><TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />*/}
  </form>
      </div>
            
      <div className={classes.themeQuestions}>
      
      
      <h1>Témakörök a kérdésekhez</h1>
      {/*<SearchField placeholder='Keresés a témakörök között...' />*/}

      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={temakorok.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Keresés a témakörök között..."
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search',  endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
             ) }}
            />
            )}
          />

      <Divider />
      <List component="nav" aria-label="secondary mailbox folders"> 
        <ListItem button> {/*  simple button */}
        
          <ListItemText primary="Térelemek ábrázolása" />
        </ListItem>
        <ListItemLink href="#simple-list">    
          <ListItemText primary="Síklapú testek vetületi ábrázolása" /> 
        </ListItemLink>
        <ListItem button>
          <ListItemText primary="Forgástestek vetületi ábrázolása" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Áthatások/Vetítési. Rajzi egyszerűsítések" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Metszeti ábrázolás" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Méretmegadás műszaki rajzokon" />
        </ListItem>
      </List>

    </div>
   
    

    <div className={classes.themeQuestions}>
    
      <h1>Kérdések keresése témakörben</h1>

      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={kerdesek.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Keresés a kérdések között..."
            margin="normal"
            variant="outlined"
            
            InputProps={{ ...params.InputProps, type: 'search',  endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
             ) }}
            />
            )}
          />
        
     
    


      <Divider />
    <List component="nav" aria-label="secondary mailbox folders">  
          <ListItem button > {/*  simple button */}
          <ListItemText primary="Elso kerdes" />
          </ListItem>
          <ListItem button> {/*  simple button */}
          <ListItemText primary="Masodik kerdes" />
          </ListItem>
          <ListItem button> {/*  simple button */}
          <ListItemText primary="Harmadik kerdes" />
          </ListItem>
          <ListItem button> {/*  simple button */}
          <ListItemText primary="Negyedik kerdes" />
          </ListItem>
          <ListItem button> 
          <ListItemText primary="Otodik kerdes" />
          </ListItem>
          <ListItem button> 
          <ListItemText primary="Hatodik kerdes.." />
          </ListItem>
    </List>
    </div>

    </center>
 

      </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
         {/* <Typography variant="h6" align="center" gutterBottom>
            SZEMA
          </Typography>*/}
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              <strong>SZEMA - </strong>Széchenyi István Egyetem
          </Typography>
          
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(QuestionBaseDashboard);