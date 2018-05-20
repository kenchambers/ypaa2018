import React, { Component } from 'react';
import HomeComponent from './views/home/home';
import ProgramComponent from './views/program/program';
import HotelComponent from './views/hotel/hotel';
import RegisterComponent from './views/register/register';
import VolunteerComponent from './views/volunteer/volunteer';
import ContactComponent from './views/contact/contact';

export default class AppViews extends Component {
  static Home = () => (
    <div>
      <HomeComponent />
    </div>
  );
  static Program = () => (
    <div>
      <ProgramComponent />
    </div>
  );
  static Hotel = () => (
    <div>
      <HotelComponent />
    </div>
  );
  static Register = () => (
    <div>
      <RegisterComponent />
    </div>
  );

  static Volunteer = () => (
    <div>
      <VolunteerComponent />
    </div>
  );
  static Contact = () => (
    <div>
      <ContactComponent />
    </div>
  );
}
