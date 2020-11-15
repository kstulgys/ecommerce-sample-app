import { Box, Stack, Text, Image } from '@chakra-ui/react'
import { Container } from './Container'

export function Hero(): JSX.Element {
  return (
    <Stack height="calc(100vh - 6rem)" bg="gray.100">
      <Container px={[0, 0, 4]} isInline>
        <Stack flex="1">
          <Stack my="auto">
            <Text lineHeight="7rem" fontSize={['5xl', '6rem']} fontWeight="bold">
              Select Your New Perfect Style
            </Text>
          </Stack>
        </Stack>
        <Box ml="auto">
          <Image
            height="calc(100vh - 6rem)"
            width="375px"
            objectFit="cover"
            src="https://preview.colorlib.com/theme/timezone/assets/img/hero/xwatch.png.pagespeed.ic.LlRtijfV2T.webp"
          />
        </Box>
      </Container>
    </Stack>
  )
}
