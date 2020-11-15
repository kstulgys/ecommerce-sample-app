import React from 'react'
import { Button, Icon, Stack, Text, Box } from '@chakra-ui/react'
import { AiOutlineShopping } from 'react-icons/ai'
import { useCart } from '../../useCart'

export function CartWidget({ onClick }: any): JSX.Element {
  const { cartItems } = useCart()

  const productsCount = [].concat(...Object.values(cartItems)).length

  return (
    <Box position="relative">
      <Button variant="unstyled" onClick={onClick} rounded="full">
        <Icon as={AiOutlineShopping} fontSize="40px" aria-label="cart icon" />
      </Button>
      {!!productsCount && (
        <Stack pointerEvents="none" data-testid="cart-counter" bottom={0} left={0} top="6" position="absolute">
          <Stack isInline justifyContent="center" bg="red.500" rounded="full" minWidth="6" p="1">
            <Text data-testid="cart-count" mt="2px" fontWeight="semibold" lineHeight="none" color="white" fontSize="sm">
              {productsCount}
            </Text>
          </Stack>
        </Stack>
      )}
    </Box>
  )
}
