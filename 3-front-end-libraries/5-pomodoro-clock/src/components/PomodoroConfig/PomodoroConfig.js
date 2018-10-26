import React from 'react';

const pomodoroConfig = props => (
	<div>
		{props.type} length
		<button 
			onClick={props.value > props.min ? () => props.adjust(props.type, -1) : null}
			disabled={props.disabled}>-</button>
		{props.value}
		<button 
			onClick={props.value < props.max ? () => props.adjust(props.type, +1) : null}
			disabled={props.disabled}>+</button>
	</div>
)

export default pomodoroConfig;
