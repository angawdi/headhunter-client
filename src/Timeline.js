import React, { Component } from 'react';
import { Timeline, Bookmark } from 'react-vertical-timeline';

export default class TimePost extends Component {
	render() {
		return (
			<Timeline height={300} progress={50} onSelect={fn..}>
 				<Bookmark progress={20} onSelect={fn..}>
    				Hi there 20%
  				</Bookmark>
  				<Bookmark progress={55} onSelect={fn..}>
   					Hi there 55%
  				</Bookmark>
  				<Bookmark progress={75} onSelect={fn..}>
  					Hi there 75%
  				</Bookmark>
			</Timeline>
				)
	}
}