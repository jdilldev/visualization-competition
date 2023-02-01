import { ChartDimensions } from "../../../app/data/types"
import { StatCardCustom } from "../../Shared"

export const InflationChanges = () => {
    //https://www.imf.org/external/datamapper/PCPIPCH@WEO/OEMDC

}

export const CorrelationBetweenUnemploymentAndAccessToElectricity = () => {

}

export const GINI = () => {

}

export const SEDA = () => {

}

export const EconomicGrowthDelta = () => {

}

const Warning = () => {
    return <div>
        <p>Country economies have become increasingly interdependent</p>
        <p>This creates a domino effect when a financial crisis occurs</p>
    </div>
}
export const WarningAboutInterdependentEconomies = ({ dimensions }: { dimensions: ChartDimensions }) => {

    return <StatCardCustom content={<Warning />} dimensions={dimensions} />
}