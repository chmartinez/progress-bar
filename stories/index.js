import React from 'react';
import moment from 'moment';
import { storiesOf } from '@storybook/react';

import App from '../src/index';

const time = moment.duration(13, 'seconds');

storiesOf('App', module)
	.add('with reset counter', () => <App time={time} />);
