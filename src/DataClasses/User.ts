import Post from "./Post";
import UserProfile from "./UserProfile";

class User {
    id: number;
    username: string;
    password: string;
    userProfile: UserProfile;
    post: Post[];
    followers: User[];
    constructor(id: number, username: string, password: string,
        followers: User[], userProfile: UserProfile, post: Post[]) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.userProfile = userProfile;
        this.post = post;
        this.followers = followers;

    }
}

export default User;