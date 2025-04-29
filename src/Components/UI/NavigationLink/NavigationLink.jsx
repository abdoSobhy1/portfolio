import { NavLink } from "react-router-dom";

import classes from "./NavigationLink.module.css";

const NavigationLink = ({ children, link, exact }) => {
    return (
        <li className={classes.navLink}>
            <NavLink to={link} className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : classes.link} end={exact}>
                {children}
            </NavLink>
        </li>
    );
};

export default NavigationLink;