import React, { Component } from 'react';

class DoubleBorderContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const defaultBorderColor = this.props.borderColor
      ? this.props.borderColor
      : 'rgb(179, 99, 189)';
    const defaultBackgroundColor = this.props.backgroundColor
      ? this.props.backgroundColor
      : '';
    return (
      <div className="container">
        <div
          className="second-block-text"
          style={{
            height: 315,
            width: '100%',
            marginTop: '2em',
            paddingTop: '5em'
          }}>
          <div
            style={{
              border: `1px solid ${defaultBorderColor}`,
              backgroundColor: `${defaultBackgroundColor}`,
              padding: '4px',
              display: 'block',
              WebkitBoxShadow: '2px 0px 59px -6px rgba(0,0,0,0.75)',
              MozBoxShadow: '2px 0px 59px -6px rgba(0,0,0,0.75)',
              boxShadow: '2px 0px 59px -6px rgba(0,0,0,0.75)'
            }}>
            <div
              style={{
                display: 'inline-block',
                width: '95%',
                textAlign: 'center'
              }}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DoubleBorderContainer;
