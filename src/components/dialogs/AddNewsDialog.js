import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import 'firebase/firestore';
import SaveDialog from './SaveDialog';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function useForceUpdate(){
  const [value, setValue] = useState(0); 
  return () => setValue(value => value + 1); 
}

export default function AddNewsDialog() {

  const forceUpdate = useForceUpdate();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) =>{
    setValue(event.target.value);
  };

  return (
    <div>
      <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Ezzel a gombbal hozzáadható egy új hír.</h1>}>
      <Button variant="contained" color="primary" style={{ background: '#2196f3'}} onClick={handleClickOpen}>
        Új hír létrehozása
      </Button>
      </Tooltip>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Új hír létrehozása
            </Typography>
            <SaveDialog toSave={value} Type="save"/>
          </Toolbar>
        </AppBar>
            <div style={{display: "inline-flex", justifyContent: "center",alignContent:"center", margin:"auto", width:"80%", height:"400px", paddingTop:"20px"}}>
                <textarea 
                    placeholder="Tartalom"
                    style={{
                        margin:"auto",
                        width:"100%",
                        height:"100%",
                        padding:"12px,20px", 
                        boxSizing:"border-box",
                        borderRadius:"4px",
                        backgroundColor:"azure",
                        fontSize:"32px",
                        resize:"none",
                    }}
                    onChange={handleChange}
                />
            </div>
      </Dialog>
    </div>
  );
}
