import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import 'jest';
import Tweet from './Tweet';
import TweetModel from '../Tweet/models/Tweet.model';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const model = new TweetModel({
        message: "something about cats.",
        gravatar: "xyz",
        author: {
            handle: "catperson",
            name: "IAMA Cat Person"
        },
        likes: 2,
        retweets: 5,
        timestamp: "2016-07-30 21:24:37"
    });
    ReactDOM.render(<Tweet tweet={model} />, div);
    ReactDOM.unmountComponentAtNode(div);

    // it('should receive props', () => {
    //     const tweetWrapper = shallow(<Tweet tweet={model} />);
        
    //     expect(tweetWrapper.instance().props().likes).toEqual(2);
    // });
});

