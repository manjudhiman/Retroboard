import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import './Styles/Sidebar.css';
import Welcome from './../Welcome/Welcome';
import {withRouter } from 'react-router-dom';
import AddRetro from './../AddRetro/Addretro';
import RetroPage from './../RetroPage/Retropage';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


const Sidebar = (props) => {
    console.log("=props==" + JSON.stringify(props))
    return (
    <React.Fragment>
    <SideNav className="sidebar"
        onSelect={() => {
            // const to = '/' + selected;
            // if (location.pathname !== to) {
            //     history.push(to);
            // }
        }}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    <Link to="/create">
                        Create New board
                    </Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="devices">
                <NavIcon>
                    <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    View existing board
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    <main>
            <Switch>
                <Route path="/"  exact component={props => <Welcome />} />
                <Route path="/create" component={props => <AddRetro />} />
                <Route path="/retro_info" component={props => <RetroPage/>}  />
                </Switch>
            </main>
    </React.Fragment>
    
    );

}

export default withRouter(Sidebar);