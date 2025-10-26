import { Box, Center, Heading, Image, List, Stack } from "@chakra-ui/react"

function ProductCard({heading, price, rating, imgsrc}) {
    return (
        <Box outlineStyle="solid" outlineColor="white" outlineWidth="2" borderRadius="lg" padding="6">
            <Stack>
                <Center><Image src={imgsrc} /></Center>
                <Heading>{heading}</Heading>
                <List.Root>
                    <List.Item>Price: {price}</List.Item>
                    <List.Item>Rating: {rating}</List.Item>
                </List.Root>
            </Stack>
        </Box>
    )
}

export default ProductCard