import React, { Component } from 'react';
import { Grid, Progress } from 'semantic-ui-react';

class Skills extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width ={16}>
                        <div style={{display:"flex"}}>
                            { this.props.skill }
                            <Progress
                            style={{margin: 'auto', width: '75%'}} 
                            percent={this.props.progress} 
                            />
                        </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Skills;