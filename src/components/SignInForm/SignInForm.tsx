import * as S from './style'

import { ReactComponent as EmailIcon } from '@/assets/email-icon.svg'
import { ReactComponent as LockerIcon } from '@/assets/locker-icon.svg'
import * as Form from '@/components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormPassword } from '../FormPassword'

const formSchema = z.object({
  email: z.string().min(1, 'Please enter an email').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have at least 8 characters'),
})

type FormSchemaType = z.infer<typeof formSchema>

export const SignInForm = () => {
  const [result, setResult] = useState('')

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

    const result = await response.json()

    if (result.ok) {
      reset()
      window.location.assign('/dashboard')
    } else {
      setResult('Incorrect email or password')
    }
  }

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Form.InputRoot>
        <EmailIcon />

        <Form.Input
          id="signin-email"
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

      {result && <Form.Error>{result}</Form.Error>}

      <S.ActionLink>Forgot password?</S.ActionLink>

      <Form.Button disabled={isSubmitting}>Sign in</Form.Button>
    </Form.Root>
  )
}
