import React from 'react'
import ProductCard from '@/components/product-card'

interface CartTableProps {
  tableType: string;
}

const CartTable: React.FC<CartTableProps> = ({ tableType }) => {

  const regularShopItems = [
    { image: '/milk.jpg', item: 'Organic Valley 2% Milk', quantity: '1 gal', cost: '$6.29' },
    { image: '/eggs.jpg', item: '365 Organic Lg Brown Eggs', quantity: '12 ct', cost: '$4.99' },
    { image: '/milk.jpg', item: 'Daves Killer Organic 21 Grain Bread', quantity: '22 oz', cost: '$6.22' },
    { image: '/milk.jpg', item: 'Organic Boneless Chicken Thighs', quantity: '3 lbs', cost: '$25.47' },
    { image: '/milk.jpg', item: 'Organic Bnlss Chuck Roast', quantity: '2 lbs', cost: '$27.98' },
    { image: '/milk.jpg', item: 'Fresh Organic Blueberries', quantity: '24 oz', cost: '$13.98' },
    { image: '/milk.jpg', item: 'Frozen Organic Strawberries', quantity: '16 oz', cost: '$6.38' },
    { image: '/milk.jpg', item: 'Organic Honeycrisp Apples', quantity: '3 lbs', cost: '$11.97' },
    { image: '/milk.jpg', item: 'Organic Carrot Sticks', quantity: '12 oz', cost: '$2.49' },
    { image: '/milk.jpg', item: 'Fresh Organic Broccoli Florets', quantity: '32 oz', cost: '$11.44' },
  ]

  const firstItem = regularShopItems[0]

  console.log(tableType)

  return (
    <div className="w-[302px] h-[fit-content] max-h-[calc(4*70px)] flex flex-col bg-white border border-[rgb(0,0,23)] rounded-lg py-2 px-2 overflow-y-auto">
      {regularShopItems.map((item, index) => (
        <ProductCard 
          key={index}
          image={item.image} 
          item={item.item} 
          quantity={item.quantity} 
          cost={item.cost} 
        />
      ))}
    </div>
  )
};

CartTable.displayName = 'CartTable'

export default CartTable