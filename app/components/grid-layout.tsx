import { Box, SimpleGrid } from "@chakra-ui/react";

export default function GridLayout() {
    return (
        <SimpleGrid columns={4}>
            <Box bg='white' h='200px' border='1px solid'></Box>
            <Box bg='white' h='200px' border='1px solid'></Box>
            <Box bg='white' h='200px' border='1px solid'></Box>
            <Box bg='white' h='200px' border='1px solid'></Box>

            <Box bg='white' h='200px' border='1px solid'></Box>
            <Box bg='white' h='200px' border='1px solid'></Box>
            <Box bg='white' h='200px' border='1px solid'></Box>
            <Box bg='white' h='200px' border='1px solid'></Box>

            <Box bg='white' h='200px' border='1px solid'></Box>
            <Box bg='white' h='200px' border='1px solid'></Box>
            <Box bg='white' h='200px' border='1px solid'></Box>
            <Box bg='white' h='200px' border='1px solid'></Box>

        </SimpleGrid>
    )
}