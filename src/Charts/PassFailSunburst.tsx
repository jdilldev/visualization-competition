import { ResponsiveSunburst } from '@nivo/sunburst'
import * as React from "react";
import { CustomTooltip } from '.';

const sunData = {
    "name": "nivo",
    "color": "hsl(107, 70%, 50%)",
    "children": [
        {
            "name": "viz",
            "color": "hsl(219, 70%, 50%)",
            "children": [
                {
                    "name": "stack",
                    "color": "hsl(9, 70%, 50%)",
                    "children": [
                        {
                            "name": "cchart",
                            "color": "hsl(292, 70%, 50%)",
                            "loc": 133838
                        },
                        {
                            "name": "xAxis",
                            "color": "hsl(3, 70%, 50%)",
                            "loc": 103513
                        },
                        {
                            "name": "yAxis",
                            "color": "hsl(202, 70%, 50%)",
                            "loc": 136938
                        },
                        {
                            "name": "layers",
                            "color": "hsl(238, 70%, 50%)",
                            "loc": 160461
                        }
                    ]
                },
                {
                    "name": "ppie",
                    "color": "hsl(234, 70%, 50%)",
                    "children": [
                        {
                            "name": "chart",
                            "color": "hsl(159, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pie",
                                    "color": "hsl(321, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "outline",
                                            "color": "hsl(107, 70%, 50%)",
                                            "loc": 152057
                                        },
                                        {
                                            "name": "slices",
                                            "color": "hsl(244, 70%, 50%)",
                                            "loc": 64930
                                        },
                                        {
                                            "name": "bbox",
                                            "color": "hsl(15, 70%, 50%)",
                                            "loc": 62452
                                        }
                                    ]
                                },
                                {
                                    "name": "donut",
                                    "color": "hsl(79, 70%, 50%)",
                                    "loc": 156115
                                },
                                {
                                    "name": "gauge",
                                    "color": "hsl(326, 70%, 50%)",
                                    "loc": 137474
                                }
                            ]
                        },
                        {
                            "name": "legends",
                            "color": "hsl(83, 70%, 50%)",
                            "loc": 146928
                        }
                    ]
                }
            ]
        },
        {
            "name": "colors",
            "color": "hsl(285, 70%, 50%)",
            "children": [
                {
                    "name": "rgb",
                    "color": "hsl(289, 70%, 50%)",
                    "loc": 114528
                },
                {
                    "name": "hsl",
                    "color": "hsl(103, 70%, 50%)",
                    "loc": 72162
                }
            ]
        },
        {
            "name": "utils",
            "color": "hsl(2, 70%, 50%)",
            "children": [
                {
                    "name": "randomize",
                    "color": "hsl(152, 70%, 50%)",
                    "loc": 102673
                },
                {
                    "name": "resetClock",
                    "color": "hsl(349, 70%, 50%)",
                    "loc": 141501
                },
                {
                    "name": "noop",
                    "color": "hsl(1, 70%, 50%)",
                    "loc": 138819
                },
                {
                    "name": "tick",
                    "color": "hsl(240, 70%, 50%)",
                    "loc": 41279
                },
                {
                    "name": "forceGC",
                    "color": "hsl(220, 70%, 50%)",
                    "loc": 63971
                },
                {
                    "name": "stackTrace",
                    "color": "hsl(244, 70%, 50%)",
                    "loc": 55718
                },
                {
                    "name": "dbg",
                    "color": "hsl(153, 70%, 50%)",
                    "loc": 150795
                }
            ]
        },
        {
            "name": "generators",
            "color": "hsl(130, 70%, 50%)",
            "children": [
                {
                    "name": "address",
                    "color": "hsl(339, 70%, 50%)",
                    "loc": 187417
                },
                {
                    "name": "city",
                    "color": "hsl(185, 70%, 50%)",
                    "loc": 133345
                },
                {
                    "name": "animal",
                    "color": "hsl(271, 70%, 50%)",
                    "loc": 135476
                },
                {
                    "name": "movie",
                    "color": "hsl(27, 70%, 50%)",
                    "loc": 163145
                },
                {
                    "name": "user",
                    "color": "hsl(264, 70%, 50%)",
                    "loc": 37098
                }
            ]
        },
        {
            "name": "set",
            "color": "hsl(201, 70%, 50%)",
            "children": [
                {
                    "name": "clone",
                    "color": "hsl(303, 70%, 50%)",
                    "loc": 162607
                },
                {
                    "name": "intersect",
                    "color": "hsl(20, 70%, 50%)",
                    "loc": 76041
                },
                {
                    "name": "merge",
                    "color": "hsl(162, 70%, 50%)",
                    "loc": 144943
                },
                {
                    "name": "reverse",
                    "color": "hsl(163, 70%, 50%)",
                    "loc": 159462
                },
                {
                    "name": "toArray",
                    "color": "hsl(359, 70%, 50%)",
                    "loc": 167772
                },
                {
                    "name": "toObject",
                    "color": "hsl(277, 70%, 50%)",
                    "loc": 177714
                },
                {
                    "name": "fromCSV",
                    "color": "hsl(20, 70%, 50%)",
                    "loc": 104093
                },
                {
                    "name": "slice",
                    "color": "hsl(15, 70%, 50%)",
                    "loc": 44084
                },
                {
                    "name": "append",
                    "color": "hsl(321, 70%, 50%)",
                    "loc": 24108
                },
                {
                    "name": "prepend",
                    "color": "hsl(239, 70%, 50%)",
                    "loc": 85163
                },
                {
                    "name": "shuffle",
                    "color": "hsl(246, 70%, 50%)",
                    "loc": 121112
                },
                {
                    "name": "pick",
                    "color": "hsl(256, 70%, 50%)",
                    "loc": 112017
                },
                {
                    "name": "plouc",
                    "color": "hsl(172, 70%, 50%)",
                    "loc": 158839
                }
            ]
        },
        {
            "name": "text",
            "color": "hsl(226, 70%, 50%)",
            "children": [
                {
                    "name": "trim",
                    "color": "hsl(111, 70%, 50%)",
                    "loc": 12468
                },
                {
                    "name": "slugify",
                    "color": "hsl(327, 70%, 50%)",
                    "loc": 110885
                },
                {
                    "name": "snakeCase",
                    "color": "hsl(54, 70%, 50%)",
                    "loc": 118710
                },
                {
                    "name": "camelCase",
                    "color": "hsl(232, 70%, 50%)",
                    "loc": 148475
                },
                {
                    "name": "repeat",
                    "color": "hsl(231, 70%, 50%)",
                    "loc": 101428
                },
                {
                    "name": "padLeft",
                    "color": "hsl(249, 70%, 50%)",
                    "loc": 23663
                },
                {
                    "name": "padRight",
                    "color": "hsl(146, 70%, 50%)",
                    "loc": 153616
                },
                {
                    "name": "sanitize",
                    "color": "hsl(308, 70%, 50%)",
                    "loc": 138354
                },
                {
                    "name": "ploucify",
                    "color": "hsl(218, 70%, 50%)",
                    "loc": 192412
                }
            ]
        },
        {
            "name": "misc",
            "color": "hsl(54, 70%, 50%)",
            "children": [
                {
                    "name": "greetings",
                    "color": "hsl(130, 70%, 50%)",
                    "children": [
                        {
                            "name": "hey",
                            "color": "hsl(164, 70%, 50%)",
                            "loc": 1818
                        },
                        {
                            "name": "HOWDY",
                            "color": "hsl(93, 70%, 50%)",
                            "loc": 50481
                        },
                        {
                            "name": "aloha",
                            "color": "hsl(214, 70%, 50%)",
                            "loc": 96699
                        },
                        {
                            "name": "AHOY",
                            "color": "hsl(348, 70%, 50%)",
                            "loc": 109333
                        }
                    ]
                },
                {
                    "name": "other",
                    "color": "hsl(307, 70%, 50%)",
                    "loc": 62968
                },
                {
                    "name": "path",
                    "color": "hsl(178, 70%, 50%)",
                    "children": [
                        {
                            "name": "pathA",
                            "color": "hsl(172, 70%, 50%)",
                            "loc": 4234
                        },
                        {
                            "name": "pathB",
                            "color": "hsl(55, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathB1",
                                    "color": "hsl(344, 70%, 50%)",
                                    "loc": 137562
                                },
                                {
                                    "name": "pathB2",
                                    "color": "hsl(222, 70%, 50%)",
                                    "loc": 121581
                                },
                                {
                                    "name": "pathB3",
                                    "color": "hsl(212, 70%, 50%)",
                                    "loc": 168917
                                },
                                {
                                    "name": "pathB4",
                                    "color": "hsl(194, 70%, 50%)",
                                    "loc": 32435
                                }
                            ]
                        },
                        {
                            "name": "pathC",
                            "color": "hsl(211, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pathC1",
                                    "color": "hsl(70, 70%, 50%)",
                                    "loc": 85354
                                },
                                {
                                    "name": "pathC2",
                                    "color": "hsl(103, 70%, 50%)",
                                    "loc": 26805
                                },
                                {
                                    "name": "pathC3",
                                    "color": "hsl(233, 70%, 50%)",
                                    "loc": 78786
                                },
                                {
                                    "name": "pathC4",
                                    "color": "hsl(244, 70%, 50%)",
                                    "loc": 111723
                                },
                                {
                                    "name": "pathC5",
                                    "color": "hsl(190, 70%, 50%)",
                                    "loc": 51650
                                },
                                {
                                    "name": "pathC6",
                                    "color": "hsl(29, 70%, 50%)",
                                    "loc": 188939
                                },
                                {
                                    "name": "pathC7",
                                    "color": "hsl(337, 70%, 50%)",
                                    "loc": 198218
                                },
                                {
                                    "name": "pathC8",
                                    "color": "hsl(231, 70%, 50%)",
                                    "loc": 87814
                                },
                                {
                                    "name": "pathC9",
                                    "color": "hsl(283, 70%, 50%)",
                                    "loc": 190663
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
const PassFailSunburst = () => (
    <div style={{ width: '30%' }}>
        <ResponsiveSunburst
            data={sunData}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            id="name"
            value="loc"
            cornerRadius={2}
            borderColor={{ theme: 'background' }}
            colors={{ scheme: 'nivo' }}
            childColor={{ from: 'color', modifiers: [['brighter', 0.1]] }}
            enableArcLabels={true}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 1.4]] }}
            tooltip={({ id, value, color }) => <CustomTooltip barType='sunburst' content={{ name: id as string, value: value, color: color }} />}
        />
    </div>
)

export default PassFailSunburst

