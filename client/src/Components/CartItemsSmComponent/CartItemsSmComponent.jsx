import React from "react";
import * as cart from "./CartItemsSmComponent.style";

function CartItemsSmComponent({ data }) {
    return (
        <cart.div>
            <cart.imageDiv
                style={{
                    backgroundImage: `url(images/${data.productId.image})`,
                }}
            />
            <cart.contentDiv>
                <h5>{data.productId.name}</h5>
                <p>
                    Price: Rs {data.productId.price} Qty: {data.qty}
                </p>
            </cart.contentDiv>
        </cart.div>
    );
}

export default CartItemsSmComponent;
