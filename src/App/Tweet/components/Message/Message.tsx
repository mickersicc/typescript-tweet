import * as React from 'react';

interface IMessage {
    text: string;
}

const Message: React.SFC<IMessage> = (props) => (
    <div className='message'>
        { props.text }
    </div>
);

export default Message;