import type { FormHTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;

  @media (min-width: 90em) {
    gap: 1.5em;
  }
`

type FormRootProps = {
  children: ReactNode
} & FormHTMLAttributes<HTMLFormElement>

export const FormRoot = ({ children, ...props }: FormRootProps) => {
  return <Form {...props}>{children}</Form>
}
