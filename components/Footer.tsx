import { Box, Button, Icon, Stack, Text, Grid, Image, VStack, HStack, Link } from '@chakra-ui/core'
import { Container } from './Container'

export function Footer(): JSX.Element {
  return (
    <Stack as="footer" pt="32" pb="10">
      <Container>
        <Stack spacing={4} fontSize="lg">
          <Box>
            <Text>Home</Text>
          </Box>
          <Box>
            <Text>Shop</Text>
          </Box>
          <Box>
            <Text>New Arrivals</Text>
          </Box>
          <Box>
            <Text>Popular</Text>
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}
