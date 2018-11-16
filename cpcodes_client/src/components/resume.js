import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {


    render() {
      return (
        <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={5}>
                        <div style={{textAlign: "center"}}>
                            <img 
                                id="profile-pic"
                                className="ui medium circular image"
                                src="https://media.licdn.com/dms/image/C5103AQG59FLepNf6uw/profile-displayphoto-shrink_200_200/0?e=1547683200&v=beta&t=7Iopwr8Jpr4ILhYh-RhdUuhVDGHtcZjj0QQQcZwtw5c"
                                alt = "resume-pic"
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Chris Patrick</h2>
                        <h4 st yle={{color: 'grey'}}>Web Developer</h4>
                        <hr style={{borderTop:'3px solid #e22947', width: '50%'}} />
                        <p>I seek a career in Web Development or Cyber Security. My education
                            gave me a foundation for problem solving and coding practices, and I am
                            passionately working to build a career on these principles.</p>
                            <h5>Address</h5>
                            <p>340 Silver Creek Run, Lawrenceville, Ga 30044</p>
                            <h5>Phone</h5>
                            <p>(404)-510-2678</p>
                            <h5>Email</h5>
                            <p>cpat3@live.com</p>
                            <h5>LinkedIn</h5>
                            <p>https://www.linkedin.com/in/chrispatrick3/</p>
                            <hr style={{borderTop:'3px solid #e22947', width: '50%'}} />
                        </Grid.Column>
                        <Grid.Column width={11} className="resume-right-col">
                            <h2>Education</h2>
                            <Education 
                            startYear={2015}
                            endYear={2018}
                            schoolName="University of North Georgia"
                            schoolDesc="I have graduated with a Bachelor of Science in Computer Science and
                            a minor in Arabic. My GPA at this school is 3.29. To graduate, I
                            developed a web page using MEAN techniques and some RESTful
                            routes to run an algorithm that works with Arabic words to extract their
                            root words."
                            />
                            <hr style={{borderTop: '3px solid #1D976C'}} />
                            <h2>Experience</h2>
                            <Experience 
                            startYear={2018}
                            endYear={2018}
                            jobName="Lab Depot"
                            jobDesc="I assisted the marketing team with web-related technical services, and
                            gave input during their site migration to an eCommerce platform with
                            Magento 1. Notable projects include: Cross checking margin reports,
                            classifying customer contact information, and IT support."
                            />
                            <Experience 
                            startYear={2018}
                            endYear={2018}
                            jobName="CSCI Intern Class"
                            jobDesc="The UNG Arabic Department asked me to help develop their homepage
                            and design helpful resources and links for the students in the program. I
                            worked heavily with Sharepoint."
                            />
                            <Experience 
                            startYear={2017}
                            endYear={2017}
                            jobName="ThyssenKrupp"
                            jobDesc="While interning for Thyssenkrupp, I improved my skills excessively in
                            Microsoft Excel while working with various financial records. Secondly, I
                            learned introductory data management in an SAP database, and overall I
                            got experience with web tools such as WebEx."
                            />
                            <hr style={{borderTop: '3px solid #1D976C'}} />
                            <h2>Skills</h2>
                            <Skills 
                                skill="MongoDB"
                                progress={75}
                            />
                            <Skills 
                                skill="Express"
                                progress={50}
                            />
                            <Skills 
                                skill="ReactJS"
                                progress={25}
                            />
                            <Skills 
                                skill="NodeJS"
                                progress={70}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
      );
    }
  }
  
  
  export default Resume;