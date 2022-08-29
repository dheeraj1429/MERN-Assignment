import React from "react";
import * as load from "./UploadProducts.style";
import ProductUploadComponent from "../../Components/ProductUploadComponent/ProductUploadComponent";

function UploadProducts() {
    return (
        <load.div>
            <ProductUploadComponent />
        </load.div>
    );
}

export default UploadProducts;
