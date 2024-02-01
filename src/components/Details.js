import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, Grid, GridItem, HStack, Heading, Icon, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function Details({ movie }) {
    const [showDetails, setShowDetails] = useState(null);

    useEffect(() => {
        fetchShowDetails();
    }, []);

    const fetchShowDetails = () => {
        fetch(`https://api.tvmaze.com/shows/${movie.show.id}`)
            .then((response) => response.json())
            .then((data) => setShowDetails(data))
            .catch((error) => console.error("Error fetching show details:", error));
    };


  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  
  const [selectedSeat, setSelectedSeat] = useState('');

  const handleChange = (event) => {
    setSelectedSeat(event.target.value);
  };

    

    return (
        <Box>
            {showDetails ? (
                <Box bg="#141414">
                    <Grid templateColumns="repeat(6, 1fr)" py="20px" mx="150px" h="80vh">
                        <GridItem  colSpan={{base:6, lg:2, xl:2}}>
                            <Box >
                                <Image 
                                borderRadius="20px"  
                                src={(showDetails.image ? showDetails.image.original : null)}
                                transition="transform 0.2s ease-in-out"
                                 _hover={{ transform: 'scale(1.05)' }}
                                ></Image>
                            </Box>
                            
                        </GridItem>
                        <GridItem colSpan={{base:6, lg:4, xl:4}} color="white">
                            <VStack pl="40px" align="flex-start" py="30px" >
                                                        
                                    <Heading fontSize="5xl"  >{showDetails.name}</Heading>
                                    <HStack pb="30px" >
                                        <Icon as={StarIcon} color="Gold" boxSize="25px"/>
                                        <Icon as={StarIcon} color="Gold" boxSize="25px"/>
                                        <Icon as={StarIcon} color="Gold" boxSize="25px"/>
                                        <Icon as={StarIcon} color="Gold" boxSize="25px"/>
                                        <Icon as={StarIcon} color="Gold" boxSize="25px"/>
                                        <Text fontSize="2xl" pl="5px" color="gold">{showDetails.rating.average}</Text>
                                    </HStack>
                                    <Text fontSize="2xl"> {showDetails.language}</Text>
                                    <Text pb="20px" fontSize="2xl" as="kbd">{showDetails.genres.join("  ")}</Text>
                                    <Text fontSize="3xl" as="b">Overview</Text>
                                    <Text pb="10px">{showDetails.network.country.name} </Text>
                                    <Box mb="40px">
                                        <Text maxWidth="900px" fontSize="xl"> {showDetails.summary}</Text>
                                    </Box>
                                    
                                    <Button onClick={onOpen}>Book Ticket</Button>
                                    <Modal
                                        initialFocusRef={initialRef}
                                        finalFocusRef={finalRef}
                                        isOpen={isOpen}
                                        onClose={onClose}
                                    >
                                        <ModalOverlay />
                                        <ModalContent bg="#141414" color="white">
                                        <ModalHeader>Book Ticket</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody pb={6}>
                                            <Text fontSize="2xl" pb="10px">Movie: {showDetails.name}</Text>

                                            <FormControl>
                                            <FormLabel>First name</FormLabel>
                                            <Input ref={initialRef} placeholder='First name' />
                                            </FormControl>

                                            <FormControl mt={4}>
                                            <FormLabel>Last name</FormLabel>
                                            <Input placeholder='Last name' />
                                            </FormControl>

                                            <FormControl mt={4}>
                                            <FormLabel>Seat</FormLabel>
                                            <Select color="white"
                                                placeholder="Select Seat"
                                                value={selectedSeat}
                                                onChange={handleChange}
                                                width="100%"
                                            >
                                                <option color="black" value="Standard">Standard</option>
                                                <option value="VIP">VIP</option>
                                                <option value="V-VIP">V-VIP</option>
                                                
                                            </Select>
                                            </FormControl>

                                        </ModalBody>

                                        <ModalFooter>
                                            <Button colorScheme='blue' mr={3}>
                                            Save
                                            </Button>
                                            <Button onClick={onClose}>Cancel</Button>
                                        </ModalFooter>
                                        </ModalContent>
                                    </Modal>
                                    
                                    
                                    
                                
                            </VStack>
                            
                        </GridItem> 
                    </Grid>
                </Box>
            ) : (
                <p>Loading...</p>
            )}
        </Box>
    );
}

export default Details;
