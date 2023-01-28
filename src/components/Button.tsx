import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  blue,
  purple,
  navy,
  red,
  labelBlue,
} from '../theme/Button.styled.theme';
import { IButton } from '../types/componentTypes';

const ButtonStyle: any = styled.button`
  border: 0;
  cursor: pointer;
  padding: ${(props: any) => props.padding};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  line-height: ${(props) => props.theme.lineHeight};
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.default.background};
  color: ${(props) => props.theme.default.color};
  &:hover {
    background: ${(props) => props.theme.hover.background};
    color: ${(props) => props.theme.hover.color};
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none !important;
  }
`;

const Button = ({
  text,
  theme,
  onClick,
  type,
  className,
  disabled,
  padding,
}: IButton) => {
  const themes: any = [
    {
      name: 'blue',
      theme: blue,
    },
    {
      name: 'purple',
      theme: purple,
    },
    {
      name: 'navy',
      theme: navy,
    },
    {
      name: 'red',
      theme: red,
    },
    {
      name: 'labelBlue',
      theme: labelBlue,
    },
  ];

  return (
    <ThemeProvider theme={themes.find((th: any) => th.name === theme).theme}>
      <ButtonStyle
        disabled={disabled}
        className={className || ''}
        type={type || 'button'}
        onClick={onClick}
        padding={padding}
      >
        {text}
      </ButtonStyle>
    </ThemeProvider>
  );
};

export default Button;
