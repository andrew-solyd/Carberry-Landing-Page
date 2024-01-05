import React from 'react'
import ProductCard from '@/components/mvp/list-item'

interface ShoppingListProps {
  data: { image: string; item: string; quantity: string; cost: string; }[]
}

const ShoppingList: React.FC<ShoppingListProps> = ({ data }) => {

  return (
    <>
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
    </>      
  )
};

ShoppingList.displayName = 'ShoppingList'

export default ShoppingList