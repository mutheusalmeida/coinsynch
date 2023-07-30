import styled from 'styled-components'

export const ActionLink = styled.span`
  font-size: 0.75rem;
  color: var(--gray-500);
  line-height: 1.1666em;
  margin-top: -1rem;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 90em) {
    margin-top: -1.5rem;
  }
`
