import * as Dialog from '@/components/BaseDialog'
import type { ReactNode } from 'react'
import * as S from './style'

import { ReactComponent as CloseIcon } from '@/assets/close-icon.svg'
import { ReactComponent as EmailIcon } from '@/assets/email-icon.svg'
import { ReactComponent as LockerIcon } from '@/assets/locker-icon.svg'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormPassword } from '../FormPassword'

type SignInDialogProps = {
  trigger?: JSX.Element
  children: ReactNode
}

const formSchema = z.object({
  email: z.string().min(1, 'Please enter an email').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have at least 8 characters'),
})

type FormSchemaType = z.infer<typeof formSchema>

export const SignInDialog = ({ trigger }: SignInDialogProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    const response = await fetch('/api/signin', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    reset()

    const result = await response.json()

    if (result.token) {
      console.log(result.token)
    }
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
            Sign in to{' '}
            <S.Logo>
              <S.Heighlight>Coin</S.Heighlight>Synch
            </S.Logo>
          </Dialog.Title>

          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.InputWrapper>
              <EmailIcon />

              <S.Input
                type="email"
                placeholder="Email"
                disabled={isSubmitting}
                {...register('email')}
              />
            </S.InputWrapper>

            {errors.email && <S.Message>{errors.email?.message}</S.Message>}

            <S.InputWrapper>
              <LockerIcon />

              {/* use of render props patters */}

              <FormPassword>
                {({ isVisible }) => (
                  <S.Input
                    type={isVisible ? 'text' : 'password'}
                    placeholder="Password"
                    disabled={isSubmitting}
                    {...register('password')}
                  />
                )}
              </FormPassword>
            </S.InputWrapper>

            {errors.password && (
              <S.Message>{errors.password?.message}</S.Message>
            )}

            <S.ActionLink>Forgot password?</S.ActionLink>

            <S.FormButton disabled={isSubmitting}>Subscribe</S.FormButton>
          </S.Form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
