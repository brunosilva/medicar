import { Button } from "../../components/Button";
import Form from "../../components/Form";
import { Field, FormAction, Input } from "../../components/Form/style";

export default function Login() {
  return (
    <Form title="">
      <Field>
        <Input type="text" name="login" placeholder="Email ou login" />
      </Field>
      <Field>
        <Input type="password" name="password" placeholder="Senha" />
      </Field>
      <FormAction>
        <Button color="transparent">Criar Conta</Button>
        <Button color="green">Acessar</Button>
      </FormAction>
    </Form>
  )
}