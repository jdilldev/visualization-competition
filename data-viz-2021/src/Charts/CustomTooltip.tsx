import * as React from "react";

interface dataPoint {
    name: string,
    value: string | number | { name: string, value: number | string }
    color: string
}

interface prepackagedDataPoint {

}

const CustomTooltip = (props: { barType: string, content: dataPoint }) => {
    let tooltipText = ""
    const tooltipStyle = {
        padding: '5px',
        background: props.content.color,
        fontFamily: 'Avenir',
        color: 'white',
        marginLeft: '50px'

    } as React.CSSProperties
    switch (props.barType) {
        case 'sunburst':
            let phrase = ""
            switch (props.content.name) {
                case 'fail':
                    phrase = "fail one aspect of<br/>the Bechdel Test"
                    break
                case 'pass':
                    phrase = "meet all criteria<br/>of the Bechdel Test"
                    break;
                case '0':
                    phrase = 'have less than<br/>two female characters'
                    break
                case '1':
                    phrase = "the female characters<br/>don't talk to each other"
                    break
                case '2':
                    phrase = 'have female characters<br/>who only talk about guys'
            }
            tooltipText = `<span style="color:yellow;"}> ${props.content.value.toLocaleString()} (${(100 * (props.content.value as number / 9368)).toFixed(0)}%) </span> movies<br/>${phrase}`
            break;
        case 'bar':
            phrase = props.content.name.toLowerCase()
            switch (props.content.name.toLowerCase()) {
                case 'only discuss men':
                    phrase = "have female characters<br/>only discussing  men"
                    break
                case 'no female convo':
                    phrase = "don't show dialog<br/>between at least two women"
                    break
                case 'one or no women':
                    phrase = "don't have at least two women"
            }
            tooltipText = props.content.value['value'] ? `<span style="color:yellow;position:static;zIndex:2;"}>${props.content.value['value']}% </span> of movies in <br/><span style="color:#caf0f8;font-weight:bolder;font-size:1.2em;"}>${props.content.value['name']}</span> ${phrase}` : `<span style="color:yellow;position:static;zIndex:2;"}>${props.content.value} </span>  movies ${phrase}`
            break
        case 'choropleth':
            tooltipText = props.content.name ? `<span style="color:yellow;"}>${props.content.value}% </span> of movies in <span style="color:#9d4edd;font-weight:bolder;font-size:1.2em;"}>${props.content.name}</span><br/> passed the Bechdel Test` : 'No data available'
            break
        case 'radial':
            phrase = props.content.value['name'].toLowerCase()
            switch (props.content.value['name'].toLowerCase()) {
                case 'only discuss men':
                    phrase = "have female characters only discussing men"
                    break
                case 'no female convo':
                    phrase = "don't show dialog between at least two women"
                    break
                case 'one or no women':
                    phrase = "don't have at least two women"
            }

            tooltipText = `<span style="color:yellow;"}>${props.content.value['value']}% </span>of <span style="color:#caf0f8;font-weight:bolder;font-size:1.2em;"}> ${props.content.name.toLowerCase()}</span> movies ${phrase}`
            break
    }

    return <div style={tooltipStyle} dangerouslySetInnerHTML={{ __html: tooltipText }} />
}

export default CustomTooltip