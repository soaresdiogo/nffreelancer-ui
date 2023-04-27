import { ElementType, ComponentProps } from 'react';
import { styled } from '../styles';

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray200',
  border: '1px solid $gray100',
});

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}

Box.displayName = 'Box';
