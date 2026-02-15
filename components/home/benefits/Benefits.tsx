import DesktopBenefits from './DesktopBenefits'
import TabletBenefits from './TabletBenefits'

const Benefits = () => {
  return (
    <div className='mt-20 lg:mt-40'>
      <DesktopBenefits className='hidden md:block' />
      <TabletBenefits className='block md:hidden' />
    </div>
  )
}

export default Benefits
