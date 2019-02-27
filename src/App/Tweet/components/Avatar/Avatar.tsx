import * as React from 'react';
import TAvatar from '../../types/Avatar.type';
import './Avatar.css';


const Avatar: React.SFC<TAvatar> = (props) => {
    const url = `https://www.gravatar.com/avatar/${props.hash}`;
    return (
        <img 
            src={url}
            className='avatar' 
            alt='avatar' />
    );
}

export default Avatar;