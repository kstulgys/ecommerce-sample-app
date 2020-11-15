import { Button as BaseButton } from '@chakra-ui/react'

export function PrimaryButton(props) {
  return <BaseButton width="full" rounded="none" _hover={{ bg: 'red.400' }} height="4rem" bg="red.500" color="white" {...props} />
}
