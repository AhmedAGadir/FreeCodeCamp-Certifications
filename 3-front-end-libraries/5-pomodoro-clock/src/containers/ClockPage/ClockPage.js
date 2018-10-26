import React, { Component } from 'react';
import PomodoroConfig from '../../components/PomodoroConfig/PomodoroConfig';
import PomodoroClock from '../../components/PomodoroClock/PomodoroClock';

const DEFAULT_STATE = {
	sessions: {
		work: 25,
		break: 5
	},
	active: 'work',
	nowDate: null,
	endDate: null,
	started: false
};

class ClockPage extends Component {
	constructor(props) {
		super(props)
		this.state = DEFAULT_STATE;
		this.tickInterval = null;
		this.switchTimer = null;
	}

	adjustTimerConfig = (session, amount) => {
		let sessions = {...this.state.sessions};
		sessions[session] = sessions[session] + amount;
		this.setState({sessions})		
	}

	startTimer = () => {
		this.tickInterval = setInterval(() => this.tick(), 1000);
		this.switchTimer = setTimeout(() => this.switch(), this.state.sessions.work * 60 * 1000);
		this.setState(prevState => ({	
			nowDate: new Date(),
			endDate: new Date(new Date().getTime() + (prevState.sessions.work * 60 * 1000)),
			started: true
		}))
	}

	continueTimer = () => {
		if (this.tickInterval) return;
		this.tickInterval = setInterval(() => this.tick(), 1000);
		const difference = this.state.endDate.getTime() - this.state.nowDate.getTime();
		this.switchTimer = setTimeout(() => this.switch(), difference);
		this.setState({
			nowDate: new Date(),
			endDate: new Date(new Date().getTime() + difference)
		})
	}

	pauseTimer = () => {
		clearInterval(this.tickInterval);
		this.tickInterval = false;
		clearTimeout(this.switchTimer);
	}

	resetTimer = () => {
		clearInterval(this.tickInterval);
		clearTimeout(this.switchTimer);
		this.setState(DEFAULT_STATE);
	}

	tick = () => {
		this.setState({nowDate: new Date()})
	}

	switch = () => {
		const nextSession = Object.keys(this.state.sessions).find(key => key !== this.state.activeSession)
		this.switchTimer = setTimeout(() => this.switch(), this.state.sessions[nextSession] * 60 * 1000);
		this.setState({
			active: nextSession,
			endDate: new Date(new Date().getTime() + (this.state.sessions[nextSession] * 60 * 1000))
		})
	}

	render() {
		return (
			<div>
				<PomodoroConfig
					type='work'
					value={this.state.sessions.work}
					disabled={this.state.started}
					adjust={this.adjustTimerConfig}
					min={5}
					max={60} />
				<PomodoroConfig
					type='break'
					value={this.state.sessions.break}
					disabled={this.state.started}
					adjust={this.adjustTimerConfig}
					min={5}
					max={30} />
				<p>Hello World</p>
				<PomodoroClock 
					started={this.state.started}
					currentDate={this.state.nowDate}
					finishDate={this.state.endDate}
					sessionLength={this.state.sessions[this.state.active]} />
				{!this.state.started 
					? <button onClick={this.startTimer}>start</button>
					: <button onClick={this.continueTimer}>continue</button>}
				<button onClick={this.pauseTimer}>pause</button>
				<button onClick={this.resetTimer}>reset</button>
			</div>
		)
	}
}

export default ClockPage;