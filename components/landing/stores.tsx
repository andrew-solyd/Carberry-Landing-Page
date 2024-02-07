import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const StoreLogos = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (containerRef.current) {
    // containerRef.current.scrollLeft = 3400;
      containerRef.current.scrollLeft = window.innerWidth * .7// Set the starting position

      
      const scrollAmount = 1; // Change this to control the speed of the scroll
      const scrollInterval = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += scrollAmount // Change += to -= to scroll to the left
        }
      }, 50) // Change this to control the frequency of the scroll

      // Clean up function to clear the interval when the component unmounts
      return () => clearInterval(scrollInterval)
      
      
    }
  }, [])

  return (
    <>
      <div className="relative w-3/4 mx-auto">
        <div className="absolute top-0 bottom-0 z-10 w-5 sm:w-20" style={{background: 'linear-gradient(to right, rgb(var(--background-rgb)), transparent)', marginLeft:'-1px'}} />
        <div ref={containerRef} className="overflow-auto flex px-10 scrollbar-hide relative z-0 items-center justify-center">
          {Array.from({ length: 8 }).flatMap((_, i) =>
            [3, 1, 2, 8, 7, 5 ].map(num => (
              <div key={`large-${num}-${i}`} className="mx-5 sm:mx-10 flex-shrink-0" style={{ minWidth: '150px', maxHeight: '90px' }}>
                <Image src={`/store_logo_${num}.png`} alt={`Store Logo ${num}`} width={150} height={90}/>
                <div className="absolute inset-0 z-10" />
              </div>
            )).concat(
            [4, 6 ].map(num => (
              <div key={`small-${num}-${i}`} className="mx-5 sm:mx-10 flex-shrink-0" style={{ minWidth: '80px', maxHeight: '70px' }}>
                <Image src={`/store_logo_${num}.png`} alt={`Store Logo ${num}`} width={60} height={60}/>
                <div className="absolute inset-0 z-10" />
              </div>
            )))
          )}
        </div>
         <div className="absolute top-0 bottom-0 right-0 z-10 w-5 sm:w-20" style={{background: 'linear-gradient(to left, rgb(var(--background-rgb)), transparent)'}} />
      </div>
    </>
  );
};

StoreLogos.displayName = 'StoreLogos'

export default StoreLogos