import React, { Component, createContext } from 'react';
const JediContext = createContext();
export const ThemeContext = createContext('light');
export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeProvider extends Component {
  state = { theme: 'light' };
  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light'
    }));
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <button onClick={this.toggleTheme}>toggle theme</button>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export class JediProvider extends Component {
  state = {
    name: 'Vader',
    side: false
  };
  render() {
    return (
      <JediContext.Provider
        value={{
          state: this.state,
          turnGood: () =>
            this.setState({
              side: !this.state.side
            })
        }}>
        <JediContext.Consumer>{this.props.children}</JediContext.Consumer>
      </JediContext.Provider>
    );
  }
}
export default class BaseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      buttonPress: () => {
        console.log('---------');
        console.log('balls');
        console.log('---------');
      }
    };
  }

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light'
    }));
  };
}
