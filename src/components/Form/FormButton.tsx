import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'

export const Button = styled.button`
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

type FormButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const FormButton = ({ children, ...props }: FormButtonProps) => {
  return <Button {...props}>{children}</Button>
}
