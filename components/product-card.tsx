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
    <div className="flex flex-row justify-between w-full my-1 text-sm border-b border-dashed border-gray-400">
      <Image src={image} alt={item} width={64} height={64} className="object-cover rounded-lg" />
      <div className="flex flex-col w-[225px] mt-1 ml-3 justify-start space-y-1">
        <div className="flex w-full">{item}</div>
        <div className="flex justify-between w-full space-x-3">
          <div>{quantity}</div>
          <div>{cost}</div>
        </div>
      </div>
    </div>
  )
}

ProductCard.displayName = 'ProductCard'

export default ProductCard
