import { Box, Stack, Text, Image } from '@chakra-ui/react'
import { Container } from './Container'

export function Hero(): JSX.Element {
  return (
    <Stack height="calc(100vh - 5rem)" bg="gray.100">
      <Container px={[0, 0, 4]} isInline>
        <Stack flex="1">
          <Stack my="auto">
            <Text lineHeight="7rem" fontSize={['5xl', '6rem']} fontWeight="bold" textTransform="capitalize">
              select your new perfect book
            </Text>
          </Stack>
        </Stack>
        <Box ml="auto">
          <Image height="calc(100vh - 5rem)" width="375px" objectFit="cover" src="/hero.jpg" />
        </Box>
      </Container>
    </Stack>
  )
}
