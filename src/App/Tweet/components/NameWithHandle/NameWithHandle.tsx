import * as React from 'react';
import TNameWithHandle from '../../types/NameWithHandle.type';
import './NameWithHandle.css';

const NameWithHandle: React.SFC<TNameWithHandle> = (props) => {
    const { name, handle } = props.author;

    return (
        <span className='name-with-handle'>
            <span className='name'>{name}</span>
            <span className='handle'>@{handle}</span>
        </span>
    );
}

export default NameWithHandle;