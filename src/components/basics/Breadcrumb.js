import React from 'react';
import { styled } from '@storybook/theming';
import { styles, Icon } from '@storybook/design-system';
import GatsbyLink from './GatsbyLink';

const { breakpoint, typography } = styles;

const BreadcrumbLink = styled(GatsbyLink)`
  font-size: ${typography.size.s2}px;
  line-height: ${typography.size.m1}px;
  font-weight: ${typography.weight.bold};
  margin-top: 16px;
  margin-bottom: 16px;

  @media (min-width: ${breakpoint * 1.333}px) {
    margin-top: 0;
    margin-bottom: 24px;
  }
`;

const BreadcrumbInner = styled.div`
  @media (min-width: ${breakpoint * 1.333}px) {
    margin-top: -1rem;
  }
`;

export const Breadcrumb = ({ children, ...props }) => (
  <BreadcrumbInner>
    <BreadcrumbLink withIcon {...props}>
      <Icon icon="arrowleft" />
      {children}
    </BreadcrumbLink>
  </BreadcrumbInner>
);
