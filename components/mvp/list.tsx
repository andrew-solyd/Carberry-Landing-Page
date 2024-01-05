import React from 'react'
import ProductCard from '@/components/mvp/list-item'

interface ShoppingListProps {
  data: { image: string; item: string; quantity: string; cost: string; }[]
}

const ShoppingList: React.FC<ShoppingListProps> = ({ data }) => {

  return (
    <div className="relative w-[320px] h-[330px] flex flex-col bg-white rounded-xl overflow-y-auto px-3 pt-3 border border-slate-300">
      {data.map((item, index) => (
          <React.Fragment key={index}>
            <ProductCard 
              image={item.image} 
              item={item.item} 
              quantity={item.quantity} 
              cost={item.cost} 
            />
            {index < data.length - 1 && <div className="border-t border-dashed border-gray-200 mx-2 my-1"></div>}
        </React.Fragment>
      ))}
    </div>      
  )
};

ShoppingList.displayName = 'ShoppingList'

export default ShoppingList