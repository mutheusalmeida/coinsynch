import { styled } from 'styled-components'
import { FormButton } from './FormButton'
import { FormError } from './FormError'
import { FormInputRoot } from './FormInputRoot'
import { FormPassword } from './FormPassword'
import { FormRoot } from './FormRoot'

export const Root = FormRoot

export const InputRoot = FormInputRoot

export const Password = FormPassword

export const Button = FormButton

export const Error = FormError

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
