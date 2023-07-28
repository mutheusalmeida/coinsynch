import styled from 'styled-components'

export const Form = styled.form`
  --spacing-min: 3.5rem;
  --spacing-max: 7.5rem;

  width: 100%;

  @media (min-width: 48em) {
    padding-bottom: 0 !important;
  }
`

export const FormWrapper = styled.div`
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

  @media (min-width: 48em) {
    min-height: 3em;
    line-height: 3em;
  }
`

export const FormButton = styled.button`
  box-shadow: var(--box-shadow-lg);
  font-weight: 400;
  max-width: 100%;

  @media (max-width: 47.9375em) {
    min-height: 2.8571em;
  }
`
