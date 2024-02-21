import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
  onClick: () => void; // Define o tipo da prop onClick como uma função que não retorna nada
  children: React.ReactNode; // Conteúdo do botão, permitindo qualquer elemento React válido
  colorScheme?: string; // Esquema de cores opcional
  size?: 'xs' | 'sm' | 'md' | 'lg'; // Tamanho opcional do botão
  width?: string; // Largura opcional, pode ser qualquer valor CSS válido para largura
}

const Button: React.FC<ButtonProps> = ({ onClick, children, colorScheme = 'teal', size = 'md', width }) => {
  return (
    <ChakraButton onClick={onClick} colorScheme={colorScheme} size={size} width={width}>
      {children}
    </ChakraButton>
  );
};

export default Button;