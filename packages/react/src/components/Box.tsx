import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BoxProps extends ComponentProps<typeof Box> {}
