import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { createBiodataSlice } from './slices/createBiodataSlice'
import { createCenterDetailsSlice } from './slices/createCenterDetailsSlice'
import { createKidsDetailsSlice } from './slices/createKidsDetailsSlice'
import { createFinancialCommitmentsSlice } from './slices/createFinancialCommitmentsSlice'
import { createAlertSlice } from './slices/createAlertSlice'
import { createEventRegistrationSlice } from './slices/createEventRegistrationSlice'
import { createUserSlice } from './slices/createUserSlice'
import { createCurrentEventSlice } from './slices/createCurrentEventSlice'

export const useAppStore = create<AppStoreState>()(persist(
    (...a) => ({
    ...createBiodataSlice(...a),
    ...createCenterDetailsSlice(...a),
    ...createKidsDetailsSlice(...a),
    ...createFinancialCommitmentsSlice(...a),
    ...createAlertSlice(...a),
    ...createEventRegistrationSlice(...a),
    ...createUserSlice(...a),
    ...createCurrentEventSlice(...a),
    }),
    {
        name: 'app-storage',
      storage: createJSONStorage(() => localStorage)
    }
))