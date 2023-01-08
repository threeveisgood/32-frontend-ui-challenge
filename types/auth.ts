export interface User {
  id: string;
  username: string;
  email: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
  confirmed: boolean;
  blocked: boolean;
}

export interface RegisterResult {
  user: User;
  jwt: string;
}

export interface RegisterParams {
  email: string;
  password: string;
  username: string;
}

export interface LoginParams {
  identifier: string;
  password: string;
}
