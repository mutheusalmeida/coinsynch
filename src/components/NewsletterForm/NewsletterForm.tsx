import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { useEffect, useState } from 'react'

import * as S from './style'

const formSchema = z.object({
  email: z.string().min(1, 'Please enter an email').email('Invalid email'),
})

type FormSchemaType = z.infer<typeof formSchema>

export const NewsletterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })
  const [result, setResult] = useState('')

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (result.message) {
      setResult(result.message)
    }

    reset()
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (result) {
        setResult('')
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [isSubmitted, result])

  return (
    <S.Form
      onSubmit={handleSubmit(onSubmit)}
      className="fluid-spacing fluid-pb"
    >
      <S.FormWrapper>
        <S.FormLabel htmlFor="email">Email</S.FormLabel>

        <S.FormInput
          id="email"
          type="email"
          placeholder="Email"
          disabled={isSubmitting}
          {...register('email')}
        />

        {errors.email && <S.Message hasError>{errors.email.message}</S.Message>}
      </S.FormWrapper>

      {result && <S.Message success>{result}</S.Message>}

      <S.FormButton disabled={isSubmitting}>Subscribe</S.FormButton>
    </S.Form>
  )
}
