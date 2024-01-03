import React from 'react'
import ProductCard from '@/components/product-card'
import Loader from '@/components/loader'

interface CartTableProps {
  data: { image: string; item: string; quantity: string; cost: string; }[]
  loading: boolean
}

const CartTable: React.FC<CartTableProps> = ({ data, loading }) => {

  return (
    <div className="justify-center">
      <div className="relative w-[320px] h-[330px] flex flex-col bg-white rounded-xl overflow-y-auto px-3 pt-3 border border-slate-300">
        {!loading && data.map((item, index) => (
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
        {loading && (
          <div className="absolute inset-0 bg-slate-800 bg-opacity-90">
            <Loader />
          </div>
        )}
      </div>      
    </div>
  )
};

CartTable.displayName = 'CartTable'

export default CartTable