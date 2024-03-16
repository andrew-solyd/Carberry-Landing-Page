import React from 'react'
import Image from 'next/image'

interface MealTicketProps {
  activeIndex: number;
  index: number;
  isIncoming: boolean;
  isOutgoing: boolean;
}

const MealTicket: React.FC<MealTicketProps> = ({ activeIndex, index, isIncoming, isOutgoing }) => {
	let parallaxY = "10%";
	if (isIncoming || isOutgoing) {
		parallaxY = "-10%";
	}
  if (index === activeIndex) {
    parallaxY = "-10%";
  }

  return (
    <div style={container} className="w-[275px] mb-8">
      <div 
				className="overflow-hidden w-[275px] h-[275px] relative"	
				style={{ borderRadius: '1.5rem 1.5rem 0 0' }}
			>
				<div 
					className="w-[470px] h-[470px] absolute"
					style={{ top: '-50px', left: '-100px' }} 
					data-swiper-parallax-x="-20%"
          data-swiper-parallax-y={parallaxY}
				>
					<Image
						src="/meals/meal_photo_1.webp"
						alt="Prepared meal"
						fill					
						object-fit="cover"						
					/>
				</div>
      </div>
      <div className="p-4 mb-2">
        <h2 className="text-lg font-semibold leading-snug mb-1">Chicken & Chickpea Curry with Garlic Butter Naan</h2>
        <p className="text-xs text-gray-500 mb-3">Total cook time: 25 minutes</p>
        <p className="text-gray-500 text-sm">Ingredients: mixed greens, squash, pomegranate seeds, mozzarella...</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

const container = {
	borderWidth: "0px",
	borderColor: "rgba(0,173,238,0.5)",
	borderRadius: "1.5rem",
	background: "linear-gradient(#fff, rgb(0 0 0 / 0.02))",
	boxShadow: "0px 0px 0px 1px var(--shadow-color), 0px 1px 1px -0.5px var(--shadow-color), 0px 3px 3px -1.5px var(--shadow-color), 0px 6px 6px -3px var(--shadow-color), 0px 12px 12px -6px var(--shadow-color), 0px 24px 24px -12px var(--shadow-color)",
	"--shadow-color": "rgb(0 0 0 / 0.06)"
};

export default MealTicket;