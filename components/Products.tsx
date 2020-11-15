import React from 'react'
import { Box, Stack, Text, Grid, Image } from '@chakra-ui/react'
import { ProductViewModal } from './ProductViewModal/ProductViewModal'
import { Container } from './Container'

export function Products({ products, title, id }: any): JSX.Element {
  return (
    <Stack as="section" pt="40" width="full" id={id}>
      <Container>
        <Text fontSize="5xl" fontWeight="bold" textAlign="center">
          {title}
        </Text>
        <Grid pt="16" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={[10]}>
          {products.map((product) => {
            const { id, src, price } = product
            return (
              <Stack role="group" key={id} bg="white" spacing={0} height="450px">
                <Box height="full" position="relative" overflow="hidden" boxShadow="md">
                  <Box position="absolute" top={0} left={0} borderBottom="4px solid" borderColor="red.500" height="full" width="full">
                    <Image src={src} width="full" height="full" objectFit="cover" />
                  </Box>
                  <ProductViewModal {...product} />
                </Box>
                <Stack p="3" pt="6" textTransform="capitalize" textAlign="center">
                  <Text color="red.500" fontSize="xl" fontWeight="medium">
                    {price}
                  </Text>
                </Stack>
              </Stack>
            )
          })}
        </Grid>
      </Container>
    </Stack>
  )
}
