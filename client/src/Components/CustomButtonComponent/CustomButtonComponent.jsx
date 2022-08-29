import React from "react";
import * as btn from "./CustomButtonComponent.style";

function CustomButtonComponent({ InnerText, btnCl, onClick }) {
    return (
        <btn.div>
            <btn.button onClick={onClick} className={btnCl ? btnCl : null}>
                {InnerText}
            </btn.button>
        </btn.div>
    );
}

export default CustomButtonComponent;
