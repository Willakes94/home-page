import React from 'react';
import { Input, Center, Box, Flex, ChakraProvider } from '@chakra-ui/react';
import { login } from '../../services/login';
import Button from '../Button/Button';


// Se o Card aceitar props no futuro, defina uma interface para eles
interface CardProps {
    // exemplo: title: string;
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <ChakraProvider>
            <Flex minHeight='100vh' backgroundColor='#9413dc' padding='25px' alignItems="center" justifyContent="center">
                <Box backgroundColor='#FFFFFF' borderRadius='lg' padding='15px' width="400px">
                    <Center>
                        <h1>Faça o login</h1>
                    </Center>
                    <Input placeholder='Email' marginTop='4' />
                    <Input placeholder='Password' marginTop='4' />
                    <Center padding='20px'>
                        <Button onClick={login} colorScheme='teal' size='sm' width='40%'>
                            Login
                        </Button>
                    </Center>
                </Box>
            </Flex>
        </ChakraProvider>
    );
};

export default Card;
