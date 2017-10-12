import React from 'react';
import classnames from 'classnames';

const ProgressBar = (props) => {
	const { progress, alert } = props;

	return (
		<div className="progress-bar__container">
			<style jsx>{`
				.progress-bar__content {
					background-color: lightgrey;
					width: 90%;
					height: 10px;
					border-radius: 10px;
				}

				.progress-bar {
					border-radius: 10px;
					background-color: green;
					height: 100%;
					transition: width 1000ms linear;
				}

				.progress-bar.alert {
					background-color: red;
				}
			`}</style>
			<h1>Progress Bar </h1>
			<div className="progress-bar__content">
				<div className={classnames('progress-bar', { alert: alert })} style={{ width: `${progress}%` }}>
				</div>
			</div>
		</div>);
};

export default ProgressBar;
