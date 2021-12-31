import * as React from "react";

import { ResponsiveChoropleth } from '@nivo/geo'
import featuresData from '../../data/world_countries.json'
import { PopcornNote } from ".";
import { theme } from "./theme";

const data = [
    {
        "id": "AFG",
        "value": 589445
    },
    {
        "id": "AGO",
        "value": 29778
    },
    {
        "id": "ALB",
        "value": 149642
    },
    {
        "id": "ARE",
        "value": 983860
    },
    {
        "id": "ARG",
        "value": 791882
    },
    {
        "id": "ARM",
        "value": 538116
    },
    {
        "id": "ATA",
        "value": 488010
    },
    {
        "id": "ATF",
        "value": 170667
    },
    {
        "id": "AUT",
        "value": 555355
    },
    {
        "id": "AZE",
        "value": 276488
    },
    {
        "id": "BDI",
        "value": 984518
    },
    {
        "id": "BEL",
        "value": 160641
    },
    {
        "id": "BEN",
        "value": 749493
    },
    {
        "id": "BFA",
        "value": 424864
    },
    {
        "id": "BGD",
        "value": 124974
    },
    {
        "id": "BGR",
        "value": 487992
    },
    {
        "id": "BHS",
        "value": 458939
    },
    {
        "id": "BIH",
        "value": 218345
    },
    {
        "id": "BLR",
        "value": 633911
    },
    {
        "id": "BLZ",
        "value": 353000
    },
    {
        "id": "BOL",
        "value": 152874
    },
    {
        "id": "BRN",
        "value": 870212
    },
    {
        "id": "BTN",
        "value": 748252
    },
    {
        "id": "BWA",
        "value": 276345
    },
    {
        "id": "CAF",
        "value": 51494
    },
    {
        "id": "CAN",
        "value": 152422
    },
    {
        "id": "CHE",
        "value": 981696
    },
    {
        "id": "CHL",
        "value": 861264
    },
    {
        "id": "CHN",
        "value": 357285
    },
    {
        "id": "CIV",
        "value": 598771
    },
    {
        "id": "CMR",
        "value": 889019
    },
    {
        "id": "COG",
        "value": 778310
    },
    {
        "id": "COL",
        "value": 721534
    },
    {
        "id": "CRI",
        "value": 531417
    },
    {
        "id": "CUB",
        "value": 520755
    },
    {
        "id": "-99",
        "value": 625871
    },
    {
        "id": "CYP",
        "value": 245068
    },
    {
        "id": "CZE",
        "value": 284950
    },
    {
        "id": "DEU",
        "value": 968265
    },
    {
        "id": "DJI",
        "value": 226590
    },
    {
        "id": "DNK",
        "value": 117225
    },
    {
        "id": "DOM",
        "value": 617100
    },
    {
        "id": "DZA",
        "value": 369693
    },
    {
        "id": "ECU",
        "value": 672773
    },
    {
        "id": "EGY",
        "value": 581204
    },
    {
        "id": "ERI",
        "value": 219785
    },
    {
        "id": "ESP",
        "value": 563516
    },
    {
        "id": "EST",
        "value": 960225
    },
    {
        "id": "ETH",
        "value": 61185
    },
    {
        "id": "FIN",
        "value": 959418
    },
    {
        "id": "FJI",
        "value": 485918
    },
    {
        "id": "FLK",
        "value": 792654
    },
    {
        "id": "FRA",
        "value": 809676
    },
    {
        "id": "GAB",
        "value": 170497
    },
    {
        "id": "GBR",
        "value": 206655
    },
    {
        "id": "GEO",
        "value": 858961
    },
    {
        "id": "GHA",
        "value": 776577
    },
    {
        "id": "GIN",
        "value": 816364
    },
    {
        "id": "GMB",
        "value": 277828
    },
    {
        "id": "GNB",
        "value": 916293
    },
    {
        "id": "GNQ",
        "value": 989289
    },
    {
        "id": "GRC",
        "value": 567300
    },
    {
        "id": "GTM",
        "value": 103412
    },
    {
        "id": "GUY",
        "value": 774024
    },
    {
        "id": "HND",
        "value": 628998
    },
    {
        "id": "HRV",
        "value": 472123
    },
    {
        "id": "HTI",
        "value": 981806
    },
    {
        "id": "HUN",
        "value": 645133
    },
    {
        "id": "IDN",
        "value": 526428
    },
    {
        "id": "IND",
        "value": 106279
    },
    {
        "id": "IRL",
        "value": 796413
    },
    {
        "id": "IRN",
        "value": 115488
    },
    {
        "id": "IRQ",
        "value": 378599
    },
    {
        "id": "ISL",
        "value": 232862
    },
    {
        "id": "ISR",
        "value": 961756
    },
    {
        "id": "ITA",
        "value": 775601
    },
    {
        "id": "JAM",
        "value": 347567
    },
    {
        "id": "JOR",
        "value": 932752
    },
    {
        "id": "JPN",
        "value": 935842
    },
    {
        "id": "KAZ",
        "value": 744490
    },
    {
        "id": "KEN",
        "value": 180371
    },
    {
        "id": "KGZ",
        "value": 43965
    },
    {
        "id": "KHM",
        "value": 377870
    },
    {
        "id": "OSA",
        "value": 360400
    },
    {
        "id": "KWT",
        "value": 713164
    },
    {
        "id": "LAO",
        "value": 473725
    },
    {
        "id": "LBN",
        "value": 195756
    },
    {
        "id": "LBR",
        "value": 429309
    },
    {
        "id": "LBY",
        "value": 279449
    },
    {
        "id": "LKA",
        "value": 559469
    },
    {
        "id": "LSO",
        "value": 93903
    },
    {
        "id": "LTU",
        "value": 770708
    },
    {
        "id": "LUX",
        "value": 783760
    },
    {
        "id": "LVA",
        "value": 662204
    },
    {
        "id": "MAR",
        "value": 937432
    },
    {
        "id": "MDA",
        "value": 217004
    },
    {
        "id": "MDG",
        "value": 98752
    },
    {
        "id": "MEX",
        "value": 831273
    },
    {
        "id": "MKD",
        "value": 232944
    },
    {
        "id": "MLI",
        "value": 348854
    },
    {
        "id": "MMR",
        "value": 844600
    },
    {
        "id": "MNE",
        "value": 580008
    },
    {
        "id": "MNG",
        "value": 173274
    },
    {
        "id": "MOZ",
        "value": 565024
    },
    {
        "id": "MRT",
        "value": 917517
    },
    {
        "id": "MWI",
        "value": 139191
    },
    {
        "id": "MYS",
        "value": 883940
    },
    {
        "id": "NAM",
        "value": 104963
    },
    {
        "id": "NCL",
        "value": 143319
    },
    {
        "id": "NER",
        "value": 868877
    },
    {
        "id": "NGA",
        "value": 976699
    },
    {
        "id": "NIC",
        "value": 44628
    },
    {
        "id": "NLD",
        "value": 202207
    },
    {
        "id": "NOR",
        "value": 848218
    },
    {
        "id": "NPL",
        "value": 713344
    },
    {
        "id": "NZL",
        "value": 753187
    },
    {
        "id": "OMN",
        "value": 732288
    },
    {
        "id": "PAK",
        "value": 450204
    },
    {
        "id": "PAN",
        "value": 624788
    },
    {
        "id": "PER",
        "value": 107381
    },
    {
        "id": "PHL",
        "value": 333414
    },
    {
        "id": "PNG",
        "value": 644632
    },
    {
        "id": "POL",
        "value": 973657
    },
    {
        "id": "PRI",
        "value": 595023
    },
    {
        "id": "PRT",
        "value": 87865
    },
    {
        "id": "PRY",
        "value": 494258
    },
    {
        "id": "QAT",
        "value": 872710
    },
    {
        "id": "ROU",
        "value": 68526
    },
    {
        "id": "RUS",
        "value": 950782
    },
    {
        "id": "RWA",
        "value": 143902
    },
    {
        "id": "ESH",
        "value": 435927
    },
    {
        "id": "SAU",
        "value": 881998
    },
    {
        "id": "SDN",
        "value": 648579
    },
    {
        "id": "SDS",
        "value": 516403
    },
    {
        "id": "SEN",
        "value": 87338
    },
    {
        "id": "SLB",
        "value": 755820
    },
    {
        "id": "SLE",
        "value": 299733
    },
    {
        "id": "SLV",
        "value": 994609
    },
    {
        "id": "ABV",
        "value": 202481
    },
    {
        "id": "SOM",
        "value": 888272
    },
    {
        "id": "SRB",
        "value": 711830
    },
    {
        "id": "SUR",
        "value": 503690
    },
    {
        "id": "SVK",
        "value": 427178
    },
    {
        "id": "SVN",
        "value": 620454
    },
    {
        "id": "SWZ",
        "value": 650910
    },
    {
        "id": "SYR",
        "value": 793282
    },
    {
        "id": "TCD",
        "value": 316325
    },
    {
        "id": "TGO",
        "value": 727344
    },
    {
        "id": "THA",
        "value": 301660
    },
    {
        "id": "TJK",
        "value": 257518
    },
    {
        "id": "TKM",
        "value": 164676
    },
    {
        "id": "TLS",
        "value": 155757
    },
    {
        "id": "TTO",
        "value": 418036
    },
    {
        "id": "TUN",
        "value": 688207
    },
    {
        "id": "TUR",
        "value": 996669
    },
    {
        "id": "TWN",
        "value": 853541
    },
    {
        "id": "TZA",
        "value": 575834
    },
    {
        "id": "UGA",
        "value": 495018
    },
    {
        "id": "UKR",
        "value": 278258
    },
    {
        "id": "URY",
        "value": 545407
    },
    {
        "id": "USA",
        "value": 781273
    },
    {
        "id": "UZB",
        "value": 257803
    },
    {
        "id": "VEN",
        "value": 883124
    },
    {
        "id": "VNM",
        "value": 962182
    },
    {
        "id": "VUT",
        "value": 342317
    },
    {
        "id": "PSE",
        "value": 468271
    },
    {
        "id": "YEM",
        "value": 993140
    },
    {
        "id": "ZAF",
        "value": 563376
    },
    {
        "id": "ZMB",
        "value": 131109
    },
    {
        "id": "ZWE",
        "value": 143281
    },
    {
        "id": "KOR",
        "value": 831407
    }
]
const CountryOfOriginChloropleth = () => (
    <div style={{ width: '45%', display: 'flex', alignItems: 'center', marginLeft: '10px', marginRight: 50 }}>
        <div style={{ flexBasis: .5, flexGrow: .5 }}>
            <PopcornNote text="Although there was an overwhelmingly more amount of data available data for Western nations, it appears they tend to pass more often." tooltipText="bye" />
        </div>
        <div style={{ height: '36vh', width: '90%', flexGrow: 1, flexBasis: .8, marginTop: '20px' }}>
            <ResponsiveChoropleth
                data={data}
                theme={theme}
                features={featuresData.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors={['#B5DADA', '#A2D1D1', '#8BC5C5', '#74BABA', '#5DAEAE', '#46A3A3', '#2E9797', '#178C8C', '#008080']}
                domain={[0, 1000000]}
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
                        itemOpacity: 0.85,
                        symbolSize: 10,
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
            />
        </div>
    </div>
)

export default CountryOfOriginChloropleth;