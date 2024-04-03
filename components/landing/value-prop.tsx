import Image from 'next/image'
import { LandingPage }  from '@/components/landing/variations'
import InViewEvent from '@/components/landing/inview-event'

interface ValuePropProps {
  variation: LandingPage;
}

const ValueProp: React.FC<ValuePropProps> =  ({ variation }) => {
	const { props, propsHeader, propsImages } = variation;

  return (
    <div className="mx-5 flex flex-col items-center">
      <div className="sm:w-[700px]">
        <h1 className="px-10 sm:px-0 text-balance text-3xl text-center mb-10 font-bold">
          { propsHeader }
        </h1>
        <div className="flex flex-col sm:flex-row items-center sm:items-start mt-10">
          <div className="w-[200px] sm:w-[240px] sm:w-full mb-10 sm:mb-0">
            <div className="flex justify-center mb-5">
							<Image src={propsImages[0]} alt="Value prop image" width={100} height={100}/>
						</div>
            <div className="text-center text-pretty font-medium text-lg sm:text-base">{props[0]}</div>
          </div>
          <div className="w-[200px] sm:w-[240px] mx-20 sm:w-full mb-10 sm:mb-0">
            <div className="flex justify-center mb-5">
							<Image src={propsImages[1]} alt="Value prop image" width={100} height={100}/>
						</div>
            <div className="text-center text-pretty font-medium text-lg sm:text-base">{props[1]}</div>
          </div>
          <div className="w-[200px] sm:w-[240px] sm:w-full mb-6 sm:mb-0">
            <div className="flex justify-center mb-5">
							<Image src={propsImages[2]} alt="Value prop image" width={100} height={100}/>
						</div>
            <div className="text-center text-pretty font-medium text-lg sm:text-base">{props[2]}</div>
          </div>
        </div>
      </div>
			<InViewEvent eventName="ValuePropViewed" />
    </div>
  )
}

ValueProp.displayName = 'ValueProp'

export default ValueProp

const container = {
  borderWidth: "0px",
  borderColor: "rgba(0,173,238,0.5)",
  borderRadius: "1.5rem",
  background: "linear-gradient(#fff, rgb(0 0 0 / 0.02))",
  boxShadow: "0px 0px 0px 1px var(--shadow-color), 0px 1px 1px -0.5px var(--shadow-color), 0px 3px 3px -1.5px var(--shadow-color), 0px 6px 6px -3px var(--shadow-color), 0px 12px 12px -6px var(--shadow-color), 0px 24px 24px -12px var(--shadow-color)",
  "--shadow-color": "rgb(0 0 0 / 0.06)"
}