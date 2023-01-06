import { ResponsiveSunburst } from '@nivo/sunburst'
import * as React from "react";
import { CustomTooltip, PopcornNote } from '.';
import { theme } from './theme';
const PassFailSunburst = ({ data }) => <div style={{ display: 'flex', flexDirection: 'column', width: '25%', borderRight: '2px solid #264653', marginTop: '10px' }}>
    <PopcornNote text="Based on data available, most movies pass the Bechdel test. The most common reason for failing is not showing women conversing with each other." tooltipText="rabbit" timeFrameText='all movies' />
    <div style={{ height: '30vh' }}>
        <ResponsiveSunburst
            data={data}
            theme={theme}
            margin={{ top: 0, right: 0, bottom: 60, left: 0 }}
            id="name"
            value="val"
            cornerRadius={0}
            borderColor='#264653'
            borderWidth={2}
            colors={['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51']}
            childColor={{ from: 'color', modifiers: [['brighter', .6]] }}
            enableArcLabels={true}
            arcLabel={'id'}
            arcLabelsSkipAngle={10}
            //arcLabelsTextColor={{ from: 'color', modifiers: [['darker', .5]] }}
            tooltip={({ id, value, color }) => <CustomTooltip barType='sunburst' content={{ name: id as string, value: value, color: color, }} />}
        />
    </div >
</div>



export default PassFailSunburst

