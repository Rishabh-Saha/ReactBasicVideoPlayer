import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { // we have extracted video,onVideoSelect from props, similar to Component extraction from react

	const thumbnailUrl = video.snippet.thumbnails.default.url;
	//onClick: whenever the li tag is clicked , we pass the video to the function we received from parent(VideoList)
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item"> 
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={thumbnailUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	)
};

export default VideoListItem;