import * as React from 'react';

interface IRetweetButton {
    count: number;
}

const getRetweetCount = (count: number) => {
    if (count > 0) {
        return (
            <span className='retweet-count'>
                {count}
            </span>
        );
    } else {
        return null;
    }
}

const RetweetButton: React.SFC<IRetweetButton> = (props) => (
    <span className='retweet-button'>
        <i className='fa fa-retweet' />
        {getRetweetCount(props.count)}
    </span>
);

export default RetweetButton;