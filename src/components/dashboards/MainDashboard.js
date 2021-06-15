import React, { useState, useEffect } from "react";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SignedInStarterLinks from '../SignedInStarterLinks'
import 'firebase/firestore'
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import 'firebase/firestore'
import {db} from '../../config/base'
import backgroundIMG from '../../SZEMA_WEB_background_3.svg'

const useStyles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: 'white',
    backgroundImage: `url(${backgroundIMG})`,
    backgroundAttachement: 'fixed',
    backgroundRepeat: 'no-repeat',
    background: '100%',
    padding: theme.spacing(8, 0, 6),
    backgroundSize: 'cover'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
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
  mainTitle:{
    fontWeight: 'bold',
  },
  root:{
    flexGrow: 1,
    textAlign: 'center',
    textTransform: "none"
  },
  simpleButton:{
    width: "100%",
    height: "10vh",
    marginTop:"10vh",
    textTransform: "none"
  }, 
  cardGrid: {
    marginTop:"10vh"
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
});

class CreateTestDashboard extends React.Component {

  getCards = () => {
    db.collection('news')
      .orderBy("date","desc")
      .limit(3)
      .get()
      .then( snapshot => {
        const data_from_web = []
        snapshot.forEach(doc => {
          const data = doc.data()
          data_from_web.push({...data,id:doc.id})
        })
        this.setState({cards_array : data_from_web})
      })
      .catch( error => console.log(error))
  } 
  constructor(props) {
    super(props);
    this.state = {
      cards_array : [],
    };
  }
  componentDidMount(){
    this.getCards();
    this.state.cards_array.sort()
    console.log(this.state.cards_array)
  }
  render(){
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative" style={{background: '#2196f3'}}>
          <Toolbar>
            <SignedInStarterLinks />
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography className={classes.mainTitle} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                 Üdvözlünk a SZEMA honlapján!
              </Typography>
              <Grid className={classes.root} container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Button variant="contained" size="large" href="/questionbase" className={classes.simpleButton}>
                    Kérdésbázis megtekintése
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                  <Button variant="contained" size="large" href="/createtest" className={classes.simpleButton}>
                    Feladatsorok kezelése
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Button variant="contained" size="large" href="/news" className={classes.simpleButton}>
                    Hírek létrehozása
                  </Button>
                </Grid>
              </Grid>
            </Container>
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
              {this.state.cards_array.map((card) => (
                <Grid item key={card["id"]} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card["profileImage"]}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card["user"]+ " " + card["date"]}
                      </Typography>
                      <Typography>
                        {card["message"]}
                      </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent:"centers", display:"table",textTransform: "capitalize"}}> 
                    <Button size="small" href="/news" color="primary" style={{textTransform: "none", color: "#2196f3"}}>
                      További hírek
                    </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(CreateTestDashboard);