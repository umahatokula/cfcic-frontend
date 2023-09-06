export type LoginFormInputs = {
  email: string;
  password: string;
};

export type RegistrationFormInputs = {
  email: string;
  password: string;
  password_confirmation: string;
};

export type BioDataInputs = {
  userId: number;
  phone_number: string;
  occupation: string;
  birthday: string;
  marital_status: number;
  marriage_anniversary: string;
  is_church_member: number;
  dependents: Dependent[];
  got_kids: boolean;
  tell_us_about_your_kids: boolean;
  church_join_date: string;
  church_centre_id: number;
  growth_track_completed: boolean;
  service_team: ProfileServiceTeam[];
  home_cell_id: number;
  colony_id: number;
  roles_and_responsibilities: RolesAndResponsibilitiesProfile[];
  is_tither: boolean;
  is_partner: boolean;
  partnered_arms: ChurchArmProfile;
  payment_interval: string;
};

export type Dependent = {
  first_name: string;
  last_name: string;
  birthday: string;
  allergies: string;
  emergency_contact: string;
  parent_profile_id: string;
  // event_attendances AttendanceDependent[]
};

export type ProfileServiceTeam = {
  service_team_id: number;
  profile_id: number;
};

export type RolesAndResponsibilitiesProfile = {
  role_responsibility_id: number;
  profile_id: number;
};

export type ChurchArmProfile = {
  church_arm_id: number;
  profile_id: number;
};

export type KidsDataInputs = {
  isMember: boolean;
  phone: string;
  occupation: string;
  birthday: string;
  maritalStatusId: number;
  marriageAnniversary: string;
  gotKids: number;
  tellUsUsAboutYourKids: boolean;
};

export type NewKid = {
  name: string;
  birthday: string;
  allergies: string;
  emergency_contact: string;
};

export type NewKidInputs = {
  newKid: NewKid;
};

export type CenterDetailsInputs = {
  yearJoined: number;
  center: string;
  completedGrowthTrack: boolean;
  serviceOrMinistryTeam: number;
  homeCell: number;
  colony: number;
  rolesAndResponsibilities: number[];
};

export type FinancialCommitmentInputs = {
  tither: boolean;
  partner: boolean;
  partnershipArm: number;
  partnershipFrequency: string;
};

export type DashboardCard = {
  link: string;
  img: string;
  heading: string;
  body: string;
};
export type Event = {
  id: string;
  name: string;
  tagline: string;
  banner_image: string;
  start_date: string;
  end_date: string;
  attendances: number;
  walk_ins: number;
  eventService: number;
};

export type EventProps = {
  event: Event;
};

export type InfoCardProps = {
  iconUrl: string;
  content: string;
};
