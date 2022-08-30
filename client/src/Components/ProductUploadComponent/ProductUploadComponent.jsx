import React, { useRef, useState, useEffect } from "react";
import * as upload from "./ProductUploadComponent.style";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";
import { useSelector, useDispatch } from "react-redux";
import { message } from "antd";
import { uploadSingleProduct } from "../../Redux/Actions/IndexAction";
import { resetProductNotification } from "../../Redux/Actions/appAction";
import FileUploadComponent from "../FileUploadComponent/FileUploadComponent";

function ProductUploadComponent() {
    const File = useRef(null);
    const [Product, setProduct] = useState({
        name: "",
        price: "",
        image: "",
    });
    const dispatch = useDispatch();
    const uploadProduct = useSelector((state) => state.index.uploadProduct);

    const info = (arg) => {
        message.info(arg);
    };

    const OpenFileHandler = function () {
        File.current.click();
    };

    const ChangeHandler = function (e) {
        const name = e.target.name;
        const value = e.target.value;

        setProduct({ ...Product, [name]: value });
    };

    const ChangeFileHandler = function (e) {
        const data = e.target.files[0];
        setProduct({ ...Product, image: data });
    };

    const SendHandler = function () {
        const { name, price, image } = Product;

        if (name && price && image) {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("name", name);
            formData.append("price", price);

            dispatch(uploadSingleProduct(formData));
        } else {
            info("please fill all fildes");
        }
    };

    useEffect(() => {
        if (!!uploadProduct && uploadProduct.message) {
            info(uploadProduct.message);
            dispatch(resetProductNotification(null));
        }
    }, [uploadProduct]);

    return (
        <upload.div>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { my: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    type={"text"}
                    name="name"
                    value={Product.name}
                    onChange={ChangeHandler}
                    label="Product Name"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    type={"number"}
                    name="price"
                    value={Product.price}
                    onChange={ChangeHandler}
                    label="Product Price"
                    variant="outlined"
                />
            </Box>
            <FileUploadComponent
                openFunction={OpenFileHandler}
                file={File}
                paraText={Product.image.name}
                changeFunction={ChangeFileHandler}
            />
            <CustomButtonComponent
                InnerText={"Upload Product"}
                btnCl={"Uplod_button"}
                onClick={SendHandler}
            />
        </upload.div>
    );
}

export default ProductUploadComponent;
