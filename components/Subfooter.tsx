import { Box, Button, Icon, Stack, Text, Grid, Image, VStack, HStack, Link } from '@chakra-ui/core'
import { FiRefreshCw, FiLock, FiUmbrella } from 'react-icons/fi'
import { Container } from './Container'

export function SubFooter(): JSX.Element {
  return (
    <Stack pt="40">
      <Container>
        <Stack spacing={0} isInline width="full" fontSize="xl" color="white" bg="red.500" py="24">
          <Stack justifyContent="center" alignItems="center" rounded="md" flex={1}>
            <Icon as={FiRefreshCw} fontSize="40px" mb="4" />
            <Text fontWeight="bold">Free Shipping and Returns</Text>
          </Stack>
          <Stack justifyContent="center" alignItems="center" rounded="md" flex={1}>
            <Icon as={FiLock} fontSize="40px" mb="4" />
            <Text fontWeight="bold">Secured Payments</Text>
          </Stack>
          <Stack justifyContent="center" alignItems="center" rounded="md" flex={1}>
            <Icon as={FiUmbrella} fontSize="40px" mb="4" />
            <Text fontWeight="bold">Customer Service</Text>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}
