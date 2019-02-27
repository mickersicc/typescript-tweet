import * as React from 'react';
import TLikeButton from '../../types/LikeButton.type';

const LikeButton: React.SFC<TLikeButton> = (props) => (
    <span className='like-button'>
        <i className='fa fa-heart' />
        {props.count > 0 && 
        <span className='like-count'>
            {props.count}
        </span>}
    </span>
);

export default LikeButton;