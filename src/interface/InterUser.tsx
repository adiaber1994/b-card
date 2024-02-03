export interface User {
  
    _id?: string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    isAdmin?: boolean;
    token?: string;
    favorites?: string[];
    user?:any
  }