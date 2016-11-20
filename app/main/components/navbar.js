import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class TopBarNavigation extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">ReactApp</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href="#">Link</NavItem>
                        <NavItem href="#">Link</NavItem>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem>Dropdown Link</MenuItem>
                            <MenuItem>Dropdown Link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="#">Link Right</NavItem>
                        <NavItem href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopBarNavigation;