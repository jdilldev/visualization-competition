import { ResponsiveSunburst } from '@nivo/sunburst'
import * as React from "react";
import { CustomTooltip, PopcornNote } from '.';
import { theme } from './theme';


const sunData = {
    "name": "nivo",
    "children": [
        {
            "name": "pass",
            "color": "hsl(219, 70%, 50%)",
            "val": 700,

        },
        {
            "name": "fail",
            "children": [
                {
                    "name": "0",
                    "color": "hsl(289, 70%, 50%)",
                    "val": 300
                },
                {
                    "name": "1",
                    "color": "hsl(103, 70%, 50%)",
                    "val": 400
                },
                {
                    "name": "2",
                    "color": "hsl(103, 70%, 50%)",
                    "val": 260
                }
            ]
        },
    ]
}
const PassFailSunburst = () => (
    <div style={{
        width: '20%', marginLeft: '30px', marginTop: '-110px'
    }}>

        <PopcornNote text="Most movies do not completely fail the test. As shown, most movies don't completely exclude women.
        However, this failure rate signifies that women are seen to have traditional roles that are subservient to men.
            On the other hand, romance, is often a story interwined in movies, wheteher or not it is the main focus."/>
        <ResponsiveSunburst
            data={sunData}
            theme={theme}
            margin={{ top: 0, right: 0, bottom: 250, left: 0 }}
            id="name"
            value="val"
            cornerRadius={0}
            borderColor='transparent'
            borderWidth={2}
            colors={{ scheme: 'nivo' }}
            childColor={{ from: 'color', modifiers: [['brighter', .5]] }}
            enableArcLabels={true}
            arcLabel={'id'}
            arcLabelsSkipAngle={10}
            //arcLabelsTextColor={{ from: 'color', modifiers: [['darker', .5]] }}
            tooltip={({ id, percentage, color }) => <CustomTooltip barType='sunburst' content={{ name: id as string, value: percentage.toFixed(2), color: color }} />}
        />
    </div >
)

export default PassFailSunburst

