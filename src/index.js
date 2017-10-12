import React from 'react';
import Clock from './components/Clock';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.time = props.time;
		this.state = {
			counter: props.time
		};
		this.resetTime = this.resetTime.bind(this);
	}

	resetTime() {
		this.setState({ counter: this.time });
	}

	render() {
		return (
			<div>
				<button onClick={this.resetTime} > Reset counter </button>
				<Clock time={this.state.counter} />
			</div>
		);
	}
}

export default App;
