import React, { useEffect, useState } from "react";
import * as product from "./ProductCardComponent.style";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCardItems } from "../../Redux/Actions/IndexAction";
import { useCookies } from "react-cookie";

function ProductCardComponent({ data }) {
    const [Quntity, setQuntity] = useState("");
    const dispatch = useDispatch();
    const addIntoCartHandler = function () {
        dispatch(addToCardItems(data._id, data));
    };
    const cart = useSelector((state) => state.index.cart);
    const [cookie] = useCookies(["user"]);

    useEffect(() => {
        if (cart && !!cart.length) {
            cart.map((el) => {
                if (el.productId._id === data._id) {
                    setQuntity(el.qty);
                }
            });
        }
    }, [cart]);

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
                {cookie && cookie.user ? (
                    <>
                        <Link to={`/edit-product/${data._id}`}>
                            <CustomButtonComponent
                                InnerText={"Edit product"}
                                btnCl={"know_more_button"}
                            />
                        </Link>
                        <CustomButtonComponent
                            InnerText={`${Quntity} Add to card`}
                            btnCl={"add_to_card"}
                            onClick={addIntoCartHandler}
                        />
                    </>
                ) : null}
            </product.content>
        </product.div>
    );
}

export default ProductCardComponent;
