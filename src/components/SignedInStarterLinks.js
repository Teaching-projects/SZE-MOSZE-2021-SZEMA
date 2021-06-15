import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "firebase/auth";
import Tooltip from '@material-ui/core/Tooltip';
import TemporaryDrawer from './TemporaryDrawer';
import firebase from "firebase/app";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Anton',
      position: 'realtive',
      display: 'flex',
      justifyContent: 'left',
    },
    buttonTitle: {
      fontFamily: 'Anton'
    },
    mainButtonTitle: {
      fontFamily: 'Anton',
      fontSize: '25px',
    }
  }));

const HomePageLinks = () =>{
    const classes = useStyles();
    const handleLogout = () => {
      firebase.auth().signOut();
    };
    return(
        <>
            <div className="dropdownNavs">
                <TemporaryDrawer />
                <Typography variant="h5" className={classes.title}>
                    <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Visszatérés a kezdőlapra.</h1>}>
                        <Button className={classes.mainButtonTitle} id="home" color="inherit" href="/">SZEMA</Button>
                    </Tooltip>
                </Typography>
            </div>
            <div className="listNavs">
              <Typography variant="h5" className={classes.title}>
                  <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Visszatérés a kezdőlapra.</h1>}>
                      <Button className={classes.mainButtonTitle} id="home" color="inherit" href="/">SZEMA</Button>
                  </Tooltip>
              </Typography>
              <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Hírek létrehozása, módosítása, szerkesztése oldal.</h1>}>
                  <Button className={classes.buttonTitle} color="inherit" href='/news'>Hírek</Button>
              </Tooltip>
              <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Kérdések kezelése, összeállítása.</h1>}>
                  <Button className={classes.buttonTitle} color="inherit" href='/questionbase'>Kérdésbázis</Button>
              </Tooltip>
              <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Tesztek kezelése, összeállítása.</h1>}>
                  <Button className={classes.buttonTitle} color="inherit" href='/createtest'>Feladatsor készítés</Button>
              </Tooltip>
              <Button className={classes.buttonTitle} color="inherit" onClick={handleLogout}>
                  Kijelentkezés
              </Button>
            </div>
        </>
    )
}
export default HomePageLinks