// components/table-modal.tsx

import React from 'react'
import { Modal, ModalContent } from '@nextui-org/modal'
import ProductCard from '@/components/product-card'

interface ShoppingListModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  data: { image: string; item: string; quantity: string; cost: string; }[]
}

const ShoppingListModal: React.FC<ShoppingListModalProps> = ({ isOpen, onOpenChange, data }) => {
  const handleClose = () => {
    onOpenChange(false)
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={handleClose} placement="center" className="h-5/6 bg-white">
      <ModalContent>
        {() => (
          <div className="flex flex-col pt-5 items-center justify-start overflow-y-auto">
            <div className="flex flex-col bg-white px-3 pt-3">
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
          </div>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ShoppingListModal