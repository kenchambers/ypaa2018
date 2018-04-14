import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import enableInlineVideo from 'iphone-inline-video';
import ScrollAnimation from 'react-animate-on-scroll';

class HomeComponent extends Component {
  classPropertyA = 'anything';
  style = {
    parallaxSpacing: {
      height: 350,
      backgroundColor: 'rgba(243, 196, 196, 0.22)'
    },
    socialMediaIconStyle: {
      height: '10%',
      width: '10%'
    },
    mainNavButtons: {
      width: '10px',
      color: 'pink',
      backgroundColor: 'green'
    }
  };
  componentDidMount() {
    this.startCountdownClock();
    let video = document.querySelector('video');

    enableInlineVideo(video);
    video.addEventListener('touchstart', function() {
      video.play();
    });
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
      <div>
        <Parallax strength={300}>
          <div>
            <div
              className="second-block-text"
              style={{
                height: 600
              }}>
              <div
                style={{
                  border: '1px solid #fffcbc',
                  margin: '10px',
                  padding: '4px',
                  display: 'block'
                }}>
                <div
                  style={{
                    display: 'inline-block',
                    width: '95%',
                    fontSize: '2em',
                    border: '1px solid #fffcbc',
                    margin: '10px'
                  }}>
                  <h1
                    style={{
                      position: 'absolute',
                      float: 'left',
                      top: '5%',
                      left: '50%',
                      transform: 'translate(-50%, -5%)'
                    }}>
                    ACCYPAA 47
                  </h1>
                  <img
                    style={{ width: '50%' }}
                    src={require('../assets/graphql.svg')}
                  />
                  <h4>Outright Mental Defectives</h4>
                </div>

                <h4>The Shrine</h4>
              </div>
            </div>
          </div>
          <Background className="custom-bg">
            <video
              playsinline
              loop
              muted
              autoPlay
              src={require('../assets/videos/testvideo.mp4')}
            />
          </Background>
        </Parallax>
        <ScrollAnimation animateIn="fadeIn">
          <div id="countdown-container" style={{ height: 300 }}>
            <Parallax>
              <h1>When?</h1>
              <h3>June 26th, 2019</h3>
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
            </Parallax>
          </div>
        </ScrollAnimation>

        <Parallax
          blur={{ min: -5, max: 5 }}
          bgImage={require('../assets/palmtrees.jpg')}
          strength={200}>
          <div
            style={{
              width: 'fit-content',
              height: 600
            }}
          />
        </Parallax>
        <ScrollAnimation animateIn="fadeIn">
          <div
            style={{
              height: 475
            }}>
            <div>
              <h1>Where?!?!?</h1>
              <h2>Shrine Auditorium</h2>
              <span>665 W Jefferson Blvd,</span>
              <br />
              <span>Los Angeles, CA 90007</span>

              <img
                style={{ marginTop: 20, width: 300 }}
                alt="where"
                src={require('../assets/map.png')}
              />
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Parallax
            blur={{ min: -5, max: 5 }}
            bgImage={require('../assets/club.jpg')}
            strength={200}>
            <div
              style={{
                width: 'fit-content',
                height: 600,
                color: 'white'
              }}>
              <h1>WHY?!</h1>

              <p>
                In 1973, the All California Young People in Alcoholics Anonymous
                Round-Up was established as an annual gathering in California to
                provide an opportunity for young AA's to come together and share
                their experience, strength, and hope.
              </p>
              <p>
                ACYPAA is visible evidence that large numbers of people are
                achieving a lasting and comfortable sobriety in Alcoholics
                Anonymous. AA's who attend an ACYPAA Round-Up return home better
                prepared to receive young alcoholics who come to AA seeking
                recovery.
              </p>
              <p>
                The ACYPAA Round-Up is held anywhere in California where young
                people's groups can demonstrate:
              </p>
              <p>
                <p>
                  1) the need for an activity like this to stimulate greater
                  involvement and participation by young people in their area;
                </p>

                <p>
                  2) the ability of their group to function responsibly within
                  the principles of Alcoholics Anonymous;
                </p>

                <p>
                  3) the ability of the group to host a Round-Up representative
                  of the diversity of California young people in Alcoholics
                  Anonymous.
                </p>
              </p>
            </div>
          </Parallax>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div style={{ height: 100 }}>
            <h1>Follow Us</h1>
            <div style={{ height: 100 }} className="container">
              <div className="row" style={{ margin: '5%' }}>
                <div
                  style={this.style.socialMediaIconStyle}
                  className="col col-centered">
                  <img
                    alt="social media icon"
                    src={require('../../src/assets/facebook.svg')}
                  />
                </div>
                <div
                  style={this.style.socialMediaIconStyle}
                  className="col col-centered">
                  <img
                    alt="social media icon"
                    src={require('../../src/assets/instagram.svg')}
                  />
                </div>
                <div
                  style={this.style.socialMediaIconStyle}
                  className="col col-centered">
                  <img
                    alt="social media icon"
                    src={require('../../src/assets/twitter.svg')}
                  />
                </div>
                <div
                  style={this.style.socialMediaIconStyle}
                  className="col col-centered">
                  <img
                    alt="social media icon"
                    src={require('../../src/assets/linkedin.svg')}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default HomeComponent;
