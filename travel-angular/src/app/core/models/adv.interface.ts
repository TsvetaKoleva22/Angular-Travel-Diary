export interface AdventureI {
    _id: string;
    title: string;
    category: string; //ObjectId
    imageUrl: string;
    destination: string;
    description: string;
    author: string;
    creationDate: Date;
    likes: number;
}