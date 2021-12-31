import * as React from "react";

interface dataPoint {
    name: string,
    value: string | number | { name: string, value: number }
    color: string
}

interface prepackagedDataPoint {

}

const CustomTooltip = (props: { barType: string, content: dataPoint }) => {
    let tooltipText = ""
    const tooltipStyle = {
        padding: '10px',
        background: props.content.color,
        fontFamily: 'Avenir',
        color: 'white'

    } as React.CSSProperties
    switch (props.barType) {
        case 'sunburst':
            let phrase = ""
            switch (props.content.name) {
                case 'fail':
                    phrase = "fail one aspect of<br/>the Bechdel test"
                    break
                case 'pass':
                    phrase = "meet all criteria<br/>of the Bechdel"
            }
            tooltipText = `<span style="color:yellow;"}>${props.content.value}% </span> of movies<br/>${phrase}`
            break;
        case 'bar':
            tooltipText = `<span style="color:yellow;position:static;zIndex:2;"}>${props.content.value['value']} </span> movies in <br/>${props.content.value['name']} ${phrase}`
            break
    }

    return <div style={tooltipStyle} dangerouslySetInnerHTML={{ __html: tooltipText }} />
}

export default CustomTooltip