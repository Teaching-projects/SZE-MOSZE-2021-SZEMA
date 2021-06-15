import React, { useState, useEffect} from "react";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignedInStarterLinks from '../SignedInStarterLinks'
import OptionsForm from '../testmaker/OptionsForm';
import Review from '../testmaker/Review';
import DetailsForm from '../testmaker/DetailsForm';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import 'firebase/firestore'
import {db} from '../../config/base'
import { useComponentDidMount } from '../utility';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const steps = ['Opciók', 'Részletek', 'Áttekintés'];
export default function CreateTestDashboard(){
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [quizzes, setQuizzes] = React.useState([]);
  const [questionBase, setQuestionBase] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [state, setState] = useState({ quizName: "", selectedQuiz: "", usingMode: "template" ,questions: [], group: []});
  const [theQuiz,setTheQuiz] = useState({quizName: "", group: [], modules: [{name:"Test", questions: [{question: 'elso test kerdes', quizType: 1, points: 2, answers: ["elso2","masodik2","harmadik2"], corrects:["true","false","true"]},
                                                                                                      {question: 'elso test kerdes', quizType: 0, points: 2, answers: ["elso","masodik","harmadik"], corrects:[1]}], }]})
  const handleProps = event => {
      const { name, value } = event.target;
      setState(prevState => ({
          ...prevState,
          [name]: value
      }));
  };
  /*const getQuizzes = async() => {
    db.collection('QuizFolder')
    .get()
    .then( snapshot => {
      const data_from_web = []
      snapshot.forEach(doc => {
        const data = doc.data()
        data_from_web.push({...data,id:doc.id})
      })
      setQuizzes(data_from_web)
      console.log(data_from_web)
    })
    .catch( error => console.log(error))
  }*/

  /*const getUsers = () => {
    db.collection('users')
      .get()
      .then( snapshot => {
        const data_from_web = []
        snapshot.forEach(doc => {
          const data = doc.data()
          data_from_web.push({...data,id:doc.id})
        })
        setUsers(data_from_web)
      })
      .catch( error => console.log(error))
  }*/
  useEffect(() => {
    /*getUsers();*/
    /*getQuizzes().then(()=>{
      console.log(quizzes);
    })*/
  },[])
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <OptionsForm state={state} handleProps={handleProps} quizzes={quizzes}/>;
      case 1:
        return <DetailsForm state={state} setTheQuiz={setTheQuiz} quiz={theQuiz} handleProps={handleProps} quizzes={quizzes} users={users}/>;
      case 2:
        return <Review quiz={theQuiz}/>;
      default:
        throw new Error('Unknown step');
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar  style={{ background: '#2196f3'}} position="relative">
        <Toolbar>
          <SignedInStarterLinks />
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
      <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Feladatsor készítés
          </Typography>
          <Stepper  activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Sikeres művelet!
                </Typography>
                <Typography variant="subtitle1">
                  Az végrehajtott módosítások mostmár elérhetőek a SZEMA mobilapplikációban is.
                </Typography>
                <Button className={classes.button} style={{ background: '#2196f3'}} variant="contained" color="primary" href="/">Vissza a kezdőlapra</Button>
                <Button className={classes.button} style={{ background: '#2196f3'}} variant="contained" color="primary" href="createtest">Új teszt</Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Vissza
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    style={{ background: '#2196f3'}}
                  >
                    {activeStep === steps.length - 1 ? 'Befejezés' : 'Következő'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          SZEMA
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Széchenyi István Egyetem
        </Typography>
      </footer>
    </React.Fragment>
  );
}