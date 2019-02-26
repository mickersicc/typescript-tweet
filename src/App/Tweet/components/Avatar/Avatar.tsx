import * as React from 'react';
import './Avatar.css';

interface IAvatar {
    hash: string;
}

const Avatar: React.SFC<IAvatar> = (props) => {
    const url = `https://www.gravatar.com/avatar/${props.hash}`;
    return (
        <img 
            src={url}
            className='avatar' 
            alt='avatar' />
    );
}

// const Avatar = (hash: string) => {
//     const url = `https://www.gravatar.com/avatar/${hash}`;
//     return (
//         <img 
//             src={url}
//             className='avatar' 
//             alt='avatar' />
//     );
// }

export default Avatar;