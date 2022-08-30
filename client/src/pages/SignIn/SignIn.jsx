import React, { useState, useEffect } from "react";
import * as sigin from "./SignIn.style";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CustomButtonComponent from "../../Components/CustomButtonComponent/CustomButtonComponent";
import { message } from "antd";
import { signInUser } from "../../Redux/Actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

function SignIn() {
    const [SignIn, setSignIn] = useState({
        name: "",
        email: "",
        password: "",
    });
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const ChangeHandler = function (e) {
        const name = e.target.name;
        const value = e.target.value;

        setSignIn({ ...SignIn, [name]: value });
    };

    const info = (arg) => {
        message.info(arg);
    };

    const singInUser = function () {
        const { name, email, password } = SignIn;

        if (name && email && password) {
            dispatch(signInUser({ name, email, password }));
        } else {
            info("plase fill all fildes");
        }
    };

    useEffect(() => {
        if (user) {
            navigation("/");
        }
    }, [user]);

    return (
        <sigin.div>
            <sigin.innerDiv>
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
                        type="text"
                        label="Name"
                        variant="outlined"
                        value={SignIn.name}
                        onChange={ChangeHandler}
                    />
                    <TextField
                        id="outlined-basic"
                        name="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                        value={SignIn.email}
                        onChange={ChangeHandler}
                    />
                    <TextField
                        id="outlined-basic"
                        name="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        value={SignIn.password}
                        onChange={ChangeHandler}
                    />
                </Box>

                <CustomButtonComponent
                    onClick={singInUser}
                    InnerText={"Sign In"}
                    btnCl={"signIn_button"}
                />
            </sigin.innerDiv>
        </sigin.div>
    );
}

export default SignIn;
