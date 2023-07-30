import styled from 'styled-components'

export const TermsWrapper = styled.fieldset`
  all: unset;
  display: flex;
  gap: 1em;
`

export const Checkbox = styled.label`
  & input {
    appearance: none;
    background-color: var(--white);
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 1em;
    height: 1em;
    border-radius: 0.25em;
    border: 0.0625em solid var(--orange-500);
    cursor: pointer;

    display: grid;
    place-content: center;

    &::before {
      content: '';
      width: 0.5em;
      height: 0.5em;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      visibility: hidden;
      transition: visibility 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    &:checked {
      background-color: var(--orange-500);

      &::before {
        visibility: visible;
        background-color: var(--white);
      }
    }

    &:focus {
      visibility: visible;
      outline: max(2px, 0.0625em) solid var(--gray-300);
      outline-offset: max(2px, 0.0625em);
    }
  }
`

export const Terms = styled.label`
  font-size: 0.75rem;
  line-height: var(--line-height-14-base-12);
  cursor: pointer;

  @media (min-width: 90em) {
    font-size: 0.875rem;
    line-height: var(--line-height-14);
  }

  & span {
    font-weight: 700;
  }
`
