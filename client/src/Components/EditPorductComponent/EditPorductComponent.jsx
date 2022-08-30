import React, { useState, useRef, useEffect } from "react";
import * as Edit from "./EditPorductComponent.style";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import FileUploadComponent from "../FileUploadComponent/FileUploadComponent";
import CustomButtonComponent from "../CustomButtonComponent/CustomButtonComponent";
import { message } from "antd";
import { updateProductInfo, deleteSingleProduct } from "../../Redux/Actions/IndexAction";
import { useParams } from "react-router";
import { resetUpdateNotification, resetDeletInfo } from "../../Redux/Actions/appAction";
import { useNavigate } from "react-router";

function EditPorductComponent() {
    const File = useRef(null);
    const id = useParams().id;
    const [Product, setProduct] = useState({
        name: "",
        price: "",
        image: "",
        imageFile: "",
    });

    const selectedProduct = useSelector((state) => state.index.selectedProduct);
    const udpateProductInfo = useSelector((state) => state.index.udpateProductInfo);
    const deleteProductInfo = useSelector((state) => state.index.deleteProductInfo);

    const dispatch = useDispatch();
    const navigation = useNavigate();
    const OpenFileHandler = function () {
        File.current.click();
    };

    const ChangeHandler = function (e) {
        const name = e.target.name;
        const value = e.target.value;

        setProduct({ ...Product, [name]: value });
    };

    const info = (arg) => {
        message.info(arg);
    };

    const updateFileHandler = function (e) {
        const file = e.target.files[0];
        setProduct({ ...Product, image: file, imageFile: file.name });
    };

    const SendUpdateProductData = function () {
        const { name, price, image } = Product;

        if (name && price && image && selectedProduct) {
            if (
                name !== selectedProduct.name ||
                price !== selectedProduct.price ||
                image !== selectedProduct.image
            ) {
                const formData = new FormData();
                formData.append("image", image);
                formData.append("name", name);
                formData.append("price", price);
                formData.append("id", id);
                dispatch(updateProductInfo(formData));
            } else {
                info("fildes is not updated");
            }
        }
    };

    const DeleteSelectedProduct = function () {
        dispatch(deleteSingleProduct(id));
    };

    useEffect(() => {
        if (!!selectedProduct) {
            setProduct({
                name: selectedProduct.name,
                price: selectedProduct.price,
                image: selectedProduct.image,
                imageFile: selectedProduct.image,
            });
        }

        if (!!deleteProductInfo && !!deleteProductInfo.success) {
            navigation("/");
            dispatch(resetDeletInfo(null));
        }
    }, [selectedProduct, deleteProductInfo]);

    useEffect(() => {
        if (!!udpateProductInfo && udpateProductInfo.message) {
            info(udpateProductInfo.message);
            dispatch(resetUpdateNotification(null));
        }
    }, [udpateProductInfo]);

    return (
        <Edit.div>
            <Edit.editDiv>
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
                        name="name"
                        type={"text"}
                        value={Product.name}
                        onChange={ChangeHandler}
                        label="name"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        name="price"
                        type={"number"}
                        value={Product.price}
                        onChange={ChangeHandler}
                        label="price"
                        variant="outlined"
                    />
                    <FileUploadComponent
                        openFunction={OpenFileHandler}
                        changeFunction={updateFileHandler}
                        file={File}
                        paraText={Product.imageFile}
                    />
                </Box>
                <CustomButtonComponent
                    InnerText={"Update Product"}
                    btnCl={"Uplod_button"}
                    onClick={SendUpdateProductData}
                />
                <CustomButtonComponent
                    InnerText={"Delete Product"}
                    btnCl={"Delete_product"}
                    onClick={DeleteSelectedProduct}
                />
            </Edit.editDiv>
        </Edit.div>
    );
}

export default EditPorductComponent;
