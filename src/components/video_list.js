import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => { return <VideoListItem key={video.etag} video={video} /> });
    return (
        <ul className="col-md-4 list-group">
            { videoItems}
            {/* 这个地方其实是一个array 但是react也是很聪明的会认识这里。*/}
        </ul>
    )
}

export default VideoList;