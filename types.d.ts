interface LoginFormInputs {
  email: string;
  password: string;
}

interface RegisterFormInputs extends LoginFormInputs {
  name: string;
  password_confirmation: string;
}

interface ForgotPasswordFormInputs {
  email: string;
}

interface ResetPasswordFormInputs {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
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
  resetBiodata: () => void;
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
  resetKidsDetails: () => void;
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
  resetCenterDetails: () => void;
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
  resetFinancialCommitments: () => void;
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

interface EventRegistrationBase {
  event_id: string;
  user_id: string | number;
  in_person: string;
}

interface EventRegistrationServices extends EventRegistrationBase {
  requires_feeding: string;
  requires_accomodation: string;
  requires_transport: string;
}

interface EventRegistrationAllRequirements extends EventRegistrationServices {
  services_required: string[];
  dates_attending?: string[];
  existing_dependents?: string[];
  new_dependents?: Dependent[];
}

interface EventRegistrationDatesAttending extends EventRegistrationBase {
  dates_attending: string[];
}

interface EventRegistrationAPIFormat extends EventRegistrationAllRequirements {
  requires_feeding: boolean;
  requires_accommodation: boolean;
  requires_transport: boolean;
  in_person: boolean;
}

interface EventReistrationSlice {
  registration: EventRegistrationAllRequirements;
  reg_form_step: number;
  coming_with_kids: boolean;
  setRegistration: (obj: EventRegistrationAllRequirements) => void;
  setRegFormStep: (obj: number) => void;
  setComingWithKids: (obj: boolean) => void;
  resetRegistration: () => void;
}

type AppStoreState = BiodataSlice &
  KidsDetailsSlice &
  CenterDetailsSlice &
  FinancialCommitmentsSlice &
  EventReistrationSlice &
  AlertState &
  UserSlice &
  EventSlice;

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

interface CFCICEvent extends Event {
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
interface EventSlice {
  currentEvent: any;
  addEvent: (obj: Event) => void;
  resetEvent: () => void;
}

interface User {
  id: string;
  email: string;
  name?: string;
  display_picture?: string;
  provider?: string;
  createdAt?: string;
  updatedAt?: string;
}
interface SessionObject {
  user: {
    access_token: string;
    user: User;
    iat: number;
    exp: number;
    jti: string;
  };
  expires: string;
}
interface UserSlice {
  user: User;
  access_token: string;
  addUser: (obj: User, access_token: string) => void;
  resetUser: () => void;
}

interface Dependent {
  first_name: string;
  last_name: string;
  birthday: string;
  allergies: string;
  emergency_contact: string;
  // parent_profile_id: string;
  // event_attendances AttendanceDependent[]
}

interface ProfileAPIFormat {
  phone_number: string;
  occupation: string;
  birthday: string;
  marital_status: string;
  marriage_anniversary: string;
  is_church_member: true;
  church_join_date: string;
  growth_track_completed: true;
  is_tither: true;
  is_partner: true;
  payment_interval: string;
  church_centre_id: number;
  home_cell_id: number;
  colony_id: number;
  dependents: Dependent[];
  roles_and_responsibilities: string[];
  service_team: string[];
  partnered_arms: string[];
}


interface Devotional {
  title: string;
  content: string;
  date: string;
  key_scripture: string;
  devotional_author: string;
}

interface ResetPasswordProps {
    token: string
}
