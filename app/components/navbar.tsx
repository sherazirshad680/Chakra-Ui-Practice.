import { Box, Center, Flex, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react";
import React from "react";

export default function navbar() {
    return (
        <>
            <Flex as='nav' p='10px' alignItems='center' gap='10px'>
                <Heading as='h1'>Dojo Tasks</Heading>
                <Spacer />
                <HStack spacing='20px'>
                    <Box bg='gray.200' p='10px'>M</Box>
                    <Text>Sheraz Dev</Text>
                    <Button colorScheme="purple">Logout</Button>
                </HStack>

            </Flex>
            {/* <Box fontSize='30' textAlign='Center'>Flex Layouts</Box>
            <Flex bg='gray.200' justify='space-around' wrap='wrap' gap='2'>
                <Box w='150px' h='50px' bg='red'>1</Box>
                <Box w='150px' h='50px' bg='blue'>2</Box>
                <Box w='150px' h='50px' bg='green.300' flexGrow='1' bg="green">3</Box>
                <Box w='150px' h='50px' bg='yellow'>4</Box>
            </Flex> */}
        </>
    )
}