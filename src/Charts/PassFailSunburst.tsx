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
    <div style={{ display: 'flex', flexDirection: 'column', width: '25%', borderRight: '2px solid gold', marginTop: '10px' }}>
        <PopcornNote text="Most movies do not completely fail the test. As shown, most movies don't completely exclude women." />
        <div style={{ height: '30vh' }}>
            <ResponsiveSunburst
                data={sunData}
                theme={theme}
                margin={{ top: 0, right: 0, bottom: 60, left: 0 }}
                id="name"
                value="val"
                cornerRadius={0}
                borderColor='transparent'
                borderWidth={2}
                colors={['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']}
                childColor={{ from: 'color', modifiers: [['brighter', .5]] }}
                enableArcLabels={true}
                arcLabel={'id'}
                arcLabelsSkipAngle={10}
                //arcLabelsTextColor={{ from: 'color', modifiers: [['darker', .5]] }}
                tooltip={({ id, percentage, color }) => <CustomTooltip barType='sunburst' content={{ name: id as string, value: percentage.toFixed(2), color: color }} />}
            />
        </div >
    </div>
)

export default PassFailSunburst

