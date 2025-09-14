export type Education = {
  title: string;
  started_at: Date;
  ended_at: Date;
  university_name: string;
  description: string;
};

export type JobHistory = {
  title: string;
  started_at: Date;
  ended_at?: Date;
  company_name: string;
  description: string;
};
