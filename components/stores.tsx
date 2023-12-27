import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const StoreLogos = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
  if (containerRef.current) {
    containerRef.current.scrollLeft = 3400;
  }
}, [])

  return (
    <>
      <div className="relative w-3/4 mx-auto">
        <div className="absolute top-0 bottom-0 z-10" style={{background: 'linear-gradient(to right, rgb(var(--background-rgb)), transparent)' , width: '100px', marginLeft:'-1px'}} />
        <div ref={containerRef} className="overflow-auto flex px-10 scrollbar-hide relative z-0 items-center justify-center">
          {Array.from({ length: 8 }).flatMap((_, i) =>
            [3, 1, 2, 7, 5 ].map(num => (
              <div key={`${num}-${i}`} className="mx-10 flex-shrink-0" style={{ minWidth: '150px', maxHeight: '90px' }}>
                <Image src={`/store_logo_${num}.png`} alt={`Store Logo ${num}`} width={150} height={90}/>
              </div>
            )).concat(
            [4, 6 ].map(num => (
              <div key={`${num}-${i}`} className="mx-10 flex-shrink-0" style={{ minWidth: '80px', maxHeight: '70px' }}>
                <Image src={`/store_logo_${num}.png`} alt={`Store Logo ${num}`} width={60} height={60}/>
              </div>
            )))
          )}
        </div>
         <div className="absolute top-0 bottom-0 right-0 z-10" style={{background: 'linear-gradient(to left, rgb(var(--background-rgb)), transparent)', width: '100px'}} />
      </div>
    </>
  );
};

StoreLogos.displayName = 'StoreLogos'

export default StoreLogos