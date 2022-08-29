import React from "react";
import * as product from "./ProductCardComponent.style";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";

function ProductCardComponent({ data }) {
    return (
        <product.div>
            <product.imageDiv
                style={{
                    backgroundImage: `url(/images/${data.image})`,
                }}
            />
            <product.content>
                <h5>{data.name}</h5>
                <p>Price: Rs. {data.price}</p>
                <CustomButtonComponent InnerText={"know more"} btnCl={"know_more_button"} />
            </product.content>
        </product.div>
    );
}

export default ProductCardComponent;
