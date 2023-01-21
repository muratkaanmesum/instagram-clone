import User from "./User";

class PostComment {
    id: number;
    text: string;
    user: User;
    constructor(id: number, text: string, user: User) {
        this.id = id;
        this.text = text;
        this.user = user;
    }
}
export default PostComment;
