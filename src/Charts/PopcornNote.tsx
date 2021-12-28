import * as React from "react";
import PopcornIcon from "../svgs/popcorn.svg"

const PopcornNote = ({ text }) => {
    return <div style={{ display: 'flex' }}>
        <PopcornIcon style={{ marginRight: '10px', minWidth: '30px', maxWidth: '30px' }} />
        <p>{text}</p>
    </div>
}

export default PopcornNote;