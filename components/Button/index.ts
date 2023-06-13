import { styled } from '../../styles';

export const Button = styled('button', {
  borderRadius: 4,
  border: 0,
  padding: '9px 38px',
  cursor: 'pointer',
  fontSize: 18,
  display: 'flex',
  alignItems: 'center',

  span: {
    fontWeight: 'bold',
  },
  variants: {
    color: {
      green: {
        backgroundColor: '$green300',
        color: '$white',

        '&:hover': {
          filter: 'brightness(0.8)'
        }
      },
      transparent: {
        backgroundColor: '$white',
        color: '$green300',

        '&:hover': {
          textDecoration: 'underline',
        }
      },
    },
  }
})