import * as React from 'react';
import Avatar from './components/Avatar/Avatar';
import NameWithHandle from './components/NameWithHandle/NameWithHandle';
import Time from './components/Time/Time';
import Message from './components/Message/Message';
import ReplyButton from './components/ReplyButton/ReplyButton';
import RetweetButton from './components/RetweetButton/RetweetButton';
import LikeButton from './components/LikeButton/LikeButton';
import MoreOptionsButton from './components/MoreOptionsButton/MoreOptionsButton';
import TTweet from './types/Tweet.type';
import './Tweet.css';

type Props = {
    tweet: TTweet
}

export default class Tweet extends React.Component<Props> {
    state = {}
    
    render() {
        return (
            <div className='tweet'>
                <Avatar hash={this.props.tweet.gravatar} />
                <div className='content'>
                    <NameWithHandle author={this.props.tweet.author} />
                    <Time time={this.props.tweet.timestamp} />
                    <Message text={this.props.tweet.message} />
                    <div className='buttons'>
                        <ReplyButton />
                        <RetweetButton count={this.props.tweet.retweets} />
                        <LikeButton count={this.props.tweet.likes} />
                        <MoreOptionsButton />
                    </div>
                </div>
            </div>
        );
    }
}
