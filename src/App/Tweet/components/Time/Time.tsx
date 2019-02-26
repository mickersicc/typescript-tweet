import * as React from 'react';
import * as moment from 'moment';
import './Time.css';

interface ITime {
    time: string;
}

const Time: React.SFC<ITime> = (props) => {
    const timeString = moment(props.time).fromNow();
    return (
        <span className='time'>{timeString}</span>
    );
}

export default Time;