"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

export default function Outlet() {
    const boxStyles = {
        p: "10px",
        bg: "purple.400",
        color: "white",
        m: "10px",
        TextAlign: "center",
        filter: 'blur (2px)',
        ':hover': {
            color: 'white',
            bg: 'blue',

        }
    }
    return (
        <div>
            <hr />
            <Container as="section" maxWidth='4xl' py="20px">
                <hr />
                <hr />
                <hr />
                <Heading my="30px" p="10px">Chakra UI Components</Heading>
                <Text marginLeft="30px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium?</Text>
                <Text ml="30px" color="blue" fontWeight="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, laudantium?</Text>
                <Box my="30px" p="20px" bg='orange'>
                    <Text color='white'>This is a box</Text>
                </Box>
                <Box sx={boxStyles}>
                    Hello World!
                </Box>
            </Container>

        </div >
    )
}