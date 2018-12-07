/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import ProgressDots from './ProgressDots';

storiesOf('interstitial/ProgressDots', module)
  .add('loading', () => <ProgressDots loading />)
  .add('starting', () => <ProgressDots steps={4} progress={1} />)
  .add('halfway', () => <ProgressDots steps={4} progress={2} />)
  .add('complete', () => <ProgressDots steps={4} progress={4} />)
  .add('large complete', () => <ProgressDots steps={4} progress={4} size="large" />);
