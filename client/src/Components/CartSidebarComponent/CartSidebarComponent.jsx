import React from "react";
import ReactDOM from "react-dom";
import * as sidebar from "./CartSidebarComponent.style";
import { VscChromeClose } from "@react-icons/all-files/vsc/VscChromeClose";
import { useSelector, useDispatch } from "react-redux";
import { showSidebarComponet } from "../../Redux/Actions/appAction";

function CartSidebarComponent() {
    const showSidebar = useSelector((state) => state.index.showSidebar);
    const dispatch = useDispatch();

    return ReactDOM.createPortal(
        <sidebar.div show={showSidebar}>
            <sidebar.sidebar show={showSidebar}>
                <VscChromeClose
                    className="close_icon"
                    onClick={() => dispatch(showSidebarComponet(false))}
                />
            </sidebar.sidebar>
        </sidebar.div>,
        document.getElementById("cart-sidebar")
    );
}

export default CartSidebarComponent;
