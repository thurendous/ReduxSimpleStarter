// import React module
import _ from "lodash"; // 这个包是设置检索的阈值用的。
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar" // 这里我们使用的是一个目录地址，因为这个是我们自制的一个东西。
import YTsearch from 'youtube-api-search';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = 'AIzaSyCCZRQEajFGl9GxbCG_lWa1MvG3fdS3bWI'


//Create a new conponent. This component should produce some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTsearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // this.setState({ videos: videos})

        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        // 这里就限制了这个函数被调用的次数了，每300毫秒调用一次。

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div >);
    };
}


//Take this component's generated HTML and put it on the page( in the DOM).
// App is a class, and we need to create a instance.and that is < App />
ReactDOM.render(< App />, document.querySelector(".container"));


