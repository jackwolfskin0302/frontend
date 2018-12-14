/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';

storiesOf('basics/Badge', module)
  .add('all badges', () => (
    <div>
      <Badge status="positive">Positive</Badge>
      <Badge status="negative">Negative</Badge>
      <Badge status="neutral">Neutral</Badge>
    </div>
  ))
  .add('positive', () => <Badge status="positive">Accepted</Badge>)
  .add('negative', () => <Badge status="negative">Denied</Badge>)
  .add('neutral', () => <Badge status="neutral">Neutral</Badge>);
