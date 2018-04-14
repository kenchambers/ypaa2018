import React from 'react';

import Drawer from 'material-ui/Drawer';
import Menu, { MenuItem } from 'material-ui/Menu';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import Icon from 'material-ui/Icon';
import purple from 'material-ui/colors/purple';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

const buttonStyle = {
  width: '100%',
  margin: '5px',
  padding: '5px',
  backgroundColor: '#261933'
};
const rowStyle = {};
const linkStyle = {
  width: '100%'
};

const SwipeMenu = ({ toggle, openMenu }) => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <SwipeableDrawer
          anchor="top"
          open={openMenu}
          onClose={toggle}
          onOpen={toggle}>
          <div tabIndex={0} role="button" onClick={toggle} onKeyDown={toggle}>
            <div style={{ backgroundColor: 'black', height: 420 }}>
              <div style={rowStyle} className="row">
                <Link to="/" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised" color="primary">
                    HOME
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/about" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised" color="primary">
                    ABOUT
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/info" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised" color="primary">
                    INFO
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/contact" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised" color="primary">
                    Docs
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/contact" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised" color="primary">
                    Bidding
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/contact" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised" color="primary">
                    Advisory Council
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/contact" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised" color="primary">
                    Archives
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/contact" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised" color="primary">
                    Store
                  </Button>
                </Link>
              </div>
              <div style={rowStyle} className="row">
                <Link to="/contact" style={linkStyle}>
                  <Button style={buttonStyle} variant="raised" color="primary">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </SwipeableDrawer>
      </MuiThemeProvider>
    </div>
  );
};

const MobileMenuHeader = ({ openMenu, showMenu, toggle }) => {
  const navButtonStyle = {
    margin: 12
  };
  const styles = {
    root: {
      flexGrow: 1
    },
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  };
  return (
    <header>
      <div>
        <AppBar
          style={{
            backgroundColor: '#30253b',
            color: '#ffbcbc'
          }}
          position="static">
          <Toolbar>
            <IconButton
              style={styles.menuButton}
              color="inherit"
              onClick={toggle}
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.flex}>
              XLVII
            </Typography>
            <Button color="inherit">
              <InsertEmoticon />
            </Button>
          </Toolbar>
        </AppBar>
      </div>

      <SwipeMenu toggle={toggle} openMenu={openMenu} />
    </header>
  );
};

export default MobileMenuHeader;
