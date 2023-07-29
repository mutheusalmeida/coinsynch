import { ReactComponent as EyeCloseIcon } from '@/assets/eye-close-icon.svg'
import { ReactComponent as EyeOpenIcon } from '@/assets/eye-open-icon.svg'
import { ReactNode, useState } from 'react'
import { styled } from 'styled-components'

type HandlerProps = {
  isVisible: boolean
  toggleVisible: () => void
}

type FormPasswordPros = {
  children: (props: HandlerProps) => ReactNode
}

const Button = styled.button`
  all: unset;
  cursor: pointer;
`

export const FormPassword = ({ children }: FormPasswordPros) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisible = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <>
      {children({ isVisible, toggleVisible })}

      <Button type="button" onClick={toggleVisible}>
        {isVisible ? <EyeCloseIcon /> : <EyeOpenIcon />}
      </Button>
    </>
  )
}
