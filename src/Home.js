import React, { Component } from 'react';
import TimePost from './TimePost';
import TodoInput from './TodoInput';

class Home extends Component {
	componentDidMount = () => {
		
	}
  	render() {
    	return(
			<div>
				<TimePost />
				<TodoInput />
  			</div>
      	)
  }
}

export default Home;
