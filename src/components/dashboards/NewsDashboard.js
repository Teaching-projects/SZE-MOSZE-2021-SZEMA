import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'firebase/firestore';
import React from "react";
import { db } from '../../config/base';
import AddNewsDialog from '../dialogs/AddNewsDialog';
import DeleteNewsDialog from '../dialogs/DeleteNewsDialog';
import UpdateNewsDialog from "../dialogs/UpdateNewsDialog";
import SignedInStarterLinks from '../SignedInStarterLinks';


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
});

/**
 * Az osztály segítségével a hírek oldalon lévő komponensek kezelhetők.
 * 
 */

class NewsDashboard extends React.Component {

  getCards = () => {
    db.collection('news')
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
/** @param {Props} props */


  constructor(props) {
    super(props);
    this.state = {
      cards_array : [],
    };
  }
  componentDidMount(){
    this.getCards();
  }
  render(){
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar style={{ background: '#2196f3'}} position="relative">
          <Toolbar>
            <SignedInStarterLinks />
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom data-testid="typo-graphy">
                  Hírek és újdonságok
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={1} justify="center">
                  <Grid item>
                   <AddNewsDialog /> 
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
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
                    <CardActions style={{ justifyContent:"centers", display:"table"}}> 
                    <Grid container spacing={2} justify="center"> 
                      <UpdateNewsDialog toUpdate={card} />
                      <DeleteNewsDialog toUpdate={card}/>
                    </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            SZEMA
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Széchenyi István Egyetem
          </Typography>
          
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}
export default withStyles(useStyles)(NewsDashboard);