import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class Experience extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <p>{ this.props.startYear } - { this.props.endYear }</p>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <h4 style={{marginTop: '0px'}}>{ this.props.jobName }</h4>
                            <p>{ this.props.jobDesc }</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Experience;