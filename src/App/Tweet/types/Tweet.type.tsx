import TAuthor from './Author.type';

type TTweet = {
    message: string;
    gravatar: string;
    author: TAuthor;
    likes: number;
    retweets: number;
    timestamp: string
}

export default TTweet;