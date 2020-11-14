import { Box, Button, Icon, Stack, Text, Grid, Image, VStack, HStack, Link } from '@chakra-ui/core'
import { Container } from './Container'

export function Products({ products, title, id }): JSX.Element {
  return (
    <Stack as="section" pt="40" width="full" id={id}>
      <Container>
        <Text fontSize="5xl" fontWeight="bold" textAlign="center">
          {title}
        </Text>
        <Grid pt="16" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={[10]}>
          {products.map(({ id, src, title, price }) => (
            <Stack key={id} bg="white" spacing={0} height="450px">
              <Box role="group" height="full" position="relative" overflow="hidden" boxShadow="md">
                <Box borderBottom="4px solid" borderColor="red.500" height="full">
                  <Image src={src} width="full" height="full" objectFit="cover" />
                </Box>
                <Button
                  rounded="none"
                  opacity={0}
                  transform="translateY(4rem)"
                  _groupHover={{
                    opacity: 1,
                    transform: 'translateY(0)',
                    transition: 'all .3s ease-in-out',
                  }}
                  _hover={{
                    bg: 'red.400',
                  }}
                  height="4rem"
                  bg="red.500"
                  position="absolute"
                  bottom={0}
                  left={0}
                  width="full"
                  color="white"
                >
                  Add to cart
                </Button>
              </Box>
              <Stack p="3" pt="6" textTransform="capitalize" textAlign="center">
                <Text color="red.500" fontSize="xl" fontWeight="medium">
                  {price}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Grid>
      </Container>
    </Stack>
  )
}
