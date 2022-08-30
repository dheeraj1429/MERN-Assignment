import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as sidebar from "./CartSidebarComponent.style";
import { VscChromeClose } from "@react-icons/all-files/vsc/VscChromeClose";
import { useSelector, useDispatch } from "react-redux";
import { showSidebarComponet } from "../../Redux/Actions/appAction";
import CartItemsSmComponent from "../CartItemsSmComponent/CartItemsSmComponent";

function CartSidebarComponent() {
    const [TotalPrice, setTotalPrice] = useState(0);
    const showSidebar = useSelector((state) => state.index.showSidebar);
    const cart = useSelector((state) => state.index.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cart && !!cart.length) {
            const sumTotal = cart
                .map((el) => el.productId.price * el.qty)
                .reduce((acc, crv) => acc + crv);

            setTotalPrice(sumTotal);
        }
    }, [cart]);

    return ReactDOM.createPortal(
        <sidebar.div show={showSidebar}>
            <sidebar.sidebar show={showSidebar}>
                <sidebar.flexDiv>
                    <VscChromeClose
                        className="close_icon"
                        onClick={() => dispatch(showSidebarComponet(false))}
                    />
                    <div>
                        <h4>Total : Rs. {TotalPrice}</h4>
                    </div>
                </sidebar.flexDiv>

                <sidebar.items>
                    {cart && !!cart.length
                        ? cart.map((el) => <CartItemsSmComponent key={el._id} data={el} />)
                        : null}
                </sidebar.items>
            </sidebar.sidebar>
        </sidebar.div>,
        document.getElementById("cart-sidebar")
    );
}

export default CartSidebarComponent;
