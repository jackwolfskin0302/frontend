import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  Icon,
  Input,
  Link,
  Button,
  TableOfContents,
  TooltipNote,
  WithTooltip,
  global,
  styles,
} from '@storybook/design-system';
import { graphql } from 'gatsby';

import { SocialGraph } from '../basics';
import GatsbyLinkWrapper from '../basics/GatsbyLinkWrapper';

import { contentLeftPadding, contentRightPadding } from '../screens/DocsScreen/DocsScreen';

const { breakpoint, color, pageMargins, typography } = styles;
const { GlobalStyle } = global;

const bottomSpacing = css`
  padding-bottom: 3rem;
`;

const Sidebar = styled.div`
  position: sticky;
  top: 0;
  max-height: 100vh;
  padding-right: 20px;
  margin-right: 20px;

  flex: 0 1 240px;

  /* So that the expandable arrows are rendered outside of the sidebar dimensions */
  margin-left: -20px;
  padding-left: 20px;

  overflow-x: hidden;
  overflow-y: auto;
  ${bottomSpacing}

  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    transition: all 150ms ease-out;
    border-radius: 1em;
    background: rgba(0, 0, 0, 0.07);
    &:hover {
      background: rgba(0, 0, 0, 0.17);
    }
    &:active {
      background: rgba(0, 0, 0, 0.27);
    }
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: ${breakpoint * 1.333 - 1}px) {
    flex: none;
    margin: 1rem 0 2rem;
    width: 100%;
    border-bottom: 1px solid ${color.mediumlight};
  }
`;

const SidebarControls = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;
  background: ${color.lightest};
  padding-bottom: 1rem;
  padding-top: 1rem;
  margin-left: -20px;
  padding-left: 20px;
`;

const Content = styled.div`
  ${bottomSpacing}
  overflow: hidden;
`;

const Wrapper = styled.div`
  ${pageMargins}

  && {
    padding-bottom: 0;
  }

  @media (min-width: ${breakpoint * 1.333}px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    display: flex;
  }
`;

const StyledTableOfContents = styled(TableOfContents)`
  margin-top: 1rem;
  /* So that the expandable arrows are rendered outside of the sidebar dimensions */
  margin-left: -20px;
`;

const StyledButton = styled(Button)`
  padding: 0;
  width: 28px;
  height: 28px;
  margin-left: 10px;
`;

function DocsLayout({ children, data, pageContext, ...props }) {
  const {
    currentPage: {
      fields: { slug },
    },
  } = data;
  const { docsToc, tocItem, nextTocItem } = pageContext;

  const addLinkWrappers = (items) =>
    items.map((item) => ({
      ...item,
      ...(item.type.match(/link/) && { LinkWrapper: GatsbyLinkWrapper }),
      ...(item.children && { children: addLinkWrappers(item.children) }),
    }));
  const docsTocWithLinkWrappers = addLinkWrappers(docsToc);

  const withTooltipProps = {
    placement: 'top',
    trigger: 'hover',
    hasChrome: false,
    as: 'span',
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Sidebar>
          <StyledTableOfContents currentPath={slug} items={docsTocWithLinkWrappers}>
            {({ menu, allTopLevelMenusAreOpen, toggleAllOpen, toggleAllClosed }) => (
              <>
                <SidebarControls>
                  <Input
                    id="search"
                    label="Search"
                    hideLabel
                    icon="search"
                    appearance="pill"
                    placeholder="Search docs"
                  />
                  {allTopLevelMenusAreOpen ? (
                    <WithTooltip
                      {...withTooltipProps}
                      tooltip={<TooltipNote note="Collapse all" />}
                      onClick={toggleAllClosed}
                      tabIndex="-1"
                    >
                      <StyledButton containsIcon appearance="outline">
                        <Icon icon="arrowdown" />
                      </StyledButton>
                    </WithTooltip>
                  ) : (
                    <WithTooltip
                      {...withTooltipProps}
                      tooltip={<TooltipNote note="Expand all" />}
                      onClick={toggleAllOpen}
                      tabIndex="-1"
                    >
                      <StyledButton containsIcon appearance="outline">
                        <Icon icon="expandalt" />
                      </StyledButton>
                    </WithTooltip>
                  )}
                </SidebarControls>
                {menu}
              </>
            )}
          </StyledTableOfContents>
        </Sidebar>

        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}

export default DocsLayout;

export const query = graphql`
  fragment DocsLayoutCurrentPageQuery on MarkdownRemark {
    fields {
      slug
    }
  }
`;
