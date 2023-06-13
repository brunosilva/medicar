import { TitleSection } from '../Title/style';
import { FormContainer } from './style';

interface IProps {
  title?: string | undefined;
  children: JSX.Element
}

export default function Form<IProps>({title, children}) {
  return (
    <>
      <TitleSection>{title && title}</TitleSection>
      <FormContainer>
        {children}
      </FormContainer>
    </>
  )
}
