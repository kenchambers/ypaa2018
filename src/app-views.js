import React, { Component } from 'react';
import HomeComponent from './views/home';
import ContactComponent from './views/contact';
import AboutComponent from './views/about';
import InfoComponent from './views/info';

export default class AppViews extends Component {
  static Home = () => (
    <div>
      <HomeComponent />
    </div>
  );
  static Contact = () => (
    <div>
      <ContactComponent />
    </div>
  );
  static About = () => (
    <div>
      <AboutComponent />
    </div>
  );
  static Info = () => (
    <div>
      <InfoComponent />
    </div>
  );
}
