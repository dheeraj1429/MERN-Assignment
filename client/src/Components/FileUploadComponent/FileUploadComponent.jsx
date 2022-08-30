import React from "react";
import * as upload from "./FileUploadComponent.style";
import { AiOutlineFileAdd } from "@react-icons/all-files/ai/AiOutlineFileAdd";

function FileUploadComponent({ openFunction, changeFunction, file, paraText }) {
    return (
        <upload.div>
            <upload.file onClick={openFunction}>
                <div>
                    <p>{paraText}</p>
                    <AiOutlineFileAdd />
                </div>
                <input
                    type="file"
                    onChange={changeFunction}
                    name="image"
                    ref={(el) => (file.current = el)}
                />
            </upload.file>
        </upload.div>
    );
}

export default FileUploadComponent;
