import Section from "@/components/layout/Section"
import Container from "@/components/layout/Container"
import { default as statsData, Stat as StatType } from "@/constants/stats"
import { PXCustom } from "@/components/typography/TextSize"
import StatItem from "./StatItem"

type StatsContainerProps = {
  stats: StatType[]
}

const StatsContainer = ({
  stats,
}: StatsContainerProps) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {stats.map((stat) => (
        <StatItem
          key={stat.id}
          value={stat.value}
          label={stat.label}
          suffix={stat.suffix}
          decimals={stat.decimals}
          icon={stat.icon}
        />
      ))}
    </div>
  )
}


const Stats = () => {
  return (
    <Section className="mt-25 lg:mt-50 min-h-max">
      <Container className="px-0 sm:px-0 md:px-8">
        <div className="bg-primary-light rounded-2xl text-white lg:px-24 py-16 space-y-16">
          <PXCustom tag='h2' className="sm:text-6xl text-5xl font-medium tracking-tighter pl-8 lg:pl-0 leading-none ">
            Let the numbers <br />do the talking
          </PXCustom>
          <hr className="border mx-8 lg:mx-0" />
          <StatsContainer stats={statsData} />
        </div>
      </Container>
    </Section>
  )
}

export default Stats
