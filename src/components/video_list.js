import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { 
// In a functional component we need to pass props as an arguement to the method
// But in a class based component props is automatically available by doing this.props
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect} // 1) We passed down the function to VideoListItem. 2)Now when a video is selected we will pass it to the parent(index.js)
				key={video.etag} 
				video={video}
			 /> // if we don't mention key here we will get this error:Each child in an array or iterator should have a unique "key" prop.
		)
	})

	return (
			<ul className="col-md-4 list-group">
				{videoItems}
			</ul>
		)
};

export default VideoList;