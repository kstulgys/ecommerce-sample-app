import React from 'react'
import { Box, Button, Stack, HStack } from '@chakra-ui/react'
import { Container } from './Container'
import { CartModal } from './CartModal/CartModal'
import { useRouter } from 'next/router'

export function Navigation(): JSX.Element {
  const { route, push } = useRouter()
  return (
    <Stack as="nav" isInline position="fixed" top={0} left={0} width="100%" zIndex={10} bg="white" height="20" boxShadow="sm">
      <Container>
        <Stack height="full" width="full" isInline alignItems="center" justifyContent="space-between">
          <HStack>
            <Button
              variant="link"
              color="gray.900"
              fontSize="3xl"
              onClick={() => push('/')}
              _hover={{
                textDecor: 'none',
              }}
            >
              <Box as="span">Book</Box>
              <Box as="span" color="red.500">
                Zone
              </Box>
            </Button>
          </HStack>
          {/* <HStack spacing={10}>
            <Box>
              <Button as="a" variant="link" color="gray.900" fontSize="lg" href="#home" onClick={() => router.push('/')}>
                Home
              </Button>
            </Box>
            <Box>
              <Button as="a" variant="link" color="gray.900" fontSize="lg" href="#new-products">
                New Books
              </Button>
            </Box>
            <Box>
              <Button as="a" variant="link" color="gray.900" fontSize="lg" href="#popular-products">
                Popular Books
              </Button>
            </Box>
          </HStack> */}
          <Stack height="full" justifyContent="center">
            {route !== '/checkout' && <CartModal />}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
