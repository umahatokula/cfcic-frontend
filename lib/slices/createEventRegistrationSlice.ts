import { number } from "yup";
import { StateCreator } from "zustand";

const initialState = {
  registration: {
    event_id: "",
    user_id: "",
    in_person: "",
    requires_feeding: "",
    requires_accomodation: "",
    requires_transport: "",
    services_required: [],
    dates_attending: [],
    existing_dependents: [],
    new_dependents: [],
  },
  reg_form_step: 1, // 1 = Attendance Mode, 2 = Coming with Kids, 3 = Require accommodation, Feeding and Transportation
  coming_with_kids: false,
};

export const createEventRegistrationSlice: StateCreator<
  EventReistrationSlice
> = (set) => ({
  ...initialState,
  setRegistration: (obj) => set({ registration: obj }),
  setRegFormStep: (step) => set({ reg_form_step: step }),
  setComingWithKids: (data) => set({ coming_with_kids: data }),
  resetRegistration: () => set(() => ({ ...initialState })),
});
