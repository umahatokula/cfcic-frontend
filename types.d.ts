interface LoginFormInputs {
  email: string;
  password: string;
}

interface RegisterFormInputs extends LoginFormInputs {
  name: string;
  passwordConfirmation: string;
}

interface DashboardCard {
  link: string;
  img: string;
  heading: string;
  body: string;
}

interface InfoCardProps {
  iconUrl: string;
  content: string;
}

interface BiodataCompulsoryFields {
  is_church_member: string;
  phone_number: string;
  occupation: string;
  birthday: string;
  marital_status: string;
}

interface Biodata extends BiodataCompulsoryFields {
  marriage_anniversary: string;
  kids: string;
}

interface BiodataForm extends Biodata {
  haveKidsDetails: string;
}

interface BiodataSlice {
  biodata: Biodata;
  setBiodata: (obj: Biodata) => void;
  addNewKid: () => void;
}

interface SingleKidsDetail {
  first_name: string;
  last_name: string;
  birthday: string;
  allergies: string;
  emergency_contact: string;
}

interface NewKidInputs {
  newKid: SingleKidsDetail;
}

interface KidsDetailsSlice {
  kidsDetails: SingleKidsDetail[];
  setKidsDetails: (arr: SingleKidsDetail[]) => void;
}

interface CenterDetails {
  church_join_date: string;
  church_centre_id: string;
  growth_track_completed: string;
  service_team: string[];
  home_cell_id: string;
  colony_id: string;
  roles_and_responsibilities: string[];
}

interface CenterDetailsSlice {
  centerDetails: CenterDetails;
  setCenterDetails: (obj: CenterDetails) => void;
}

interface CenterDetailsError {
  church_join_date: string;
  church_centre_id: string;
  growth_track_completed: string;
  service_team: string;
  home_cell_id: string;
  colony_id: string;
  roles_and_responsibilities: string;
}

interface FinancialCommitmentsHalf {
  is_tither: string;
  is_partner: string;
}

interface FinancialCommitments extends FinancialCommitmentsHalf {
  partnered_arms: string[];
  payment_interval: string;
}

interface FinancialCommitmentsSlice {
  financialCommitments: FinancialCommitments;
  setFinancialCommitments: (obj: FinancialCommitments) => void;
}

interface AlertObj {
  message: string | null;
  type: string | null;
}

interface AlertState {
  alertExists: boolean | null;
  alert: AlertObj;
  setAlert: (obj: AlertObj) => void;
  clearAlert: () => void;
}

interface EventRegistration {
  event_id: string;
  user_id: string | number;
  in_person: string;
}

interface EventRegistrationServices extends EventRegistration {
  requires_feeding: string;
  requires_accomodation: string;
  requires_transport: string;
}

interface EventRegistrationAllRequirements extends EventRegistrationServices {
  services_required: string[];
  dates_attending?: string[];
  existing_dependents?: string[];
  new_dependents?: string[];
}

interface EventReistrationSlice {
  registration: EventRegistrationAllRequirements;
  setRegistration: (obj: EventRegistrationAllRequirements) => void;
}

type AppStoreState = BiodataSlice &
  KidsDetailsSlice &
  CenterDetailsSlice &
  FinancialCommitmentsSlice &
  EventReistrationSlice &
  AlertState;

interface FinancialCommitmentsError {
  isTither: string;
  isPartner: string;
  partnered_arms: string;
  preferredPaymentInterval: string;
}

interface AuthHeadingProps {
  heading: string;
  text: string;
}

interface OnboardHeadingProps extends AuthHeadingProps {
  isMainHeading: boolean;
}

interface SelectOptionProps {
  label: string;
  value: string;
}

interface ComponentProps<T> {
  componentProps: T;
}

interface ComponentWithChildrenAlone {
  children: React.ReactNode;
}

interface ComponentWithChildrenProps<T> {
  children: React.ReactNode;
  componentProps: T;
}

interface HeaderProps {
  page: string;
}

interface CurrentEventSingleProps {
  date: string;
  image: StaticImageData;
  title: string;
  optionalText?: string;
  shortName: string;
}

interface UpcomingEventSingleProps {
  date: string;
  image: StaticImageData;
  title: string;
  optionalText?: string;
  shortName?: string;
}

interface ButtonLinkProps {
  text: string;
  linkTo?: string;
}

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  disabled: boolean;
  clickHandler: ((e: React.FormEvent) => void) | (() => void);
}

interface EventRegHistoryProps {
  shortName: string;
}

interface EventRegHeroProps {
  heading: string;
  image1: StaticImageData;
  image2: StaticImageData;
  text: string;
}
//  Addictional
interface Event {
  id: string;
  name: string;
  tagline: string;
  banner_image: string;
  start_date: string;
  end_date: string;
  createdAt: string;
  updatedAt: string;
}

interface EventProps {
  event: Event;
  isRegistrationOpen?: boolean;
}

interface User {
  name: string;
  id: string;
  email: string;
  display_picture: string;
}
