import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
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

  &:hover {
    text-decoration: underline;
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
