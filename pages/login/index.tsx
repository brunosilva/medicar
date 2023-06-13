import { Button } from "../../components/Button";
import Form from "../../components/Form";
import { Field, FormAction, Input } from "../../components/Form/style";
import Icon from "../../components/Icon";

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
        <Button color="green"><Icon model="plus" />Acessar</Button>
        {/* <Button color="transparent" onClick={() => navigate('/register')}>Criar Conta</Button>
        <Button color="green" onClick={() => navigate('/new')}><Icon model="plus" />Acessar</Button> */}
      </FormAction>
    </Form>
  )
}