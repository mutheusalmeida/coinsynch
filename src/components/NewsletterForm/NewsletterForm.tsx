import type { FormEvent } from 'react'
import * as S from './style'

export const NewsletterForm = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.message) {
      console.log(data.message)
    }
  }

  return (
    <S.Form
      onSubmit={handleSubmit}
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
          name="email"
          placeholder="Email"
          required
        />
      </S.FormWrapper>

      <S.FormButton>Subscribe</S.FormButton>
    </S.Form>
  )
}
