export interface PhotoModel{
    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComment: boolean;
    likes: number; 
    comments: number;
    userId: number;
}