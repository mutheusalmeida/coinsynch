import styled from 'styled-components'

export const CloseBtn = styled.button`
  all: unset;
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
`

export const Logo = styled.span`
  font-weight: 700;
  color: var(--gray-500);
`

export const Heighlight = styled.span`
  color: var(--orange-500);
`

export const AlternateWrapper = styled.p`
  font-size: 0.75rem;
  line-height: var(--line-height-14-base-12);

  @media (min-width: 90em) {
    font-size: 0.875rem;
    line-height: var(--line-height-14);
  }
`

export const AlternateMsg = styled.span`
  @media (max-width: 47.9375em) {
    display: none;
  }
`

export const AlternateLink = styled.span`
  cursor: pointer;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`
