import * as React from "react";
import { ResponsiveChoropleth } from '@nivo/geo'
import featuresData from '../../data/world_countries.json'
import { CustomTooltip, PopcornNote } from ".";
import { theme } from "./theme";

const data = [
    {
        "id": "ARE",
        "value": 100
    },
    {
        "id": "ARG",
        "value": 76.2
    },
    {
        "id": "AUT",
        "value": 54.5
    },
    {
        "id": "AUS",
        "value": 69.6
    },
    {
        "id": "BEL",
        "value": 56.5
    },
    {
        "id": "BRA",
        "value": 60
    },
    {
        "id": "BFA",
        "value": 0
    },
    {
        "id": "BGR",
        "value": 0
    },
    {
        "id": "BHS",
        "value": 66.7
    },
    {
        "id": "BIH",
        "value": 100
    },
    {
        "id": "CAN",
        "value": 63.9
    },
    {
        "id": "CHE",
        "value": 52.6
    },
    {
        "id": "CHL",
        "value": 50
    },
    {
        "id": "CHN",
        "value": 59.3
    },
    {
        "id": "CMR",
        "value": 100
    },
    {
        "id": "COL",
        "value": 60
    },
    {
        "id": "CRI",
        "value": 50
    },
    {
        "id": "CUB",
        "value": 100
    },
    {
        "id": "-99",
        "value": 0
    },
    {
        "id": "CYP",
        "value": 0
    },
    {
        "id": "CZE",
        "value": 55.6
    },
    {
        "id": "DEU",
        "value": 54.4
    },
    {
        "id": "DNK",
        "value": 42.9
    },
    {
        "id": "DOM",
        "value": 100
    },
    {
        "id": "ECU",
        "value": 100
    },
    {
        "id": "EGY",
        "value": 66.7
    },
    {
        "id": "ESP",
        "value": 59.4
    },
    {
        "id": "EST",
        "value": 0
    },
    {
        "id": "FIN",
        "value": 44.4
    },
    {
        "id": "FRA",
        "value": 51.5
    },
    {
        "id": "GBR",
        "value": 56.2
    },
    {
        "id": "GRC",
        "value": 66.7
    },
    {
        "id": "HRV",
        "value": 0
    },
    {
        "id": "HUN",
        "value": 25
    },
    {
        "id": "IDN",
        "value": 0
    },
    {
        "id": "IND",
        "value": 54
    },
    {
        "id": "IRL",
        "value": 52.6
    },
    {
        "id": "IRN",
        "value": 70
    },
    {
        "id": "ISL",
        "value": 55.9
    },
    {
        "id": "ISR",
        "value": 35.3
    },
    {
        "id": "ITA",
        "value": 44.5
    },
    {
        "id": "JAM",
        "value": 0
    },
    {
        "id": "JPN",
        "value": 59.4
    },
    {
        "id": "KAZ",
        "value": 0
    },
    {
        "id": "KEN",
        "value": 100
    },
    {
        "id": "LBN",
        "value": 66.7
    },
    {
        "id": "LTU",
        "value": 50
    },
    {
        "id": "MLI",
        "value": 100
    },
    {
        "id": "MEX",
        "value": 59.5
    },
    {
        "id": "MYS",
        "value": 100
    },
    {
        "id": "NLD",
        "value": 45.2
    },
    {
        "id": "NOR",
        "value": 47.8
    },
    {
        "id": "NZL",
        "value": 52.9
    },
    {
        "id": "PSE",
        "value": 0
    },
    {
        "id": "PER",
        "value": 66.7
    },
    {
        "id": "PHL",
        "value": 60
    },
    {
        "id": "POL",
        "value": 53.8
    },
    {
        "id": "PRI",
        "value": 595023
    },
    {
        "id": "PRY",
        "value": 100
    },

    {
        "id": "ROU",
        "value": 55.6
    },
    {
        "id": "RUS",
        "value": 36.8
    },
    {
        "id": "SAU",
        "value": 100
    },
    {
        "id": "SEN",
        "value": 100
    },
    {
        "id": "SRB",
        "value": 100
    },
    {
        "id": "SVK",
        "value": 0
    },
    {
        "id": "THA",
        "value": 42.9
    },
    {
        "id": "TUR",
        "value": 40
    },
    {
        "id": "TWN",
        "value": 58.3
    },
    {
        "id": "UKR",
        "value": 33.3
    },
    {
        "id": "USA",
        "value": 57.8
    },
    {
        "id": "VEN",
        "value": 100
    },
    {
        "id": "VNM",
        "value": 50
    },
    {
        "id": "ZAF",
        "value": 50
    },
    {
        "id": "KOR",
        "value": 68.1
    }
]
const CountryOfOriginChloropleth = () => (
    <div style={{ width: '50%', display: 'flex', alignItems: 'center', marginLeft: '10px', marginRight: 40, marginTop: '15px', borderRight: '2px solid #264653', }}>
        <div style={{ flexBasis: .5, flexGrow: .5 }}>
            <PopcornNote text="This chloropleth shows the percentage of movies that passed the Bechdel test based on their country of origin. Most countries fell in the 50% passing range. Of countries with at least 50 movies, Australia scored the highest, while Italy and The Netherlands scored the lowest.[Note: Most movies in this dataset are from Western nations]" tooltipText="bye" timeFrameText="all movies" />
        </div>
        <div style={{ height: '36vh', width: '90%', flexGrow: 1, flexBasis: .8, marginTop: '20px' }}>
            <ResponsiveChoropleth
                data={data}
                theme={theme}
                features={featuresData.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors={['#B5DADA', '#A2D1D1', '#8BC5C5', '#74BABA', '#5DAEAE', '#46A3A3', '#2E9797', '#178C8C', '#008080']}
                domain={[48, 75]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionScale={80}
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                enableGraticule={false}
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#152538"
                legends={[
                    {
                        anchor: 'left',
                        direction: 'column',
                        justify: true,
                        translateX: 10,
                        translateY: 50,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemDirection: 'left-to-right',
                        itemTextColor: 'white',
                        itemOpacity: 1,
                        symbolSize: 10,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: 'white',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                tooltip={({ feature }) => <CustomTooltip barType="choropleth" content={{ name: feature.label, value: feature.formattedValue, color: feature.color }} />}
            />
        </div>
    </div>
)

export default CountryOfOriginChloropleth;