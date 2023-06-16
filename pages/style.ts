import { styled } from "@stitches/react";

export const ContainerApp = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  height: '100vh',
})

export const RowLogo = styled('div', {
  variants: {
    margin: {
      medium: {
        marginBottom: '17px',
      },
      large: {
        marginBottom: '40px',
      }

    }
  }
})
