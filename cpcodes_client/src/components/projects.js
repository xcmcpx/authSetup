import React, { Component } from 'react';
import { Tab, Card, Image } from 'semantic-ui-react';

class Projects extends Component {


    render() {
      const panes = [
        { menuItem: 'Front-End', render: () => 
        <Tab.Pane attached={false}>
            <div className="projects-grid">
                <Card className="projects-card">
                    <Image src='https://images.pexels.com/photos/1309584/pexels-photo-1309584.jpeg?auto=compress&cs=tinysrgb&h=350' />
                    <Card.Content>
                    <Card.Header>Front-End</Card.Header>
                    <Card.Description>Apps/Programs focused on Front-End development.</Card.Description>
                    </Card.Content>
                </Card>
            </div>
        </Tab.Pane> 
        },
        { menuItem: 'Back-End', render: () => 
        <Tab.Pane attached={false}>
        Tab 2 Content
        </Tab.Pane> 
        },
        { menuItem: 'Full-Stack', render: () =>
         <Tab.Pane attached={false}>
         Tab 3 Content
         </Tab.Pane> 
         },
        { menuItem: 'Hacking/Security', render: () =>
         <Tab.Pane attached={false}>
         Tab 3 Content
         </Tab.Pane> 
         },
      ]
      return (
        <div>
         <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
      );
    }
  }
  
  
  export default Projects;