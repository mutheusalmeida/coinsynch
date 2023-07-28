import * as S from './style'

export const NewsletterForm = () => {
  return (
    <S.Form className="subscribe-form fluid-spacing fluid-pb">
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
