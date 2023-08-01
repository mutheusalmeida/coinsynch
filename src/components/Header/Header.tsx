import { ReactComponent as ArrowIcon } from '@/assets/arrow-flat-icon.svg'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { ReactComponent as LogoutIcon } from '@/assets/logout-icon.svg'
import { ReactComponent as MenuIcon } from '@/assets/menu-icon.svg'
import { ReactComponent as AvatarIcon } from '@/assets/user-placeholder-icon.svg'
import * as Dialog from '@/components/BaseDialog'
import * as Popover from '@radix-ui/react-popover'
import { useState } from 'react'
import { keyframes, styled } from 'styled-components'

const contentShow = keyframes`
   from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgb(51, 48, 62, 0.7);
  top: 56px;
  bottom: 56px;
`

const DialogContent = styled(Dialog.Content)`
  border-radius: 0;
  box-shadow: none;
  top: 56px;
  bottom: 56px;
  left: 0;
  transform: none;
  width: 70vw;
  margin: 0;
  max-width: 15em;
  min-height: calc(100svh - (2 * 56px));
  animation: ${contentShow} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 25;

  @media (min-width: 48em) {
    padding: 1.5em;
  }

  @media (min-width: 90em) {
    padding: 2em;
  }
`

export const Header = () => {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const [open, setOpen] = useState(false)

  const handleLogout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
    })

    if (response.ok) {
      window.location.assign('/dashboard')
    }
  }

  return (
    <>
      <div className="absolute" ref={setContainer}></div>

      <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm-b">
        <Dialog.Root
          open={open}
          onOpenChange={(value) => {
            document.body.classList.toggle('pointer-events')

            setOpen(value)
          }}
        >
          {open ? (
            <Dialog.Close asChild>
              <button className="appearance-none">
                <MenuIcon />
              </button>
            </Dialog.Close>
          ) : (
            <Dialog.Trigger asChild>
              <button className="appearance-none">
                <MenuIcon />
              </button>
            </Dialog.Trigger>
          )}

          <Dialog.Portal container={container}>
            <DialogOverlay />

            <DialogContent className="border-y border-[var(--gray-300)]">
              menu
            </DialogContent>
          </Dialog.Portal>
        </Dialog.Root>

        <Logo className="h-4 w-[5.875em]" />

        <Popover.Root>
          <Popover.Trigger asChild>
            <button className="flex appearance-none items-center gap-1">
              <AvatarIcon className="aspect-square h-6 w-6 rounded-full" />

              <ArrowIcon className="h-2 w-2 rotate-90 [&>path]:fill-[var(--gray-400)]" />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="z-30 rounded bg-white px-6 py-4 shadow-xs"
              align="end"
              sideOffset={4}
            >
              <Popover.Close asChild>
                <button
                  onClick={handleLogout}
                  className="flex appearance-none items-center gap-4"
                >
                  <LogoutIcon />

                  <span className="text-sm leading-4 text-[var(--gray-500)]">
                    Logout
                  </span>
                </button>
              </Popover.Close>
              <Popover.Arrow className="fill-white" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </header>
    </>
  )
}
