import { useRouter } from "next/router";
import { Button } from "../../components/Button";
import Form from "../../components/Form";
import { Field, FormAction, Input } from "../../components/Form/style";
import Logo from "../../components/Logo";

export default function Register() {
  const route = useRouter();

  return (
    <Form title="Criar sua conta">
      <Logo />
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
        <Button color="transparent" onClick={() => route.push('/login')}>Cancelar</Button>
        <Button color="green" onClick={() => route.push('/appointments')}>Confirmar</Button>
      </FormAction>
    </Form>
  )
}