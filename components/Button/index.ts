import { styled } from '../../styles';

export const Button = styled('button', {
  backgroundColor: '$green300',
  color: '$white',
  borderRadius: 4,
  border: 0,
  padding: '9px 38px',
  cursor: 'pointer',
  fontSize: 18,

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})