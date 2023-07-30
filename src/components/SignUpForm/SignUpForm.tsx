import * as S from './style'

import { ReactComponent as EmailIcon } from '@/assets/email-icon.svg'
import { ReactComponent as LockerIcon } from '@/assets/locker-icon.svg'
import { FormPassword } from '@/components/FormPassword'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z
  .object({
    email: z.string().min(1, 'Please enter an email').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have at least 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
    terms: z.literal(true, {
      errorMap: () => ({ message: 'You must accept the terms and conditions' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })

type FormSchemaType = z.infer<typeof formSchema>

export const SignUpForm = () => {
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

      {errors.email && <S.Message>{errors.email.message}</S.Message>}

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

      {errors.password && <S.Message>{errors.password.message}</S.Message>}

      <S.InputWrapper>
        <LockerIcon />

        {/* use of render props patters */}

        <FormPassword>
          {({ isVisible }) => (
            <S.Input
              type={isVisible ? 'text' : 'password'}
              placeholder="Confirm password"
              disabled={isSubmitting}
              {...register('confirmPassword')}
            />
          )}
        </FormPassword>
      </S.InputWrapper>

      {errors.confirmPassword && (
        <S.Message>{errors.confirmPassword.message}</S.Message>
      )}

      <S.TermsWrapper>
        <S.Checkbox>
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            {...register('terms')}
          />
        </S.Checkbox>

        <S.Terms htmlFor="terms">
          I have read and accept the{' '}
          <span>Privacy Policy and Terms of User Sign up.</span>
        </S.Terms>
      </S.TermsWrapper>

      {errors.terms && <S.Message>{errors.terms.message}</S.Message>}

      <S.FormButton disabled={isSubmitting}>Subscribe</S.FormButton>
    </S.Form>
  )
}
