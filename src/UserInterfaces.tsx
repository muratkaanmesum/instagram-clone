type Gender = "male" | "female";
interface IComment {
  id: number;
  text: string;
  user: IUserProfile;
}
interface IPost {
  id: number;
  title: string;
  location: string;
  image: string;
  comments: IComment[];
  likes: IUserProfile[];
  user: IUserProfile;
  Date: Date;
}
interface IFollower {
  id: number;
  username: string;
  fullName: string;
  image: string;
}
interface IUserProfile {
  id: number;
  fullName: string;
  email: string;
  bio: string;
  gender: Gender;
  image: string;
  posts: IPost[];
  comments: IComment[];
  followers: IUserProfile[];
  following: IUserProfile[];
}
interface IUser {
  id: number;
  username: string;
  password: string;
  userProfile: IUserProfile;
}
export type { IUser, IPost, IFollower };
