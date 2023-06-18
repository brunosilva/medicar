import { styled } from "@stitches/react";

export const Select = styled('select', {
  width: '100%',
  height: '40px',
  padding: '10px 8px',
  boxSizing: 'border-box',
  border: '1px solid #A8A8A8',
  borderRadius: '4px',
  background: '$white',
})
export const Option = styled('option', {
  width: '100%',
  height: '40px',
  background: '$white',
  color: '$gray',

  variants:{
    colors: {
      placeholder: {
        padding: '10px',
        color: '$gray'
      },
      data: {
        padding: '10px',
        color: '$black'
      },
    },
  }
})