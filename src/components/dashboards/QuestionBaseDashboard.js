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
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import Tooltip from '@material-ui/core/Tooltip';

//for lists
function ListItemLink(props) {
  
  
  return <ListItem button component="a" {...props} />;
  
}


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
  formControl: {
    float: 'left',
    marginBottom: '10px',
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
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Témakör...</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper">
          <MenuItem value="">
            <em>Nincs témakör</em>
          </MenuItem>
          <MenuItem>Térelemek ábrázolása</MenuItem>
          <MenuItem >Síklapú testek vetületi ábrázolása</MenuItem>
          <MenuItem >Forgástestek vetületi ábrázolás</MenuItem>
          <MenuItem>Áthjatások/vetítési. Rajzi egyszerűsítések</MenuItem>
          <MenuItem >Metszeti ábrázolás</MenuItem>
          <MenuItem >Méretmegadás műszaki rajzokon</MenuItem>
        </Select>
        <FormHelperText>Válassza ki a témakörbe kategorizáláshoz</FormHelperText>
      </FormControl>

      <h4>Megadható válaszok száma</h4>
      <TextField
          id="outlined-number"
          //label="Válaszok száma"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

      <form className={classes.root} noValidate autoComplete="off">
      {/*<TextField id="standard-basic" label="Kérdés" />*/}
      <TextField
          id="outlined-full-width"
          label="Új kérdés létrehozása"
          style={{ margin: 8 }}
          placeholder="Kérem írja be a kérdést..."
         // helperText="Full width!"
          fullWidth
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
          placeholder="Kérem adja meg a helyes választ."
         // helperText="Full width!"
          fullWidth
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        
        <TextField
          id="outlined-full-width"
          //label="Új válasz létrehozása"
          style={{ margin: 8 }}
          placeholder="Kérem adjon meg egy választ."
         // helperText="Full width!"
          fullWidth
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
         //label="Új válasz létrehozása"
          style={{ margin: 8 }}
          placeholder="Kérem adjon meg egy választ."
         // helperText="Full width!"
          fullWidth
          multiline
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />


    <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Ezzel a gombbal a kérdés létrehozása mezők törölhetők.</h1>}>
    <Button variant="contained">Elvetés</Button>
    </Tooltip>
    <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Ezzel a gombbal a jelenleg betöltött kérdés módosítható.</h1>}>
    <Button variant="contained" color="primary">
     Módosítás
    </Button></Tooltip>
    <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Ezzel a gombbal a eegy új kérdés adható hozzá a kiválasztott témakorhöz.</h1>}>
    <Button variant="contained" color="secondary">
      Hozzáadás
    </Button></Tooltip>

       

  {/*><TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="outlined-basic" label="Outlined" variant="outlined" />*/}
  </form>
      </div>
            
      <div className={classes.themeQuestions}>
      
      <SearchField placeholder='Keresés a témakörök között...'  />
      <h1>Témakörök a kérdésekhez</h1>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders"> 
        <ListItem button> {/*  simple button */}
          <ListItemText primary="Térelemek ábrázolása" />
        </ListItem>
        <ListItemLink href="#simple-list">  {/*  LINK! */}
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
    <SearchField placeholder='Keresés a kérdések között...'  />
      <h1>Kérdések a ... témakörben</h1><Divider />
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