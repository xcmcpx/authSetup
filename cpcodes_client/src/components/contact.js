import React, { Component } from 'react';
import {Grid, List} from 'semantic-ui-react';


class Contact extends Component {


    render() {
      return (
        <div>
                <Grid id="contact-grid" className="contact-grid">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <h2>Chris Patrick</h2>
                            <img 
                                src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                                alt="avatar"
                                style={{height: '250px'}}
                            />        
                            <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}> Please don't hesitate to reach out if you 
                            or your business needs assistance with anything code. I am currently 
                            working to build my resume and portfolio, and I appreciate your understanding
                            for faulty business methods in the mean time.</p>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <h2>Contact Me</h2>
                            <hr />
                            <List>
                                <List.Item style={{fontSize: "25px", fontFamily: "Anton"}}>
                                    <i className="fas fa-phone-volume" aria-hidden = "true" /> 
                                    (404) - 510 - 2678
                                </List.Item>
                                <List.Item style={{fontSize: "25px", fontFamily: "Anton"}}>
                                    <i className="far fa-envelope" aria-hidden = "true" />
                                    cpat3@live.com
                                </List.Item>
                                <List.Item style={{fontSize: "25px", fontFamily: "Anton"}}>
                                    <i className="fab fa-linkedin" aria-hidden = "true" />
                                    <span class="link"><a href="https://www.linkedin.com/in/chrispatrick3/" rel="noopener noreferrer" target="_blank">
                                    LinkedIn
                                    </a></span>  
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
      );
    }
  }
  
  
  export default Contact;