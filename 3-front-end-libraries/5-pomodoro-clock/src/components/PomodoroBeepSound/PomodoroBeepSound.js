import React, { Component } from 'react';
import soundFile from '../../assets/alarm.mp3';

class PomdoroBeepSound extends Component {
	constructor(props) {
		super(props);
		this.audioRef = React.createRef();
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.toggle !== nextProps.toggle) {
			this.audioRef.current.currentTime = 0;
			this.audioRef.current.volume = 0.15;
			this.audioRef.current.play();
		}
	}

	render() {
		return <audio ref={this.audioRef} src={soundFile} />
	}
}

export default PomdoroBeepSound;
