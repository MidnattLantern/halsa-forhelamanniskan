import Styles from "./NavBar.module.scss"
import { NavLink } from "react-router"

function NavLinks() {
    return <ul>
        <li><NavLink to="atta-halsonycklar">Åtta hälsonycklar</NavLink></li>
        <li><NavLink to="om-oss">Om oss</NavLink></li>
        <li><NavLink to="naturlig-behandling">Naturlig behandling</NavLink></li>
        <li><NavLink to="missbruk">Missbruk</NavLink></li>
        <li><NavLink to="halsa-for-nervsystemet">Hälsa för nervsystemet</NavLink></li>
        <li><NavLink to="orter-till-manniskans-tjänst">Örter till människans tjänst</NavLink></li>
        <li><NavLink to="forsta-hjalpen-kit">Första hjälpen kit</NavLink></li>
    </ul>
}

/** Allowing the user to navigate across pages
 * Usable as header and as a component in a page (by default), both share the same component here, making one change automatically universal across every page that utulize this.
 */
function NavBar({
    asHeader = false
} : {
    asHeader? : boolean
}) {

    if (asHeader) return (
        <nav className={Styles.container}>
            <h1><NavLink to="/">Hälsa för hela människan</NavLink></h1>
            <NavLinks/>
        </nav>
    )

    return (
        <div>
            <NavLinks/>
        </div>
    )
}

export default NavBar