import Image from 'next/image'

interface ValuePropProps {
  props: string[]
  propsHeader: string
	propsImages: string[]
}

const ValueProp: React.FC<ValuePropProps> =  ({ props, propsHeader, propsImages }) => {

	console.log(propsImages[0])

  return (
    <div className="mx-5 flex flex-col items-center">
      <div className="sm:w-[700px]">
        <h1 className="mx-10 sm:mx-20 text-balance text-3xl text-center mb-10 mx-5 font-semibold">
          { propsHeader }
        </h1>
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          <div className="w-[200px] sm:w-[240px] sm:w-full mb-10 sm:mb-0">
            <div className="flex justify-center mb-5">
							<Image src={propsImages[0]} alt="Value prop image" width={100} height={100} style={container}/>
						</div>
            <div className="text-center text-pretty">{props[0]}</div>
          </div>
          <div className="w-[200px] sm:w-[240px] mx-20 sm:w-full mb-10 sm:mb-0">
            <div className="flex justify-center mb-5">
							<Image src={propsImages[1]} alt="Value prop image" width={100} height={100} style={container}/>
						</div>
            <div className="text-center text-pretty">{props[1]}</div>
          </div>
          <div className="w-[200px] sm:w-[240px] sm:w-full mb-6 sm:mb-0">
            <div className="flex justify-center mb-5">
							<Image src={propsImages[2]} alt="Value prop image" width={100} height={100} style={container}/>
						</div>
            <div className="text-center  text-pretty">{props[2]}</div>
          </div>
        </div>
      </div>
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