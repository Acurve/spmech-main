import { StatItemProps } from "@/components/home/stats/StatItem"
import { Accuracy, CountriesServed, Experience, MachineInstalled } from "./statSvgs"

export type Stat = Pick<StatItemProps, "decimals" | "label" | "value" | "suffix" | "icon"> & { id: string }

const stats: Stat[] = [
    {
        id: "019c5f9f-c032-756e-bb01-9b179484ea63",
        value: 200,
        label: "Machines Installed",
        suffix: "+",
        icon: <MachineInstalled />
    },
    {
        id: "019c5f9f-c032-70d0-99da-708c46c7b599",
        value: 15,
        label: "Years of Experience",
        suffix: "+",
        icon: <Experience />
    },
    {
        id: "019c5f9f-c032-7fbc-85b5-d49b51a2fb0b",
        value: 99.8,
        label: "Accuracy",
        suffix: "%",
        decimals: 1,
        icon: <Accuracy />
    },
    {
        id: "019c5f9f-c032-7791-9078-1b14832fbd96",
        value: 12,
        label: "Countries Served",
        icon: <CountriesServed />
    }
]



export default stats