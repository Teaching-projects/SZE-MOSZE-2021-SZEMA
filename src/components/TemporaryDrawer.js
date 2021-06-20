import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Dehaze } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "firebase/auth";
import firebase from "firebase/app";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
      textDecoration: 'none',
      color: 'black',
      "&hover, &:focus":{
        textDecoration: 'underline',
      }
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const handleLogout = () => {
    firebase.auth().signOut();
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <Link to="news" className={classes.link}>
            <ListItem>
                    <ListItemIcon>
                        <AnnouncementIcon />
                    </ListItemIcon>
                    <ListItemText>Hírek</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link to="questionbase" className={classes.link}>
            <ListItem>
                <ListItemIcon>
                    <QuestionAnswerIcon />
                </ListItemIcon>
                <ListItemText>Kérdésbázis</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link to="createtest" className={classes.link}>
            <ListItem>
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText>Feladatsor készítés</ListItemText>
            </ListItem>
          </Link>
          <Divider />
          <Link to="#" onClick={handleLogout} className={classes.link}>
            <ListItem>
                <ListItemIcon>
                    <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText>Kijelentkezés</ListItemText>
            </ListItem>
          </Link>
          <Divider />
      </List>
    </div>
  );
  return (
    <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)} color="inherit"><Dehaze /></Button>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
        </Drawer>
    </React.Fragment>
  );
}