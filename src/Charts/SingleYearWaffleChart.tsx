import { ResponsiveWaffle } from '@nivo/waffle'
import * as React from "react";
import { PopcornNote } from '.';


const data = [
    {
        "id": "men",
        "label": "men",
        "value": 24.529516449076993,
        "color": "#468df3"
    },
    {
        "id": "women",
        "label": "women",
        "value": 7.983453642688641,
        "color": "#ba72ff"
    },
    {
        "id": "children",
        "label": "children",
        "value": 3.0880009077272508,
        "color": "#a1cfff"
    }
]
const SingleYearWaffleChart = () => (
    <div style={{ width: '20%' }}>
        <PopcornNote text="dummy text" />
        <ResponsiveWaffle
            data={data}
            total={100}
            rows={18}
            columns={14}
            //  colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
            animate={true}
            motionStiffness={90}
            motionDamping={11}

        />
    </div>
)
export default SingleYearWaffleChart