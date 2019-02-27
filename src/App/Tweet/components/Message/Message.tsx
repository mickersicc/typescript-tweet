import * as React from 'react';
import TMessage from '../../types/Message.type';

const Message: React.SFC<TMessage> = (props) => (
    <div className='message'>
        { props.text }
    </div>
);

export default Message;