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
    <div className="flex flex-row justify-between w-full my-1 text-sm border-b border-dashed border-gray-400 pb-1">
      <Image src={image} alt={item} width={50} height={50} className="object-cover rounded-lg" />
      <div className="flex flex-col w-[270px] justify-start space-y-1">
        <div className="flex w-full">{item}</div>
        <div className="flex justify-between w-full space-x-1">
          <div>{quantity}</div>
          <div>{cost}</div>
        </div>
      </div>
    </div>
  )
}

ProductCard.displayName = 'ProductCard'

export default ProductCard
