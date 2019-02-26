import * as React from 'react';

interface ILikeButton {
    count: number;
}

const LikeButton: React.SFC<ILikeButton> = (props) => (
    <span className='like-button'>
        <i className='fa fa-heart' />
        {props.count > 0 && 
        <span className='like-count'>
            {props.count}
        </span>}
    </span>
);

export default LikeButton;