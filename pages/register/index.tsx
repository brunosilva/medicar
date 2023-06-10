import { Button } from "../../components/Button";
import Form from "../../components/Form";
import { Field, FormAction, Input } from "../../components/Form/style";

export default function Register() {
  return (
    <Form title="Criar sua conta">
      <Field>
        <Input type="text" name="name" placeholder="Nome" />
      </Field>
      <Field>
        <Input type="email" name="email" placeholder="Email" />
      </Field>
      <Field>
        <Input type="password" name="password" placeholder="Senha" />
      </Field>
      <Field>
        <Input type="password" name="confirmPassword" placeholder="Confirmar Senha" />
      </Field>
      <FormAction>
        <Button>Cancelar</Button>
        <Button>Confirmar</Button>
      </FormAction>
    </Form>
  )
}