import * as React from "react";
import PopcornIcon from "../../svgs/popcorn.svg"

interface IProps {
    text: string,
    timeFrameText: string,
    tooltipText: string
}

const PopcornNote = ({ text, timeFrameText, tooltipText }: IProps) => {
    return <div className="tooltip" style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ color: '#e76f51', fontSize: '1.3em', textAlign: 'center', margin: 0, marginBottom: '-10px', fontFamily: 'Delius' }}>  {timeFrameText.toUpperCase()} </p>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <PopcornIcon style={{ minWidth: '30px', maxWidth: '30px', marginRight: '10px' }} onMouseEnter={(a) => { }} />
            <p>{text}<span className="tooltiptext">{tooltipText}</span> </p>
        </div>
    </div>
}

export default PopcornNote;