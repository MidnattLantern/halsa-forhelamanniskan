import { NavLink } from "react-router"

function NavBar() {

    return (
        <>
            <h1><NavLink to="/">Hälsa för hela människan</NavLink></h1>
            <NavLink to="atta-halsonycklar">Åtta hälsonycklar</NavLink>
        </>
    )
}

export default NavBar