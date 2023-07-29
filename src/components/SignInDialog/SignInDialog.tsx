import * as Dialog from '@/components/BaseDialog'
import type { ReactNode } from 'react'
import * as S from './style'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

type SignInDialogProps = {
  trigger?: JSX.Element
  children: ReactNode
}

const formSchema = z.object({
  email: z.string().min(1, 'Please enter an email').email('Invalid email'),
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
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    reset()

    await response.json()
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span>{trigger}</span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content>
          <Dialog.Title>
            Sign in to <span>Coin</span>Synch
          </Dialog.Title>

          <S.Form
            onSubmit={handleSubmit(onSubmit)}
            className="subscribe-form fluid-spacing fluid-pb"
          >
            <S.FormWrapper className="subscribe-form__wrapper">
              <S.FormLabel className="subscribe-form__label" htmlFor="email">
                Email
              </S.FormLabel>

              <S.FormInput
                className="subscribe-form__input"
                id="email"
                type="email"
                placeholder="Email"
                disabled={isSubmitting}
                {...register('email')}
              />

              {errors.email && (
                <S.Message hasError>{errors.email?.message}</S.Message>
              )}
            </S.FormWrapper>

            <S.FormButton disabled={isSubmitting}>Subscribe</S.FormButton>
          </S.Form>

          <Dialog.Close asChild>
            <button aria-label="Close">X</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
