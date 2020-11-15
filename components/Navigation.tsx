import React from 'react'
import { Box, Button, Stack, HStack } from '@chakra-ui/react'
import { Container } from './Container'
import { CartModal } from './CartModal/CartModal'

export function Navigation(): JSX.Element {
  return (
    <Stack as="nav" isInline position="fixed" top={0} left={0} width="100%" zIndex={10} bg="white" height="24" boxShadow="xl">
      <Container>
        <Stack height="full" width="full" isInline alignItems="center" justifyContent="space-between">
          <HStack>
            <Button variant="link" color="gray.900" fontSize="3xl">
              <Box as="span">Time</Box>
              <Box as="span" color="red.500">
                Zone
              </Box>
            </Button>
          </HStack>
          <HStack spacing={10}>
            <Box>
              <Button as="a" variant="link" color="gray.900" fontSize="lg" href="#home">
                Home
              </Button>
            </Box>
            <Box>
              <Button variant="link" color="gray.900" fontSize="lg">
                Shop
              </Button>
            </Box>
            <Box>
              <Button as="a" variant="link" color="gray.900" fontSize="lg" href="#new-products">
                New Arrivals
              </Button>
            </Box>
            <Box>
              <Button as="a" variant="link" color="gray.900" fontSize="lg" href="#popular-products">
                Popular
              </Button>
            </Box>
          </HStack>
          <Stack height="full" justifyContent="center">
            <CartModal />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
