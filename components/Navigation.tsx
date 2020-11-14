import { Box, Button, Icon, Stack, Text, Grid, Image, VStack, HStack, Link } from '@chakra-ui/core'
import { AiOutlineShopping } from 'react-icons/ai'
import { Container } from './Container'

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
          <HStack>
            <Box>
              <Icon as={AiOutlineShopping} fontSize="32px" />
            </Box>
          </HStack>
        </Stack>
      </Container>
    </Stack>
  )
}
