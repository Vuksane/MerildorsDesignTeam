import React from "react";
import { useHistory, Link, useLocation  } from "react-router-dom";
import classnames from "classnames";
import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container } from "reactstrap";


const JustNavbar = () => {
    let location = useLocation();

    const history = useHistory();
    const handleClick = (path)=>{
        history.push({
          pathname: path,
        })
    }
      
    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
      };
      const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
      const [navbarCollapse, setNavbarCollapse] = React.useState(false);
      React.useEffect(() => {
        const updateNavbarColor = () => {
          if (
            document.documentElement.scrollTop > 49 ||
            document.body.scrollTop > 49
          ) {
            setNavbarColor("");
          } else if (
            document.documentElement.scrollTop < 50 ||
            document.body.scrollTop < 50
          ) {
            setNavbarColor("navbar-transparent");
          }
        };
        window.addEventListener("scroll", updateNavbarColor);
    
        return function cleanup() {
          window.removeEventListener("scroll", updateNavbarColor);
        };
      });
    if (location.pathname.match(/Adminpanelindex/)){
        return null;
    }
    else if (location.pathname.match(/adminpanelindex/)){
        return null;
    }
    else if (location.pathname.match(/Adminpanellogin/)){
      return null;
    }
    else if (location.pathname.match(/adminpanellogin/)){
      return null;
    }
    return (
        <Navbar
        className={classnames("fixed-top", navbarColor)}
        color-on-scroll="50"
        expand="lg"
        >
        <Container>
            <div className="navbar-translate">
            <img
                style={{ marginLeft: "-10px" }}
                alt="..."
                width="140px"
                height="140px"
                src={require("assets/img/aaa.png")}
            />
            <NavbarBrand data-placement="bottom" to="/" tag={Link}>
                NAŠA DOMOVINA
            </NavbarBrand>
            <button
                aria-expanded={navbarCollapse}
                className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse,
                })}
                onClick={toggleNavbarCollapse}
            >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
            </button>
            </div>
            <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
            >
            <Nav navbar style={{cursor: 'pointer'}}>
                <NavItem>
                <NavLink onClick={()=>handleClick("/politika")}>
                    <i className="nc-icon nc-layout-11" /> POLITIKA
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink onClick={()=>handleClick("/kultura-i-drustvo")}>
                    <i className="nc-icon nc-layout-11" /> KULTURA I DRUSTVO
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink onClick={()=>handleClick("/ekonomija")}>
                    <i className="nc-icon nc-layout-11" /> EKONOMIJA
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink onClick={()=>handleClick("/kolumne-i-intervjui")}>
                    <i className="nc-icon nc-layout-11" /> KOLUMNE I INTERVJUI
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink onClick={()=>handleClick("/vijesti-iz-dijaspore")}>
                    <i className="nc-icon nc-layout-11" /> VIJESTI IZ DIJASPORE
                </NavLink>
                </NavItem>
            </Nav>
            
            </Collapse>
        </Container>
    </Navbar>
    )    
}

export default JustNavbar
