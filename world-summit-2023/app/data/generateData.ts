import { useMemo } from "react";
import data from "./source_data";
import { CountryProfile, M49_subregion, M49_subregions } from "./types";

type AggregatorType = "country" | "region";

const groupCountriesByRegion = () => {
	const countriesByRegion: { [region: M49_subregion]: CountryProfile[] } = {};
	for (const key of M49_subregions) {
		const countries = data
			.filter((country) => country.region && country.region === key)
			.map((country) => country);

		countriesByRegion[key] = countries;
	}

	return countriesByRegion;
};

const COUNTRIES_BY_REGION = groupCountriesByRegion();

const generateRadarChartData = (metrics: string[]) => {
	//key to be the metric
	//value to be the avg accross all countries
};

export const restrieveSingleSeriesDatum = (
	aggregator: AggregatorType,
	metric: keyof CountryProfile,
	region?: M49_subregion
) => {
	const chartData = [];

	if (aggregator === "country") {
		const source = region ? COUNTRIES_BY_REGION[region] : data;

		source.forEach((country) => {
			let value: number;

			if (country[metric]) {
				value = (
					typeof country[metric] === "string"
						? (value = parseFloat(country[metric] as string))
						: country[metric]
				) as number;

				chartData.push({ key: country.name, data: value });
			}
		});
	} else {
		//go thru each country in the region and avg their metric value
		for (const region in COUNTRIES_BY_REGION) {
			let accumulatedTotal = 0;
			const numOfCountriesInRegion = COUNTRIES_BY_REGION[region].length;
			let value: number;

			COUNTRIES_BY_REGION[region].forEach((country) => {
				if (country[metric]) {
					value = (
						typeof country[metric] === "string"
							? (value = parseFloat(country[metric] as string))
							: country[metric]
					) as number;
				}
				accumulatedTotal += value;
			});
			const avgForRegion = accumulatedTotal / numOfCountriesInRegion;
			chartData.push({ key: region, data: avgForRegion });
		}
	}

	console.log(chartData);
	return chartData;
};

export const retriveRegionallyGroupedDatum = (
	specificRegion: "all" | M49_subregion,
	metric: keyof CountryProfile
) => {
	const chartData = [];

	if (specificRegion === "all") {
		for (const region of M49_subregions) {
			chartData.push({
				key: region,
				data: restrieveSingleSeriesDatum("country", metric, region),
			});
		}
	} else {
		chartData.push({
			key: specificRegion,
			data: restrieveSingleSeriesDatum("country", metric, specificRegion),
		});
	}

	return chartData;
};
