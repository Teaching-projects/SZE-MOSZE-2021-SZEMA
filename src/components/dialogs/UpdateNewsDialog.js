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
import EditIcon from '@material-ui/icons/Edit';

import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'inherited',
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
var content = ""
export default function UpdateNewsDialog({toUpdate}) {

  const forceUpdate = useForceUpdate();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
    content = toUpdate["message"];
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) =>{
    content = event.target.value;
    setValue(event.target.value);
    
    console.log(event.target.value);
  };

  return (
    <div>
      <Tooltip title={<h1 style={{lineHeight:"1.5rem", fontSize:"15px", color: "lightblue" }}>Hír szerkesztése.</h1>}>
      <Button size="small" color ="primary" onClick={handleClickOpen}>
        <EditIcon style={{ color: '#2196f3'}}/>
      </Button>
      </Tooltip>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Hír szerkesztése
            </Typography>
            <SaveDialog toSave={value} Type="update" id={toUpdate["id"]}/>
          </Toolbar>
        </AppBar>
            <div style={{display: "inline-flex", justifyContent: "center",alignContent:"center", margin:"auto", width:"80%", height:"400px", paddingTop:"20px"}}>
                <textarea 
                    placeholder="Tartalom"
                    value={content}
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
