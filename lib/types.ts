export type Language = "en" | "te";

export type LocalizedString = {
  en: string;
  te: string;
};

export type Chit = {
  id: string;
  name: LocalizedString;
  amount: number;
  durationMonths: number;
  members: number;
  frequency: "Monthly" | "Weekly";
  status: "Active" | "Upcoming";
  description?: LocalizedString;
};

export type ScheduleEntry = {
  category: LocalizedString;
  value: string;
  series: string;
  duration: string;
  members: number;
  maxBidding: string;
};

export type NewsItem = {
  id: string;
  date: string;
  title: LocalizedString;
  summary: LocalizedString;
};

export type Branch = {
  name: LocalizedString;
  address: string;
  phone: string;
  cell: string;
};

export type Leader = {
  name: LocalizedString;
  role: LocalizedString;
  since?: string;
};

export type TeamMember = {
  name: string;
  designation: string;
  department: string;
  isHod?: boolean;
};

export type ProcessStep = {
  title: LocalizedString;
  description: LocalizedString;
};

export type FeatureCard = {
  title: LocalizedString;
  description: LocalizedString;
};

export type Faq = {
  question: LocalizedString;
  answer: LocalizedString;
};

