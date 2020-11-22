import React from 'react'
import { Box, Stack, Text, Grid, Image } from '@chakra-ui/react'
import { ProductViewModal } from './ProductViewModal/ProductViewModal'
import { Container } from './Container'
import { Book } from 'shared/types'

interface ProductsProps {
  title: string
  products: Book[]
}

export function Products(props: ProductsProps): JSX.Element {
  const { title, products } = props
  return (
    <Stack as="section" pt="40" width="full">
      <Container>
        <Text fontSize="5xl" fontWeight="bold" textAlign="center">
          {title}
        </Text>
        <Grid pt="16" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={[10]}>
          {products?.map((product: Book) => {
            const { price, title, isbn } = product
            return (
              <Stack role="group" key={isbn} bg="white" spacing={0} height="475px">
                <Box height="full" position="relative" overflow="hidden">
                  <Box position="absolute" top={0} left={0} border="none" borderBottom="4px solid" borderColor="gray.900" height="full" width="full">
                    <Image src={`http://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg`} width="full" height="full" objectFit="cover" />
                  </Box>
                  <ProductViewModal {...product} />
                </Box>
                <Stack p="3" pt="4" textTransform="capitalize" textAlign="center" color="gray.900" fontSize="lg" fontWeight="medium">
                  <Text fontSize="md" isTruncated>
                    {title}
                  </Text>
                  <Text>$ {price}</Text>
                </Stack>
              </Stack>
            )
          })}
        </Grid>
      </Container>
    </Stack>
  )
}
//
