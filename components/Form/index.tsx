import { Title } from '../Title/style';
import { FormContainer } from './style';

interface IProps {
  title?: string | undefined;
  children: JSX.Element
}

export default function Form<IProps>({title, children}) {
  return (
    <>
      <Title>{title && title}</Title>
      <FormContainer>
        {children}
      </FormContainer>
    </>
  )
}
