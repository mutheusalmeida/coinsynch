import * as Dialog from '@/components/BaseDialog'
import { useState, type ReactNode } from 'react'
import * as S from './style'

import { ReactComponent as CloseIcon } from '@/assets/close-icon.svg'
import { SignInForm } from '../SignInForm'
import { SignUpForm } from '../SignUpForm'

type AuthDialogProps = {
  trigger?: JSX.Element
  defaultMode: 'sign-in' | 'sign-up'
  children: ReactNode
}

export const AuthDialog = ({ trigger, defaultMode }: AuthDialogProps) => {
  const [mode, setMode] = useState(defaultMode)

  const prettyMode =
    mode.slice(0, 1).toUpperCase() + mode.slice(1).split('-').join(' ')

  const alternate = {
    'sign-in': {
      message: `Dont't have an account?`,
      toLabel: 'Sign up',
      toPath: 'sign-up',
    },
    'sign-up': {
      message: `Already have an account?`,
      toLabel: 'Sign in',
      toPath: 'sign-in',
    },
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span>{trigger}</span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content>
          <Dialog.Close asChild>
            <S.CloseBtn aria-label="Close">
              <CloseIcon />
            </S.CloseBtn>
          </Dialog.Close>

          <Dialog.Title className="fluid-type">
            <>{prettyMode} to </>

            <S.Logo>
              <S.Heighlight>Coin</S.Heighlight>Synch
            </S.Logo>
          </Dialog.Title>

          {mode === 'sign-in' ? <SignInForm /> : <SignUpForm />}

          <S.AlternateWrapper>
            <S.AlternateMsg>{alternate[mode].message}</S.AlternateMsg>{' '}
            <S.AlternateLink
              onClick={() => {
                setMode(alternate[mode].toPath as keyof typeof alternate)
              }}
            >
              {alternate[mode].toLabel} to{' '}
              <S.Logo>
                <S.Heighlight>Coin</S.Heighlight>Synch
              </S.Logo>
            </S.AlternateLink>
          </S.AlternateWrapper>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
