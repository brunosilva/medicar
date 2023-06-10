import { styled } from "@stitches/react";

export const FormContainer = styled('div', {
  width: 400,
  display: 'flex',
  flexDirection: 'column',
})

export const Field = styled('div', {
  marginBottom: 15
})

export const FormAction = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
})

export const Input = styled('input', {
  width: '100%',
  height: '40px',
  padding: '13px 8px',
  boxSizing: 'border-box',
  border: '1px solid #A8A8A8',
  borderRadius: '4px',
})