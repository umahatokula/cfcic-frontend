import { StateCreator } from "zustand";

export const createEventRegistrationSlice: StateCreator<
  EventReistrationSlice
> = (set) => ({
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
  setRegistration: (obj) => set({ registration: obj }),
});

// import { create } from "zustand";
// type State = {
//   registration: EventRegistrationAllRequirements;
// };

// type Actions = {
//   setRegistration: (obj: EventRegistrationAllRequirements) => void;
//   reset: () => void
// }

// // define the initial state
// const initialState = {
//   registration: {
//     event_id: "",
//     user_id: "",
//     in_person: "",
//     requires_feeding: "",
//     requires_accomodation: "",
//     requires_transport: "",
//     services_required: [],
//     dates_attending: [],
//     existing_dependents: [],
//     new_dependents: [],
//   },
// };

// // create store
// export const createEventRegistrationSlice = create<State & Actions>()((set) => ({
//   ...initialState,

//   setRegistration: (obj) => {
//     set({ registration: obj });
//   },
//   reset: () => {
//     set(initialState);
//   },
// }));
