import React, {Component} from 'react';
import { capitalize, zeroFill } from '../../utility';
import Button from '@material-ui/core/Button';
import './PomodoroConfig.css';

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
			<div className="config-wrap">
				<p>{capitalize(this.props.type)} Length</p>
				<Button
					variant='contained'
					color='primary'
					onClick={this.decrement}
					disabled={this.props.disabled}>-</Button>
				{zeroFill(this.props.value)}
				<Button
					variant='contained'
					color='primary'
					onClick={this.increment}
					disabled={this.props.disabled}>+</Button>
				{this.state.error ? <span>{this.state.error}</span> : null}
			</div>
		)
	}
}

export default PomodoroConfig;
