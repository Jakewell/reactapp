import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import navbarStyles from "./navbar_components/navbar_styles.css";

class TopBarNavigation extends React.Component {
    handleProductClick() {
        console.log("handleProductClick");
    }
    
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="http://localhost:8080/" className={navbarStyles.title}>Putting</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href="#" onClick={this.handleProductClick}>Product</NavItem>
                        <NavItem href="#">Features</NavItem>
                        <NavDropdown title="Our Partners" id="basic-nav-dropdown">
                            <MenuItem>Putting Partner 1</MenuItem>
                            <MenuItem>Putting Partner 2</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="#">The Team</NavItem>
                        <NavItem href="#">Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopBarNavigation;