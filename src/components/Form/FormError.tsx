import type { HTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'

export const Error = styled.span`
  padding: 0 0.5em;
  font-size: 0.875rem;
  margin-top: -1rem;
  color: var(--red-700);

  @media (min-width: 90em) {
    margin-top: -1.5rem;
  }
`

type FormErrorProps = { children: ReactNode } & HTMLAttributes<HTMLElement>

export const FormError = ({ children, ...props }: FormErrorProps) => {
  return <Error {...props}>{children}</Error>
}
