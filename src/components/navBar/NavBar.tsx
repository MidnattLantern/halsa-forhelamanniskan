import { NavLink } from "react-router"

function NavBar() {

    return (
        <nav>
            <h1><NavLink to="/">Hälsa för hela människan</NavLink></h1>
            <NavLink to="atta-halsonycklar">Åtta hälsonycklar</NavLink>
        </nav>
    )
}

export default NavBar