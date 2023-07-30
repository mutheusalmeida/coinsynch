import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;

  @media (min-width: 90em) {
    gap: 1.5em;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  padding: 0 1em;
  border-radius: 0.375em;
  border: 1px solid var(--gray-300);
  font-size: 1rem;
  min-height: 2.875em;
  line-height: 2.875em;
  position: relative;
  align-items: center;
  margin-bottom: 0.5em;

  &:last-child {
    position: absolute;
    right: 1em;
  }

  & svg {
    min-width: 1em;
    min-height: 1em;
  }
`

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

export const Input = styled.input`
  all: unset;
  height: 100%;
  width: 100%;
  color: inherit;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgb(93, 102, 112, 0.55);
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const FormButton = styled.button`
  border: none;
  cursor: pointer;
  width: 100%;
  min-width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    color,
    background-color 0.2s ease;
  box-shadow: var(--box-shadow-lg);
  max-width: 100%;
  background-color: var(--orange-500);
  color: var(--white);
  border-radius: 7.1428em;

  &:hover {
    color: var(--gray-200);
    background-color: var(--orange-600);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  padding: 0 1.5em;
  font-size: 1rem;
  min-height: 3em;
`

export const Message = styled.span`
  padding: 0 0.5em;
  font-size: 0.875rem;
  margin-top: -1rem;
  color: var(--red-700);

  @media (min-width: 90em) {
    margin-top: -1.5rem;
  }
`

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
  font-weight: 700;
`

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

  @media (min-width: 90em) {
    font-size: 0.875rem;
    line-height: var(--line-height-14);
  }

  & span {
    font-weight: 700;
  }
`
