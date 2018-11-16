import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class LandingPage extends Component {


    render() {
      return (
        <div>
                <Grid className="background-grid">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <img
                                src="https://media.licdn.com/dms/image/C5103AQG59FLepNf6uw/profile-displayphoto-shrink_200_200/0?e=1547078400&v=beta&t=_gjfovR_wEKEy3OHjsotS9daB9NzbSevN4kqjPhtWlk" 
                                alt="Profile Pic"
                                className="profile-img"
                            />
                            <div className="banner-text">
                                <h1 id="landingh1">Full Stack Developer</h1>
                                <hr />
                                <p>HTML/CSS | Bootstrap | React | React Native | NodeJS | Express | MongoDB</p>
                                <div className = "social-links">

                                    {/*LinkedIn */}
                                    <a href="https://linkedin.com/in/chrispatrick3/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>LinkedIn
                                    </a>
                                    {/*FCC */}
                                    <a href="https://www.freecodecamp.org/xchrispatrick" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-free-code-camp" aria-hidden="true"></i>freeCodeCamp
                                    </a>
                                    {/*Code Pen */}
                                    <a href="https://codepen.io/xchrispatrick/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-codepen" aria-hidden="true"></i>Codepen
                                    </a>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
      );
    }
  }
  
  
  export default LandingPage;