import * as React from 'react';
import Tweet from './Tweet';
import TweetModel from './models/Tweet.model';

export default class TweetContainer extends React.Component {
    tweet: TweetModel;

    constructor(props: any) {
        super(props);
        this.tweet = new TweetModel({
            message: "something about cats.",
            gravatar: "xyz",
            author: {
                handle: "catperson",
                name: "IAMA Cat Person"
            },
            likes: 2,
            retweets: 5,
            timestamp: "2016-07-30 21:24:37"
        });
    }
    
    render() {
        return (
            <Tweet tweet={this.tweet} />
        );
    }
}