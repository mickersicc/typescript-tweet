import * as React from 'react';
import Tweet from './Tweet';
import TweetModel from './models/Tweet.model';

export default class TweetContainer extends React.PureComponent<{}, {tweet: TweetModel}> {    
    state = {
        tweet: new TweetModel()
    };

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
        };

        setTimeout(() => {
            const newState = new TweetModel({
                message: "something about cats.",
                gravatar: "xyz",
                author: {
                    handle: "catperson",
                    name: "IAMA Cat Person"
                },
                likes: 7,
                retweets: 5,
                timestamp: "2016-07-30 21:24:37"
            })
            this.setState({tweet: newState});
        }, 2000);
    }
  
    render() {
        return (
            <Tweet tweet={this.state.tweet} />
        );
    }
}