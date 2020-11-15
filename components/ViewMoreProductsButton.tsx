import { Box, Button } from '@chakra-ui/react'

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
