import React, { useState } from "react";
import * as nav from "./NavbarComponent.style";
import { Link } from "react-router-dom";

function NavbarComponent() {
    const [NavLinks, setNavLinks] = useState([
        { elm: "Home", id: 1 },
        { elm: "Upload", id: 2 },
    ]);

    return (
        <nav.nav className>
            <div className="side_padding inner_nav_div">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div>
                    <ul>
                        {NavLinks.map((el) => (
                            <Link to={el.elm === "Home" ? "/" : el.elm}>
                                <li key={el.id}>
                                    <p>{el.elm}</p>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav.nav>
    );
}

export default NavbarComponent;
