import { StateCreator } from "zustand";

const initialState = {
  financialCommitments: {
    is_tither: "",
    is_partner: "",
    partnered_arms: [],
    payment_interval: "",
  },
};

export const createFinancialCommitmentsSlice: StateCreator<
  FinancialCommitmentsSlice
> = (set) => ({
  ...initialState,
  setFinancialCommitments: (obj) => set({ financialCommitments: obj }),
  resetFinancialCommitments: () => set(() => ({ ...initialState })),
});
