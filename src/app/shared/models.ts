export type User = {
  id: string;
  name: string;
  email: string;
  dob: Date;
  gender: "male" | "female";
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UsersTable = {
  data: User[];
  page: number;
  limit: number;
};
