import React, {useState} from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import './Styles/Sidebar.css';
import Welcome from './../Welcome/Welcome';
import {withRouter } from 'react-router-dom';
import AddRetro from './../AddRetro/Addretro';
import Retrolist from './../RetroList/Retrolist';
import RetroPage from './../RetroPage/Retropage';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


const Sidebar = (props) => {
    const [expand, updatedExpand] = useState(false)
    function clickHandler() {
        console.log("clickkkkkkk");
        updatedExpand(!expand)

    };



    console.log("=props==" + JSON.stringify(props));
    
    return (
    <React.Fragment>
    <SideNav className="sidebar"
        onSelect={() => {
            console.log("clicked@@@")
            clickHandler()
           
        }}

        expanded={expand}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home" >
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
                   <Link to="/retro" >
                    View existing board
                    </Link>
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    <main>
            <Switch>
                <Route path="/"  exact component={props => <Welcome />} />
                <Route path="/create" component={props => <AddRetro />} />
                <Route path="/retro_info" component={props => <RetroPage/>}/>
                <Route path="/retro" component={props=> <Retrolist/>} />
            </Switch>
    </main>
    </React.Fragment>
    
    );

}

export default withRouter(Sidebar);