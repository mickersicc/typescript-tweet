import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TweetContainer from './TweetContainer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TweetContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });