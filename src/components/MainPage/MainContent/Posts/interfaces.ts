interface IPost {
    id: number;
    username: string;
    userImage: string;
    postImage: string;
    location?: string;
    description: string;
    likes: number;
    comments: number;

}

interface IPostProps {
    post: IPost;
}
export type { IPostProps, IPost };