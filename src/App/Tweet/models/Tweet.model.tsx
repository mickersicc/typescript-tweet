export class AuthorModel {
    handle: string;
    name: string;

    constructor(data?: AuthorModel)  {
        this.handle = (data && data.handle) || '';
        this.name = (data && data.name) || '';
    }
}

export default class TweetModel {
    message: string;
    gravatar: string;
    author: AuthorModel;
    likes: number;
    retweets: number;
    timestamp: string

    constructor(data?: TweetModel) {
        this.message = (data && data.message) || '';
        this.gravatar = (data && data.gravatar) || '';
        this.author = (data && data.author) || new AuthorModel();
        this.likes = (data && data.likes) || 0;
        this.retweets = (data && data.retweets) || 0;
        this.timestamp = (data && data.timestamp) || '';
    }
}