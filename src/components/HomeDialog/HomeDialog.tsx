import * as Dialog from '@/components/BaseDialog'
import type { ReactNode } from 'react'

type HomeDialogProps = {
  trigger?: JSX.Element
  children: ReactNode
}

export const HomeDialog = ({ trigger }: HomeDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <span>{trigger}</span>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content>
          <Dialog.Title>Edit profile</Dialog.Title>

          <Dialog.Description>
            Make changes to your profile here. Click save when.
          </Dialog.Description>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
          </fieldset>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>

          <div
            style={{
              display: 'flex',
              marginTop: 25,
              justifyContent: 'flex-end',
            }}
          >
            <Dialog.Close asChild>
              <button>Save changes</button>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild>
            <button aria-label="Close">X</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
