import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { Text } from '@/components/typography/Text';
import React from 'react';
import StatItem from './StatItem';
import { Accuracy, Experience, MachineInstalled } from '@/constants/statSvgs';
import SectionHeader from '@/components/shared/SectionHeader';
import { getManufacturerInfo } from '@/utils/api/api';



export default async function Stats() {
  const response = await getManufacturerInfo()
  const data = response?.data
  const stats = data.stats
  return (
    <Section className='pt-0'>
      <Container>
        <div>
          {/* heading */}
          <SectionHeader heading="Key stats" eyeBrow='_numbers' className='pb-6' />
          {/* subheading */}
          <div className='grid md:grid-cols-2 gap-2 md:gap-0 border-y border-muted-foreground! py-6 md:py-0'>
            <div className='md:p-6 pl-0'>
              <Text className='font-medium' size='sm'>Measured by Performance</Text>
            </div>
            <div className='md:border-l border-muted-foreground! md:p-6'>
              <Text className='font-medium text-foreground/70 md:text-foreground' size='sm'>Our capabilities are defined by consistent performance on the shop floor. With hundreds of machines installed, near-perfect accuracy, and over a decade of hands-on experience, we focus on delivering dependable CNC solutions that perform reliably at scale—day after day, part after part.</Text>
            </div>
          </div>
          {/* numbers */}
          <div className='grid md:grid-cols-3 border-b border-muted-foreground!'>
            <div className='py-16 md:py-0 border-b md:border-b-0 md:aspect-square flex items-center justify-center px-6 md:border-r border-muted-foreground!'>
              <StatItem icon={<MachineInstalled />} label={stats[0].label} suffix={stats[0].suffix} value={Number(stats[0].value)} />
            </div>

            <div className='py-16 md:py-0 border-b md:border-b-0 md:aspect-square md:border-r flex items-center justify-center px-6  border-muted-foreground!'>
              <StatItem icon={<Experience />} label={stats[1].label} suffix={stats[1].suffix} value={Number(stats[1].value)} />
            </div>

            <div className='py-16 md:py-0 border-b md:border-b-0 md:aspect-square flex items-center justify-center px-6'>
              <StatItem icon={<Accuracy />} label={stats[2].label} suffix={stats[2].suffix} value={Number(stats[2].value)} decimals={1} />
            </div>


          </div>
        </div>

      </Container>
    </Section>
  );
}