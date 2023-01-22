import { ParentSize } from "@visx/responsive";
import { scaleLinear } from "@visx/scale";
import { Area } from "@visx/shape";
import { curveBasis } from "@visx/curve";
import { LinearGradient } from "@visx/gradient";

const x = (d: any) => d.index;
const y = (d: any) => Math.max(d.value, 0.25);

function range(n: any) {
    return Array.from(Array(n).keys());
}

function interpolateData(data: any) {
    return data.map((d: any, i: number) => interpolatePoints(d, data[i + 1])).flat();
}

function interpolatePoints(current: any, next: any) {
    if (!next) return current;
    const xStep = 0.25;
    const yStep = Math.abs(y(next) - y(current)) * 0.03;
    const yMid1 = Math.abs(y(current) - yStep);
    const yMid2 = Math.abs(y(next) + yStep);
    const xMid1 = Math.abs(x(current) + xStep);
    const xMid2 = Math.abs(x(next) - xStep);
    return [
        current,
        { index: xMid1, value: yMid1 },
        { index: xMid2, value: yMid2 }
    ];
}

const segments = [
    { index: 0, value: 100 },
    { index: 1, value: 50 },
    { index: 2, value: 5 },
    { index: 3, value: 0.5 },
    { index: 4, value: 0 }
];

const data = interpolateData(segments);

export function FunnelChart({ width, height }: { width: number, height: number }) {
    const numSegments = Math.max(...segments.map(x));
    const maxValue = Math.max(...data.map(y));

    const valuePadding = 50;
    const minmax = maxValue + valuePadding;
    const padding = width / numSegments / 2;

    const xScale = scaleLinear({
        range: [0, width],
        domain: [0, numSegments]
    });
    const yScale = scaleLinear({
        range: [height, 0],
        domain: [-minmax, minmax]
    });

    const areas = [
        { pad: 0, opacity: 1 },
        { pad: 15, opacity: 0.2 },
        { pad: 30, opacity: 0.1 }
    ];

    return (
        <svg width={width} height={height}>
            <LinearGradient
                id="gradient"
                from="#2167f9"
                to="#a479ff"
                vertical={false}
            />
            <rect width={width} height={height} fill="#14134b" rx={22} />
            {areas.map((area, i) => {
                return (
                    <Area
                        key={`area-${i}`}
                        data={data}
                        curve={curveBasis}
                        scale={600}
                        x={(_, i) => (1 * xScale(i)) ?? 0}
                        y0={d => y(d) + area.pad}
                        y1={d => -(y(d) + area.pad)}
                        fill="url(#gradient)"
                        fillOpacity={area.opacity}
                        stroke="transparent"
                    />
                );
            })}
            {data.map((d: any, i: number) => {
                if (!data[i + 1] || i === data.length - 1) return null;
                const r = range(numSegments);
                return (
                    <>
                        {r.includes(x(d)) && (
                            <text
                                x={xScale(x(d)) + padding}
                                y={height / 2}
                                dy={".33em"}
                                fill="white"
                                fontSize={22}
                                textAnchor="middle"
                            >
                                {`${y(d)}%`}
                            </text>
                        )}
                        {r.includes(x(d) + 1) && (
                            <line
                                x1={xScale(x(d) + 1)}
                                x2={xScale(x(d) + 1)}
                                y1={0}
                                y2={height}
                                stroke="black"
                                strokeWidth={4}
                            />
                        )}
                    </>
                );
            })}
        </svg>
    );
}