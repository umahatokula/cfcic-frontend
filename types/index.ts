export type LoginFormInputs = {
  email: string;
  password: string;
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