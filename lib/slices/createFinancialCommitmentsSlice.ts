import { StateCreator } from "zustand"

export const createFinancialCommitmentsSlice: StateCreator<FinancialCommitmentsSlice> = (set) => ({
    financialCommitments: {
        is_tither: "",
        is_partner: "",
        partnered_arms: [],
        payment_interval: ""
    },
    setFinancialCommitments: (obj) => set(
        { financialCommitments: obj }
    )
})