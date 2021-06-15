
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  }
}));
var quizTypes = [1, 2, 3, 4]
export default function Review({quiz}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{marginBottom:'50px'}}>
        Áttekintés
      </Typography>
      { quiz['modules'] !== undefined && quiz['modules'].length !== 0 ? (
        quiz['modules'].map((modul) => (
          <React.Fragment>
            <Typography variant="button" display="block" gutterBottom>
            &#10147; {modul['name']}
            </Typography>
            { modul['questions'] !== undefined ? (
              modul['questions'].map((question,index) => (
                <React.Fragment> 
                  <Divider/>
                  <Typography variant="subtitle2" display="block" style={{textIndent:"50px"}} gutterBottom>
                    {index+1}. Kérdés: {question['question']} ({question['points']} pont)
                  </Typography>
                  { quizTypes.includes(question['quizType'])?( 
                    question['answers'].map((answer, index) => (
                      <Typography variant="body2" style={{textIndent:"100px"}} display="block" gutterBottom>
                         &diams; {answer}  [{question['corrects'][index]}]
                      </Typography>
                    ))
                  ):(
                    question['answers'].map((answer, index) => (
                      <Typography variant="body2" display="block" style={{textIndent:"100px"}} gutterBottom>
                        &diams; {answer}  { question['corrects'][0] === index+1? (<span>[Helyes]</span>):(null)}
                      </Typography>
                  )))}
                </React.Fragment>
              ))):
              (
                <React.Fragment>
                  <Divider/>
                  <Typography variant="body2" style={{textIndent:"50px"}} display="block" gutterBottom>
                    Nincsenek hozzáadva kérdések a modulhoz.
                  </Typography>
                </React.Fragment>
              )
            }
          </React.Fragment>
      ))):(
          <Typography variant="body2" display="block" gutterBottom>
                  Nincsenek hozzáadva modulok a feladatsorhoz.
          </Typography>
      )
    }
    </React.Fragment>
  );
}