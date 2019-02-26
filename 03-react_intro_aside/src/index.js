import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import VideoDetails from './containers/video_detail'
import SearchBar from './containers/search_bar'; 
import VideoList from './containers/video_list'; 

const API_KEY = 'AIzaSyAfTec4hvpROOxvlBaC_shIZUY84eRrU2o';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };

        this.videoSearch('surfboards');

    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    render(){
        const videoSearch= _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange= {videoSearch}/>
                <VideoDetails video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
            );
    }
    
};

ReactDOM.render(<App />, document.querySelector('.container'));

