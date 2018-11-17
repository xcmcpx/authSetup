import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Sidebar, Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


//components
import Main from './components/main'

//apollo client setup
const client = new ApolloClient({
  uri: '/graphql'
});


class App extends Component {
  state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    handleShowClick = () => this.setState({ visible: true });
    handleSidebarHide = () => this.setState({ visible: false });
  render() {
    const { activeItem } = this.state
    const { visible } = this.state
    return (
      <ApolloProvider client={ client }>
        <div id="main">
          <Menu id="navbar">
            <Button onClick={this.handleShowClick}>
              <i className="fas fa-bars"></i>
            </Button>
            <Menu.Item as={Link} to='/' header>Patrick Programs</Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item
                name='Resume'
                active={activeItem === 'Resume'}
                onClick={this.handleItemClick}
                as={Link} to='/resume'
              />
              <Menu.Item 
                name='About Me' 
                active={activeItem === 'About Me'} 
                onClick={this.handleItemClick} 
                as={Link} to='/about'
              />
              <Menu.Item
                name='Projects'
                active={activeItem === 'Projects'}
                onClick={this.handleItemClick}
                as={Link} to='/projects'
              />
              <Menu.Item
                name='Contact'
                active={activeItem === 'Contact'}
                onClick={this.handleItemClick}
                as={Link} to='/contact'
              />
              </Menu.Menu>
            </Menu>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={visible}
                    width='wide'
                >
                    <Menu.Item as={Link} to='/resume'>
                    Resume
                    </Menu.Item>
                    <Menu.Item as={Link} to='/about'>
                    About Me
                    </Menu.Item>
                    <Menu.Item as={Link} to='/projects'>
                    Projects
                    </Menu.Item>
                    <Menu.Item as={Link} to='/contact'>
                    Contact
                    </Menu.Item>
                </Sidebar>
                    <Main />
            </Sidebar.Pushable>
          </div>
      </ApolloProvider>
    );
  }
}

export default App;
