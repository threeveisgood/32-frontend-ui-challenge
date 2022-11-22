export interface RegisterResult {
  user: string;
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
