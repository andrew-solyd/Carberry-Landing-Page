import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import '@/app/globals.css'
import Header from '@/components/universal/header'
import Footer from '@/components/universal/footer'
import MealTicket from '@/components/meals/meal-ticket'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper';
import { Parallax } from 'swiper/modules'
import 'swiper/css'

const MealPage: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const lastActiveIndex = useRef(0);
	const [spaceBetween, setSpaceBetween] = useState(140);
  const [slidesOffsetBefore, setSlidesOffsetBefore] = useState(-60);

	useEffect(() => {
    const updateSpaceBetween = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 520) { // Tailwind's 'sm' breakpoint
        setSpaceBetween(200); 
        setSlidesOffsetBefore(screenWidth/4.37*-1) 
      } else {
        setSpaceBetween(140);
        setSlidesOffsetBefore(-60) 
      }
    };

    updateSpaceBetween(); // Call on mount to set initial value
    window.addEventListener('resize', updateSpaceBetween); // Adjust on window resize

    return () => window.removeEventListener('resize', updateSpaceBetween); // Cleanup on unmount
  }, []);

	const handleSlideChange = (swiper: SwiperCore) => {
    const currentActiveIndex = swiper.activeIndex;
    setActiveIndex(currentActiveIndex);
    lastActiveIndex.current = currentActiveIndex; // Update the last active index
  };

  return (
    <>
      <Head>
        <title>Meal Selection</title>
        <meta name="description" content="Choose your meal for today." />
      </Head>
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        <div className="flex flex-row items-center justify-center w-full">
          <div className="w-full sm:w-[460px]"> 
            <Swiper
              centeredSlides={true}
              slidesPerView={2}
              spaceBetween={spaceBetween} // Adjust this value as needed
              initialSlide={0}
              slidesOffsetBefore={slidesOffsetBefore}
              slidesOffsetAfter={0}
              parallax={true}
							modules={[Parallax]}
            
              onBeforeTransitionStart={handleSlideChange}
            >
              {[...Array(5)].map((_, index) => (
								<SwiperSlide key={index}>
									<MealTicket
										activeIndex={activeIndex}
										index={index}
										isIncoming={index === activeIndex} // Assuming activeIndex is the new active slide
										isOutgoing={index === lastActiveIndex.current} // You might need to manage state to track this
									/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MealPage