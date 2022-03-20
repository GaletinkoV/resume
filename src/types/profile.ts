export type WorkExperienceType = {
  position: string;
  company: string;
  fromDate: string;
  toDate: string;
  responsibilities: string[];
  techStack: string[];
  companyLink?: string;
};

export type EducationType = {
  university: string;
  fromDate: string;
  toDate: string;
  faculty: string;
  department: string;
};

export type PersonalInformationType = {
  name: string;
  position: string;
  startDate: string;
  aboutMe: string;
};

export type ContactsType = {
  mail: string;
  phoneNumber: string;
  location: string;
  linkedin: string;
  upwork: string;
  github: string;
};

export type ProfileType = {
  workExperience: WorkExperienceType[];
  education: EducationType[];
  hardSkills: string[];
  personalInformation: PersonalInformationType;
  contacts: ContactsType;
  languages: { name: string; level: string }[];
  strengths: string[];
};
