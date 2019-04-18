import React from 'react';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import useSiteMetadata from '../lib/useSiteMetadata';

import { Link, Icon, TooltipLinkList, WithTooltip, styles } from '../basics';

import StorybookLogoSVG from '../../images/logo-storybook.svg';

const { color, typography, spacing, pageMargins, breakpoint } = styles;


const LogotypeWrapper = styled(Link)`
  display: inline-block;
  img {
    height: 22px;
    width: auto;
    margin-top: 14px;
    @media (min-width: ${breakpoint}px) {
      height: 26px;
      margin-top: 10px;
    }

    display: block;

    transition: all 150ms ease-out;
    transform: translate3d(0, 0, 0);
    &:hover {
      transform: translate3d(0, -1px, 0);
    }
    &:active {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Version = styled(Link)`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  position: relative;
  top: 2px;
  font-size: ${typography.size.s1}px;
  color: ${color.mediumdark};
`;

const TooltipLinkListWrapper = styled.div`
  padding: 8px 5px;
  color: ${color.darkest};
`;

const NavLink = styled(Link)`
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.bold};
`;

const Menu = styled(Link)`
  width: 3rem;
  height: 3rem;
  border: none !important;
  text-decoration: none !important;
  background: none !important;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    vertical-align: top;
    height: 1rem;
    width: 1rem;
    margin: 0;
  }
`;

const MobileMenu = styled.div`
  font-size: ${typography.size.s1}px;

  ${TooltipLinkListWrapper} {
    padding: 5px 0;
  }
`;

const NavItem = styled.div`
  display: inline-block;
  line-height: 3rem;
  height: 3rem;
  vertical-align: top;

  ${props =>
    props.showDesktop &&
    css`
      display: none;
      @media (min-width: ${breakpoint * 1.333}px) {
        display: inline-block;
      }
    `};

  ${props =>
    props.showMobile &&
    css`
      @media (min-width: ${breakpoint * 1.333}px) {
        display: none;
      }
    `};
`;

const NavGroup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  ${props =>
    props.right &&
    css`
      left: auto;
      right: 0;
    `}

  ${NavItem} + ${NavItem} {
    margin-left: ${spacing.padding.large}px;
  }
`;

const Nav = styled.div`
  height: 3rem;
  position: relative;
  text-align: center;
  z-index: 3;
`;

const NavWrapper = styled.nav`
  ${pageMargins};
  padding-top: 12px;
  @media (min-width: ${breakpoint}px) {
    padding-top: 36px;
  }
`;

export default function Header({ ...props }) {
  const { latestVersion, urls = {} } = useSiteMetadata();
  const { navLinks = {}, gitHub = {} } = urls;

  const mobileMenu = (
    <MobileMenu>
      <TooltipLinkList
        links={navLinks}
        // TODO: Pass GatsbyLink here
        LinkWrapper={GatsbyLink}
      />
    </MobileMenu>
  );

  return (
    <NavWrapper {...props}>
      <Nav>
        <NavGroup>
          <NavItem>
            <LogotypeWrapper isGatsby to="/">
              <img src={StorybookLogoSVG} alt="Storybook" />
            </LogotypeWrapper>
            <Version href={gitHub.releases}>{latestVersion}</Version>
          </NavItem>
        </NavGroup>

        <NavGroup right>
          {navLinks.map(({ title, href, isGatsby }) => (
            <NavItem showDesktop key={title}>
              <NavLink
                tertiary={1}
                href={!isGatsby ? href : undefined}
                to={isGatsby ? href : undefined}
                isGatsby={isGatsby}
              >
                {title}
              </NavLink>
            </NavItem>
          ))}

          <NavItem showMobile>
            <WithTooltip placement="top" trigger="click" tooltip={mobileMenu}>
              <Menu secondary icon={1} isButton>
                <Icon icon="menu" />
              </Menu>
            </WithTooltip>
          </NavItem>
        </NavGroup>
      </Nav>
    </NavWrapper>
  );
}
