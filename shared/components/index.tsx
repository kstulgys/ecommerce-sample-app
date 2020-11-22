import { Button as BaseButton } from '@chakra-ui/react'

export function PrimaryButton(props: any): JSX.Element {
  return <BaseButton width="full" rounded="none" _hover={{ bg: 'gray.700' }} height="4rem" bg="gray.900" color="white" {...props} />
}
