import { Box, Flex, HStack, Heading, Input, Spacer, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom'

export default function NavBar() {
    return ( 
    <Box  position="sticky"
      top="0"
      zIndex="sticky"
      >
                <Flex as="nav" px="100px" py="20px" alignItems="center" bg="black" color="white" >
                <Link to="/">
                    <Heading color="red.500">NETFLIX</Heading>
                </Link>
                
                <Spacer/> 
                <HStack spacing="20px" mr="40px">
                    <Input placeholder="Search the movie you want..." borderRadius="10px" type="search" w="300px"></Input>
                    <Text>TopRated</Text>
                    <Text>New</Text>
                    <Text>Favorite</Text>       
                </HStack>     
                </Flex>
            </Box>
    
           
    
        
    )
}