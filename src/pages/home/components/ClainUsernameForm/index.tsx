import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'

export function ClainUsernameForm() {
  return (
    <Form>
      <TextInput size={'sm'} prefix="ignite.com/" placeholder="seu-usuario" />
      <Button size={'sm'} type="submit" />
    </Form>
  )
}
