import { Link } from "react-router"

export default function NavBar() {
    return (
        <>
        <nav>
            <div id="nav-title">
                <Link to='/'><h1 id="title">Harry Potter Facts!</h1></Link>
            </div>
            <div id="nav-buttons">
                <Link to='/'>Characters</Link>
                <Link to='/houses'>Houses</Link>
                <Link to='/books'>Books</Link>
                <Link to='/spells'>Spells</Link>
            </div>
        </nav>
        </>
    )
}