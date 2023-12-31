// Generated by https://quicktype.io

export interface SingleUserResponse {
  data:    User;
  support: Support;
}

export interface User {
  id:            number;
  first_name:    string;
  last_name:     string;
  email:         string;
  avatar:        string;
}

export interface Support {
  url:  string;
  text: string;
}
