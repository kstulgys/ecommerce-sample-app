import { Box, Button, Icon, Stack, Text, Grid, Image, VStack, HStack, Link } from '@chakra-ui/core'

export function ViewMoreProductsButton(): JSX.Element {
  return (
    <Box textAlign="center" pt="24">
      <Button
        px="8"
        bg="red.500"
        height="4rem"
        rounded="none"
        fontSize="lg"
        textTransform="uppercase"
        color="white"
        _hover={{
          bg: 'red.400',
        }}
      >
        view more products
      </Button>
    </Box>
  )
}
