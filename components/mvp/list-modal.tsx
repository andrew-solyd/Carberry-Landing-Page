// components/table-modal.tsx

import React from 'react'
import { Modal, ModalContent } from '@nextui-org/modal'
import ShoppingList from '@/components/mvp/list'

interface ShoppingListModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  data: { image: string; item: string; quantity: string; cost: string; category: string;}[]
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
              <ShoppingList data ={data} />
            </div>
          </div>
        )}
      </ModalContent>
    </Modal>
  )
}

ShoppingListModal.displayName = 'ShoppingListModal'

export default ShoppingListModal