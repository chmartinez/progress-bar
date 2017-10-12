import React from 'react';
import moment from 'moment';
import ProgressBar from './ProgressBar';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.time = props.time;
		this.state = {
			remaining: props.time.asMilliseconds()
		};
	}

	componentWillReceiveProps(newProps) {
		if (newProps.time != null) {
			this.setState({
				remaining: newProps.time.asMilliseconds()
			});
		}
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({
				remaining: this.state.remaining - 1000
			});
		}, 1000);
	}

	render() {
		const timeLeft = moment.duration(this.state.remaining);
		let progress = parseFloat((timeLeft * 100) / this.time);
		if (progress <= 1) {
			clearInterval(this.interval);
			progress = 0;
		}

		const progressBarProps = {
			progress,
			alert: timeLeft <= 10000
		};

		return (
			<div className="clock__container">
				<p>minutes: {timeLeft.get('minutes')}</p>
				<p>seconds: {timeLeft.get('seconds')}</p>
				<ProgressBar {...progressBarProps} />
			</div>
		);
	}
}

export default Clock;
