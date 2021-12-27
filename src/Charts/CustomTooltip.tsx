import * as React from "react";

interface dataPoint {
    name: string,
    value: number | string,
    color: string
}

const CustomTooltip = (props: { barType: string, content: dataPoint }) => {
    let additionalText = ""
    const tooltipStyle = {
        padding: '10px',
        background: props.content.color,
        fontFamily: 'Avenir'

    } as React.CSSProperties
    switch (props.barType) {
        case 'sunburst':
            additionalText = "# of movies:  "
            break;
    }

    return <div style={tooltipStyle}>{props.content.name}<br />{additionalText}{props.content.value}</div>
}

export default CustomTooltip