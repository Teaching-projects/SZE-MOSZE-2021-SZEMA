import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import "firebase/auth";
import { makeStyles } from '@material-ui/core/styles';
import 'firebase/firestore';
import {db} from '../../config/base'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Anton'
    },
    buttonTitle: {
      fontFamily: 'Anton'
    }
}));
const getCurrentDate = (separator='-') =>{
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`
  };

export default function SaveDialog({toSave, Type, id}) {
const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
    console.log(id);
    console.log(toSave);
    console.log(Type);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => { 
    db.collection("news")
        .add({
            date: getCurrentDate(),
            message: toSave,
            profileImage:`https://firebasestorage.googleapis.com/v0/b/szema-ac882.
                      appspot.com/o/management.png?alt=media&token=1ded933d-08
                      ca-40f2-8180-bbcd7dffb767`,
            user: "Admin"
        })
        .catch( error => console.log(error));
    setOpen(false);
  };
  const handleUpdate = () => { 
    db.collection("news")
        .doc(id)
        .update({message:toSave})
        .catch( error => console.log(error));
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.buttonTitle} color="inherit" onClick={handleClickOpen}>
        Mentés
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Biztosan szeretné menteni a változtatásokat?"}</DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="inherit">
            Mégsem
          </Button>
          <Button onClick={Type == "save"? handleSave : handleUpdate} color="inherit" autoFocus>
            Mentés
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}