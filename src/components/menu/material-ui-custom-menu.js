import purple from 'material-ui/colors/purple';
import classNames from 'classnames';
import React from 'react';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';

export const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%'
  },
  image: {
    position: 'relative',
    height: 50,
    width: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.1
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
});

export const MenuButton = ({ text, classes }) => (
  <div style={{ width: 100 }}>
    <ButtonBase
      focusRipple
      key={1}
      className={classes.image}
      variant="raised"
      color="primary">
      <span style={{ width: 100 }} className={classes.imageSrc} />
      <span style={{ width: 100 }} className={classes.imageBackdrop} />
      <span style={{ width: 100 }} className={classes.imageButton}>
        <Typography
          component="span"
          variant="subheading"
          color="inherit"
          className={classes.imageTitle}>
          <div>{text}</div>
          <span className={classes.imageMarked} />
        </Typography>
      </span>
    </ButtonBase>
  </div>
);
