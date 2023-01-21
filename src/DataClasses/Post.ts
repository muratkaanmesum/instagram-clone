import PostComment from "./Comment";
import User from "./User";

class Post {
    id: number;
    title: string;
    images: string[];
    likes: User[];
    comment: PostComment[];
    constructor(id: number, title: string, likes: User[], images: string[], comment: PostComment[]) {
        this.id = id;
        this.likes = likes;
        this.title = title;
        this.comment = comment;
        this.images = images;
    }
}
export default Post;