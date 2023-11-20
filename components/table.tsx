import React from 'react'

interface CartTableProps {
  tableType: string;
}

const CartTable: React.FC<CartTableProps> = ({ tableType }) => {

  const regularShopItems = [
    { item: 'Organic Valley 2% Milk', quantity: '1/2 gal', cost: '$6.29' },
    { item: '365 Organic Extra Large Eggs', quantity: '18 ct', cost: '$7.49' },
    { item: 'Daves Killer Organic 21 Grain Bread', quantity: '22 oz', cost: '$6.22' },
    { item: 'Organic Boneless Skinless Chicken Thighs', quantity: '3 lbs', cost: '$25.47' },
    { item: 'Organic Boneless Chuck Roast', quantity: '2 lbs', cost: '$27.98' },
    { item: 'Fresh Organic Blueberries', quantity: '24 oz', cost: '$13.98' },
    { item: 'Frozen Organic Strawberries', quantity: '16 oz', cost: '$6.38' },
    { item: 'Organic Honeycrisp Apples', quantity: '3 lbs', cost: '$11.97' },
    { item: 'Organic Carrot Sticks', quantity: '12 oz', cost: '$2.49' },
    { item: 'Fresh Organic Broccoli Florets', quantity: '32 oz', cost: '$11.44' },
  ]

  const cartberryShopItems = [
    { item: '365 Organic Lowfat Milk', quantity: '1/2 gal', cost: '$4.99' },
    { item: 'Organic Valley, Pasture Raised Eggs', quantity: '18 ct', cost: '$6.74' },
    { item: '365 Organic Sprouted Bread', quantity: '22 oz', cost: '$4.79' },
    { item: 'Organic Whole Chicken', quantity: '3 lbs', cost: '$13.47' },
    { item: 'Organic Beef Stew Meat', quantity: '2 lbs', cost: '$17.98' },
    { item: 'Frozen Organic Blueberries', quantity: '24 oz', cost: '$5.28' },
    { item: 'Fresh Organic Strawberries', quantity: '16 oz', cost: '$5.99' },
    { item: 'Organic Fuji Apples', quantity: '3 lbs', cost: '$5.97' },
    { item: 'Organic Carrots', quantity: '12 oz', cost: '$1.49' },
    { item: 'Fresh Organic Broccoli Florets', quantity: '32 oz', cost: '$5.29' },
  ]

  const itemsToDisplay = tableType === 'regular' ? regularShopItems : cartberryShopItems

  const totalCost = itemsToDisplay.reduce((total, item) => {
    const cost = parseFloat(item.cost.replace('$', ''))
    return total + cost;
  }, 0)

  return (
    <div className="table-responsive mt-2 text-sm w-[420px] mx-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-1 py-2 w-[290px] mx-auto">Item</th>
            <th className="px-1 py-2 text-right">Quantity</th>
            <th className="px-1 py-2 text-right">Cost</th>
          </tr>
        </thead>
        <tbody>
          {itemsToDisplay.map((item, index) => (
            <tr key={index} className="border-b border-dotted">
              <td className="px-1 py-1">{item.item}</td>
              <td className="px-1 py-1 text-right">{item.quantity}</td>
              <td className="px-1 py-1 text-right">{item.cost}</td>
            </tr>
          ))}
          <tr className="border-t border-[rgb(0,0,23)]">
            <td className="px-1 py-2"></td>
            <td className="px-1 py-2 font-bold text-right">Total</td>
            <td className="px-1 py-2 font-bold text-right">${totalCost.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

CartTable.displayName = 'CartTable'

export default CartTable