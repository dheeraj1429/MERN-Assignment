import React, { useState } from "react";
import * as nav from "./NavbarComponent.style";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import CartSidebarComponent from "../CartSidebarComponent/CartSidebarComponent";
import { useDispatch, useSelector } from "react-redux";
import { showSidebarComponet } from "../../Redux/Actions/appAction.js";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";

function NavbarComponent() {
    const [NavLinks, setNavLinks] = useState([
        { elm: "Home", id: 1 },
        { elm: "Upload", id: 2 },
    ]);

    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();

    const showSidebarHandler = function () {
        dispatch(showSidebarComponet(true));
    };

    return (
        <nav.nav className>
            <div className="side_padding inner_nav_div">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div>
                    <ul>
                        {NavLinks.map((el) => (
                            <Link to={el.elm === "Home" ? "/" : `${el.elm}`}>
                                <li key={el.id}>
                                    <p>{el.elm}</p>
                                </li>
                            </Link>
                        ))}

                        <li>
                            <Badge badgeContent={1} color="primary" onClick={showSidebarHandler}>
                                <AiOutlineShoppingCart color="action" />
                            </Badge>
                        </li>
                        {!!user ? (
                            <>
                                <li>
                                    <p>{user.name}</p>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link to={"/signin"}>
                                    <AiOutlineUser />
                                </Link>
                            </li>
                        )}
                    </ul>
                    <CartSidebarComponent />
                </div>
            </div>
        </nav.nav>
    );
}

export default NavbarComponent;
