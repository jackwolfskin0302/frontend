import React, { Fragment } from 'react';
import { global } from '@storybook/design-system';

import TeamScreen from '../components/screens/TeamScreen/TeamScreen';

const { GlobalStyle } = global;

// In theory we could pass in props that we'd fetched via Gatsby's GraphQL
const TeamPage = () => (
  <Fragment>
    <GlobalStyle />
    <TeamScreen />
  </Fragment>
);

export default TeamPage;
