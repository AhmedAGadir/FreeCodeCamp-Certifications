import React from 'react';
import { zeroFill } from '../../utility';

const pomdoroClock = props => {
		let minutes = props.sessionLength;
  		let seconds = 0;

  		if (props.started) {
			const difference = props.finishDate.getTime() - props.currentDate.getTime();
			minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	  		seconds = Math.floor((difference % (1000 * 60)) / 1000);
  		}

	return (
		<p>{zeroFill(minutes)} : {zeroFill(seconds)}</p>
	)
}

export default pomdoroClock;