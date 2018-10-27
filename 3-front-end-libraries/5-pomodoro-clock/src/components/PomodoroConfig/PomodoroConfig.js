import React, {Component} from 'react';
import { capitalize, zeroFill } from '../../utility';

class PomodoroConfig extends Component {
	state = {
		error: null
	}

	increment = () => {
		if (this.props.value < this.props.max) {
			this.props.adjust(this.props.type, +1)
		} else {
			this.showError('Too Long!')
		}
	}

	decrement = () => {
		if (this.props.value > this.props.min) {
			this.props.adjust(this.props.type, -1)
		} else {
			this.showError('Too Short!')
		}
	}

	showError = message => {
		setTimeout(() => this.setState({error: null}), 1000)
		this.setState({error: message})
	}

	render() {
		return (
			<div>
				<p>{capitalize(this.props.type)} Length</p>
				<button onClick={this.decrement} disabled={this.props.disabled}>-</button>
				{zeroFill(this.props.value)}
				<button onClick={this.increment} disabled={this.props.disabled}>+</button>
				{this.state.error ? <span>{this.state.error}</span> : null}
			</div>
		)
	}
}

export default PomodoroConfig;
