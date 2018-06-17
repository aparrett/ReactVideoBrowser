import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyC8clG_79jB4515aOk8nrv4OJnn6YedS3w';

class App extends Component {
  constructor() {
    super();

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));