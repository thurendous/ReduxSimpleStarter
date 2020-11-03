// import React module
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar" // 这里我们使用的是一个目录地址，因为这个是我们自制的一个东西。
import YTsearch from 'youtube-api-search';
import VideoList from "./components/video_list";

const API_KEY = 'AIzaSyCCZRQEajFGl9GxbCG_lWa1MvG3fdS3bWI'


//Create a new conponent. This component should produce some HTML

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTsearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos });
            // this.setState({ videos: videos})

        });
    }

    render() {
        return (<div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div >);
    };
}


//Take this component's generated HTML and put it on the page( in the DOM).
// App is a class, and we need to create a instance.and that is < App />
ReactDOM.render(< App />, document.querySelector(".container"));


