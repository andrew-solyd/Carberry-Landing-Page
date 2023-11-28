import React from 'react'
import ProductCard from '@/components/product-card'

interface CartTableProps {
  tableType: string;
}

const CartTable: React.FC<CartTableProps> = ({ tableType }) => {

  const regularShopItems = [
    { image: '/regular_shop/milk.jpg', item: 'Organic Valley 2% Milk', quantity: '1 gallon', cost: '$7.69' },
    { image: '/regular_shop/eggs.jpg', item: 'Organic Valley, Pasture Raised Eggs', quantity: '12 count', cost: '$7.29' },    
    { image: '/regular_shop/bread.jpg', item: 'Daves Killer Organic 21 Grain Bread', quantity: '27 ounces', cost: '$6.79' },
    { image: '/regular_shop/chicken.jpg', item: 'Organic Boneless Chicken Thighs', quantity: '3 pounds', cost: '$25.47' },
    { image: '/regular_shop/beef.jpg', item: 'Organic Beef Stew Meat', quantity: '2 pounds', cost: '$27.98' },
    { image: '/regular_shop/blackberries.jpg', item: 'Fresh Organic Blackberries', quantity: '24 ounces', cost: '$13.98' },
    { image: '/regular_shop/strawberries.jpg', item: 'Frozen Organic Strawberries', quantity: '20 ounces', cost: '$7.98' },
    { image: '/regular_shop/apples.jpg', item: 'Organic Honeycrisp Apples', quantity: '3 pounds', cost: '$11.97' },
    { image: '/regular_shop/carrots.jpg', item: 'Organic Carrot Sticks', quantity: '12 ounces', cost: '$2.49' },
    { image: '/regular_shop/broccoli.jpg', item: 'Fresh Organic Broccoli Florets', quantity: '32 ounces', cost: '$11.44' },
  ]

  const cartberryShopItems = [    
    { image: '/cartberry_shop/milk.jpg', item: '365 Organic Lowfat Milk', quantity: '1 gallon', cost: '$6.29' },
    { image: '/cartberry_shop/eggs.jpg', item: '365 Organic Large Brown Eggs', quantity: '12 count', cost: '$4.99' },
    { image: '/cartberry_shop/bread.jpg', item: '365 Organic Sprouted Bread', quantity: '22 ounces', cost: '$5.49' },
    { image: '/cartberry_shop/chicken.jpg', item: 'Organic Whole Chicken', quantity: '3 pounds', cost: '$10.47' },
    { image: '/cartberry_shop/beef.jpg', item: 'Boneless Beef Chuck Roast', quantity: '2 pounds', cost: '$21.98' },
    { image: '/cartberry_shop/blueberries.jpg', item: 'Frozen Organic Blueberries', quantity: '32 ounces', cost: '$6.99' },
    { image: '/cartberry_shop/strawberries.jpg', item: 'Fresh Organic Strawberries', quantity: '16 ounces', cost: '$5.99' },
    { image: '/cartberry_shop/apples.jpg', item: 'Organic Fuji Apples', quantity: '3 pounds', cost: '$5.97' },
    { image: '/cartberry_shop/carrots.jpg', item: 'Organic Carrots', quantity: '12 ounces', cost: '$1.49' },
    { image: '/cartberry_shop/broccoli.jpg', item: 'Frozen Organic Broccoli Florets', quantity: '32 ounces', cost: '$5.29' },
  ]

  const itemsToDisplay = tableType === 'regular' ? regularShopItems : cartberryShopItems

  const totalCost = itemsToDisplay.reduce((total, item) => {
    const cost = parseFloat(item.cost.replace('$', ''))
    return total + cost;
  }, 0)

  return (
    <div>
      <div className="w-[300px] h-[fit-content] max-h-[calc(4*70px)] flex flex-col bg-white border border-[rgb(0,0,23)] rounded-lg py-2 px-2 overflow-y-auto">
        {itemsToDisplay.map((item, index) => (
          <React.Fragment key={index}>
            <ProductCard 
              image={item.image} 
              item={item.item} 
              quantity={item.quantity} 
              cost={item.cost} 
            />
            {index < itemsToDisplay.length - 1 && <div className="border-t border-dashed border-gray-400 mx-6 my-1"></div>}
        </React.Fragment>
        ))}
      </div>
      <div className="text-md font-medium text-right my-2 mx-3">
        Total ${totalCost.toFixed(2)}
      </div>
    </div>
  )
};

CartTable.displayName = 'CartTable'

export default CartTable