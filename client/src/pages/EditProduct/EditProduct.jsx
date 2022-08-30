import React, { useEffect } from "react";
import * as Edit from "./EditProduct.style";
import { useParams } from "react-router";
import { fetchSelectedProduct } from "../../Redux/Actions/IndexAction";
import { useDispatch } from "react-redux";
import EditPorductComponent from "../../Components/EditPorductComponent/EditPorductComponent";

function EditProduct() {
    const paramsId = useParams().id;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSelectedProduct(paramsId));
    }, [paramsId]);

    return (
        <Edit.div>
            <EditPorductComponent />
        </Edit.div>
    );
}

export default EditProduct;
