/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import PropTypes from 'prop-types';
import makeStyles  from '@material-ui/styles/makeStyles';
import Sidebar from '../Components/Sidebar';



const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    background: '#E5E5E5',
  },
  content: {
    marginTop: '80px',
    background: '#E5E5E5',
  },
  container: {
    width: '80%',
  },
  sibebar: {
    width: '20%',
    background: '#E5E5E5',
    minHeight: '100vh',
    // margin: 'auto',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
}));

const Main = (props) => {
  const { children } = props;
  const classes = useStyles();
  

  

  
  return (
    <div className={classes.root}>
        <Sidebar />
    </div>
  );
};

Main.propTypes = {
  // children: PropTypes.node,
};

export default Main;
