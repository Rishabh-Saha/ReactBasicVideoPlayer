import React , { Component } from 'react';
// Always import this because even if you don't see it being used in file, 
// it is actually needed to convert your JSX into javascript(React.createElement)

//{ Component } is a syntactical sugar which says pull Component from React module.
//It is similar to saying, const Component = React.Component

/*const SearchBar = () => { // This is called as functional component
	return <input />;
}*/

class SearchBar extends Component { //This a class component and it extends React.Component to enhance it''s functionality

	//State is a plain javascript object that is used to record and react to user events.
	//Each "class" nd not "function" based component that we define has its own state object whenever a component's state is changed the component immediately re-renders 
	//and also forces all of its children to re-render as well.
	//Before we ever use state inside of a component we need to initialize the state object to initialize state.
	//We set the property state to a plain javascript object inside of the class's constructor method.
	constructor(props){
		//All javascript classes have a special function called constructor.
		//The constructor function is the first and only function called automatically whenever a new instance of the class (</SearchBar> in index.js) is created. 
		//constructor function is reserved for doing some set up inside of our class like initializing variables and initializing state and stuff like that.
		super(props); // Used to call parent's method(Component's method)
		console.log('Rishabh this.props.onVideoSearch',this.props.onVideoSearch);
		this.state = {
			'term' : ''
		};
	}


	//The following is an event handler:
	//Naming convention: on/handle + element on which the event change is being monitored + the event that we are expecting
	onInputChange = term => {
		this.setState({term});
		this.props.onVideoSearch(term);
	}

	onKeyPress = event => {
		if(event.key === "Enter"){
			this.props.onVideoSearch(this.state.term);
		}
	}
	render () { // A method that gives class the ability to render JSX
		return (
			<div className="search-bar">
				<input 
				value = {this.state.term} 
				onChange={event => this.onInputChange(event.target.value)}
				/>
				{/*Now we have turned it into a controlled form element by writing value = {this.state.term}*/}{/*Now whenever the state is changed, the component re-renders
				and the value of input tag is newly set*/}
				{/*onChange is an event supported by React (https://reactjs.org/docs/events.html#supported-events)
				Same as <input onChange = {(event) => console.log(event.target.value)} />*/ }
			</div>
			
		);
	}

}

export default SearchBar;