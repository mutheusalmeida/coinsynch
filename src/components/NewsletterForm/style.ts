import styled, { css } from 'styled-components'

type MessageType = {
  hasError?: boolean
  success?: boolean
}

export const Form = styled.form`
  --spacing-min: 3.5rem;
  --spacing-max: 7.5rem;

  width: 100%;

  @media (min-width: 48em) {
    padding-bottom: 0 !important;
  }
`

export const FormWrapper = styled.fieldset`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-bottom: 1em;

  @media (min-width: 48em) {
    margin-bottom: 1.25em;
  }
`

export const FormLabel = styled.label`
  font-size: 0.875rem;
  line-height: var(--line-height-16);
`

export const FormInput = styled.input`
  color: var(--gray-400);
  font-size: 1rem;
  padding: 0 1em;
  min-height: 2.5em;
  line-height: 2.5em;
  border: none;
  border-radius: 0.375em;
  background-color: var(--white);
  box-shadow: var(--box-shadow-lg);

  &::placeholder {
    color: inherit;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (min-width: 48em) {
    min-height: 3em;
    line-height: 3em;
  }
`

export const FormButton = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  min-width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition:
    color,
    background-color 0.2s ease;
  box-shadow: var(--box-shadow-lg);
  max-width: 100%;
  padding: 0 1em;
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

  font-size: 0.875rem;
  min-height: 2.8571em;

  @media (min-width: 48em) {
    gap: 10px;
    padding: 0 1.5em;
    font-size: 1rem;
    min-height: 3em;
  }
`

export const Message = styled.span.withConfig({
  shouldForwardProp: (prop) => 'hasError' !== prop && 'success' !== prop,
})<MessageType>`
  padding: 0 0.5em;
  font-size: 0.875rem;

  ${({ hasError }) =>
    hasError &&
    css`
      color: var(--red-700);
    `}

  ${({ success }) =>
    success &&
    css`
      color: var(--orange-200);
      display: inline-block;
      margin-top: -0.75em;
      margin-bottom: 1em;

      @media (min-width: 48em) {
        margin-bottom: 1.25em;
      }
    `}
`
