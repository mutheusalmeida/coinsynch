import type { HTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'

export const InputRoot = styled.div`
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

  & *:nth-child(3) {
    position: absolute;
    right: 1em;
  }

  & svg {
    min-width: 1em;
    min-height: 1em;
  }
`

type FormInputRootProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export const FormInputRoot = ({ children, ...props }: FormInputRootProps) => {
  return <InputRoot {...props}>{children}</InputRoot>
}
