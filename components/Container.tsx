import { Stack } from '@chakra-ui/react'

export function Container({ children, ...rest }): JSX.Element {
  return (
    <Stack spacing={0} maxW="7xl" width="full" height="full" mx="auto" px="4" {...rest}>
      {children}
    </Stack>
  )
}
