import * as S from './style'

import { ReactComponent as EmailIcon } from '@/assets/email-icon.svg'
import { ReactComponent as LockerIcon } from '@/assets/locker-icon.svg'
import { ReactComponent as UserIcon } from '@/assets/user-icon.svg'
import * as Form from '@/components/Form'
import { FormPassword } from '@/components/FormPassword'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

type SignUpFormProps = {
  switchMode: (value: 'sign-in') => void
}

const formSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
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

export const SignUpForm = ({ switchMode }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (result.ok) {
      reset()
      switchMode('sign-in')
    }
  }

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.InputRoot>
        <UserIcon />

        <Form.Input
          id="name"
          type="name"
          placeholder="Name"
          disabled={isSubmitting}
          {...register('name')}
        />
      </Form.InputRoot>

      {errors.name && <Form.Error>{errors.name.message}</Form.Error>}

      <Form.InputRoot>
        <EmailIcon />

        <Form.Input
          id="signup-email"
          type="email"
          placeholder="Email"
          disabled={isSubmitting}
          {...register('email')}
        />
      </Form.InputRoot>

      {errors.email && <Form.Error>{errors.email.message}</Form.Error>}

      <Form.InputRoot>
        <LockerIcon />

        {/* use of render props patters */}

        <FormPassword>
          {({ isVisible }) => (
            <Form.Input
              id="password"
              type={isVisible ? 'text' : 'password'}
              placeholder="Password"
              disabled={isSubmitting}
              {...register('password')}
            />
          )}
        </FormPassword>
      </Form.InputRoot>

      {errors.password && <Form.Error>{errors.password.message}</Form.Error>}

      <Form.InputRoot>
        <LockerIcon />

        {/* use of render props patters */}

        <FormPassword>
          {({ isVisible }) => (
            <Form.Input
              id="confirmPassword"
              type={isVisible ? 'text' : 'password'}
              placeholder="Confirm password"
              disabled={isSubmitting}
              {...register('confirmPassword')}
            />
          )}
        </FormPassword>
      </Form.InputRoot>

      {errors.confirmPassword && (
        <Form.Error>{errors.confirmPassword.message}</Form.Error>
      )}

      <S.TermsWrapper>
        <S.Checkbox>
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            disabled={isSubmitting}
            {...register('terms')}
          />
        </S.Checkbox>

        <S.Terms htmlFor="terms">
          I have read and accept the{' '}
          <span>Privacy Policy and Terms of User Sign up.</span>
        </S.Terms>
      </S.TermsWrapper>

      {errors.terms && <Form.Error>{errors.terms.message}</Form.Error>}

      <Form.Button disabled={isSubmitting}>Sign up</Form.Button>
    </Form.Root>
  )
}
