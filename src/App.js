import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import { withStyles, createMuiTheme } from 'material-ui/styles';
import AppViews from './app-views';
import MobileMenuHeader from './components/menu/mobile-menu-header';
import ScrollAnimation from 'react-animate-on-scroll';
import { styles, MenuButton } from './components/menu/material-ui-custom-menu';
import BaseComponent from './base-component';

class App extends BaseComponent {
  state = {
    openMenu: false,
    showMenu: false,
    opacity: null
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
    const { classes } = this.props;

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
            <div>
              <div
                style={{
                  width: '100%',
                  height: '5%',
                  position: 'fixed',
                  zIndex: 9
                }}
              />
              <div
                style={{
                  position: 'fixed',
                  zIndex: 10
                }}>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <Link to="/" style={{ textDecoration: 'none' }}>
                        <MenuButton text="home" classes={classes} />
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="/program" style={{ textDecoration: 'none' }}>
                        <MenuButton text="program" classes={classes} />
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="/hotel" style={{ textDecoration: 'none' }}>
                        <MenuButton text="hotel" classes={classes} />
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="/register" style={{ textDecoration: 'none' }}>
                        <MenuButton text="register" classes={classes} />
                      </Link>
                    </div>
                    <div className="col">
                      <Link
                        to="/volunteer"
                        style={{ textDecoration: 'none', outline: 'none' }}>
                        <MenuButton text="volunteer" classes={classes} />
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <MenuButton text="contact" classes={classes} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div id="main-scroll-container">
            <Route exact path="/" component={AppViews.Home} />
            <Route exact path="/program" component={AppViews.Program} />
            <Route exact path="/hotel" component={AppViews.Hotel} />
            <Route exact path="/register" component={AppViews.Register} />
            <Route exact path="/volunteer" component={AppViews.Volunteer} />
            <Route exact path="/contact" component={AppViews.Contact} />
          </div>
        </div>
      </Router>
    );
  }
}
export default withStyles(styles)(App);
