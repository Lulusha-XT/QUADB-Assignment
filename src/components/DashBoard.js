import React, { useState, useEffect } from "react";
import { Box, Button, Card, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

function DashBoard(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = () => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error("Error fetching movies:", error));
    };

    return (
        <Box bg="#141414">
            <VStack justifyContent="center" p="20px" spacing="10" align="stretch">
                <SimpleGrid column={{ base: 1, sm: 2, md: 4 }} minChildWidth="300px" mx="100px" pt="50px">
                    {movies.map((movie) => (
                        <Card 
                            borderRadius="20px"  
                            key={movie.show.id} 
                            m="10px" 
                            bg="black" 
                            color="white"
                            transition="transform 0.3s ease-in-out"
                            _hover={{ transform: 'scale(1.05)' }}>
                            <Image pb="10px" src={(movie.show.image ? movie.show.image.medium : null)} alt="Image not found"></Image>
                            <Heading fontSize="2xl" as="kbd">{movie.show.name}</Heading>
                            <Text>{movie.show.genres.join(", ")}</Text>
                            <Button
                                onClick={() => props.onMovieSelect(movie)}
                                borderColor="Red"
                                color="black"
                                borderRadius="20px"
                                m="30px"
                                p="15px"
                                border="5px"
                                _hover={{ bg: "Red ", color: "white" }}>
                                Details
                            </Button>
                        </Card>
                    ))}
                </SimpleGrid>
            </VStack>
        </Box>
    );
}

export default DashBoard;
