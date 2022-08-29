import React, { useEffect } from "react";
import * as home from "./HomePage.style";
import ProductCardComponent from "../../Components/ProductCardComponent/ProductCardComponent";
import { fetchAllProducts } from "../../Redux/Actions/IndexAction";
import { useSelector, useDispatch } from "react-redux";

function HomePage() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.index.allProducts);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    return (
        <home.div>
            {allProducts && allProducts.products && !!allProducts.products.length
                ? allProducts.products.map((el) => <ProductCardComponent key={el._id} data={el} />)
                : null}
        </home.div>
    );
}

export default HomePage;
