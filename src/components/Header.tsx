import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <h1 className="logo-bokstaver">GG</h1>
            <h2 className="logo-tittel">Gausdal Games</h2>
            <nav>
                <ul className="header-liste">
                    <li>
                        <Link to="/">FORSIDE</Link>
                    </li>
                    <li>
                        <Link to="/konkurranser">KONKURRANSER</Link>
                    </li>
                    <li>
                        <Link to="/deltakere">DELTAKERE</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;