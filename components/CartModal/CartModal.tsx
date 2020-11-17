import React from 'react'
import { Image, Box, Button, Stack, Text, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useCart } from '../../useCart'
import { CartWidget } from '../CartWidget/CartWidget'
import { PrimaryButton } from '../../shared/components'
import { ItemCounter } from '../ItemCounter/ItemCounter'

export function CartModal(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { cartItems, totalSum, totalCount } = useCart()

  React.useEffect(() => {
    if (totalCount) onOpen()
  }, [totalCount, onOpen])

  return (
    <>
      <CartWidget onClick={onOpen} />
      <Drawer blockScrollOnMount={false} isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
          <DrawerContent fontFamily="Josefin Sans">
            <DrawerHeader bg="gray.900" color="white" fontSize="2xl" fontWeight="medium" height="24">
              <Stack isInline height="full" width="full" display="flex" alignItems="center" justifyContent="space-between">
                <Button width="10" variant="unstyled">
                  <ChevronRightIcon fontSize="32px" onClick={onClose} />
                </Button>
                <Text>Cart</Text>
                <Box width="10" />
              </Stack>
            </DrawerHeader>

            <DrawerBody display="flex" flexDir="column" pt={6} pb={0}>
              {!totalCount && (
                <Text mt="10" textAlign="center" fontSize="lg">
                  Cart is empty
                </Text>
              )}
              <Stack spacing={10} flex="1">
                {Object.entries(cartItems)?.map(([key, cartItem]) => (
                  <CartItem key={key} {...cartItem} />
                ))}
              </Stack>
            </DrawerBody>

            <DrawerFooter p="6" pt="0" boxShadow="lg">
              <Stack width="full" spacing={4}>
                <Stack isInline alignItems="center">
                  <Text flex="1" fontSize="xl" fontWeight="medium">
                    Total:
                  </Text>
                  <Text fontSize="xl" fontWeight="medium">
                    ${totalSum.toFixed(2)}
                  </Text>
                </Stack>
                <PrimaryButton onClick={onClose}>Checkout</PrimaryButton>
              </Stack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

function CartItem(props): JSX.Element {
  const { count: currentCount, product } = props
  const { src, id, price } = product
  const { incProductCount, decProductCount, overrideCartItemCount } = useCart()

  const handleInc = (): void => {
    incProductCount({ productId: id, product })
  }

  const handleDec = (): void => {
    if (currentCount === 1) return
    decProductCount(id)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    overrideCartItemCount({ productId: id, count: e.target.valueAsNumber })
  }

  return (
    <Stack spacing={6} isInline alignItems="center" width="full">
      <Box>
        <Image rounded="sm" objectFit="cover" height="90px" width="full" src={src} mr="5" />
      </Box>
      <ItemCounter price={price} count={currentCount} onChange={handleChange} handleInc={handleInc} handleDec={handleDec} />
    </Stack>
  )
}
