export interface RegisterInterface {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export class User {
  id: number;
  email: string;
  fullName: string;
  token: string;
  roles?: string[];
}


export interface UserUpdate {
  fullName: string;
  password: string;
  about: string;
  profileImg;
}

export interface ResetPassword {
  password: string;
  id: string;
}



