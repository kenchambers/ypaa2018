import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
// import enableInlineVideo from 'iphone-inline-video';
import ScrollAnimation from 'react-animate-on-scroll';
import DoubleBorderContainer from '../../components/containers/double-border-dropshadow-transparent';
import Button from 'material-ui/Button';

class HomeComponent extends Component {
  classPropertyA = 'anything';
  style = {
    socialMediaIconStyle: {
      height: '20vw',
      width: '20vw'
    },

    buttonStyle: {
      cursor: 'pointer',
      width: '70vw',
      color: '#d7f4ff',
      padding: '5px',
      backgroundColor: '#333434',
      fontFamily: 'san-serif',
      textDecoration: 'none !important',
      borderRadius: '30px',
      WebkitBoxShadow: '2px 0px 59px 0px rgba(0,0,0,0.75)',
      MozBoxShadow: '2px 0px 59px 0px rgba(0,0,0,0.75)',
      boxShadow: '2px 0px 59px 0px rgba(0,0,0,0.75)'
    },
    rightIcon: {
      marginLeft: 10
    }
  };
  componentDidMount() {
    this.startCountdownClock();
    // let video = document.querySelector('video');
    //
    // enableInlineVideo(video);
    // video.addEventListener('touchstart', function() {
    //   video.play();
    // });
  }

  startCountdownClock = () => {
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }

    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector('.days');
      var hoursSpan = clock.querySelector('.hours');
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');

