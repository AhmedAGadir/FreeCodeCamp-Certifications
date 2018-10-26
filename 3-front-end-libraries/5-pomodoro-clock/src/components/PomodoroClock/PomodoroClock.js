import React from 'react';

const pomdoroClock = props => {
		let minutes = props.sessionLength;
  		let seconds = 0;

  		if (props.started) {
			const difference = props.finishDate.getTime() - props.currentDate.getTime();
			minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	  		seconds = Math.floor((difference % (1000 * 60)) / 1000);
  		}

  		minutes = minutes.toString().length > 1 ? minutes :'0' + minutes;
  		seconds = seconds.toString().length > 1 ? seconds : '0' + seconds;

	return (
		<p>{minutes} : {seconds}</p>
	)
}

export default pomdoroClock;