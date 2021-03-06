import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import Toolbar from '@material-ui/core/Toolbar/index';
import Typography from '@material-ui/core/Typography/index';
import IconButton from '@material-ui/core/IconButton/index';
import Tooltip from '@material-ui/core/Tooltip/index';
import DeleteIcon from '@material-ui/icons/Delete';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import SearchBar from './SearchBar';

const EnhancedTableToolbar = props => {
  const { numSelected, classes, title, handleDelete, searchValue, handleChange } = props; 

  return (

    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            {title}
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <SearchBar value={searchValue} onChange={handleChange} />
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};


const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
    display: 'flex',
    justifyContent: 'space-between'
    //flexWrap: 'wrap',
  },
  
  highlight:
     theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
      },
    

  spacer: {
    width: 20
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});



EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

export default withStyles(toolbarStyles)(EnhancedTableToolbar);
