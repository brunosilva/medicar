import { useRouter } from 'next/router';
import { Button } from "../../components/Button";
import Form from "../../components/Form";
import { Field, FormAction, Input } from "../../components/Form/style";
import Icon from "../../components/Icon";

export default function Login() {
  const route = useRouter();

  return (
    <Form title="">
      <Field>
        <Input type="text" name="login" placeholder="Email ou login" />
      </Field>
      <Field>
        <Input type="password" name="password" placeholder="Senha" />
      </Field>
      <FormAction>
        <Button color="transparent" onClick={() => route.push('/register')}>Criar Conta</Button>
        <Button color="green" onClick={() => route.push('/appointments')}><Icon model="plus" />Acessar</Button>
      </FormAction>
    </Form>
  )
}