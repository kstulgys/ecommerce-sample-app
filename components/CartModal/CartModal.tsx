import React from 'react'
import { Box, Button, Stack, Text, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useCart } from '../../useCart'
import { CartWidget } from '../CartWidget/CartWidget'

export function CartModal(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { cartItems } = useCart()

  React.useEffect(() => {
    if (!cartItems.length) return
    onOpen()
  }, [cartItems.length, onOpen])

  return (
    <>
      <CartWidget onClick={onOpen} />
      <Drawer blockScrollOnMount={false} isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader
              width="full"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              py="6"
              bg="gray.900"
              color="white"
              fontSize="2xl"
              fontWeight="medium"
            >
              <Box width="10">
                <Button width="full" variant="unstyled">
                  <ChevronRightIcon fontSize="32px" onClick={onClose} />
                </Button>
              </Box>
              <Box>
                <Text>Cart</Text>
              </Box>
              <Box width="10" />
            </DrawerHeader>

            <DrawerBody display="flex" flexDir="column">
              <Stack flex="1">
                <Text>items</Text>
              </Stack>
              <Stack spacing={0} py={10} fontSize="2xl" fontWeight="medium">
                <Text>Total</Text>
                <Text>$ 563.99</Text>
              </Stack>
            </DrawerBody>

            <DrawerFooter p="0">
              <Button
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                py="10"
                fontWeight="medium"
                fontSize="2xl"
                color="white"
                rounded="none"
                bg="red.500"
                width="full"
                variant="unstyled"
              >
                <Box width="10" ml="6" />
                <Text>Go to checkout</Text>
                <Box width="10" mr="6">
                  <ChevronRightIcon fontSize="32px" onClick={onClose} />
                </Box>
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
