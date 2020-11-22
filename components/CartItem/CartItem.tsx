import React from 'react'
import { Image, Box, Button, Stack, Text } from '@chakra-ui/react'
import { useCart } from '../../shared/state/useCart'
import { ItemCounter } from '../ItemCounter/ItemCounter'
import { Book } from 'shared/types'

interface CartItemProps {
  product: Book
  count: number
}

export function CartItem(props: CartItemProps): JSX.Element {
  const { count: currentCount, product } = props
  const { isbn, price } = product
  const { incProductCount, decProductCount, overrideCartItemCount, removeProduct } = useCart()

  const handleInc = (): void => {
    incProductCount({ productId: isbn, product })
  }

  const handleDec = (): void => {
    if (currentCount === 1) return
    decProductCount(isbn)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    overrideCartItemCount({ productId: isbn, count: e.target.valueAsNumber })
  }

  return (
    <Stack role="group" spacing={0} isInline alignItems="center" width="full" height="24" position="relative">
      <Box width="full" height="full">
        <Image maxW="80px" rounded="sm" objectFit="cover" height="full" width="full" src={`http://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg`} mr="5" />
      </Box>
      <ItemCounter price={price} count={currentCount} onChange={handleChange} handleInc={handleInc} handleDec={handleDec} />
      <Button
        size="xs"
        color="white"
        bg="gray.900"
        display="none"
        _groupHover={{
          display: 'block',
        }}
        _hover={{
          bg: 'gray.700',
        }}
        rounded="full"
        position="absolute"
        right={0}
        top={0}
        onClick={() => removeProduct(isbn)}
      >
        <Text>x</Text>
      </Button>
    </Stack>
  )
}
