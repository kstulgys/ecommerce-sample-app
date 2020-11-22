import React from 'react'
import { Box, Button, Stack, Text, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useCart } from '../../shared/state/useCart'
import { CartWidget } from '../CartWidget/CartWidget'
import { PrimaryButton } from '../../shared/components'
import { useRouter } from 'next/router'
import { CartItem } from '../CartItem/CartItem'

export function CartModal(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { cartItems, totalSum, totalCount } = useCart()
  const router = useRouter()

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
                <PrimaryButton onClick={() => router.push('/checkout')}>Checkout</PrimaryButton>
              </Stack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
