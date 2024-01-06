import React from 'react'
import ProductCard from '@/components/mvp/list-item'

interface ShoppingListProps {
  data: { image: string; item: string; quantity: string; cost: string; category: string; }[]
}

const ShoppingList: React.FC<ShoppingListProps> = ({ data }) => {
  // Group items by category
  const groupedData = data.reduce((acc: { [key: string]: typeof data }, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});

  // Sort items within each category alphabetically
  for (let category in groupedData) {
    groupedData[category].sort((a, b) => a.item.localeCompare(b.item));
  }

  // Sort categories alphabetically
  const sortedCategories = Object.keys(groupedData).sort();

  return (
    <>
      {sortedCategories.map((category, index) => (
        <React.Fragment key={index}>
          <span className="mt-2 mb-2 text-slate-600 text-sm font-medium">{category}</span>
          {groupedData[category].map((item, index) => (
            <React.Fragment key={index}>
              <ProductCard 
                image={item.image} 
                item={item.item} 
                quantity={item.quantity} 
                cost={item.cost} 
              />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </>      
  )
};

ShoppingList.displayName = 'ShoppingList'

export default ShoppingList