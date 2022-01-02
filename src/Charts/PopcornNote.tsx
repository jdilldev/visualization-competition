import * as React from "react";
import PopcornIcon from "../../svgs/popcorn.svg"

interface IProps {
    text: string,
    timeFrameText: string,
    tooltipText?: string
}

const PopcornNote = ({ text, timeFrameText, tooltipText }: IProps) => {
    return <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ color: '#e76f51', fontSize: '1.3em', textAlign: 'center', margin: 0, marginBottom: '-5px', fontFamily: 'Klee One' }}>  {timeFrameText.toUpperCase()} </p>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '0 10 0 10', maxHeight: '300px', overflowY: 'scroll' }}>
            <PopcornIcon style={{ minWidth: '25px', maxWidth: '25px', marginRight: '10px' }} onMouseEnter={(a) => { }} />
            <p style={{ fontSize: '.9em' }}>{text} </p>
        </div>
    </div>
}

export default PopcornNote;