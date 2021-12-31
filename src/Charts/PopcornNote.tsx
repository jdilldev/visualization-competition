import * as React from "react";
import PopcornIcon from "../../svgs/popcorn.svg"

const PopcornNote = ({ text, tooltipText }) => {
    return <div className="tooltip" style={{ display: 'flex' }}>
        <PopcornIcon style={{ minWidth: '30px', maxWidth: '30px', marginRight: '10px' }} onMouseEnter={(a) => { }} />
        <p>{text}
            <span className="tooltiptext">{tooltipText}</span>
        </p>
    </div>
}

export default PopcornNote;