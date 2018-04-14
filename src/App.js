import React, { createContext, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import AppViews from './app-views';
import MobileMenuHeader from './components/mobile-menu-header';

import BaseComponent from './base-component';
const styles = {
  dark: {
    backgroundColor: 'black',
    color: 'white'
  },
  light: {
    backgroundColor: 'white',
    color: 'black'
  }
};
class App extends BaseComponent {
  state = {
    openMenu: false,
    showMenu: false
  };
  addMobileMenu = () => {
    if (window.innerWidth < 500) {
      this.setState({
        showMenu: !this.state.showMenu
      });
    }
  };

  toggle = e => {
    // e.preventDefault();
    this.setState({
      openMenu: !this.state.openMenu
    });
  };

  componentDidMount() {
    this.addMobileMenu();
  }
  render() {
    return (
      <Router>
        <div className="App">
          {this.state.showMenu ? (
            <MobileMenuHeader
              toggle={this.toggle}
              showMenu={this.state.showMenu}
              openMenu={this.state.openMenu}
            />
          ) : (
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Link to="/">
                <Button variant="raised" color="primary">
                  HOME
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="raised" color="primary">
                  ABOUT
                </Button>
              </Link>
              <Link to="/info">
                <Button variant="raised" color="primary">
                  INFO
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="raised" color="primary">
                  Contact
                </Button>
              </Link>
            </header>
          )}
          <div>
            <Route exact path="/" component={AppViews.Home} />
            <Route exact path="/about" component={AppViews.About} />
            <Route exact path="/info" component={AppViews.Info} />
            <Route exact path="/contact" component={AppViews.Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