      function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);
  };
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Parallax blur={200} strength={300}>
          <Background style={{ height: '90vh' }} className="custom-bg">
            <div>
              <img
                style={{
                  minWidth: '90vw',
                  height: '90vh',
                  margin: '3.4em',
                  overflow: 'hidden',
                  WebkitBoxShadow: '2px 0px 59px 0px rgba(0,0,0,0.75)',
                  MozBoxShadow: '2px 0px 59px 0px rgba(0,0,0,0.75)',
                  boxShadow: '2px 0px 59px 0px rgba(0,0,0,0.75)'
                }}
                src={require('../../assets/bebe.jpg')}
              />
            </div>
          </Background>

          <div className="container">
            <div className="row" style={{ height: '90vh', marginTop: '4em' }}>
              <DoubleBorderContainer>
                <div>
                  <h1
                    style={{
                      position: 'relative'
                    }}>
                    <span
                      style={{
                        color: 'rgb(179, 99, 189)',
                        fontSize: '10vw'
                      }}>
                      ACCYPAA 47
                    </span>
                  </h1>
                  <img alt="logo" src={require('../../assets/graphql.svg')} />
                  <div className="home-header">
                    <h4>Live and Die in LA</h4>
                  </div>
                </div>
              </DoubleBorderContainer>
            </div>
            <div className="row" style={{ height: '65vw' }}>
              <div className="container" style={{}}>
                <div>
                  <ScrollAnimation animateIn="fadeIn">
                    <img
                      style={{ width: '100%', marginTop: '10vh' }}
                      src={require('../../assets/ypalogo2.svg')}
                    />
                  </ScrollAnimation>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row" style={{ height: '120vh' }}>
                <ScrollAnimation
                  animateIn="fadeIn"
                  style={{ display: 'inline-block' }}>
                  <DoubleBorderContainer
                    backgroundColor="rgb(64, 50, 60)"
                    borderColor="rgb(64, 50, 60)">
                    <div
                      className="container"
                      style={{
                        color: '#d7f4ff',
                        fontSize: '1.5vw',
                        padding: 15
                      }}>
                      <div className="row">
                        <div className="col-sm" style={{ padding: 'inherit' }}>
                          <div style={{ width: '100%' }}>
                            <img
                              style={{ maxWidth: '100%', height: 'auto' }}
                              src={require('../../assets/random1.jpg')}
                            />
                          </div>
                        </div>
                        <div className="col-sm">
                          <h1 style={{ padding: '.5em' }}>
                            Limitless Expansion
                          </h1>
                          <br />
                          <p
                            style={{
                              paddingLeft: '.5em',
                              paddingRight: '.5em',
                              fontSize: '3.5vw'
                            }}>
                            "A.A. is not a plan for recovery that can be
                            finished and done with. It is a way of life, and the
                            challenge contained in its principles is great
                            enough to keep any human being striving for as long
                            as he lives. We do not, cannot, out-grow this plan.
                            As arrested alcoholics, we must have a program for
                            living that allows for limitless expansion."
                          </p>
                          <br />
                          <span style={{ display: 'block', padding: '1em' }}>
                            ~Page 275, “The Keys of the Kingdom”, Alcoholics
                            Anonymous, 4th Edition
                          </span>
                        </div>
                      </div>
                    </div>
                  </DoubleBorderContainer>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </Parallax>
        <div className="container">
          <div
            className="row"
            style={{
              display: 'block',
              textAlign: 'center'
            }}>
            <div>
              <Button
                style={this.style.buttonStyle}
                variant="raised"
                color="primary">
                <h2>Big Book</h2>
              </Button>
            </div>
          </div>
          <div
            className="row"
            style={{
              height: '30vh',
              marginTop: '2em',
              display: 'block',
              textAlign: 'center'
            }}>
            <ScrollAnimation animateIn="fadeIn">
              <div
                className="container"
                style={{
                  display: 'block',
                  color: 'rgb(215, 244, 255)'
                }}>
                <h1>April 11th, 2019</h1>
                <h2>Thurs,Fri,Sat,Sunday</h2>

                <div id="countdown-container" style={{ height: '20vh' }}>
                  <div id="clockdiv">
                    <div>
                      <span className="days" />
                      <div className="smalltext">Days</div>
                    </div>
                    <div>
                      <span className="hours" />
                      <div className="smalltext">Hours</div>
                    </div>
                    <div>
                      <span className="minutes" />
                      <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                      <span className="seconds" />
                      <div className="smalltext">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <Parallax blur={200} strength={300}>
          <Background style={{ height: '90vh' }} className="custom-bg">
            <div>
              <img
                style={{
                  minWidth: '90vw',
                  height: '90vh',
                  margin: '3.4em',
                  overflow: 'hidden',
                  WebkitBoxShadow: '2px 0px 59px 0px rgba(0,0,0,0.75)',
                  MozBoxShadow: '2px 0px 59px 0px rgba(0,0,0,0.75)',
                  boxShadow: '2px 0px 59px 0px rgba(0,0,0,0.75)',
                  WebkitFilter: 'blur(5px)',
                  filter: 'blur(5px)'
                }}
                src={require('../../assets/hotel1.jpg')}
              />
            </div>
          </Background>

          <div className="container">
            <div className="row" style={{ height: '90vh', marginTop: '20vh' }}>
              <div style={{ width: '100%' }}>
                <ScrollAnimation animateIn="fadeIn">
                  <div className="container">
                    <div className="row">
                      <DoubleBorderContainer borderColor="white">
                        <div>
                          <div className="col-md" style={{ padding: '2em' }}>
                            <h2>LAX Hilton</h2>
                            <span>5711 W Century Blvd‎</span>
                            <br />
                            <span>Los Angeles, CA 90045</span>
                          </div>
                          <div className="col-md">
                            <img
                              style={{ width: '65vw', margin: '1em' }}
                              alt="where"
                              src={require('../../assets/hilton2.jpg')}
                            />
                          </div>
                        </div>
                      </DoubleBorderContainer>
                    </div>
                    <div style={{ marginTop: '10em' }}>
                      <Button
                        style={this.style.buttonStyle}
                        variant="raised"
                        color="primary">
                        <h2>Book Hotel</h2>
                      </Button>
                    </div>
                    <div style={{ marginTop: '1em' }}>
                      <Button
                        style={this.style.buttonStyle}
                        variant="raised"
                        color="primary">
                        <h2>get directions</h2>
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <div className="row" style={{ height: '90vh' }}>
              <ScrollAnimation
                animateIn="fadeIn"
                style={{ display: 'inline-block' }}>
                <DoubleBorderContainer
                  backgroundColor="rgb(64, 50, 60)"
                  borderColor="rgb(64, 50, 60)">
                  <div
                    className="container"
                    style={{
                      color: '#d7f4ff',
                      fontSize: '1.5vw',
                      padding: 15
                    }}>
                    <div className="row">
                      <div className="col-sm" style={{ padding: 'inherit' }}>
                        <div style={{ width: '100%' }}>
                          <div className="container">
                            <div className="row">
                              <div style={{ padding: 0 }} className="col">
                                <img
                                  style={{ maxWidth: '100%', height: 'auto' }}
                                  src={require('../../assets/lights1.jpg')}
                                />
                              </div>
                              <div style={{ padding: 0 }} className="col">
                                <img
                                  style={{ maxWidth: '100%', height: 'auto' }}
                                  src={require('../../assets/lights2.jpg')}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <h1 style={{ padding: '.5em' }}>Pre-Register</h1>
                        <br />
                        <p
                          style={{
                            paddingLeft: '.5em',
                            paddingRight: '.5em',
                            fontSize: '3.5vw'
                          }}>
                          ACCYPAA is a self-supporting A.A. event. Therefore,
                          each attendee must register for the conference.
                          Hosting a large-scale A.A. event takes money, and the
                          host committee sets its registration fees at the rate
                          they need in order to run a fiscally responsible
                          event. A scholarship fund exists in order to help pay
                          the registration fees for attendees who cannot afford
                          the full registration amount. We want everyone to join
                          in the celebration, so please don’t let the cost of
                          the registration fee keep you from attending ACYPAA.
                          Questions about registration or scholarships? Email:
                          registration@icyhost.org
                        </p>
                        <br />
                        <div style={{ display: 'block', padding: '1em' }}>
                          <Button
                            style={this.style.buttonStyle}
                            variant="raised"
                            color="primary">
                            <h2>Register</h2>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DoubleBorderContainer>
              </ScrollAnimation>
            </div>
          </div>
        </Parallax>

        <div
          className="container"
          style={{ height: '62vh', marginTop: '20vw' }}>
          <div className="row">
            <DoubleBorderContainer
              backgroundColor="rgb(64, 50, 60)"
              borderColor="rgb(64, 50, 60)">
              <div
                className="container"
                style={{
                  color: '#d7f4ff',
                  fontSize: '1.5vw',
                  padding: 15
                }}>
                <div className="row">
                  <div className="col-sm" style={{ padding: 'inherit' }}>
                    <div style={{ width: '100%' }}>
                      <div className="container">
                        <div className="row">
                          <div style={{ padding: 0 }} className="col">
                            <img
                              style={{ maxWidth: '100%', height: 'auto' }}
                              src={require('../../assets/lights1.jpg')}
                            />
                          </div>
                          <div style={{ padding: 0 }} className="col">
                            <img
                              style={{ maxWidth: '100%', height: 'auto' }}
                              src={require('../../assets/lights2.jpg')}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <h1 style={{ padding: '.5em' }}>Limitless Expansion</h1>
                    <br />
                    <p
                      style={{
                        paddingLeft: '.5em',
                        paddingRight: '.5em',
                        fontSize: '3.5vw'
                      }}>
                      "A.A. is not a plan for recovery that can be finished and
                      done with. It is a way of life, and the challenge
                      contained in its principles is great enough to keep any
                      human being striving for as long as he lives. We do not,
                      cannot, out-grow this plan. As arrested alcoholics, we
                      must have a program for living that allows for limitless
                      expansion."
                    </p>
                    <br />
                    <span style={{ display: 'block', padding: '1em' }}>
                      ~Page 275, “The Keys of the Kingdom”, Alcoholics
                      Anonymous, 4th Edition
                    </span>
                  </div>
                </div>
              </div>
            </DoubleBorderContainer>
          </div>
        </div>

        <div className="container">
          <div
            className="row"
            style={{
              height: '20vh',
              marginTop: '10em',
              display: 'block',
              textAlign: 'center'
            }}>
            <div>
              <div>
                <h1>Follow Us</h1>
                <div className="container">
                  <div className="row" style={{ margin: '2em' }}>
                    <div
                      style={this.style.socialMediaIconStyle}
                      className="col col-centered">
                      <img
                        alt="social media icon"
                        src={require('../../../src/assets/instagram.svg')}
                      />
                    </div>
                    <div
                      style={this.style.socialMediaIconStyle}
                      className="col col-centered">
                      <img
                        alt="social media icon"
                        src={require('../../../src/assets/twitter.svg')}
                      />
                    </div>
                    <div
                      style={this.style.socialMediaIconStyle}
                      className="col col-centered">
                      <img
                        alt="social media icon"
                        src={require('../../../src/assets/linkedin.svg')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: '#333434', width: '100%', height: 300 }}
        />
      </div>
    );
  }
}

export default HomeComponent;
