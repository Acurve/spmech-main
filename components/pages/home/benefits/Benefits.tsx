import DesktopBenefits from './DesktopBenefits'
import TabletBenefits from './TabletBenefits'

const Benefits = () => {
  return (
    <div>
      <DesktopBenefits className='hidden md:block' />
      <TabletBenefits className='block md:hidden' />
    </div>
  )
}

export default Benefits
