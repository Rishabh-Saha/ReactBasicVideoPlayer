//React is a javascript library that is used to produce HTML that is shown to a user in a web browser. 
//So when we are writing react we are writing multiple components and views.
//we write multiple different components and we nest these components together by placing one inside the other in different fashions to make really complex applications relatively simple.
//So when you think component or view, think of it as something that produces HTML.
//A component is a collection of javascript functions that produce HTML.

import React, { Component } from 'react'; 
// This module knows how to work with components and how to render them but lacks the functionality to render them into the DOM 
// This functionality to take a component and insert it into the DOM is present in different module called:
import ReactDOM from 'react-dom';
//Remember: react-dom is used to interact with the actual Dom while react is used to create and manage our components.
//--------------------------------------------------------------------------------
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY = 'AIzaSyBa-i23KnGuyhhjJjDDqIkabUG0eMw1xmw';

//--------------------------------------------------------------------------------
//Create a new component. This component should produce some HTML
/*const App = () => {
	return (
		<div> 
			<SearchBar />
		</div>
	); // this is jsx  - This gets transpiled into vanilla javascript
}*/
//Take this component's generated HTML and put it on the page (in the DOM (index.html))
// React.render(App); 
//If you just write this you will get this error: Uncaught TypeError: _react2.default.render is not a function

// ReactDOM.render(App);
//If you just write this you will get this error: Uncaught Error: Target container is not a DOM element.
//This occurred because we passed App class but we should actually pass instance of the component(App).

// ReactDOM.render(<App></App>); //Now we have passed instance of App and not the class. so we just wrapped the class with JSX tags
//ReactDOM.render(<App />); Self closing tags - same as above
//If you just write this you will get this error: Uncaught Error: Target container is not a DOM element.
//React DOM still doesn't know where to Render it.

// ReactDOM.render(<App/>,document.querySelector('.container'));
//This says goes find that div with class container in index.html and render the App component into that div


/*Notes:
1)Always make one component per file
2)All our files are siloed from each other unless we explicitly declare a connection between them

*/



//Converting functional component to class component

class App extends Component {

	constructor (props) {
		super(props);

		this.state = {
			'videos': [],
			'selectedVideo':null
		};
		this.videoSearch('coldplay');
	}

	videoSearch(term){
		YTSearch({key:API_KEY, term : term},(videos) => {
			// this.setState({ videos }); //Similar to {videos: videos} , this is allowed in ES6 when key and value variable name is same
			this.setState({
				videos:videos,
				selectedVideo:videos[0]
			})
		})
		
	}


	render () {
		const videoSearch = _.debounce( term => {this.videoSearch(term)},400);
		return (
			<div> 
				<SearchBar onVideoSearch={videoSearch}/>
				<VideoDetail 
					video={this.state.selectedVideo}
				/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})} // we are passing a function to VideoDetail 
					videos={this.state.videos}
				/> 
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));





