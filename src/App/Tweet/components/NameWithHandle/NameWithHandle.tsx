import * as React from 'react';
import { AuthorModel } from '../../models/Tweet.model';
import './NameWithHandle.css';

interface INameWithHandle {
    author: AuthorModel
}

const NameWithHandle: React.SFC<INameWithHandle> = (props) => {
    const { name, handle } = props.author;

    return (
        <span className='name-with-handle'>
            <span className='name'>{name}</span>
            <span className='handle'>@{handle}</span>
        </span>
    );
}

export default NameWithHandle;