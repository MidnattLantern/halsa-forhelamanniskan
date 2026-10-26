import { NavLink } from "react-router"

function NavBar() {

    return (
        <nav>
            <h1><NavLink to="/">Hälsa för hela människan</NavLink></h1>
            <NavLink to="atta-halsonycklar">Åtta hälsonycklar</NavLink>
            <NavLink to="om-oss">Om oss</NavLink>
            <NavLink to="naturlig-behandling">Naturlig behandling</NavLink>
            <NavLink to="missbruk">Missbruk</NavLink>
        </nav>
    )
}

export default NavBar