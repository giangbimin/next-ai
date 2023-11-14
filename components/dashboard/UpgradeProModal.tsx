'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { usePlanStore } from '@/stores/plan-store'
import SubscriptionButton from '../elements/SubscriptionButton'
import { FC } from 'react'

interface UpgradeProModalProps {
  isProPlan?: boolean
}

const UpgradeProModal: FC<UpgradeProModalProps> = ({ isProPlan }) => {
  const { isOpen, handleCloseProModal } = usePlanStore()

  return (
    <Dialog open={isOpen}>
      <DialogContent onClose={handleCloseProModal} showOverlay={true} >
        <SubscriptionButton isPro={isProPlan} />
      </DialogContent>
    </Dialog>
  )
}

export default UpgradeProModal
