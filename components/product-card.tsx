import React from 'react'
import Image from 'next/image'

interface ProductCardProps {
  image: string;
  item: string;
  quantity: string;
  cost: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, item, quantity, cost }) => {
  return (
    <div className="flex flex-row justify-between w-full mb-2">
      <Image src={image} alt={item} width={50} height={50} className="object-cover rounded-lg" />
      <div className="flex flex-col w-[270px] justify-start space-y-2 pl-5 pt-1">
        <div className="flex w-2/3 text-sm text-slate-800 font-light">{item}</div>
        <div className="flex justify-between w-full space-x-1 pr-2">
          <div className="text-xs text-slate-400 font-light">{quantity}</div>
          <div className="text-xs text-slate-800 font-light">{cost}</div>
        </div>
      </div>
    </div>
  )
}

ProductCard.displayName = 'ProductCard'

export default ProductCard
