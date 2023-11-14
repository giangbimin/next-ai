import { create } from "zustand";

export interface PlanState {
  isOpen: boolean;
  handleOpenOrCloseProModal: () => void;
  handleCloseProModal: () => void;
}

export const usePlanStore = create<PlanState>()((set) => ({
  isOpen: false,
  handleOpenOrCloseProModal: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  handleCloseProModal: () => set((state) => ({ ...state, isOpen: false })),
}));