export interface UserType {
    id: string;
    username: string;
    name: string;
    email: string;
    image?: string;
    bio?: string;
    threads?: string[]; // or mongoose.Schema.Types.ObjectId[]
    onboarded?: boolean;
    communities?: string[]; // or mongoose.Schema.Types.ObjectId[]
  }

  interface EmailAddress {
    emailAddress: string;
    // other properties
  }