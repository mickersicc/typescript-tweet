import * as React from 'react';
import Tweet from './Tweet';
import TweetModel from './models/Tweet.model';

export default class TweetContainer extends React.Component<{}, {tweet: TweetModel}> {    
    state = {
        tweet: new TweetModel()
    };
    initialModel: TweetModel = new TweetModel();

    constructor(props: any) {
        super(props);
        this.state = {
            tweet: new TweetModel({
                message: "something about cats.",
                gravatar: "xyz",
                author: {
                    handle: "catperson",
                    name: "IAMA Cat Person"
                },
                likes: 2,
                retweets: 5,
                timestamp: "2016-07-30 21:24:37"
            })
        }
        Object.assign(this.initialModel, this.state.tweet);
    }

    shouldComponentUpdate(prev: any, change: any) {
        if ((prev && prev.likes !== change.tweet.likes) 
            || (this.initialModel.likes !== change.tweet.likes)) {
            return true;
        } else {
            return false;
        }
    }
  
    render() {
        return (
            <Tweet tweet={this.state.tweet} />
        );
    }
}