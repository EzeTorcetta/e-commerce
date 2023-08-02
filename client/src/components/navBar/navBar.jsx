import { Link } from "react-router-dom";
import style from "./navBar.module.css"
const NavBar = () => {

    return (
        <div>
            <Link to={"/home"} >Home</Link>
            <Link to={"/about"}>About</Link>
        </div>
    )
}

export default NavBar;