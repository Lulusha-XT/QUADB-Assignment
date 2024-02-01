import { Image, Box } from "@chakra-ui/react";

export default function Top() {
    return ( 
        <Box h="60vh" display="flex" justifyContent="center" alignItems="center">
            <Image 
                objectFit="contain" 
                src="https://images.squarespace-cdn.com/content/v1/5e40f022098d724e00f4858f/c41d2546-a2e0-4295-9c7e-e0eef1290a5f/Boy_In_Dark_Styleframe_1920x1080.jpg"
                alt="Cover Image"
            />
        </Box>
    );
}
