import * as React from 'react';
import TweetContainer from './Tweet/TweetContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TweetContainer />
      </div>
    );
  }
}

export default App;
