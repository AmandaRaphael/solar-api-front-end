import {useState} from 'react'
import { NavLink } from 'react-router-dom';
import style from "./navBar.module.css";
// import { Navbar, Nav, Container } from "react-bootstrap";
const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  
    return (
      <div className={style.navBar}>
        {/* <Navbar
          expand="lg"
          collapseOnSelect
          expanded={expanded}
          style={{ width: "100%" }}
        >
          {" "}
          <Container className={style.Toggle}>
            {" "}
            <Navbar.Toggle
              onClick={() => setExpanded(expanded ? false : "expanded")}
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              {" "}
              <Nav className="me-auto">
                <NavLink
                  onClick={() => setExpanded(false)}
                  className={(navData) =>
                    navData.isActive ? style.selected : style.unselected
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setExpanded(false)}
                  className={(navData) =>
                    navData.isActive ? style.selected : style.unselected
                  }
                  to={"/satellites"}
                >
                  Checkout Satellites
                </NavLink>
                <NavLink
                  onClick={() => setExpanded(false)}
                  className={(navData) =>
                    navData.isActive ? style.selected : style.unselected
                  }
                  to={"/planets"}
                >
                  Checkout Planets
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
        <NavLink
          className={(navData) =>
            navData.isActive ? style.selected : style.unSelected
          }
          to="./satellites"
        >
          checkout satellites
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? style.selected : style.unSelected
          }
          to="./planets"
        >
          Checkout Planets
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? style.selected : style.unSelected
          }
          to="./"
        >
          Home
        </NavLink>
      </div>
    );
}

export default NavBar
