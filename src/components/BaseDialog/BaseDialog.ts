import * as Dialog from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components'

const overlayShow = keyframes`
   from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const contentShow = keyframes`
   from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const Root = Dialog.Root

export const Trigger = Dialog.Trigger

export const Portal = Dialog.Portal

export const Close = Dialog.Close

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgb(93, 102, 112, 0.89);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 20;
`

export const Content = styled(Dialog.Content)`
  background-color: white;
  border-radius: 0.5em;
  box-shadow: var(--box-shadow-dialog);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85vw;
  max-width: 20em;
  max-height: 85vh;
  padding: 1em;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 25;

  &:focus {
    outline: none;
  }

  @media (min-width: 48em) {
    padding: 1.5em;
  }

  @media (min-width: 90em) {
    max-width: 28em;
    padding: 2em;
  }
`

export const Title = styled(Dialog.Title)`
  margin: 0;
  font-weight: 500;
  font-size: 17px;
`

export const Description = styled(Dialog.Description)`
  margin: 10px 0 20px;
  font-size: 15px;
  line-height: 1.5;
`
