
export interface IBlog {
    id: string;
    title: string
    slug: string;
    excerpt: string;
    content: string;
    thumbnail: string;
    published: boolean;
    ownerId:string,
    owner?: IProjectOwner;
    createdAt?: string;
    updatedAt?: string;
 
}
export interface IProject {
    id: string;
    title: string
    description?: string;
    features: string[];
    liveUrl?: string;
    repoUrl?: string;
    thumbnail?: string;
    published: boolean;
    ownerId:string,
    owner?: IProjectOwner;
    createdAt?: string;
    updatedAt?: string; 
}
export interface IProjectOwner {
    name: string;
    email: string
    image?:string
 
}

