export interface User {
  first_name: string;
  last_name: string;
  phone?: string;
  id_auth0?: string;
}

export interface UserUpdate {
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
  nickname?: string;
  password?: string;
}
