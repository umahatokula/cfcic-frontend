export type LoginFormInputs = {
  email: string;
  password: string;
};

export type RegistrationFormInputs = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type BioDataInputs = {
  isMember: boolean;
  phone: string;
  occupation: string;
  birthday: string;
  maritalStatusId: number;
  marriageAnniversary: string;
  gotKids: number;
  tellUsUsAboutYourKids: boolean;
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

export type TaskFormInputs = {
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
}
