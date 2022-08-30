import React from "react";
import * as product from "./ProductCardComponent.style";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCardItems } from "../../Redux/Actions/IndexAction";

function ProductCardComponent({ data }) {
    const dispatch = useDispatch();
    const addIntoCartHandler = function () {
        dispatch(addToCardItems(data._id));
    };

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
                <Link to={`/edit-product/${data._id}`}>
                    <CustomButtonComponent InnerText={"Edit product"} btnCl={"know_more_button"} />
                </Link>
                <CustomButtonComponent
                    InnerText={"1 Add to card"}
                    btnCl={"add_to_card"}
                    onClick={addIntoCartHandler}
                />
            </product.content>
        </product.div>
    );
}

export default ProductCardComponent;
