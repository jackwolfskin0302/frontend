import React from 'react';
import styled from 'styled-components';

import { Link, styles, urls } from '../../basics';

const { background, color, spacing, typography, pageMargin, breakpoint } = styles;
const { url } = urls;

const Title = styled.div`
  font-weight: ${typography.weight.black};
  font-size: ${typography.size.s3}px;
  line-height: 1.5rem;

  @media (min-width: ${breakpoint * 1}px) {
    font-size: ${typography.size.m1}px;
    line-height: ${typography.size.m2}px;
    margin-bottom: 0.5rem;
  }
`;

const Desc = styled.div`
  font-size: ${typography.size.s3}px;
  line-height: 1.5;
  @media (min-width: ${breakpoint * 1}px) {
    margin-bottom: 0.5rem;
  }
`;

const Meta = styled.div``;
const Image = styled.img`
  display: block;
  width: 100px;
  margin: 0 20px;

  @media (min-width: ${breakpoint * 1}px) {
    width: 192px;
    margin-right: 30px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;

  padding: 3rem ${spacing.padding.medium}px;

  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 3}%;
  }

  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 4}%;
  }

  ${Meta} {
    flex: 1;
  }
`;

const Wrapper = styled.div`
  background: ${background.app};
  border-top: 1px solid ${color.border};
  border-bottom: 1px solid ${color.border};
`;

export default function AddonCustom({ ...props }) {
  return (
    <Wrapper {...props}>
      <Inner>
        <Image src="images/addons/custom.svg" />
        <Meta>
          <Title>Create your own addon</Title>
          <Desc>
            Customize Storybook&rsquo;s UI, API, and create custom workflows by building your own
            addon
          </Desc>
          <Link withArrow href={url.docs.addonInstruction}>
            Learn how to build an addon
          </Link>
        </Meta>
      </Inner>
    </Wrapper>
  );
}
