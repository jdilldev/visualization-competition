import * as React from "react";
import PopcornIcon from "../../svgs/popcorn.svg"

const PopcornNote = ({ text }) => {
    return <div style={{ display: 'flex' }}>
        <PopcornIcon style={{ minWidth: '30px', maxWidth: '30px' }} onMouseEnter={(a) => console.log(a)} />
        <p style={{ marginLeft: '10px', textAlign: 'left' }}>{text}</p>
    </div>
}

export default PopcornNote;